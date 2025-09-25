import{R as r}from"./iframe-DP6DYpLj.js";import{c as g}from"./decorators-BrhEqBkW.js";import{C as c,d as e,g as u}from"./ColorPickerDemo-Bod7IG9J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLGQP_fO.js";const b={title:"Components/Color Picker/Gradient Picker",component:c,parameters:{layout:"centered",docs:{description:{component:`
**Gradient Color Picker** - Enhanced with complete dark theme support!

✅ Features:
- **Dark theme compatibility** - All gradient controls respond to theme changes
- **Multiple gradient types** - Linear, radial, conic gradients
- **Color stop management** - Add, remove, and reorder gradient stops
- **Angle control** - Visual angle selector for gradient direction
- **Live preview** - Real-time gradient preview during editing
- **Multiple formats** - CSS gradient string output

🎨 **Dark Theme Integration:**
All gradient controls, color stops, angle selectors, and popup modals now properly support dark theme through CSS custom properties.
        `}}},decorators:[g],tags:["autodocs"],argTypes:{value:{control:"text",description:"Current gradient value as CSS gradient string"},format:{control:"select",options:["hex","rgb","hsl"],description:"Output format for individual color values"},debounceMS:{control:{type:"range",min:0,max:1e3,step:50},description:"Debounce delay for onChange events"},colorBoardHeight:{control:{type:"range",min:80,max:200,step:10},description:"Height of the color selection board"},popupWidth:{control:{type:"range",min:200,max:400,step:10},description:"Width of the color picker popup"}}},t={args:{...e,solid:!1,gradient:!0,value:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}},a={args:{...e,solid:!1,gradient:!0,value:"linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)"}},n={args:{...e,solid:!1,gradient:!0,value:"linear-gradient(45deg, #36d1dc 0%, #5b86e5 100%)"}},s={args:{...e,solid:!1,gradient:!0,value:"radial-gradient(circle, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)"}},o={args:{...e,solid:!1,gradient:!0,value:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)"}},i={render:()=>r.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},u.map((l,p)=>r.createElement("div",{key:p,style:{textAlign:"center"}},r.createElement(c,{...e,gradient:!0,solid:!1,value:l.value}),r.createElement("p",{style:{margin:"8px 0 0",fontSize:"12px",opacity:.7}},l.name),r.createElement("div",{style:{width:"100px",height:"20px",background:l.value,borderRadius:"4px",margin:"4px auto",border:"1px solid var(--colorpicker-border, #e2e8f0)"}})))),parameters:{docs:{description:{story:"Various gradient presets demonstrating different gradient styles and color combinations."}}}},d={args:{...e,gradient:!0,showReset:!0,onReset:()=>{console.log("Gradient reset button clicked!"),alert("Gradient has been reset to initial value!")}},parameters:{docs:{description:{story:"Demonstrates the reset button functionality for gradients with a custom callback. The reset button appears next to the gradient input and allows users to reset to the initial gradient value while triggering custom actions."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
}`,...t.parameters?.docs?.source},description:{story:"Default gradient picker with linear gradient",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)'
  }
}`,...a.parameters?.docs?.source},description:{story:"Sunset gradient with warm colors",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value: 'linear-gradient(45deg, #36d1dc 0%, #5b86e5 100%)'
  }
}`,...n.parameters?.docs?.source},description:{story:"Ocean gradient with cool blues",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value: 'radial-gradient(circle, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)'
  }
}`,...s.parameters?.docs?.source},description:{story:"Radial gradient example",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)'
  }
}`,...o.parameters?.docs?.source},description:{story:"Complex multi-stop gradient",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
      {gradientPickerPresets.map((preset: ColorPreset, index: number) => <div key={index} style={{
      textAlign: 'center'
    }}>
          <ColorPickerDemo {...defaultArgs} gradient solid={false} value={preset.value} />
          <p style={{
        margin: '8px 0 0',
        fontSize: '12px',
        opacity: 0.7
      }}>
            {preset.name}
          </p>
          <div style={{
        width: '100px',
        height: '20px',
        background: preset.value,
        borderRadius: '4px',
        margin: '4px auto',
        border: '1px solid var(--colorpicker-border, #e2e8f0)'
      }} />
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Various gradient presets demonstrating different gradient styles and color combinations.'
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Gradient preset demonstrations",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    gradient: true,
    showReset: true,
    onReset: () => {
      console.log('Gradient reset button clicked!');
      // This callback allows you to perform custom actions when reset is clicked
      alert('Gradient has been reset to initial value!');
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the reset button functionality for gradients with a custom callback. The reset button appears next to the gradient input and allows users to reset to the initial gradient value while triggering custom actions.'
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"Example of the reset button functionality with callback",...d.parameters?.docs?.description}}};const x=["Default","SunsetGradient","OceanGradient","RadialGradient","ComplexGradient","GradientPresets","WithResetButton"];export{o as ComplexGradient,t as Default,i as GradientPresets,n as OceanGradient,s as RadialGradient,a as SunsetGradient,d as WithResetButton,x as __namedExportsOrder,b as default};
