/* eslint no-useless-escape: off */
/* eslint prefer-const: off */
/* eslint no-prototype-builtins: off */
import tinycolor from 'tinycolor2';

interface IGradientStop {
  color: string;
  position?: number;
}

interface IParsedGraient {
  stops: IGradientStop[];
  angle: string;
  original: string;
  line: string;
  side?: string;
  sideCorner?: string;
  parseWarning?: boolean;
}

export default (input: string): IParsedGraient | string => {
  try {
    // Clean input
    const cleanInput = input
      .trim()
      .replace(/;$/, '')
      .replace(/^background-image:\s*/, '');

    // Extract gradient type and content
    const gradientMatch = cleanInput.match(
      /^(linear|radial)-gradient\s*\(\s*(.*)\s*\)$/i
    );
    if (!gradientMatch) {
      return 'Failed to find gradient';
    }

    const [, type, content] = gradientMatch;
    const parts = [];
    let currentPart = '';
    let parenDepth = 0;
    let inQuotes = false;

    // Parse content by splitting on commas, but respect parentheses and quotes
    for (let i = 0; i < content.length; i++) {
      const char = content[i];

      if (char === '"' || char === "'") {
        inQuotes = !inQuotes;
      } else if (!inQuotes) {
        if (char === '(') parenDepth++;
        else if (char === ')') parenDepth--;
        else if (char === ',' && parenDepth === 0) {
          parts.push(currentPart.trim());
          currentPart = '';
          continue;
        }
      }

      currentPart += char;
    }

    if (currentPart.trim()) {
      parts.push(currentPart.trim());
    }

    let angle = '';
    let line = '';
    let colorStops: string[] = [];

    // Determine if first part is direction/angle or color stop
    const firstPart = parts[0];
    let isDirection = false;

    if (type === 'linear') {
      isDirection = /^\d+deg$/i.test(firstPart) || /^to\s+/.test(firstPart);
    } else if (type === 'radial') {
      // For radial gradients, check for size, shape, or position keywords
      isDirection =
        /^(?:circle|ellipse)/.test(firstPart) ||
        /at\s+/.test(firstPart) ||
        /^(?:closest-side|closest-corner|farthest-side|farthest-corner)$/i.test(
          firstPart
        ) ||
        /^\d+(?:%|px|em|rem)?$/i.test(firstPart); // Size values like "70", "70%", "70px"
    }

    if (isDirection) {
      if (type === 'linear') {
        if (/^\d+deg$/i.test(firstPart)) {
          angle = firstPart.replace(/deg$/i, '');
        } else if (/^to\s+/.test(firstPart)) {
          line = firstPart;
          // Convert named directions to angles
          const directionMap: Record<string, string> = {
            'to top': '0',
            'to top right': '45',
            'to right': '90',
            'to bottom right': '135',
            'to bottom': '180',
            'to bottom left': '225',
            'to left': '270',
            'to top left': '315'
          };
          angle = directionMap[firstPart] || '0';
        }
      } else {
        line = firstPart;
      }
      colorStops = parts.slice(1);
    } else {
      // No explicit direction, use defaults
      angle = type === 'linear' ? '180' : '';
      line = type === 'radial' ? 'circle at center' : '';
      colorStops = parts;
    }

    // Parse color stops
    const stops: IGradientStop[] = [];

    for (let i = 0; i < colorStops.length; i++) {
      const stopString = colorStops[i].trim();

      // Improved regex to handle various gradient stop formats
      // Matches: color position%, color position, or just color
      const stopMatch = stopString.match(
        /^(.+?)(?:\s+([\d.]+)(%|px|em|rem)?)?$/
      );
      if (stopMatch) {
        const [, colorStr, positionStr, unit] = stopMatch;
        const tinyColorInstance = tinycolor(colorStr.trim());

        if (tinyColorInstance.isValid()) {
          const stop: IGradientStop = {
            color: tinyColorInstance.toRgbString()
          };

          if (positionStr) {
            let position = parseFloat(positionStr);
            // Convert percentage to decimal (0-1 range)
            if (unit === '%' || !unit) {
              // If no unit specified, assume percentage
              position = position / 100;
            }
            stop.position = Math.max(0, Math.min(1, position));
          }

          stops.push(stop);
        } else {
          console.warn('Invalid color in gradient stop:', colorStr.trim());
        }
      } else {
        console.warn('Could not parse gradient stop:', stopString);
      }
    }

    // Auto-assign positions if missing
    stops.forEach((stop, index) => {
      if (!stop.hasOwnProperty('position')) {
        stop.position = stops.length > 1 ? index / (stops.length - 1) : 0;
      }
    });

    // Ensure we have at least 2 stops
    if (stops.length === 0) {
      return 'No valid color stops found';
    } else if (stops.length === 1) {
      // Duplicate the single stop to create a valid gradient
      stops.push({
        color: stops[0].color,
        position: 1
      });
    }

    return {
      stops,
      angle,
      line,
      original: cleanInput
    };
  } catch (error) {
    console.warn('Error parsing gradient:', error);
    return 'Failed to parse gradient';
  }
};
