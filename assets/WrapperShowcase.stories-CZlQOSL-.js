import{r as o,R as e,T as W}from"./iframe-EdNgvpF1.js";import{C as a}from"./index-DNBOjQvA.js";import{e as v}from"./decorators-50EPQMXB.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Examples/Wrapper Showcase",component:a,decorators:[v],parameters:{layout:"centered",docs:{description:{component:"Showcase of the new wrapper feature that automatically uses the color value as background."}}}},s={render:()=>{const[r,t]=o.useState("#e77ab");return e.createElement("div",{style:{padding:"20px"}},e.createElement(a,{showWrapper:!0,value:r,onChange:t,solid:!0,gradient:!0,popupWidth:300}),e.createElement("p",{style:{marginTop:"20px",textAlign:"center",color:"#fff"}},"Current: ",r))},parameters:{docs:{description:{story:"The wrapper background automatically matches the selected color. Try changing colors to see it update!"}}}},i={render:()=>{const[r,t]=o.useState("#3B82F6");return e.createElement(a,{showWrapper:!0,value:r,onChange:t,solid:!0,gradient:!1,popupWidth:280})},parameters:{docs:{description:{story:"Solid color picker with automatic background wrapper."}}}},p={render:()=>{const[r,t]=o.useState("linear-gradient(90deg, rgb(255, 177, 153) 0%, rgb(255, 8, 68) 100%)");return e.createElement(a,{showWrapper:!0,value:r,onChange:t,solid:!1,gradient:!0,popupWidth:300})},parameters:{docs:{description:{story:"Gradient picker with wrapper - the background shows the current gradient!"}}}},d={render:()=>{const[r,t]=o.useState("#667eea"),[w,C]=o.useState(""),f=[{name:"Default (Auto)",className:""},{name:"Sunset",className:"gradient-sunset"},{name:"Ocean",className:"gradient-ocean"},{name:"Forest",className:"gradient-forest"},{name:"Fire",className:"gradient-fire"},{name:"Cool",className:"gradient-cool"},{name:"Rose",className:"gradient-rose"},{name:"Purple",className:"gradient-purple"}];return e.createElement("div",null,e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("label",{style:{color:"#fff",marginRight:"10px"}},"Background Preset:"),e.createElement("select",{value:w,onChange:n=>C(n.target.value),style:{padding:"8px",borderRadius:"4px",border:"1px solid #ccc"}},f.map(n=>e.createElement("option",{key:n.className,value:n.className},n.name)))),e.createElement(a,{showWrapper:!0,wrapperClassName:w,value:r,onChange:t,solid:!0,gradient:!0,popupWidth:300}))},parameters:{docs:{description:{story:"Choose from preset gradient backgrounds, or leave default to use the picker color automatically."}}}},c={render:()=>{const[r,t]=o.useState("#10b981");return e.createElement(a,{showWrapper:!0,wrapperBackground:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",value:r,onChange:t,solid:!0,gradient:!1,popupWidth:280})},parameters:{docs:{description:{story:"Override the automatic background with a custom gradient or solid color."}}}},l={render:()=>{const[r,t]=o.useState("#f59e0b");return e.createElement(a,{showWrapper:!0,wrapperHeight:"600px",wrapperWidth:"450px",wrapperPadding:"40px",value:r,onChange:t,solid:!0,gradient:!0,popupWidth:350})},parameters:{docs:{description:{story:"Customize wrapper size, padding, and dimensions."}}}},u={render:()=>{const[r,t]=o.useState("#ec4899");return e.createElement(a,{showWrapper:!0,wrapperRounded:!1,value:r,onChange:t,solid:!0,gradient:!1,popupWidth:280})},parameters:{docs:{description:{story:"Wrapper without rounded corners for a more angular design."}}}},m={render:()=>{const[r,t]=o.useState("#3B82F6"),[w,C]=o.useState("#3B82F6");return e.createElement("div",{style:{display:"flex",gap:"40px",flexWrap:"wrap"}},e.createElement("div",null,e.createElement("h3",{style:{color:"#fff",marginBottom:"10px"}},"Without Wrapper"),e.createElement(a,{showWrapper:!1,value:r,onChange:t,solid:!0,gradient:!1,popupWidth:260})),e.createElement("div",null,e.createElement("h3",{style:{color:"#fff",marginBottom:"10px"}},"With Wrapper"),e.createElement(a,{showWrapper:!0,value:w,onChange:C,solid:!0,gradient:!1,popupWidth:260})))},parameters:{docs:{description:{story:"Side-by-side comparison of the color picker with and without the wrapper."}}}},g={render:()=>{const[r,t]=o.useState("linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f857a6 100%)");return e.createElement("div",null,e.createElement(a,{showWrapper:!0,value:r,onChange:t,solid:!1,gradient:!0,popupWidth:320,showGradientAngle:!0,showGradientStops:!0,allowAddGradientStops:!0}),e.createElement("div",{style:{marginTop:"20px",padding:"10px",background:"rgba(0,0,0,0.5)",borderRadius:"8px",maxWidth:"350px"}},e.createElement("p",{style:{color:"#fff",fontSize:"12px",wordBreak:"break-all"}},r)))},parameters:{docs:{description:{story:"Edit gradients and watch the wrapper background update in real-time!"}}}},h={render:()=>{const[r,t]=o.useState("#3B82F6");return e.createElement(W,{defaultTheme:"light"},e.createElement("div",{className:"light"},e.createElement(a,{showWrapper:!0,value:r,onChange:t,solid:!0,gradient:!0,popupWidth:300})))},decorators:[],parameters:{docs:{description:{story:"Color picker in light theme with wrapper - the picker UI is light while wrapper shows the color."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#e77ab');
    return <div style={{
      padding: '20px'
    }}>
        <ColorPicker showWrapper={true} value={color} onChange={setColor} solid={true} gradient={true} popupWidth={300} />
        <p style={{
        marginTop: '20px',
        textAlign: 'center',
        color: '#fff'
      }}>
          Current: {color}
        </p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'The wrapper background automatically matches the selected color. Try changing colors to see it update!'
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Basic wrapper - background automatically matches the picker color",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Solid color with wrapper",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Gradient with wrapper",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Preset gradient backgrounds",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#10b981');
    return <ColorPicker showWrapper={true} wrapperBackground="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" value={color} onChange={setColor} solid={true} gradient={false} popupWidth={280} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Override the automatic background with a custom gradient or solid color.'
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"Custom wrapper background override",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#f59e0b');
    return <ColorPicker showWrapper={true} wrapperHeight="600px" wrapperWidth="450px" wrapperPadding="40px" value={color} onChange={setColor} solid={true} gradient={true} popupWidth={350} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize wrapper size, padding, and dimensions.'
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Custom wrapper size",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#ec4899');
    return <ColorPicker showWrapper={true} wrapperRounded={false} value={color} onChange={setColor} solid={true} gradient={false} popupWidth={280} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Wrapper without rounded corners for a more angular design.'
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"Without rounded corners",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Comparison: With and Without Wrapper",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [gradient, setGradient] = useState('linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f857a6 100%)');
    return <div>
        <ColorPicker showWrapper={true} value={gradient} onChange={setGradient} solid={false} gradient={true} popupWidth={320} showGradientAngle={true} showGradientStops={true} allowAddGradientStops={true} />
        <div style={{
        marginTop: '20px',
        padding: '10px',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '8px',
        maxWidth: '350px'
      }}>
          <p style={{
          color: '#fff',
          fontSize: '12px',
          wordBreak: 'break-all'
        }}>
            {gradient}
          </p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Edit gradients and watch the wrapper background update in real-time!'
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:"Live gradient editing with wrapper",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <ThemeProvider defaultTheme='light'>
        <div className='light'>
          <ColorPicker showWrapper={true} value={color} onChange={setColor} solid={true} gradient={true} popupWidth={300} />
        </div>
      </ThemeProvider>;
  },
  decorators: [],
  parameters: {
    docs: {
      description: {
        story: 'Color picker in light theme with wrapper - the picker UI is light while wrapper shows the color.'
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:"Light theme picker with wrapper",...h.parameters?.docs?.description}}};const E=["AutomaticBackground","SolidColorWrapper","GradientWrapper","PresetGradients","CustomBackground","CustomSize","NoRoundedCorners","Comparison","LiveGradientEdit","LightTheme"];export{s as AutomaticBackground,m as Comparison,c as CustomBackground,l as CustomSize,p as GradientWrapper,h as LightTheme,g as LiveGradientEdit,u as NoRoundedCorners,d as PresetGradients,i as SolidColorWrapper,E as __namedExportsOrder,b as default};
