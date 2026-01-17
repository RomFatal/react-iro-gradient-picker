import{r as a,R as e}from"./iframe-BI2QRghM.js";import{C as o}from"./index-BG1ooRdC.js";import{e as m}from"./decorators-B9L65Ef_.js";import"./preload-helper-PPVm8Dsz.js";const w={title:"Examples/Wrapper Showcase",component:o,decorators:[m],parameters:{layout:"centered",docs:{description:{component:"Showcase of the new wrapper feature that automatically uses the color value as background."}}}},s={render:()=>{const[r,t]=a.useState("#3B82F6");return e.createElement(o,{showWrapper:!0,value:r,onChange:t,solid:!0,gradient:!1,popupWidth:280})},parameters:{docs:{description:{story:"Solid color picker with automatic background wrapper."}}}},p={render:()=>{const[r,t]=a.useState("linear-gradient(90deg, rgb(255, 177, 153) 0%, rgb(255, 8, 68) 100%)");return e.createElement(o,{showWrapper:!0,value:r,onChange:t,solid:!1,gradient:!0,popupWidth:300})},parameters:{docs:{description:{story:"Gradient picker with wrapper - the background shows the current gradient!"}}}},l={render:()=>{const[r,t]=a.useState("#667eea"),[c,d]=a.useState(""),u=[{name:"Default (Auto)",className:""},{name:"Sunset",className:"gradient-sunset"},{name:"Ocean",className:"gradient-ocean"},{name:"Forest",className:"gradient-forest"},{name:"Fire",className:"gradient-fire"},{name:"Cool",className:"gradient-cool"},{name:"Rose",className:"gradient-rose"},{name:"Purple",className:"gradient-purple"}];return e.createElement("div",null,e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("label",{style:{color:"#fff",marginRight:"10px"}},"Background Preset:"),e.createElement("select",{value:c,onChange:n=>d(n.target.value),style:{padding:"8px",borderRadius:"4px",border:"1px solid #ccc"}},u.map(n=>e.createElement("option",{key:n.className,value:n.className},n.name)))),e.createElement(o,{showWrapper:!0,wrapperClassName:c,value:r,onChange:t,solid:!0,gradient:!0,popupWidth:300}))},parameters:{docs:{description:{story:"Choose from preset gradient backgrounds, or leave default to use the picker color automatically."}}}},i={render:()=>{const[r,t]=a.useState("#3B82F6"),[c,d]=a.useState("#3B82F6");return e.createElement("div",{style:{display:"flex",gap:"40px",flexWrap:"wrap"}},e.createElement("div",null,e.createElement("h3",{style:{color:"#fff",marginBottom:"10px"}},"Without Wrapper"),e.createElement(o,{showWrapper:!1,value:r,onChange:t,solid:!0,gradient:!1,popupWidth:260})),e.createElement("div",null,e.createElement("h3",{style:{color:"#fff",marginBottom:"10px"}},"With Wrapper"),e.createElement(o,{showWrapper:!0,value:c,onChange:d,solid:!0,gradient:!1,popupWidth:260})))},parameters:{docs:{description:{story:"Side-by-side comparison of the color picker with and without the wrapper."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <ColorPicker showWrapper={true} value={color} onChange={setColor} solid={true} gradient={false} popupWidth={280} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Solid color picker with automatic background wrapper.'
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Solid color with wrapper",...s.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('linear-gradient(90deg, rgb(255, 177, 153) 0%, rgb(255, 8, 68) 100%)');
    return <ColorPicker showWrapper={true} value={color} onChange={setColor} solid={false} gradient={true} popupWidth={300} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Gradient picker with wrapper - the background shows the current gradient!'
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Gradient with wrapper",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#667eea');
    const [preset, setPreset] = useState('');
    const presets = [{
      name: 'Default (Auto)',
      className: ''
    }, {
      name: 'Sunset',
      className: 'gradient-sunset'
    }, {
      name: 'Ocean',
      className: 'gradient-ocean'
    }, {
      name: 'Forest',
      className: 'gradient-forest'
    }, {
      name: 'Fire',
      className: 'gradient-fire'
    }, {
      name: 'Cool',
      className: 'gradient-cool'
    }, {
      name: 'Rose',
      className: 'gradient-rose'
    }, {
      name: 'Purple',
      className: 'gradient-purple'
    }];
    return <div>
        <div style={{
        marginBottom: '20px'
      }}>
          <label style={{
          color: '#fff',
          marginRight: '10px'
        }}>
            Background Preset:
          </label>
          <select value={preset} onChange={e => setPreset(e.target.value)} style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}>
            {presets.map(p => <option key={p.className} value={p.className}>
                {p.name}
              </option>)}
          </select>
        </div>

        <ColorPicker showWrapper={true} wrapperClassName={preset} value={color} onChange={setColor} solid={true} gradient={true} popupWidth={300} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Choose from preset gradient backgrounds, or leave default to use the picker color automatically.'
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Preset gradient backgrounds",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color1, setColor1] = useState('#3B82F6');
    const [color2, setColor2] = useState('#3B82F6');
    return <div style={{
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap'
    }}>
        <div>
          <h3 style={{
          color: '#fff',
          marginBottom: '10px'
        }}>
            Without Wrapper
          </h3>
          <ColorPicker showWrapper={false} value={color1} onChange={setColor1} solid={true} gradient={false} popupWidth={260} />
        </div>

        <div>
          <h3 style={{
          color: '#fff',
          marginBottom: '10px'
        }}>With Wrapper</h3>
          <ColorPicker showWrapper={true} value={color2} onChange={setColor2} solid={true} gradient={false} popupWidth={260} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of the color picker with and without the wrapper.'
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Comparison: With and Without Wrapper",...i.parameters?.docs?.description}}};const W=["SolidColorWrapper","GradientWrapper","PresetGradients","Comparison"];export{i as Comparison,p as GradientWrapper,l as PresetGradients,s as SolidColorWrapper,W as __namedExportsOrder,w as default};
