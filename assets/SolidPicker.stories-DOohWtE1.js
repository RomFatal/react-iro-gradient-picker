import{R as n}from"./iframe-DP6DYpLj.js";import{c as p}from"./decorators-BrhEqBkW.js";import{C as l,d as a,s as d}from"./ColorPickerDemo-Bod7IG9J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLGQP_fO.js";const y={title:"Components/Color Picker/Solid Picker",component:l,parameters:{layout:"centered",docs:{description:{component:`
**Solid Color Picker** - Enhanced with complete dark theme support!

✅ Features:
- **Dark theme compatibility** - All components respond to theme changes
- **Alpha transparency** - Full RGBA support with visual transparency
- **Multiple formats** - HEX, RGB, HSL output formats
- **Debounced updates** - Smooth performance during color selection
- **Accessible controls** - Keyboard navigation and ARIA support

🎨 **Dark Theme Integration:**
All input fields, popup modals, and color controls now properly support dark theme through CSS custom properties.
        `}}},decorators:[p],tags:["autodocs"],argTypes:{value:{control:"color",description:"Current color value in any supported format"},format:{control:"select",options:["hex","rgb","hsl"],description:"Output format for color values"},showAlpha:{control:"boolean",description:"Show alpha transparency controls"},debounceMS:{control:{type:"range",min:0,max:1e3,step:50},description:"Debounce delay for onChange events"},colorBoardHeight:{control:{type:"range",min:80,max:200,step:10},description:"Height of the color selection board"},popupWidth:{control:{type:"range",min:200,max:400,step:10},description:"Width of the color picker popup"}}},e={args:{...a,solid:!0,gradient:!1,value:"#3B82F6",popupWidth:300}},o={args:{...a,solid:!0,gradient:!1,value:"#10B981",colorBoardHeight:100,popupWidth:220}},t={args:{...a,solid:!0,gradient:!1,value:"#F59E0B",colorBoardHeight:160,popupWidth:400}},r={render:()=>n.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},d.map((i,c)=>n.createElement("div",{key:c,style:{textAlign:"center"}},n.createElement(l,{...a,solid:!0,value:i.value}),n.createElement("p",{style:{margin:"8px 0 0",fontSize:"12px",opacity:.7}},i.name)))),parameters:{docs:{description:{story:"Various solid Popular Colors demonstrating different color values and alpha settings."}}}},s={args:{...a,solid:!0,showReset:!0,onReset:()=>{console.log("Reset button clicked!"),alert("Color has been reset to initial value!")}},parameters:{docs:{description:{story:"Demonstrates the reset button functionality with a custom callback. The reset button appears next to the color input and allows users to reset to the initial color value while triggering custom actions."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: false,
    value: '#3B82F6',
    popupWidth: 300
  }
}`,...e.parameters?.docs?.source},description:{story:"Default solid color picker with standard settings",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: false,
    value: '#10B981',
    colorBoardHeight: 100,
    popupWidth: 220
  }
}`,...o.parameters?.docs?.source},description:{story:"Compact solid picker for smaller spaces",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: false,
    value: '#F59E0B',
    colorBoardHeight: 160,
    popupWidth: 400
  }
}`,...t.parameters?.docs?.source},description:{story:"Large solid picker for detailed color selection",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
      {solidPickerPresets.map((preset: ColorPreset, index: number) => <div key={index} style={{
      textAlign: 'center'
    }}>
          <ColorPickerDemo {...defaultArgs} solid value={preset.value} />
          <p style={{
        margin: '8px 0 0',
        fontSize: '12px',
        opacity: 0.7
      }}>
            {preset.name}
          </p>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Various solid Popular Colors demonstrating different color values and alpha settings.'
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Preset color demonstrations",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    showReset: true,
    onReset: () => {
      console.log('Reset button clicked!');
      // This callback allows you to perform custom actions when reset is clicked
      alert('Color has been reset to initial value!');
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the reset button functionality with a custom callback. The reset button appears next to the color input and allows users to reset to the initial color value while triggering custom actions.'
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Example of the reset button functionality with callback",...s.parameters?.docs?.description}}};const v=["Default","Compact","Large","ColorPresets","WithResetButton"];export{r as ColorPresets,o as Compact,e as Default,t as Large,s as WithResetButton,v as __namedExportsOrder,y as default};
