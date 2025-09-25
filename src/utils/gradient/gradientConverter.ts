import tinyColor from 'tinycolor2';
import { IGradientData, IGradientStop } from '../../lib/types';
import { parseGradient } from '../format';

/**
 * Convert gradient object to CSS gradient string
 */
export function gradientObjectToCss(gradientData: IGradientData): string {
  const { type, angle = 90, stops } = gradientData;

  // Convert stops to CSS format
  const cssStops = stops
    .sort((a, b) => a.position - b.position) // Ensure stops are in order
    .map((stop) => {
      const color = tinyColor(stop.color);
      return `${color.toRgbString()} ${stop.position}%`;
    })
    .join(', ');

  if (type === 'linear') {
    return `linear-gradient(${angle}deg, ${cssStops})`;
  } else {
    return `radial-gradient(circle, ${cssStops})`;
  }
}

/**
 * Convert CSS gradient string to gradient object
 */
export function cssToGradientObject(cssGradient: string): IGradientData | null {
  try {
    const parsed = parseGradient(cssGradient);

    if (!parsed) {
      return null;
    }

    const { type, modifier, stops } = parsed;

    // Convert stops to object format
    const gradientStops: IGradientStop[] = stops.map((stop) => ({
      color: String(stop[0]), // Ensure it's a string
      position: Math.round((stop[1] as number) * 100) // Convert to percentage
    }));

    // Extract angle from modifier (for linear gradients)
    let angle = 90; // Default angle
    if (type === 'linear' && modifier && typeof modifier === 'string') {
      const angleMatch = modifier.match(/(\d+)deg/);
      if (angleMatch) {
        angle = parseInt(angleMatch[1], 10);
      }
    }

    return {
      type: type as 'linear' | 'radial',
      angle: type === 'linear' ? angle : undefined,
      stops: gradientStops,
      defaultActiveTab: 'gradient'
    };
  } catch (error) {
    console.warn('Failed to parse CSS gradient:', error);
    return null;
  }
}

/**
 * Check if a value is a gradient object
 */
export function isGradientObject(value: any): value is IGradientData {
  return (
    value &&
    typeof value === 'object' &&
    'type' in value &&
    'stops' in value &&
    Array.isArray(value.stops) &&
    value.stops.length > 0 &&
    value.stops.every(
      (stop: any) =>
        stop &&
        typeof stop === 'object' &&
        'color' in stop &&
        'position' in stop &&
        typeof stop.position === 'number'
    )
  );
}

/**
 * Normalize value to always return a CSS gradient string
 */
export function normalizeGradientValue(value: string | IGradientData): string {
  if (typeof value === 'string') {
    return value;
  }

  if (isGradientObject(value)) {
    return gradientObjectToCss(value);
  }

  // Fallback
  return 'linear-gradient(90deg, #ffffff 0%, #000000 100%)';
}

// End of file
