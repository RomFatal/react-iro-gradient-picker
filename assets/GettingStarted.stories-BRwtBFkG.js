import{R as e}from"./iframe-v1Jt4qUp.js";import{d as o}from"./decorators-DRuduyES.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"Documentation/Getting Started",parameters:{layout:"fullscreen",docs:{description:{component:"Complete guide to getting started with React Iro Gradient Picker"}}},decorators:[o],tags:["autodocs"]},t={render:()=>e.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"2rem"}},e.createElement("h1",{style:{color:"#38bdf8",marginBottom:"2rem"}},"🚀 Getting Started with React Iro Gradient Picker"),e.createElement("div",{style:{marginBottom:"3rem"}},e.createElement("h2",null,"📦 Installation"),e.createElement("p",{style:{color:"#cbd5e1",marginBottom:"1rem"}},"Install React Iro Gradient Picker using your preferred package manager:"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0"}},e.createElement("div",null,"npm install react-iro-gradient-picker"),e.createElement("div",{style:{opacity:.6,marginTop:"8px"}},"# or"),e.createElement("div",null,"yarn add react-iro-gradient-picker"),e.createElement("div",{style:{opacity:.6,marginTop:"8px"}},"# or"),e.createElement("div",null,"pnpm add react-iro-gradient-picker")),e.createElement("div",{style:{background:"#0f172a",border:"1px solid #334155",borderRadius:"8px",padding:"1rem",marginTop:"1rem"}},e.createElement("p",{style:{margin:"0 0 8px",color:"#38bdf8",fontWeight:"600"}},"📊 Package Info:"),e.createElement("ul",{style:{margin:0,paddingLeft:"1.5rem",color:"#cbd5e1"}},e.createElement("li",null,"Version: 1.0.0"),e.createElement("li",null,"Repository:"," ",e.createElement("a",{href:"https://github.com/romfatal/react-iro-gradient-picker",style:{color:"#38bdf8"}},"romfatal/react-iro-gradient-picker")),e.createElement("li",null,"License: MIT"),e.createElement("li",null,"TypeScript support included")))),e.createElement("div",{style:{marginBottom:"3rem"}},e.createElement("div",{style:{background:"#7c2d12",border:"1px solid #dc2626",borderRadius:"8px",padding:"1.5rem",marginTop:"2rem"}},e.createElement("h2",{style:{margin:"0 0 1rem",color:"#fef2f2",display:"flex",alignItems:"center"}},"⚠️ IMPORTANT: CSS Import Required"),e.createElement("p",{style:{margin:"0 0 1rem",color:"#fef2f2",fontWeight:"600"}},"You MUST import the CSS file for the component to work properly:"),e.createElement("div",{style:{background:"#0f172a",color:"#f8fafc",padding:"1rem",borderRadius:"6px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",border:"1px solid #334155"}},"import 'react-iro-gradient-picker/dist/index.css';"),e.createElement("p",{style:{margin:"1rem 0 0",color:"#fed7aa",fontSize:"14px"}},"Add this import at the top of your main App.js/App.tsx file or in your main CSS/SCSS file. Without this import, the component will not display correctly."))),e.createElement("div",{style:{marginBottom:"3rem"}},e.createElement("h2",null,"🎨 Basic Usage"),e.createElement("p",{style:{color:"#cbd5e1",marginBottom:"1rem"}},"Quick start with solid color picker:"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css'; // ⚠️ REQUIRED CSS import
import { ThemeProvider } from 'react-iro-gradient-picker/components/providers/ThemeContext';

function App() {
  const [color, setColor] = useState('#3B82F6');

  return (
    <ThemeProvider defaultTheme="dark">
      <ColorPicker
        solid
        value={color}
        onChange={(newColor: string) =&gt; {
          setColor(newColor);
          return newColor;
        }}
      />
    </ThemeProvider>
  );
}`),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Gradient Mode"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css'; // ⚠️ REQUIRED CSS import

function GradientExample() {
  const [gradient, setGradient] = useState('linear-gradient(45deg, #3B82F6, #8B5CF6)');

  return (
    <ColorPicker
      gradient
      solid={false}
      value={gradient}
      onChange={setGradient}
      showGradientAngle={true}
      showGradientStops={true}
      allowAddGradientStops={true}
    />
  );
}`),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Dual Mode (Both Solid & Gradient)"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`<ColorPicker
  gradient
  solid
  value={currentValue}
  onChange={handleChange}
  showAlpha={true}
  showInputs={true}
  defaultActiveTab="solid"
/>`)),e.createElement("div",{style:{marginBottom:"3rem"}},e.createElement("h2",null,"🔄 Reset Functionality"),e.createElement("p",{style:{color:"#cbd5e1",marginBottom:"1rem"}},"New reset button functionality allows users to easily restore colors to their initial state:"),e.createElement("ul",{style:{color:"#cbd5e1",paddingLeft:"1.5rem",marginBottom:"2rem"}},e.createElement("li",null,"✅ Built-in reset button in the picker interface"),e.createElement("li",null,"✅ Custom callbacks for handling reset events"),e.createElement("li",null,"✅ Easy state management and tracking"),e.createElement("li",null,"✅ Works with both solid and gradient modes")),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Basic Reset Example"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css'; // ⚠️ REQUIRED CSS import

function ResetExample() {
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
}`),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Advanced Reset with History Tracking"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`function AdvancedResetExample() {
  const [gradient, setGradient] = useState(
    'linear-gradient(45deg, #FF6B35 0%, #3A86FF 100%)'
  );
  const [resetHistory, setResetHistory] = useState([]);

  const handleReset = () => {
    const timestamp = new Date().toLocaleTimeString();
    setResetHistory(prev => [
      ...prev,
      \`Reset at \${timestamp}\`
    ]);
    setGradient('linear-gradient(45deg, #FF6B35 0%, #3A86FF 100%)');
  };

  return (
    <div>
      <ColorPicker
        gradient
        value={gradient}
        onChange={setGradient}
        showReset
        onReset={handleReset}
      />

      <div style={{ marginTop: '20px' }}>
        <h4>Reset History:</h4>
        <ul>
          {resetHistory.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}`)),e.createElement("div",{style:{marginBottom:"3rem"}},e.createElement("h2",null,"🌙 Complete Dark Theme Integration"),e.createElement("p",{style:{color:"#cbd5e1",marginBottom:"1rem"}},"React Iro Gradient Picker provides comprehensive dark theme support with automatic persistence and smooth transitions:"),e.createElement("ul",{style:{color:"#cbd5e1",paddingLeft:"1.5rem",marginBottom:"2rem"}},e.createElement("li",null,"✅ All components automatically respond to theme changes"),e.createElement("li",null,"✅ CSS custom properties for easy customization"),e.createElement("li",null,"✅ Theme persistence with localStorage"),e.createElement("li",null,"✅ Smooth transitions between light and dark modes"),e.createElement("li",null,"✅ Storybook integration with theme decorators"),e.createElement("li",null,"✅ TypeScript support for theme providers")),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Basic Theme Setup"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`import { ThemeProvider } from 'react-iro-gradient-picker/components/providers/ThemeContext';
import { ThemeToggle } from 'react-iro-gradient-picker/components/ui/ThemeToggle';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="app">
        <ThemeToggle />
        <ColorPicker gradient solid />
      </div>
    </ThemeProvider>
  );
}`),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Theme Context Usage"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`import { useTheme } from 'react-iro-gradient-picker/components/providers/ThemeContext';

function CustomComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button onClick={() =&gt; setTheme('light')}>
        Set Light Theme
      </button>
      <button onClick={() =&gt; setTheme('dark')}>
        Set Dark Theme
      </button>
    </div>
  );
}`),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Custom CSS Properties"),e.createElement("p",{style:{color:"#cbd5e1",marginBottom:"1rem"}},"The component uses CSS custom properties that automatically update based on the theme:"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`/* Light theme variables */
:root {
  --primary-bg: #ffffff;
  --secondary-bg: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  --accent-color: #3b82f6;
}

/* Dark theme variables */
:root[data-theme="dark"] {
  --primary-bg: #0f172a;
  --secondary-bg: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --border-color: #334155;
  --accent-color: #38bdf8;
}`),e.createElement("div",{style:{background:"#0f172a",border:"1px solid #334155",borderRadius:"8px",padding:"1rem",marginTop:"2rem"}},e.createElement("p",{style:{margin:"0 0 8px",color:"#38bdf8",fontWeight:"600"}},"💡 Pro Tip:"),e.createElement("p",{style:{margin:0,color:"#cbd5e1"}},"The ThemeProvider automatically detects the user's system preference and persists theme changes to localStorage. No additional configuration is needed for a complete theme experience!"))),e.createElement("div",{style:{marginBottom:"3rem"}},e.createElement("h2",null,"� Color Format Control"),e.createElement("p",{style:{color:"#cbd5e1",marginBottom:"1rem"}},"Control the output format of colors returned by the onChange callback using the"," ",e.createElement("code",{style:{background:"#334155",padding:"2px 6px",borderRadius:"4px",color:"#fbbf24"}},"format")," ","prop:"),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Available Formats"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem",margin:"2rem 0"}},e.createElement("div",{style:{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1.5rem",borderLeft:"4px solid #3b82f6"}},e.createElement("h4",{style:{color:"#3b82f6",margin:"0 0 0.5rem 0"}},"RGB Format"),e.createElement("code",{style:{fontSize:"0.9rem",color:"#10b981"}},'format="rgb"'),e.createElement("p",{style:{margin:"0.5rem 0 0",fontSize:"0.85rem",color:"#cbd5e1"}},e.createElement("strong",null,"Output:")," rgb(97, 207, 255)",e.createElement("br",null),e.createElement("strong",null,"With Alpha:")," rgba(97, 207, 255, 0.8)")),e.createElement("div",{style:{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1.5rem",borderLeft:"4px solid #f59e0b"}},e.createElement("h4",{style:{color:"#f59e0b",margin:"0 0 0.5rem 0"}},"HSL Format"),e.createElement("code",{style:{fontSize:"0.9rem",color:"#10b981"}},'format="hsl"'),e.createElement("p",{style:{margin:"0.5rem 0 0",fontSize:"0.85rem",color:"#cbd5e1"}},e.createElement("strong",null,"Output:")," hsl(200, 100%, 69%)",e.createElement("br",null),e.createElement("strong",null,"With Alpha:")," hsla(200, 100%, 69%, 0.8)")),e.createElement("div",{style:{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1.5rem",borderLeft:"4px solid #10b981"}},e.createElement("h4",{style:{color:"#10b981",margin:"0 0 0.5rem 0"}},"HEX Format"),e.createElement("code",{style:{fontSize:"0.9rem",color:"#10b981"}},'format="hex"'),e.createElement("p",{style:{margin:"0.5rem 0 0",fontSize:"0.85rem",color:"#cbd5e1"}},e.createElement("strong",null,"Output:")," #61cfff",e.createElement("br",null),e.createElement("strong",null,"With Alpha:")," #61cfff80"))),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Format Examples"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`// RGB Format (default)
<ColorPicker
  solid
  value={color}
  onChange={handleColorChange}
  format="rgb"
/>
// Returns: "rgb(97, 207, 255)" or "rgba(97, 207, 255, 0.8)"

// HSL Format
<ColorPicker
  solid
  value={color}
  onChange={handleColorChange}
  format="hsl"
/>
// Returns: "hsl(200, 100%, 69%)" or "hsla(200, 100%, 69%, 0.8)"

// HEX Format
<ColorPicker
  solid
  value={color}
  onChange={handleColorChange}
  format="hex"
/>
// Returns: "#61cfff" or "#61cfff80" (with alpha)`),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Dynamic Format Switching"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`function ColorFormatExample() {
  const [color, setColor] = useState('#61cfff');
  const [format, setFormat] = useState('rgb');

  const handleColorChange = (newColor) => {
    setColor(newColor);
    console.log(\`Color in \${format} format:\`, newColor);
  };

  return (
    <div>
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
        <option value="hex">HEX</option>
      </select>

      <ColorPicker
        solid
        value={color}
        onChange={handleColorChange}
        format={format}
        showAlpha={true}
      />
    </div>
  );
}`),e.createElement("div",{style:{background:"#0f172a",border:"1px solid #334155",borderRadius:"8px",padding:"1rem",marginTop:"2rem"}},e.createElement("p",{style:{margin:"0 0 8px",color:"#38bdf8",fontWeight:"600"}},"💡 Format Pro Tips:"),e.createElement("ul",{style:{margin:0,paddingLeft:"1.5rem",color:"#cbd5e1"}},e.createElement("li",null,"Use ",e.createElement("strong",null,"RGB")," for CSS styling and web development"),e.createElement("li",null,"Use ",e.createElement("strong",null,"HSL")," for intuitive color manipulation"),e.createElement("li",null,"Use ",e.createElement("strong",null,"HEX")," for design tools and color codes"),e.createElement("li",null,"Alpha channel is automatically included when"," ",e.createElement("code",null,"showAlpha=",!0))))),e.createElement("div",{style:{marginBottom:"3rem"}},e.createElement("h2",null,"�🎛️ Complete Props Reference"),e.createElement("div",{style:{background:"#1e293b",border:"1px solid #475569",borderRadius:"8px",padding:"1rem",margin:"1rem 0",overflowX:"auto"}},e.createElement("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:"600px"}},e.createElement("thead",null,e.createElement("tr",{style:{borderBottom:"2px solid #475569"}},e.createElement("th",{style:{textAlign:"left",padding:"12px 8px",color:"#38bdf8",fontWeight:"600"}},"Prop"),e.createElement("th",{style:{textAlign:"left",padding:"12px 8px",color:"#38bdf8",fontWeight:"600"}},"Type"),e.createElement("th",{style:{textAlign:"left",padding:"12px 8px",color:"#38bdf8",fontWeight:"600"}},"Default"),e.createElement("th",{style:{textAlign:"left",padding:"12px 8px",color:"#38bdf8",fontWeight:"600"}},"Description"))),e.createElement("tbody",null,e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"solid"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"false"),e.createElement("td",{style:{padding:"8px"}},"Enable solid color picker tab")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"gradient"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"false"),e.createElement("td",{style:{padding:"8px"}},"Enable gradient picker tab")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"value"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"string"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"required"),e.createElement("td",{style:{padding:"8px"}},"Current color/gradient value (hex, rgb, hsl, or CSS gradient)")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"onChange"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"function"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"-"),e.createElement("td",{style:{padding:"8px"}},"Callback function when value changes: (value: string) => void")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"showAlpha"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"true"),e.createElement("td",{style:{padding:"8px"}},"Show alpha transparency controls")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"showInputs"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"true"),e.createElement("td",{style:{padding:"8px"}},"Show color input fields (RGB, HSL, HEX)")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"format"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"'rgb' | 'hsl' | 'hex'"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"-"),e.createElement("td",{style:{padding:"8px"}},"Control the output format of colors returned by onChange callback. Supports RGB (default), HSL, and HEX formats with automatic alpha channel handling.")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"debounce"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"true"),e.createElement("td",{style:{padding:"8px"}},"Enable debounced onChange events")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"debounceMS"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"number"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"100"),e.createElement("td",{style:{padding:"8px"}},"Debounce delay in milliseconds")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"popupWidth"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"number"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"280"),e.createElement("td",{style:{padding:"8px"}},"Width of the color picker popup")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"colorBoardHeight"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"number"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"200"),e.createElement("td",{style:{padding:"8px"}},"Height of the color selection board")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"defaultActiveTab"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"string"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"-"),e.createElement("td",{style:{padding:"8px"}},'Default active tab ("solid" or "gradient")')),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"onChangeTabs"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"function"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"-"),e.createElement("td",{style:{padding:"8px"}},"Callback when active tab changes: (tab: string) => void")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"showReset"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"false"),e.createElement("td",{style:{padding:"8px"}},"Show reset button in the picker interface")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"onReset"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"function"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"-"),e.createElement("td",{style:{padding:"8px"}},"Callback function triggered when reset button is clicked: () => void")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"defaultColors"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"string[]"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"-"),e.createElement("td",{style:{padding:"8px"}},"Array of preset colors to display"))))),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"🎨 Gradient-Specific Props"),e.createElement("div",{style:{background:"#1e293b",border:"1px solid #475569",borderRadius:"8px",padding:"1rem",margin:"1rem 0",overflowX:"auto"}},e.createElement("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:"600px"}},e.createElement("thead",null,e.createElement("tr",{style:{borderBottom:"2px solid #475569"}},e.createElement("th",{style:{textAlign:"left",padding:"12px 8px",color:"#38bdf8",fontWeight:"600"}},"Prop"),e.createElement("th",{style:{textAlign:"left",padding:"12px 8px",color:"#38bdf8",fontWeight:"600"}},"Type"),e.createElement("th",{style:{textAlign:"left",padding:"12px 8px",color:"#38bdf8",fontWeight:"600"}},"Default"),e.createElement("th",{style:{textAlign:"left",padding:"12px 8px",color:"#38bdf8",fontWeight:"600"}},"Description"))),e.createElement("tbody",null,e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"showGradientResult"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"true"),e.createElement("td",{style:{padding:"8px"}},"Show gradient preview result")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"showGradientStops"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"true"),e.createElement("td",{style:{padding:"8px"}},"Show gradient color stops controls")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"showGradientAngle"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"true"),e.createElement("td",{style:{padding:"8px"}},"Show gradient angle control")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"showGradientMode"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"true"),e.createElement("td",{style:{padding:"8px"}},"Show gradient mode selector (linear/radial)")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"showGradientPosition"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"false"),e.createElement("td",{style:{padding:"8px"}},"Show gradient position controls")),e.createElement("tr",{style:{borderBottom:"1px solid #334155"}},e.createElement("td",{style:{padding:"8px",fontFamily:"monospace",color:"#fbbf24"}},"allowAddGradientStops"),e.createElement("td",{style:{padding:"8px",color:"#10b981"}},"boolean"),e.createElement("td",{style:{padding:"8px",color:"#6b7280"}},"true"),e.createElement("td",{style:{padding:"8px"}},"Allow adding/removing gradient stops")))))),e.createElement("div",{style:{marginBottom:"3rem"}},e.createElement("h2",null,"🚀 Advanced Usage Examples"),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Custom Debounce Settings"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`// Disable debouncing for real-time updates
<ColorPicker
  solid
  value={color}
  onChange={setColor}
  debounce={false}
/>

// Custom debounce timing for performance
<ColorPicker
  solid
  value={color}
  onChange={setColor}
  debounce={true}
  debounceMS={500}
/>`),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Event Handling & Tab Control"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`function AdvancedExample() {
  const [value, setValue] = useState('#3B82F6');
  const [activeTab, setActiveTab] = useState('solid');

  const handleColorChange = (newValue: string) =&gt; {
    console.log('Color changed:', newValue);
    setValue(newValue);

    // Custom logic based on value type
    if (newValue.includes('gradient')) {
      // Handle gradient logic
    } else {
      // Handle solid color logic
    }

    return newValue;
  };

  const handleTabChange = (tab: string) =&gt; {
    console.log('Active tab:', tab);
    setActiveTab(tab);
  };

  return (
    <ColorPicker
      gradient
      solid
      value={value}
      onChange={handleColorChange}
      onChangeTabs={handleTabChange}
      defaultActiveTab={activeTab}
      showAlpha={true}
      showInputs={true}
    />
  );
}`),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Custom Presets & Formatting"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`const customPresets = [
  '#FF6B6B', '#4ECDC4', '#45B7D1',
  '#96CEB4', '#FFEAA7', '#DDA0DD'
];

<ColorPicker
  solid
  value={color}
  onChange={setColor}
  format="hsl"
  defaultColors={customPresets}
  colorBoardHeight={150}
  popupWidth={320}
/>`),e.createElement("h3",{style:{color:"#38bdf8",marginTop:"2rem",marginBottom:"1rem"}},"Gradient Configuration"),e.createElement("div",{style:{background:"#1e293b",color:"#f8fafc",padding:"1rem",borderRadius:"8px",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",margin:"1rem 0",whiteSpace:"pre"}},`<ColorPicker
  gradient
  solid={false}
  value="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  onChange={setGradient}
  showGradientResult={true}
  showGradientStops={true}
  showGradientAngle={true}
  showGradientMode={true}
  showGradientPosition={false}
  allowAddGradientStops={true}
  colorBoardHeight={180}
  popupWidth={350}
/>`)))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem'
  }}>
      <h1 style={{
      color: '#38bdf8',
      // Bright blue for dark theme
      marginBottom: '2rem'
    }}>
        🚀 Getting Started with React Iro Gradient Picker
      </h1>

      <div style={{
      marginBottom: '3rem'
    }}>
        <h2>📦 Installation</h2>
        <p style={{
        color: '#cbd5e1',
        marginBottom: '1rem'
      }}>
          Install React Iro Gradient Picker using your preferred package
          manager:
        </p>
        <div style={{
        background: '#1e293b',
        // Dark code background
        color: '#f8fafc',
        // Light text
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0'
      }}>
          <div>npm install react-iro-gradient-picker</div>
          <div style={{
          opacity: 0.6,
          marginTop: '8px'
        }}># or</div>
          <div>yarn add react-iro-gradient-picker</div>
          <div style={{
          opacity: 0.6,
          marginTop: '8px'
        }}># or</div>
          <div>pnpm add react-iro-gradient-picker</div>
        </div>

        <div style={{
        background: '#0f172a',
        border: '1px solid #334155',
        borderRadius: '8px',
        padding: '1rem',
        marginTop: '1rem'
      }}>
          <p style={{
          margin: '0 0 8px',
          color: '#38bdf8',
          fontWeight: '600'
        }}>
            📊 Package Info:
          </p>
          <ul style={{
          margin: 0,
          paddingLeft: '1.5rem',
          color: '#cbd5e1'
        }}>
            <li>Version: 1.0.0</li>
            <li>
              Repository:{' '}
              <a href='https://github.com/romfatal/react-iro-gradient-picker' style={{
              color: '#38bdf8'
            }}>
                romfatal/react-iro-gradient-picker
              </a>
            </li>
            <li>License: MIT</li>
            <li>TypeScript support included</li>
          </ul>
        </div>
      </div>

      <div style={{
      marginBottom: '3rem'
    }}>
        <div style={{
        background: '#7c2d12',
        // Red/orange background for warning
        border: '1px solid #dc2626',
        borderRadius: '8px',
        padding: '1.5rem',
        marginTop: '2rem'
      }}>
          <h2 style={{
          margin: '0 0 1rem',
          color: '#fef2f2',
          display: 'flex',
          alignItems: 'center'
        }}>
            ⚠️ IMPORTANT: CSS Import Required
          </h2>
          <p style={{
          margin: '0 0 1rem',
          color: '#fef2f2',
          fontWeight: '600'
        }}>
            You MUST import the CSS file for the component to work properly:
          </p>
          <div style={{
          background: '#0f172a',
          color: '#f8fafc',
          padding: '1rem',
          borderRadius: '6px',
          fontFamily: 'Monaco, "Cascadia Code", monospace',
          fontSize: '14px',
          border: '1px solid #334155'
        }}>
            import 'react-iro-gradient-picker/dist/index.css';
          </div>
          <p style={{
          margin: '1rem 0 0',
          color: '#fed7aa',
          fontSize: '14px'
        }}>
            Add this import at the top of your main App.js/App.tsx file or in
            your main CSS/SCSS file. Without this import, the component will not
            display correctly.
          </p>
        </div>
      </div>

      <div style={{
      marginBottom: '3rem'
    }}>
        <h2>🎨 Basic Usage</h2>
        <p style={{
        color: '#cbd5e1',
        marginBottom: '1rem'
      }}>
          Quick start with solid color picker:
        </p>
        <div style={{
        background: '#1e293b',
        // Dark code background
        color: '#f8fafc',
        // Light text
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css'; // ⚠️ REQUIRED CSS import
import { ThemeProvider } from 'react-iro-gradient-picker/components/providers/ThemeContext';

function App() {
  const [color, setColor] = useState('#3B82F6');

  return (
    <ThemeProvider defaultTheme="dark">
      <ColorPicker
        solid
        value={color}
        onChange={(newColor: string) =&gt; {
          setColor(newColor);
          return newColor;
        }}
      />
    </ThemeProvider>
  );
}\`}
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Gradient Mode
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css'; // ⚠️ REQUIRED CSS import

function GradientExample() {
  const [gradient, setGradient] = useState('linear-gradient(45deg, #3B82F6, #8B5CF6)');

  return (
    <ColorPicker
      gradient
      solid={false}
      value={gradient}
      onChange={setGradient}
      showGradientAngle={true}
      showGradientStops={true}
      allowAddGradientStops={true}
    />
  );
}\`}
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Dual Mode (Both Solid & Gradient)
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`<ColorPicker
  gradient
  solid
  value={currentValue}
  onChange={handleChange}
  showAlpha={true}
  showInputs={true}
  defaultActiveTab="solid"
/>\`}
        </div>
      </div>

      <div style={{
      marginBottom: '3rem'
    }}>
        <h2>🔄 Reset Functionality</h2>
        <p style={{
        color: '#cbd5e1',
        marginBottom: '1rem'
      }}>
          New reset button functionality allows users to easily restore colors
          to their initial state:
        </p>
        <ul style={{
        color: '#cbd5e1',
        paddingLeft: '1.5rem',
        marginBottom: '2rem'
      }}>
          <li>✅ Built-in reset button in the picker interface</li>
          <li>✅ Custom callbacks for handling reset events</li>
          <li>✅ Easy state management and tracking</li>
          <li>✅ Works with both solid and gradient modes</li>
        </ul>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Basic Reset Example
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`import React, { useState } from 'react';
import ColorPicker from 'react-iro-gradient-picker';
import 'react-iro-gradient-picker/dist/index.css'; // ⚠️ REQUIRED CSS import

function ResetExample() {
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
}\`}
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Advanced Reset with History Tracking
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`function AdvancedResetExample() {
  const [gradient, setGradient] = useState(
    'linear-gradient(45deg, #FF6B35 0%, #3A86FF 100%)'
  );
  const [resetHistory, setResetHistory] = useState([]);

  const handleReset = () => {
    const timestamp = new Date().toLocaleTimeString();
    setResetHistory(prev => [
      ...prev,
      \\\`Reset at \\\${timestamp}\\\`
    ]);
    setGradient('linear-gradient(45deg, #FF6B35 0%, #3A86FF 100%)');
  };

  return (
    <div>
      <ColorPicker
        gradient
        value={gradient}
        onChange={setGradient}
        showReset
        onReset={handleReset}
      />

      <div style={{ marginTop: '20px' }}>
        <h4>Reset History:</h4>
        <ul>
          {resetHistory.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}\`}
        </div>
      </div>

      <div style={{
      marginBottom: '3rem'
    }}>
        <h2>🌙 Complete Dark Theme Integration</h2>
        <p style={{
        color: '#cbd5e1',
        marginBottom: '1rem'
      }}>
          React Iro Gradient Picker provides comprehensive dark theme support
          with automatic persistence and smooth transitions:
        </p>
        <ul style={{
        color: '#cbd5e1',
        paddingLeft: '1.5rem',
        marginBottom: '2rem'
      }}>
          <li>✅ All components automatically respond to theme changes</li>
          <li>✅ CSS custom properties for easy customization</li>
          <li>✅ Theme persistence with localStorage</li>
          <li>✅ Smooth transitions between light and dark modes</li>
          <li>✅ Storybook integration with theme decorators</li>
          <li>✅ TypeScript support for theme providers</li>
        </ul>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Basic Theme Setup
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`import { ThemeProvider } from 'react-iro-gradient-picker/components/providers/ThemeContext';
import { ThemeToggle } from 'react-iro-gradient-picker/components/ui/ThemeToggle';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="app">
        <ThemeToggle />
        <ColorPicker gradient solid />
      </div>
    </ThemeProvider>
  );
}\`}
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Theme Context Usage
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`import { useTheme } from 'react-iro-gradient-picker/components/providers/ThemeContext';

function CustomComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button onClick={() =&gt; setTheme('light')}>
        Set Light Theme
      </button>
      <button onClick={() =&gt; setTheme('dark')}>
        Set Dark Theme
      </button>
    </div>
  );
}\`}
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Custom CSS Properties
        </h3>
        <p style={{
        color: '#cbd5e1',
        marginBottom: '1rem'
      }}>
          The component uses CSS custom properties that automatically update
          based on the theme:
        </p>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`/* Light theme variables */
:root {
  --primary-bg: #ffffff;
  --secondary-bg: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  --accent-color: #3b82f6;
}

/* Dark theme variables */
:root[data-theme="dark"] {
  --primary-bg: #0f172a;
  --secondary-bg: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --border-color: #334155;
  --accent-color: #38bdf8;
}\`}
        </div>

        <div style={{
        background: '#0f172a',
        border: '1px solid #334155',
        borderRadius: '8px',
        padding: '1rem',
        marginTop: '2rem'
      }}>
          <p style={{
          margin: '0 0 8px',
          color: '#38bdf8',
          fontWeight: '600'
        }}>
            💡 Pro Tip:
          </p>
          <p style={{
          margin: 0,
          color: '#cbd5e1'
        }}>
            The ThemeProvider automatically detects the user's system preference
            and persists theme changes to localStorage. No additional
            configuration is needed for a complete theme experience!
          </p>
        </div>
      </div>

      <div style={{
      marginBottom: '3rem'
    }}>
        <h2>� Color Format Control</h2>
        <p style={{
        color: '#cbd5e1',
        marginBottom: '1rem'
      }}>
          Control the output format of colors returned by the onChange callback
          using the{' '}
          <code style={{
          background: '#334155',
          padding: '2px 6px',
          borderRadius: '4px',
          color: '#fbbf24'
        }}>
            format
          </code>{' '}
          prop:
        </p>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Available Formats
        </h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        margin: '2rem 0'
      }}>
          <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '8px',
          padding: '1.5rem',
          borderLeft: '4px solid #3b82f6'
        }}>
            <h4 style={{
            color: '#3b82f6',
            margin: '0 0 0.5rem 0'
          }}>
              RGB Format
            </h4>
            <code style={{
            fontSize: '0.9rem',
            color: '#10b981'
          }}>
              format="rgb"
            </code>
            <p style={{
            margin: '0.5rem 0 0',
            fontSize: '0.85rem',
            color: '#cbd5e1'
          }}>
              <strong>Output:</strong> rgb(97, 207, 255)
              <br />
              <strong>With Alpha:</strong> rgba(97, 207, 255, 0.8)
            </p>
          </div>

          <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '8px',
          padding: '1.5rem',
          borderLeft: '4px solid #f59e0b'
        }}>
            <h4 style={{
            color: '#f59e0b',
            margin: '0 0 0.5rem 0'
          }}>
              HSL Format
            </h4>
            <code style={{
            fontSize: '0.9rem',
            color: '#10b981'
          }}>
              format="hsl"
            </code>
            <p style={{
            margin: '0.5rem 0 0',
            fontSize: '0.85rem',
            color: '#cbd5e1'
          }}>
              <strong>Output:</strong> hsl(200, 100%, 69%)
              <br />
              <strong>With Alpha:</strong> hsla(200, 100%, 69%, 0.8)
            </p>
          </div>

          <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '8px',
          padding: '1.5rem',
          borderLeft: '4px solid #10b981'
        }}>
            <h4 style={{
            color: '#10b981',
            margin: '0 0 0.5rem 0'
          }}>
              HEX Format
            </h4>
            <code style={{
            fontSize: '0.9rem',
            color: '#10b981'
          }}>
              format="hex"
            </code>
            <p style={{
            margin: '0.5rem 0 0',
            fontSize: '0.85rem',
            color: '#cbd5e1'
          }}>
              <strong>Output:</strong> #61cfff
              <br />
              <strong>With Alpha:</strong> #61cfff80
            </p>
          </div>
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Format Examples
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`// RGB Format (default)
<ColorPicker
  solid
  value={color}
  onChange={handleColorChange}
  format="rgb"
/>
// Returns: "rgb(97, 207, 255)" or "rgba(97, 207, 255, 0.8)"

// HSL Format
<ColorPicker
  solid
  value={color}
  onChange={handleColorChange}
  format="hsl"
/>
// Returns: "hsl(200, 100%, 69%)" or "hsla(200, 100%, 69%, 0.8)"

// HEX Format
<ColorPicker
  solid
  value={color}
  onChange={handleColorChange}
  format="hex"
/>
// Returns: "#61cfff" or "#61cfff80" (with alpha)\`}
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Dynamic Format Switching
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`function ColorFormatExample() {
  const [color, setColor] = useState('#61cfff');
  const [format, setFormat] = useState('rgb');

  const handleColorChange = (newColor) => {
    setColor(newColor);
    console.log(\\\`Color in \\\${format} format:\\\`, newColor);
  };

  return (
    <div>
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
        <option value="hex">HEX</option>
      </select>

      <ColorPicker
        solid
        value={color}
        onChange={handleColorChange}
        format={format}
        showAlpha={true}
      />
    </div>
  );
}\`}
        </div>

        <div style={{
        background: '#0f172a',
        border: '1px solid #334155',
        borderRadius: '8px',
        padding: '1rem',
        marginTop: '2rem'
      }}>
          <p style={{
          margin: '0 0 8px',
          color: '#38bdf8',
          fontWeight: '600'
        }}>
            💡 Format Pro Tips:
          </p>
          <ul style={{
          margin: 0,
          paddingLeft: '1.5rem',
          color: '#cbd5e1'
        }}>
            <li>
              Use <strong>RGB</strong> for CSS styling and web development
            </li>
            <li>
              Use <strong>HSL</strong> for intuitive color manipulation
            </li>
            <li>
              Use <strong>HEX</strong> for design tools and color codes
            </li>
            <li>
              Alpha channel is automatically included when{' '}
              <code>showAlpha={true}</code>
            </li>
          </ul>
        </div>
      </div>

      <div style={{
      marginBottom: '3rem'
    }}>
        <h2>�🎛️ Complete Props Reference</h2>
        <div style={{
        background: '#1e293b',
        // Dark surface background
        border: '1px solid #475569',
        // Dark border
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem 0',
        overflowX: 'auto'
      }}>
          <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          minWidth: '600px'
        }}>
            <thead>
              <tr style={{
              borderBottom: '2px solid #475569' // Dark border
            }}>
                <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                  Prop
                </th>
                <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                  Type
                </th>
                <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                  Default
                </th>
                <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  solid
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>false</td>
                <td style={{
                padding: '8px'
              }}>
                  Enable solid color picker tab
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  gradient
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>false</td>
                <td style={{
                padding: '8px'
              }}>Enable gradient picker tab</td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  value
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>string</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>required</td>
                <td style={{
                padding: '8px'
              }}>
                  Current color/gradient value (hex, rgb, hsl, or CSS gradient)
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  onChange
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>function</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>-</td>
                <td style={{
                padding: '8px'
              }}>
                  Callback function when value changes: (value: string) =&gt;
                  void
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  showAlpha
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>true</td>
                <td style={{
                padding: '8px'
              }}>
                  Show alpha transparency controls
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  showInputs
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>true</td>
                <td style={{
                padding: '8px'
              }}>
                  Show color input fields (RGB, HSL, HEX)
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  format
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>
                  'rgb' | 'hsl' | 'hex'
                </td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>-</td>
                <td style={{
                padding: '8px'
              }}>
                  Control the output format of colors returned by onChange
                  callback. Supports RGB (default), HSL, and HEX formats with
                  automatic alpha channel handling.
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  debounce
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>true</td>
                <td style={{
                padding: '8px'
              }}>
                  Enable debounced onChange events
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  debounceMS
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>number</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>100</td>
                <td style={{
                padding: '8px'
              }}>
                  Debounce delay in milliseconds
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  popupWidth
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>number</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>280</td>
                <td style={{
                padding: '8px'
              }}>
                  Width of the color picker popup
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  colorBoardHeight
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>number</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>200</td>
                <td style={{
                padding: '8px'
              }}>
                  Height of the color selection board
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  defaultActiveTab
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>string</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>-</td>
                <td style={{
                padding: '8px'
              }}>
                  Default active tab ("solid" or "gradient")
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  onChangeTabs
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>function</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>-</td>
                <td style={{
                padding: '8px'
              }}>
                  Callback when active tab changes: (tab: string) =&gt; void
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  showReset
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>false</td>
                <td style={{
                padding: '8px'
              }}>
                  Show reset button in the picker interface
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  onReset
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>function</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>-</td>
                <td style={{
                padding: '8px'
              }}>
                  Callback function triggered when reset button is clicked: ()
                  =&gt; void
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  defaultColors
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>string[]</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>-</td>
                <td style={{
                padding: '8px'
              }}>
                  Array of preset colors to display
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          🎨 Gradient-Specific Props
        </h3>
        <div style={{
        background: '#1e293b',
        border: '1px solid #475569',
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem 0',
        overflowX: 'auto'
      }}>
          <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          minWidth: '600px'
        }}>
            <thead>
              <tr style={{
              borderBottom: '2px solid #475569'
            }}>
                <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                  Prop
                </th>
                <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                  Type
                </th>
                <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                  Default
                </th>
                <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  showGradientResult
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>true</td>
                <td style={{
                padding: '8px'
              }}>Show gradient preview result</td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  showGradientStops
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>true</td>
                <td style={{
                padding: '8px'
              }}>
                  Show gradient color stops controls
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  showGradientAngle
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>true</td>
                <td style={{
                padding: '8px'
              }}>Show gradient angle control</td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  showGradientMode
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>true</td>
                <td style={{
                padding: '8px'
              }}>
                  Show gradient mode selector (linear/radial)
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  showGradientPosition
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>false</td>
                <td style={{
                padding: '8px'
              }}>
                  Show gradient position controls
                </td>
              </tr>
              <tr style={{
              borderBottom: '1px solid #334155'
            }}>
                <td style={{
                padding: '8px',
                fontFamily: 'monospace',
                color: '#fbbf24'
              }}>
                  allowAddGradientStops
                </td>
                <td style={{
                padding: '8px',
                color: '#10b981'
              }}>boolean</td>
                <td style={{
                padding: '8px',
                color: '#6b7280'
              }}>true</td>
                <td style={{
                padding: '8px'
              }}>
                  Allow adding/removing gradient stops
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{
      marginBottom: '3rem'
    }}>
        <h2>🚀 Advanced Usage Examples</h2>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Custom Debounce Settings
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`// Disable debouncing for real-time updates
<ColorPicker
  solid
  value={color}
  onChange={setColor}
  debounce={false}
/>

// Custom debounce timing for performance
<ColorPicker
  solid
  value={color}
  onChange={setColor}
  debounce={true}
  debounceMS={500}
/>\`}
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Event Handling & Tab Control
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`function AdvancedExample() {
  const [value, setValue] = useState('#3B82F6');
  const [activeTab, setActiveTab] = useState('solid');

  const handleColorChange = (newValue: string) =&gt; {
    console.log('Color changed:', newValue);
    setValue(newValue);

    // Custom logic based on value type
    if (newValue.includes('gradient')) {
      // Handle gradient logic
    } else {
      // Handle solid color logic
    }

    return newValue;
  };

  const handleTabChange = (tab: string) =&gt; {
    console.log('Active tab:', tab);
    setActiveTab(tab);
  };

  return (
    <ColorPicker
      gradient
      solid
      value={value}
      onChange={handleColorChange}
      onChangeTabs={handleTabChange}
      defaultActiveTab={activeTab}
      showAlpha={true}
      showInputs={true}
    />
  );
}\`}
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Custom Presets & Formatting
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`const customPresets = [
  '#FF6B6B', '#4ECDC4', '#45B7D1',
  '#96CEB4', '#FFEAA7', '#DDA0DD'
];

<ColorPicker
  solid
  value={color}
  onChange={setColor}
  format="hsl"
  defaultColors={customPresets}
  colorBoardHeight={150}
  popupWidth={320}
/>\`}
        </div>

        <h3 style={{
        color: '#38bdf8',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
          Gradient Configuration
        </h3>
        <div style={{
        background: '#1e293b',
        color: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'Monaco, "Cascadia Code", monospace',
        fontSize: '14px',
        margin: '1rem 0',
        whiteSpace: 'pre'
      }}>
          {\`<ColorPicker
  gradient
  solid={false}
  value="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  onChange={setGradient}
  showGradientResult={true}
  showGradientStops={true}
  showGradientAngle={true}
  showGradientMode={true}
  showGradientPosition={false}
  allowAddGradientStops={true}
  colorBoardHeight={180}
  popupWidth={350}
/>\`}
        </div>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};const d=["Installation"];export{t as Installation,d as __namedExportsOrder,n as default};
