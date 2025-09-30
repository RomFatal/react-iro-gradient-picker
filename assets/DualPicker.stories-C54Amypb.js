import{R as e}from"./iframe-BhIn08tI.js";import{c as u}from"./decorators-Dilz3eQC.js";import{C as c,d as r}from"./ColorPickerDemo-Cuo25FOU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdOyR2iw.js";const f={title:"Components/Color Picker/DualPicker",component:c,parameters:{layout:"centered",docs:{description:{component:`
**Dual Color Picker** - Enhanced with complete dark theme support!

✅ Features:
- **Both modes available** - Switch between solid colors and gradients
- **Dark theme compatibility** - All components respond to theme changes
- **Seamless switching** - Easy toggle between solid and gradient modes
- **Persistent settings** - Settings maintained when switching modes
- **Unified interface** - Consistent experience across both modes

🎨 **Dark Theme Integration:**
All tabs, controls, inputs, and modals properly support dark theme through CSS custom properties.
        `}}},decorators:[u],tags:["autodocs"],argTypes:{value:{control:"text",description:"Current color/gradient value"},format:{control:"select",options:["hex","rgb","hsl"],description:"Output format for color values"},solid:{control:"boolean",description:"Enable solid color picker mode"},gradient:{control:"boolean",description:"Enable gradient picker mode"},showAlpha:{control:"boolean",description:"Show alpha transparency controls"},debounceMS:{control:{type:"range",min:0,max:1e3,step:50},description:"Debounce delay for onChange events"}}},t={args:{...r,solid:!0,gradient:!0,value:"linear-gradient(135deg, #D9AFD9 0%, #97D9E1 100%)"}},a={args:{...r,solid:!0,gradient:!0,value:"#3B82F6"}},n={args:{...r,solid:!0,gradient:!0,value:"rgba(59, 130, 246, 0.8)",showAlpha:!0}},o={args:{...r,solid:!0,gradient:!0,value:"linear-gradient(45deg, #fa709a 0%, #fee140 100%)",colorBoardHeight:100,popupWidth:240}},s={args:{...r,solid:!0,gradient:!0,value:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",colorBoardHeight:160,popupWidth:320}},i={render:()=>{const[d,p]=e.useState("linear-gradient(135deg, #667eea 0%, #764ba2 100%)");return e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",padding:"20px"}},e.createElement(c,{...r,solid:!0,gradient:!0,value:d,onChange:l=>(p(l),l)}),e.createElement("div",{style:{textAlign:"center",maxWidth:"400px",width:"100%"}},e.createElement("p",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"bold",color:"#64748b"}},"Current color:"),e.createElement("code",{style:{background:"#1e293b",color:"#f8fafc",padding:"8px 12px",borderRadius:"6px",border:"1px solid #475569",fontSize:"12px",wordBreak:"break-all",display:"inline-block",maxWidth:"100%",fontFamily:"Monaco, Consolas, monospace"}},d),e.createElement("div",{style:{width:"200px",height:"40px",background:d,borderRadius:"8px",margin:"16px auto 0",border:"2px solid #e2e8f0",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}})))},parameters:{docs:{description:{story:"Interactive demo that shows the current color/gradient value and updates in real-time."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: 'linear-gradient(135deg, #D9AFD9 0%, #97D9E1 100%)'
  }
}`,...t.parameters?.docs?.source},description:{story:"Default dual picker starting with gradient",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: '#3B82F6'
  }
}`,...a.parameters?.docs?.source},description:{story:"Dual picker starting with solid color",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: 'rgba(59, 130, 246, 0.8)',
    showAlpha: true
  }
}`,...n.parameters?.docs?.source},description:{story:"Dual picker with alpha transparency enabled",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
    colorBoardHeight: 100,
    popupWidth: 240
  }
}`,...o.parameters?.docs?.source},description:{story:"Compact dual picker for smaller spaces",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    colorBoardHeight: 160,
    popupWidth: 320
  }
}`,...s.parameters?.docs?.source},description:{story:"Large dual picker for detailed work",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentValue, setCurrentValue] = React.useState('linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      padding: '20px'
    }}>
        <ColorPickerDemo {...defaultArgs} solid gradient value={currentValue} onChange={(value: string) => {
        setCurrentValue(value);
        return value;
      }} />

        <div style={{
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
          <p style={{
          margin: '0 0 8px 0',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#64748b'
        }}>
            Current color:
          </p>
          <code style={{
          background: '#1e293b',
          color: '#f8fafc',
          padding: '8px 12px',
          borderRadius: '6px',
          border: '1px solid #475569',
          fontSize: '12px',
          wordBreak: 'break-all',
          display: 'inline-block',
          maxWidth: '100%',
          fontFamily: 'Monaco, Consolas, monospace'
        }}>
            {currentValue}
          </code>

          <div style={{
          width: '200px',
          height: '40px',
          background: currentValue,
          borderRadius: '8px',
          margin: '16px auto 0',
          border: '2px solid #e2e8f0',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo that shows the current color/gradient value and updates in real-time.'
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Interactive demo showing mode switching",...i.parameters?.docs?.description}}};const v=["Default","StartWithSolid","WithAlpha","Compact","Large","InteractiveDemo"];export{o as Compact,t as Default,i as InteractiveDemo,s as Large,a as StartWithSolid,n as WithAlpha,v as __namedExportsOrder,f as default};
