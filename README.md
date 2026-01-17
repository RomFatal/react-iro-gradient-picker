<!-- markdownlint-disable -->

# React Iro Gradient Picker

## ✨ Modern React Color Picker with Complete Dark Theme Support! ✨

A beautiful, modern React gradient and solid color picker with full dark theme integration, built with Tailwind CSS and TypeScript.

### 🚀 **[✨ LIVE DEMO & DOCUMENTATION ✨](https://romfatal.github.io/react-iro-gradient-picker/)**

[![NPM](https://img.shields.io/npm/v/react-iro-gradient-picker.svg)](https://www.npmjs.com/package/react-iro-gradient-picker) [![License](https://img.shields.io/npm/l/react-iro-gradient-picker.svg)](https://github.com/romfatal/react-iro-gradient-picker/blob/main/LICENSE) [![GitHub Pages](https://img.shields.io/badge/docs-live-brightgreen)](https://romfatal.github.io/react-iro-gradient-picker/)

> 📚 **[Interactive Documentation](https://romfatal.github.io/react-iro-gradient-picker/)** | 📦 **[NPM Package](https://www.npmjs.com/package/react-iro-gradient-picker)** | 🔧 **[GitHub Repository](https://github.com/romfatal/react-iro-gradient-picker)**

### Inspired by [gpickr](https://github.com/Simonwep/gpickr) and enhanced with modern features

## ✨ Features

- 🌙 **Complete Dark Theme** - Works perfectly across all components (modal, solid, gradient)
- 🎨 **Gradient & Solid Colors** - Full support for both gradient and solid color picking
- 🔄 **Reset Button** - Built-in reset functionality with customizable callbacks
- 🔄 **Theme Toggle** - Easy switching between light and dark themes
- 💾 **Theme Persistence** - Automatically saves user theme preference
- 🎯 **Tailwind CSS** - Modern styling with comprehensive theming system
- 📱 **Responsive Design** - Works great on all screen sizes

## 🎬 Live Demo

### 🚀 **[✨ Try it Live - Interactive Storybook Demo ✨](https://romfatal.github.io/react-iro-gradient-picker/)**

Experience all features in action:

- 🌙 **Dark/Light Theme Toggle** - Switch themes and see all components adapt
- 🎨 **Solid Color Picker** - Pick any solid color with alpha transparency
- 🌈 **Gradient Picker** - Create linear/radial gradients with multiple stops
- 🔄 **Dual Mode** - Switch between solid and gradient modes seamlessly
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- ⚙️ **All Props & Configuration** - Explore every feature and customization option

**[📚 View Complete Documentation →](https://romfatal.github.io/react-iro-gradient-picker/)**

---

## 🚀 Quick Start

### Install

**Important: this component uses React Hooks and works on React version 16.8.0 and higher**

```bash
npm install react-iro-gradient-picker
```

```bash
yarn add react-iro-gradient-picker
```

```bash
pnpm add react-iro-gradient-picker
```

### ⚠️ **IMPORTANT: Import CSS Styles**

**You MUST import the CSS file for the component to work properly:**

```tsx
import 'react-iro-gradient-picker/dist/index.css';
```

Add this import at the top of your main App.js/App.tsx file or in your main CSS/SCSS file.

### Basic Usage

```tsx
import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css'; // ⚠️ REQUIRED CSS import

function App() {
  const [color, setColor] = useState('#3B82F6');

  return (
    <ColorPicker
      solid
      value={color}
      onChange={(newColor: string) => {
        setColor(newColor);
        return newColor;
      }}
    />
  );
}

export default App;
```

### 🎨 With Beautiful Gradient Background (NEW!)

The wrapper automatically uses the picker's color as the background! Just add `showWrapper={true}`:

```tsx
import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css';

function App() {
  const [color, setColor] = useState('#e77ab');

  return (
    <ColorPicker
      showWrapper={true}
      solid
      gradient
      value={color}
      onChange={setColor}
    />
  );
}
// Background automatically changes to match the selected color!
```

**Preset Gradients (Optional):**

```tsx
// Override with preset gradient
<ColorPicker
  showWrapper={true}
  wrapperClassName='gradient-sunset'
  value={color}
  onChange={setColor}
/>

// Available presets: gradient-sunset, gradient-ocean, gradient-forest,
// gradient-fire, gradient-cool, gradient-rose, gradient-purple
```

**Custom Background (Optional):**

```tsx
// Override with custom gradient or solid color
<ColorPicker
  showWrapper={true}
  wrapperBackground='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  value={color}
  onChange={setColor}
/>
```

**Wrapper Props:**

- `showWrapper` - Enable/disable wrapper (default: false)
- `wrapperBackground` - Override with custom background (optional)
- `wrapperClassName` - Preset gradient class (optional)
- `wrapperHeight` - Container height (default: 'auto')
- `wrapperWidth` - Container width (default: 'auto')
- `wrapperPadding` - Container padding (default: '24px')
- `wrapperRounded` - Rounded corners (default: true)

💡 **By default, the wrapper background automatically matches the picker's value!**

### 🔄 With Reset Functionality

```tsx
import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css'; // ⚠️ REQUIRED CSS import

function App() {
  const [color, setColor] = useState('#3B82F6');
  const originalColor = '#3B82F6';

  const handleReset = () => {
    setColor(originalColor);
    console.log('Color reset to original value!');
  };

  return (
    <ColorPicker
      solid
      value={color}
      onChange={setColor}
      showReset
      onReset={handleReset}
    />
  );
}

export default App;
```

### � **NEW: Enhanced Gradient Object Support**

**v1.2.0+ supports both CSS strings AND gradient objects for maximum flexibility!**

```tsx
import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css';

function GradientObjectExample() {
  // Define gradient as an object
  const [gradientData, setGradientData] = useState({
    type: 'linear',
    angle: 120,
    stops: [
      { color: '#FF6B6B', position: 0 }, // Red at 0%
      { color: '#FFD93D', position: 50 }, // Yellow at 50%
      { color: '#6BCB77', position: 100 } // Green at 100%
    ]
  });

  return (
    <ColorPicker
      value={gradientData} // 🎯 Pass object directly!
      onChange={(cssGradient) => {
        console.log('Generated CSS:', cssGradient);
        // Component auto-switches to gradient tab
        // Sets angle to 120°, creates 3 stops with exact colors/positions
      }}
      gradient={true}
      solid={true}
      showGradientAngle={true}
      showGradientStops={true}
    />
  );
}
```

**🚀 What happens when you pass a gradient object:**

- ✅ **Auto-switches to gradient tab**
- ✅ **Sets angle slider to specified degrees** (120° in example)
- ✅ **Creates gradient stops** at exact positions (0%, 50%, 100%)
- ✅ **Sets stop colors** to specified values (#FF6B6B, #FFD93D, #6BCB77)
- ✅ **Updates gradient preview** to match exactly
- ✅ **Returns CSS gradient string** in onChange callback

**📋 Gradient Object Structure:**

```typescript
interface IGradientData {
  type: 'linear' | 'radial';
  angle?: number; // For linear gradients (0-360 degrees)
  stops: Array<{
    color: string; // Any valid CSS color
    position: number; // 0-100 (percentage)
  }>;
}
```

### �🌙 With Dark Theme Support

```tsx
import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import { ThemeProvider } from 'react-iro-gradient-picker/components/providers/ThemeContext';

function App() {
  const [color, setColor] = useState('#3B82F6');

  return (
    <ThemeProvider defaultTheme='dark'>
      <ColorPicker
        solid
        gradient
        value={color}
        onChange={setColor}
        showAlpha={true}
        showInputs={true}
      />
    </ThemeProvider>
  );
}
```

### 🎨 Format Control

Control the color format returned by the onChange callback:

```tsx
import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';

function FormatExample() {
  const [color, setColor] = useState('#3B82F6');

  // RGB format (default)
  <ColorPicker
    solid
    value={color}
    onChange={setColor}
    format="rgb"      // Returns: "rgb(59, 130, 246)" or "rgba(59, 130, 246, 0.8)"
  />

  // HSL format
  <ColorPicker
    solid
    value={color}
    onChange={setColor}
    format="hsl"      // Returns: "hsl(217, 91%, 60%)" or "hsla(217, 91%, 60%, 0.8)"
  />

  // HEX format
  <ColorPicker
    solid
    value={color}
    onChange={setColor}
    format="hex"      // Returns: "#3b82f6" or "#3b82f680" (with alpha)
  />
}
```

### 🎨 Default Gradient Selection

Control which gradient is used when switching from solid to gradient tab:

```tsx
import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';

function GradientExample() {
  const [color, setColor] = useState('#FF6B6B');

  return (
    <ColorPicker
      solid
      gradient
      value={color}
      onChange={setColor}
      defaultGradientIndex={0} // Use first gradient from defaultColors (index 0)
    />
  );
}
```

**How it works:**

- `defaultGradientIndex` controls which gradient from your `defaultColors` array is used as the default
- Default value is `7` (8th gradient in the array)
- When switching from **Solid → Gradient** tab, the picker shows this gradient instead of converting the solid color
- The selected gradient is automatically highlighted in the Popular Colors panel
- Helps maintain consistent UX by starting with a predefined gradient

**Examples:**

```tsx
// Use the first gradient (index 0)
<ColorPicker defaultGradientIndex={0} gradient solid />

// Use the 5th gradient (index 4)
<ColorPicker defaultGradientIndex={4} gradient solid />

// Default behavior (uses index 7)
<ColorPicker gradient solid />
```

**Smart bounds checking:**

- If index is negative, uses `0`
- If index exceeds available gradients, uses the last gradient
- If no gradients in `defaultColors`, uses a fallback gradient

### 📚 **[→ View Complete Documentation & Examples](https://romfatal.github.io/react-iro-gradient-picker/)**

## 🌟 What Makes This Special

This is an enhanced version of the original react-gcolor-picker with major improvements:

### 🌙 Complete Dark Theme Integration

- **Fixed all components** - Modal, solid picker, gradient picker, and inputs now work perfectly in dark mode
- **CSS Custom Properties** - Dynamic theming that responds to theme changes
- **Tailwind CSS Integration** - Modern, maintainable styling system
- **Theme Toggle Component** - Easy switching between light/dark themes
- **Persistent Preferences** - Automatically saves user's theme choice

### 🎯 Enhanced Storybook Documentation

- **Dark-themed Storybook** - Professional development environment
- **Comprehensive Documentation** - Updated guides and examples
- **Live Examples** - See all components working in both themes

### 🚀 Modern Development Stack

- **TypeScript Support** - Full type safety and better development experience
- **Updated Dependencies** - Latest versions of all packages
- **Better Build Process** - Optimized for modern React applications

## 🎨 Supported CSS Gradient Formats

**v1.2.2+ supports all standard CSS gradient formats with robust parsing:**

### Linear Gradients

```css
/* Angle-based directions */
linear-gradient(120deg, #FF6B6B, #FFD93D, #6BCB77)
linear-gradient(45deg, #4FACFE, #00F2FE, #38EF7D)
linear-gradient(200deg, #FF9A9E, #FAD0C4, #FBC2EB)
linear-gradient(60deg, #30CFD0, #330867, #6A82FB)

/* Named directions */
linear-gradient(to top right, #FF6B6B, #FFD93D)
linear-gradient(to bottom, #4FACFE, #00F2FE)
linear-gradient(to left, #FF9A9E, #FAD0C4)

/* With explicit positions */
linear-gradient(90deg, #FF6B6B 0%, #FFD93D 50%, #6BCB77 100%)

/* Without positions (auto-distributed) */
linear-gradient(180deg, #FF9966, #FF5E62, #F54EA2)
```

### Radial Gradients

```css
/* Basic circle gradients */
radial-gradient(circle at center, #00C9FF, #92FE9D, #0061FF)
radial-gradient(circle at top left, #FF6B6B, #FF4757, #2F3542)
radial-gradient(circle at bottom right, #1E90FF, #3742FA, #2C3E50)

/* Positioned radial gradients */
radial-gradient(circle at 70% 30%, #2ED573, #1EAE98, #004E64)
radial-gradient(circle at 20% 80%, #FFB347, #FFCC33, #FF6347)
radial-gradient(circle at top center, #FF7E5F, #FEB47B, #FFD93D)
radial-gradient(circle at right center, #6A82FB, #FC5C7D, #FF85A1)

/* Complex positioning */
radial-gradient(circle at 30% 70%, #11998E, #38EF7D, #8BC34A)
radial-gradient(circle at 80% 20%, #F7971E, #FFD200, #FF512F)
radial-gradient(circle at 40% 40%, #C6FFDD, #FBD786, #F7797D)
```

### Advanced Features

- **Auto-positioning**: Color stops without explicit positions are automatically distributed evenly
- **Flexible syntax**: Supports various positioning keywords and percentage values
- **Error recovery**: Invalid gradients fall back to a default gradient instead of crashing
- **Type safety**: Full TypeScript support with proper gradient object interfaces
- **Smart position mapping**: Automatically highlights correct position markers for all gradient formats

## 📐 Gradient Value Format Guide

The component accepts gradient values in multiple formats and automatically maps them to the correct UI controls:

### ✅ Supported Gradient Formats

#### Linear Gradients

```css
/* Angle-based (0-360 degrees) */
linear-gradient(45deg, #FF6B6B, #4ECDC4)
linear-gradient(180deg, #667eea 0%, #764ba2 100%)

/* Named directions (automatically converted to angles) */
linear-gradient(to top, #FF6B6B, #4ECDC4)        → 0deg
linear-gradient(to top right, #FF6B6B, #4ECDC4)  → 45deg
linear-gradient(to right, #FF6B6B, #4ECDC4)      → 90deg
linear-gradient(to bottom, #FF6B6B, #4ECDC4)     → 180deg
```

#### Radial Gradients - Standard Positions

```css
/* Standard position keywords (auto-mapped to UI markers) */
radial-gradient(circle at center, #FF6B6B, #4ECDC4)
radial-gradient(circle at top left, #FF6B6B, #4ECDC4)
radial-gradient(circle at top center, #FF6B6B, #4ECDC4)    ✨ Maps to "center top"
radial-gradient(circle at right center, #FF6B6B, #4ECDC4)  ✨ Maps to "center right"

/* Percentage-based positions */
radial-gradient(circle at 70% 30%, #FF6B6B, #4ECDC4)
radial-gradient(circle at 0% 100%, #FF6B6B, #4ECDC4)
```

#### Radial Gradients - Edge Cases ✨ NEW

```css
/* Size-only gradients (automatically default to center position) */
radial-gradient(70, #ff0000, #0000ff)              ✨ → circle at center
radial-gradient(150%, #FFB347, #FFCC33, #FF6347)   ✨ → circle at center
radial-gradient(200px, #FF6B6B, #4ECDC4)           ✨ → circle at center

/* Size keywords (automatically default to center position) */
radial-gradient(closest-side, #FF6B6B, #4ECDC4)    ✨ → circle at center
radial-gradient(farthest-corner, #FF6B6B, #4ECDC4) ✨ → circle at center
```

### 🎯 Position Mapping Intelligence

The component intelligently maps gradient positions to UI markers:

| **Input Format**         | **UI Marker Highlighted** | **Notes**                       |
| ------------------------ | ------------------------- | ------------------------------- |
| `circle at center`       | Center (●)                | Standard center position        |
| `circle at top center`   | Center Top (●)            | Alias automatically normalized  |
| `circle at right center` | Center Right (●)          | Alias automatically normalized  |
| `70`, `150%`, `200px`    | Center (●)                | Size-only defaults to center    |
| `closest-side`           | Center (●)                | Size keywords default to center |
| `circle at 25% 75%`      | No marker                 | Custom percentage position      |

### 📝 Gradient Value Requirements

#### ✅ Valid Examples

```css
/* With explicit positions (recommended) */
linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)
radial-gradient(circle at center, #FF6B6B 0%, #4ECDC4 50%, #FFD93D 100%)

/* Without positions (auto-distributed) */
linear-gradient(45deg, #FF6B6B, #4ECDC4, #FFD93D)
radial-gradient(circle at top left, #FF6B6B, #4ECDC4)
```

#### ❌ Invalid Examples

```css
/* Missing gradient type */
90deg, #FF6B6B, #4ECDC4

/* Invalid color format */
linear-gradient(90deg, notacolor, #4ECDC4)
```

## Props

| Attribute             |    Type    |           Default           | Description                                                                                           |
| :-------------------- | :--------: | :-------------------------: | :---------------------------------------------------------------------------------------------------- |
| value                 |  `string`  |          `#ffffff`          | Default color value. Accept: rgba/rgb, hsla/hsl, named colors                                         |
| format                |  `string`  |            `rgb`            | Return value format. Accept: 'rgb', 'hex', 'hsl'                                                      |
| gradient              |   `bool`   |           `false`           | Show gradient color panel                                                                             |
| solid                 |   `bool`   |           `true`            | Show solid color panel                                                                                |
| debounceMS            |  `number`  |            `300`            | Debounce ms value                                                                                     |
| debounce              |   `bool`   |           `true`            | Debouce off/on                                                                                        |
| showAlpha             |   `bool`   |           `true`            | Show/hide alpha input and range                                                                       |
| showInputs            |   `bool`   |           `true`            | Show/hide inputs alpha and color                                                                      |
| showGradientResult    |   `bool`   |           `true`            | Show/hide gradient result fields(angle, mode, position)                                               |
| showGradientStops     |   `bool`   |           `true`            | Show/hide gradient color stops                                                                        |
| showGradientMode      |   `bool`   |           `true`            | Show/hide gradient color mode switcher                                                                |
| showGradientAngle     |   `bool`   |           `true`            | Show/hide gradient angle for linear-gradient                                                          |
| showGradientPosition  |   `bool`   |           `true`            | Show/hide gradient position for radial-gradient                                                       |
| allowAddGradientStops |   `bool`   |           `true`            | Allow to add new gradient stops                                                                       |
| popupWidth            |  `number`  |            `267`            | Popup width                                                                                           |
| colorBoardHeight      |  `number`  |            `120`            | Board color height                                                                                    |
| defaultColors         |  `array`   | [List](#default-color-list) | Default colors array for panel picker                                                                 |
| defaultActiveTab      |  `string`  |         `undefined`         | Default value for active tab when initializing the component, takes two values: `solid` or `gradient` |
| defaultGradientIndex  |  `number`  |             `7`             | Index of the gradient from `defaultColors` to use when switching from solid to gradient tab           |
| onChangeTabs          | `function` |           `null`            | Default onChange function detect when tabs change and return one of the values: `solid` or `gradient` |
| onChange              | `function` |           `null`            | Default onChange function returns string value in the given format                                    |
| showReset             |   `bool`   |           `false`           | Show/hide reset button in the picker interface                                                        |
| onReset               | `function` |           `null`            | Callback function triggered when reset button is clicked                                              |
| theme                 |  `string`  |          `'dark'`           | Color scheme for the picker. Accept: 'light', 'dark'                                                  |
| showWrapper           |   `bool`   |           `false`           | Enable wrapper with background matching the picker's value                                            |
| wrapperBackground     |  `string`  |         `undefined`         | Override automatic wrapper background with custom color/gradient                                      |
| wrapperClassName      |  `string`  |            `''`             | CSS class for wrapper (can use preset gradient classes)                                               |
| wrapperHeight         |  `string`  |          `'auto'`           | Wrapper container height                                                                              |
| wrapperWidth          |  `string`  |          `'auto'`           | Wrapper container width                                                                               |
| wrapperPadding        |  `string`  |          `'24px'`           | Wrapper container padding                                                                             |
| wrapperRounded        |   `bool`   |           `true`            | Enable rounded corners on wrapper                                                                     |

## 🎯 Radial Gradient Position Reference

The component supports all standard radial gradient positions and automatically maps them to UI markers:

### Standard Positions (9-Point Grid)

```css
/* Top Row */
circle at left top       → Top-Left marker (●)
circle at center top     → Top-Center marker (●)
circle at right top      → Top-Right marker (●)

/* Middle Row */
circle at left           → Middle-Left marker (●)
circle at center         → Center marker (●) [Default]
circle at right          → Middle-Right marker (●)

/* Bottom Row */
circle at left bottom    → Bottom-Left marker (●)
circle at center bottom  → Bottom-Center marker (●)
circle at right bottom   → Bottom-Right marker (●)
```

### Position Aliases (Auto-Normalized)

```css
/* These aliases are automatically converted: */
circle at top center     → circle at center top
circle at bottom center  → circle at center bottom
circle at left center    → circle at center left
circle at right center   → circle at center right
```

### Edge Cases (Auto-Defaulted to Center)

```css
/* Size-only gradients default to center: */
70                       → circle at center
150%                     → circle at center
200px                    → circle at center
closest-side            → circle at center
farthest-corner         → circle at center
```

## Default color list

```

'#FF6900',
'#FCB900',
'#7BDCB5',
'#00D084',
'#8ED1FC',
'#0693E3',
'#ABB8C3',
'#607d8b',
'#EB144C',
'#F78DA7',
'#ba68c8',
'#9900EF',
'linear-gradient(0deg, rgb(255, 177, 153) 0%, rgb(255, 8, 68) 100%)',
'linear-gradient(270deg, rgb(251, 171, 126) 8.00%, rgb(247, 206, 104) 92.00%)',
'linear-gradient(315deg, rgb(150, 230, 161) 8.00%, rgb(212, 252, 121) 92.00%)',
'linear-gradient(to left, rgb(249, 240, 71) 0%, rgb(15, 216, 80) 100%)',
'linear-gradient(315deg, rgb(194, 233, 251) 8.00%, rgb(161, 196, 253) 92.00%)',
'linear-gradient(0deg, rgb(0, 198, 251) 0%, rgb(0, 91, 234) 100%)',
'linear-gradient(0deg, rgb(167, 166, 203) 0%, rgb(137, 137, 186) 51.00%, rgb(137, 137, 186) 100%)',
'linear-gradient(0deg, rgb(80, 82, 133) 0%, rgb(88, 94, 146) 15.0%, rgb(101, 104, 159) 28.00%, rgb(116, 116, 176) 43.00%, rgb(126, 126, 187) 57.00%, rgb(131, 137, 199) 71.00%, rgb(151, 149, 212) 82.00%, rgb(162, 161, 220) 92.00%, rgb(181, 174, 228) 100%)',
'linear-gradient(270deg, rgb(255, 126, 179) 0%, rgb(255, 117, 140) 100%)',
'linear-gradient(90deg, rgb(120, 115, 245) 0%, rgb(236, 119, 171) 100%)',
'linear-gradient(45deg, #2e266f 0.00%, #9664dd38 100.00%)',
'radial-gradient(circle at center, yellow 0%, #009966 50%, purple 100%)'

```

## FAQ

**Q:** There's any possibility to remove extra gradient lines?

**A:** Yes, you only need to drag them outside(bottom) the Gradient component area or double click on the element you want to remove.

## Credits & Attribution

This project is based on the excellent [react-gcolor-picker](https://github.com/undind/react-gcolor-picker) by [undind](https://github.com/undind), enhanced with:

- Complete dark theme integration
- Modern Tailwind CSS styling
- Improved TypeScript support
- Enhanced Storybook documentation
- Better accessibility features

Special thanks to the original author for creating such a solid foundation! 🙏

## License

MIT © [romfatal](https://github.com/romfatal)

Original project: MIT © [undind](https://github.com/undind)

```

```
