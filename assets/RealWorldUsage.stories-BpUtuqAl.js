import{r as a,R as e}from"./iframe-CGMNTXT6.js";import{C as t}from"./index-BhJblRVN.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Examples/Real World Usage",component:t,parameters:{layout:"centered",docs:{description:{component:"This story shows how the component looks when imported normally by end users, demonstrating the actual user experience."}}},tags:["autodocs"]},d={render:()=>{const[n,r]=a.useState("#3B82F6");return e.createElement("div",{style:{padding:"20px",background:"#0f0f0f",color:"#ffffff",minHeight:"100vh"}},e.createElement("h3",null,"How users actually import and use the component:"),e.createElement("pre",{style:{background:"#2a2a2a",color:"#ffffff",padding:"10px",borderRadius:"4px",marginBottom:"20px",fontSize:"12px"}},`import GradientColorPicker from 'react-iro-gradient-picker';

function App() {
  const [color, setColor] = useState('#3B82F6');

  return (
    <GradientColorPicker
      value={color}
      onChange={(newColor) => setColor(newColor)}
      gradient
      solid
    />
  );
}`),e.createElement("div",{style:{border:"1px solid #333",padding:"10px",borderRadius:"8px",background:"#1a1a1a",color:"#ffffff"}},e.createElement("p",null,"Current color: ",e.createElement("strong",null,n)),e.createElement(t,{value:n,onChange:o=>r(o),gradient:!0,solid:!0})))}},i={render:()=>{const[n,r]=a.useState("#FF6B6B");return e.createElement("div",{style:{padding:"20px",background:"#0f0f0f",color:"#ffffff",minHeight:"100vh"}},e.createElement("h3",null,"Solid color picker only:"),e.createElement("pre",{style:{background:"#2a2a2a",color:"#ffffff",padding:"10px",borderRadius:"4px",marginBottom:"20px",fontSize:"12px"}},`<GradientColorPicker
  value={color}
  onChange={setColor}
  solid
/>`),e.createElement("div",{style:{border:"1px solid #333",padding:"10px",borderRadius:"8px",background:"#1a1a1a",color:"#ffffff"}},e.createElement("p",null,"Current color: ",e.createElement("strong",null,n)),e.createElement(t,{value:n,onChange:o=>r(o),solid:!0})))}},l={render:()=>{const[n,r]=a.useState("linear-gradient(45deg, #FF6B6B, #4ECDC4)");return e.createElement("div",{style:{padding:"20px",background:"#0f0f0f",color:"#ffffff",minHeight:"100vh"}},e.createElement("h3",null,"Gradient picker only:"),e.createElement("pre",{style:{background:"#2a2a2a",color:"#ffffff",padding:"10px",borderRadius:"4px",marginBottom:"20px",fontSize:"12px"}},`<GradientColorPicker
  value={gradient}
  onChange={setGradient}
  gradient
/>`),e.createElement("div",{style:{border:"1px solid #333",padding:"10px",borderRadius:"8px",background:"#1a1a1a",color:"#ffffff"}},e.createElement("p",null,"Current gradient:"),e.createElement("div",{style:{background:n,height:"40px",borderRadius:"4px",marginBottom:"10px"}}),e.createElement("code",{style:{fontSize:"12px",wordBreak:"break-all",color:"#ffffff"}},n),e.createElement(t,{value:n,onChange:o=>r(o),gradient:!0})))}},f={render:()=>{const[n,r]=a.useState("#ffffff");return e.createElement("div",{style:{padding:"20px",background:"#0f0f0f",color:"#ffffff",minHeight:"100vh"}},e.createElement("h3",null,"Minimal usage (just the basics):"),e.createElement("pre",{style:{background:"#2a2a2a",color:"#ffffff",padding:"10px",borderRadius:"4px",marginBottom:"20px",fontSize:"12px"}},`import GradientColorPicker from 'react-iro-gradient-picker';

<GradientColorPicker
  value={color}
  onChange={setColor}
/>`),e.createElement("div",{style:{border:"1px solid #333",padding:"10px",borderRadius:"8px",background:"#1a1a1a",color:"#ffffff"}},e.createElement("p",null,"Current color: ",e.createElement("strong",null,n)),e.createElement(t,{value:n,onChange:o=>r(o)})))}},s={render:()=>{const[n,r]=a.useState("#9C27B0");return e.createElement("div",{style:{padding:"20px",background:"#0f0f0f",color:"#ffffff",minHeight:"100vh"}},e.createElement("h3",null,"With custom width:"),e.createElement("pre",{style:{background:"#2a2a2a",color:"#ffffff",padding:"10px",borderRadius:"4px",marginBottom:"20px",fontSize:"12px"}},`<GradientColorPicker
  value={color}
  onChange={setColor}
  popupWidth={400}
  gradient
  solid
/>`),e.createElement("div",{style:{border:"1px solid #333",padding:"10px",borderRadius:"8px",background:"#1a1a1a",color:"#ffffff"}},e.createElement("p",null,"Current color: ",e.createElement("strong",null,n)),e.createElement(t,{value:n,onChange:o=>r(o),popupWidth:400,gradient:!0,solid:!0})))}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <div style={{
      padding: '20px',
      background: '#0f0f0f',
      color: '#ffffff',
      minHeight: '100vh'
    }}>
        <h3>How users actually import and use the component:</h3>
        <pre style={{
        background: '#2a2a2a',
        color: '#ffffff',
        padding: '10px',
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '12px'
      }}>
          {\`import GradientColorPicker from 'react-iro-gradient-picker';

function App() {
  const [color, setColor] = useState('#3B82F6');

  return (
    <GradientColorPicker
      value={color}
      onChange={(newColor) => setColor(newColor)}
      gradient
      solid
    />
  );
}\`}
        </pre>

        <div style={{
        border: '1px solid #333',
        padding: '10px',
        borderRadius: '8px',
        background: '#1a1a1a',
        color: '#ffffff'
      }}>
          <p>
            Current color: <strong>{color}</strong>
          </p>
          <GradientColorPicker value={color} onChange={(newColor: string) => setColor(newColor)} gradient solid />
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#FF6B6B');
    return <div style={{
      padding: '20px',
      background: '#0f0f0f',
      color: '#ffffff',
      minHeight: '100vh'
    }}>
        <h3>Solid color picker only:</h3>
        <pre style={{
        background: '#2a2a2a',
        color: '#ffffff',
        padding: '10px',
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '12px'
      }}>
          {\`<GradientColorPicker
  value={color}
  onChange={setColor}
  solid
/>\`}
        </pre>

        <div style={{
        border: '1px solid #333',
        padding: '10px',
        borderRadius: '8px',
        background: '#1a1a1a',
        color: '#ffffff'
      }}>
          <p>
            Current color: <strong>{color}</strong>
          </p>
          <GradientColorPicker value={color} onChange={(newColor: string) => setColor(newColor)} solid />
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [gradient, setGradient] = useState('linear-gradient(45deg, #FF6B6B, #4ECDC4)');
    return <div style={{
      padding: '20px',
      background: '#0f0f0f',
      color: '#ffffff',
      minHeight: '100vh'
    }}>
        <h3>Gradient picker only:</h3>
        <pre style={{
        background: '#2a2a2a',
        color: '#ffffff',
        padding: '10px',
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '12px'
      }}>
          {\`<GradientColorPicker
  value={gradient}
  onChange={setGradient}
  gradient
/>\`}
        </pre>

        <div style={{
        border: '1px solid #333',
        padding: '10px',
        borderRadius: '8px',
        background: '#1a1a1a',
        color: '#ffffff'
      }}>
          <p>Current gradient:</p>
          <div style={{
          background: gradient,
          height: '40px',
          borderRadius: '4px',
          marginBottom: '10px'
        }}></div>
          <code style={{
          fontSize: '12px',
          wordBreak: 'break-all',
          color: '#ffffff'
        }}>
            {gradient}
          </code>

          <GradientColorPicker value={gradient} onChange={(newGradient: string) => setGradient(newGradient)} gradient />
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#ffffff');
    return <div style={{
      padding: '20px',
      background: '#0f0f0f',
      color: '#ffffff',
      minHeight: '100vh'
    }}>
        <h3>Minimal usage (just the basics):</h3>
        <pre style={{
        background: '#2a2a2a',
        color: '#ffffff',
        padding: '10px',
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '12px'
      }}>
          {\`import GradientColorPicker from 'react-iro-gradient-picker';

<GradientColorPicker
  value={color}
  onChange={setColor}
/>\`}
        </pre>

        <div style={{
        border: '1px solid #333',
        padding: '10px',
        borderRadius: '8px',
        background: '#1a1a1a',
        color: '#ffffff'
      }}>
          <p>
            Current color: <strong>{color}</strong>
          </p>
          <GradientColorPicker value={color} onChange={(newColor: string) => setColor(newColor)} />
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#9C27B0');
    return <div style={{
      padding: '20px',
      background: '#0f0f0f',
      color: '#ffffff',
      minHeight: '100vh'
    }}>
        <h3>With custom width:</h3>
        <pre style={{
        background: '#2a2a2a',
        color: '#ffffff',
        padding: '10px',
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '12px'
      }}>
          {\`<GradientColorPicker
  value={color}
  onChange={setColor}
  popupWidth={400}
  gradient
  solid
/>\`}
        </pre>

        <div style={{
        border: '1px solid #333',
        padding: '10px',
        borderRadius: '8px',
        background: '#1a1a1a',
        color: '#ffffff'
      }}>
          <p>
            Current color: <strong>{color}</strong>
          </p>
          <GradientColorPicker value={color} onChange={(newColor: string) => setColor(newColor)} popupWidth={400} gradient solid />
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const m=["BasicUserImport","SolidOnly","GradientOnly","MinimalUsage","CustomWidth"];export{d as BasicUserImport,s as CustomWidth,l as GradientOnly,f as MinimalUsage,i as SolidOnly,m as __namedExportsOrder,g as default};
