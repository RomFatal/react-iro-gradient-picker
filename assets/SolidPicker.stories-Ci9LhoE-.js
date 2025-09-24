import{R as s}from"./iframe-CZUIYe95.js";import{c as l}from"./decorators-B2Pq1hOu.js";import{C as i,d as a,s as c}from"./ColorPickerDemo-CmQMRdM5.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Components/Color Picker/Solid Picker",component:i,parameters:{layout:"centered",docs:{description:{component:`
**Solid Color Picker** - Enhanced with complete dark theme support!

✅ Features:
- **Dark theme compatibility** - All components respond to theme changes
- **Alpha transparency** - Full RGBA support with visual transparency
- **Multiple formats** - HEX, RGB, HSL output formats
- **Debounced updates** - Smooth performance during color selection
- **Accessible controls** - Keyboard navigation and ARIA support

🎨 **Dark Theme Integration:**
All input fields, popup modals, and color controls now properly support dark theme through CSS custom properties.
        `}}},decorators:[l],tags:["autodocs"],argTypes:{value:{control:"color",description:"Current color value in any supported format"},format:{control:"select",options:["hex","rgb","hsl"],description:"Output format for color values"},showAlpha:{control:"boolean",description:"Show alpha transparency controls"},debounceMS:{control:{type:"range",min:0,max:1e3,step:50},description:"Debounce delay for onChange events"},colorBoardHeight:{control:{type:"range",min:80,max:200,step:10},description:"Height of the color selection board"},popupWidth:{control:{type:"range",min:200,max:400,step:10},description:"Width of the color picker popup"}}},e={args:{...a,solid:!0,gradient:!1,value:"#3B82F6",popupWidth:300}},r={args:{...a,solid:!0,gradient:!1,value:"#10B981",colorBoardHeight:100,popupWidth:220}},o={args:{...a,solid:!0,gradient:!1,value:"#F59E0B",colorBoardHeight:160,popupWidth:400}},t={render:()=>s.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},c.map((n,p)=>s.createElement("div",{key:p,style:{textAlign:"center"}},s.createElement(i,{...a,solid:!0,value:n.value}),s.createElement("p",{style:{margin:"8px 0 0",fontSize:"12px",opacity:.7}},n.name)))),parameters:{docs:{description:{story:"Various solid Popular Colors demonstrating different color values and alpha settings."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: false,
    value: '#3B82F6',
    popupWidth: 300
  }
}`,...e.parameters?.docs?.source},description:{story:"Default solid color picker with standard settings",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: false,
    value: '#10B981',
    colorBoardHeight: 100,
    popupWidth: 220
  }
}`,...r.parameters?.docs?.source},description:{story:"Compact solid picker for smaller spaces",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: false,
    value: '#F59E0B',
    colorBoardHeight: 160,
    popupWidth: 400
  }
}`,...o.parameters?.docs?.source},description:{story:"Large solid picker for detailed color selection",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Preset color demonstrations",...t.parameters?.docs?.description}}};const h=["Default","Compact","Large","ColorPresets"];export{t as ColorPresets,r as Compact,e as Default,o as Large,h as __namedExportsOrder,f as default};
