<!-- markdownlint-disable -->
# Changelog

All notable changes to React Iro Gradient Picker will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### ✨ Added

- **`defaultGradientIndex` prop** - New prop to control which gradient from `defaultColors` is used when switching from solid to gradient tab
  - Default value is `7` (8th gradient in the array)
  - Allows users to customize the initial gradient experience
  - Automatically highlights the selected gradient in Popular Colors panel
  - Smart bounds checking prevents invalid indices
- **Visual gradient selection feedback** - When switching to gradient tab, the default gradient is now highlighted in the Popular Colors panel with a blue border and scale effect
- **Improved gradient tab behavior** - Switching from solid to gradient tab now uses a predefined gradient instead of converting the solid color
- **Current value highlighting** - Both solid and gradient panels now highlight the currently selected color/gradient in the Popular Colors grid

### 🐛 Fixed

- **Popular gradient selection** - Fixed issue where clicking on popular gradients in gradient tab wouldn't properly apply them
- **Gradient reconstruction** - Added proper gradient CSS string reconstruction when selecting from popular gradients
- **Dev tools resize handling** - Enhanced detection and correction for layout issues when dev tools are open during page load/render
  - Added initial layout validation with multiple retry attempts
  - Implemented window resize listener for real-time dev tools detection
  - Added dev tools detection heuristic using viewport dimensions
  - Fixed picker dimensions when dev tools are already open on page load

## [1.0.0] - 2025-09-19

### 🚀 Initial Release - Enhanced Dark Theme Edition

This is the first release of React Iro Gradient Picker, an enhanced version of react-gcolor-picker with comprehensive dark theme support.

### ✨ Added

#### Dark Theme Integration

- **Complete dark theme support** across all components (modal, solid picker, gradient picker, inputs)
- **CSS custom properties system** for dynamic theming that responds to theme changes
- **Theme toggle component** with sun/moon icons for easy light/dark switching
- **Theme persistence** - automatically saves and restores user's theme preference in localStorage
- **Dark theme as default** - provides modern, eye-friendly experience out of the box

#### Modern Styling System

- **Tailwind CSS integration** - Modern, maintainable utility-first CSS framework
- **Custom color palette** with comprehensive dark theme variants (50-900 shades)
- **Enhanced shadows** - Custom light and dark shadow variants for better depth
- **Responsive design** improvements for all screen sizes

#### Enhanced Developer Experience

- **TypeScript improvements** - Better type definitions and type safety
- **Storybook dark theme** - Complete dark theme integration for documentation
- **Dark-themed documentation** - Professional documentation with dark styling
- **Enhanced component props** - Better prop organization and documentation

#### Component Enhancements

- **Fixed SCSS styling** - Replaced hardcoded colors with theme-aware CSS custom properties
- **Improved input styling** - Dark theme support for all input fields and labels
- **Enhanced modal styling** - Proper dark theme for popup modals and overlays
- **Better accessibility** - Improved ARIA labels and keyboard navigation

### 🔧 Technical Improvements

#### Build System

- **Updated dependencies** - Latest versions of all packages for better security and performance
- **Rollup optimization** - Enhanced build process for smaller bundle sizes
- **PostCSS integration** - Better CSS processing with Tailwind CSS

#### Documentation

- **Comprehensive README** - Detailed documentation with dark theme examples
- **Enhanced Storybook** - Professional documentation with live examples
- **Demo page** - Standalone demo showcasing all features and themes
- **Contributing guide** - Updated guidelines for contributing to the project

### 📦 Package Information

- **Package name**: `react-iro-gradient-picker`
- **Repository**: `romfatal/react-iro-gradient-picker`
- **Author**: romfatal
- **License**: MIT

### 🙏 Credits

Based on the excellent [react-gcolor-picker](https://github.com/undind/react-gcolor-picker) by [undind](https://github.com/undind).
Enhanced with modern features while maintaining backward compatibility.

---

## Previous Versions (Original react-gcolor-picker)

For reference, here are the key versions from the original project that this enhances:

### [1.3.3] - Original Project

- Default panel item box shadow updates
- Various bug fixes and improvements

### [1.3.2] - Original Project

- Fixed gradient color picker issues
- Improved stability

### [1.3.1] - Original Project

- Fixed popupWidth prop functionality
- Minor bug fixes

### [1.3.0] - Original Project

- Fixed gradient mode selection issues
- Improved color stop management
- Enhanced gradient functionality

> 2 January 2022

- patch: add new props [`#17`](https://github.com/undind/react-gcolor-picker/pull/17)
- Release v1.2.2 [`0040b23`](https://github.com/undind/react-gcolor-picker/commit/0040b23205d3b37e373c3c45fb699d48dfa6ebab)

#### [1.2.1](https://github.com/undind/react-gcolor-picker/compare/1.2.0...1.2.1)

> 10 August 2021

- bug: fix mousedown conflict [`#15`](https://github.com/undind/react-gcolor-picker/pull/15)
- Release v1.2.1 [`efe1c49`](https://github.com/undind/react-gcolor-picker/commit/efe1c498f30479f70b293eaa44845f0e448b4aeb)

#### [1.2.0](https://github.com/undind/react-gcolor-picker/compare/1.1.3...1.2.0)

> 7 July 2021

- fix: render components and scss styles [`#13`](https://github.com/undind/react-gcolor-picker/pull/13)
- Release v1.2.0 [`52dd4f0`](https://github.com/undind/react-gcolor-picker/commit/52dd4f0c90fc3892e1a84068e8cafb509eb83c0e)
- upd: unit tests [`ad4402c`](https://github.com/undind/react-gcolor-picker/commit/ad4402c10f27b9ceabbd576fbd399e85d993183d)

#### [1.1.3](https://github.com/undind/react-gcolor-picker/compare/1.1.2...1.1.3)

> 21 March 2021

- patch: remove color stops [`#12`](https://github.com/undind/react-gcolor-picker/pull/12)
- Update prop value [`#8`](https://github.com/undind/react-gcolor-picker/pull/8)
- Release v1.1.3 [`383cc0a`](https://github.com/undind/react-gcolor-picker/commit/383cc0aaf8c4d940ff8531d648f6a0e688522d64)

#### [1.1.2](https://github.com/undind/react-gcolor-picker/compare/1.1.1...1.1.2)

> 4 March 2021

- patch: update comp state from value change [`314784a`](https://github.com/undind/react-gcolor-picker/commit/314784a5152b3ca7f46bd01ab89c9d3a340e8bae)
- Release v1.1.2 [`3cb1655`](https://github.com/undind/react-gcolor-picker/commit/3cb1655044a5b94c1e6922c78509d752339d5c55)

#### [1.1.1](https://github.com/undind/react-gcolor-picker/compare/1.1.0...1.1.1)

> 7 February 2021

- chore: fix hsl string regexp [`#5`](https://github.com/undind/react-gcolor-picker/pull/5)
- chore: stories edit [`f14ce5f`](https://github.com/undind/react-gcolor-picker/commit/f14ce5fcbff7ae32c5281768d9828356b72fa07a)
- Release v1.1.1 [`f144be6`](https://github.com/undind/react-gcolor-picker/commit/f144be6b329240e579bea8dc6aee239f79e9cda3)

#### [1.1.0](https://github.com/undind/react-gcolor-picker/compare/1.0.4...1.1.0)

> 31 January 2021

- Default colors panel [`#4`](https://github.com/undind/react-gcolor-picker/pull/4)
- chore: Default colors panel [`ff4370d`](https://github.com/undind/react-gcolor-picker/commit/ff4370d2160d82eaa462cf5c6362b7055746b457)
- minor: default colors panel fix linter [`cca1bd5`](https://github.com/undind/react-gcolor-picker/commit/cca1bd51f5de8aa3916696c2e69c036cda221619)
- minor: default colors panel [`7d82c70`](https://github.com/undind/react-gcolor-picker/commit/7d82c709b88168be911957c0d59b130cafe6de41)

#### [1.0.4](https://github.com/undind/react-gcolor-picker/compare/1.0.3...1.0.4)

> 17 January 2021

- patch: fix gradient active tab [`adad7d9`](https://github.com/undind/react-gcolor-picker/commit/adad7d9339a584b7e0df8dcc6139618b718b6ec6)
- Release v1.0.4 [`064ba2d`](https://github.com/undind/react-gcolor-picker/commit/064ba2d32f6c818c23a987713390f4911e2aaf8b)

#### [1.0.3](https://github.com/undind/react-gcolor-picker/compare/1.0.2...1.0.3)

> 17 January 2021

- patch: add format component prop [`#3`](https://github.com/undind/react-gcolor-picker/pull/3)
- Release v1.0.3 [`8d6e54a`](https://github.com/undind/react-gcolor-picker/commit/8d6e54a0ae3d344f5a69caf09c2947ac88c1c1f9)
- fix: eslint format [`d11c6c6`](https://github.com/undind/react-gcolor-picker/commit/d11c6c6a1e8a2d0699a1acee157f37e964f2fb42)

#### [1.0.2](https://github.com/undind/react-gcolor-picker/compare/1.0.1...1.0.2)

> 16 January 2021

- fix: react jsx runtime error [`#2`](https://github.com/undind/react-gcolor-picker/pull/2)
- Release v1.0.2 [`697a66d`](https://github.com/undind/react-gcolor-picker/commit/697a66d852e4ec4e6e274055389228ca586984bc)

#### [1.0.1](https://github.com/undind/react-gcolor-picker/compare/1.0.0...1.0.1)

> 9 January 2021

- patch: mobile touch events [`#1`](https://github.com/undind/react-gcolor-picker/pull/1)
- Release v1.0.1 [`3606756`](https://github.com/undind/react-gcolor-picker/commit/3606756050573b028aa2f743bef805bb9195369e)

#### 1.0.0

> 8 January 2021

- init [`8cb39a8`](https://github.com/undind/react-gcolor-picker/commit/8cb39a843d4c9ed310d1eb11256d9c2581fc52d1)
- Release v1.0.0 [`6a8c204`](https://github.com/undind/react-gcolor-picker/commit/6a8c20414180de5caef56fde5035bf6291d21511)
- chore: eslint fix [`f8c02a7`](https://github.com/undind/react-gcolor-picker/commit/f8c02a78b422a4c9154a557d244410e1a7fbc972)
