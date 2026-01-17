import{r as d,R as e}from"./iframe-BRbqbX9o.js";import{C as n}from"./index-DMmxPZ3T.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Examples/Light Theme Showcase",component:n,parameters:{layout:"centered",docs:{description:{component:"Showcase of the color picker in light theme mode. Clean and professional appearance."}}}},o={render:()=>{const[t,r]=d.useState("#3B82F6");return e.createElement("div",{style:{padding:"40px",background:"#ffffff",minHeight:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(n,{theme:"light",value:t,onChange:r,solid:!0,gradient:!1,popupWidth:280}))},decorators:[],parameters:{docs:{description:{story:"Basic solid color picker in light theme."}}}},a={render:()=>{const[t,r]=d.useState("linear-gradient(90deg, rgb(91, 76, 253) 0%, rgb(167, 139, 250) 100%)");return e.createElement("div",{style:{padding:"40px",background:"#ffffff",minHeight:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(n,{theme:"light",value:t,onChange:r,solid:!1,gradient:!0,popupWidth:300,showGradientAngle:!0,showGradientStops:!0}))},decorators:[],parameters:{docs:{description:{story:"Gradient picker in light theme with angle and stops controls."}}}},i={render:()=>{const[t,r]=d.useState("#8b5cf6");return e.createElement("div",{style:{padding:"40px",background:"#ffffff",minHeight:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(n,{theme:"light",showWrapper:!0,value:t,onChange:r,solid:!0,gradient:!0,popupWidth:300}))},decorators:[],parameters:{docs:{description:{story:"Light theme color picker with wrapper - wrapper shows current color."}}}},s={render:()=>{const[t,r]=d.useState("#5b4cfd"),[c,p]=d.useState("#5b4cfd");return e.createElement("div",{style:{display:"flex",gap:"40px",flexWrap:"wrap"}},e.createElement("div",null,e.createElement("h3",{style:{marginBottom:"10px",color:"#1a1d23"}},"Light Theme"),e.createElement("div",{style:{padding:"20px",background:"#ffffff",borderRadius:"8px"}},e.createElement(n,{theme:"light",value:t,onChange:r,solid:!0,gradient:!1,popupWidth:260}))),e.createElement("div",null,e.createElement("h3",{style:{marginBottom:"10px",color:"#f7f8f9"}},"Dark Theme"),e.createElement("div",{style:{padding:"20px",background:"#1e293b",borderRadius:"8px"}},e.createElement(n,{theme:"dark",value:c,onChange:p,solid:!0,gradient:!1,popupWidth:260}))))},decorators:[],parameters:{layout:"centered",docs:{description:{story:"Side-by-side comparison of light and dark themes."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <div style={{
      padding: '40px',
      background: '#ffffff',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <ColorPicker theme='light' value={color} onChange={setColor} solid={true} gradient={false} popupWidth={280} />
      </div>;
  },
  decorators: [],
  parameters: {
    docs: {
      description: {
        story: 'Basic solid color picker in light theme.'
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Basic light theme picker",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [gradient, setGradient] = useState('linear-gradient(90deg, rgb(91, 76, 253) 0%, rgb(167, 139, 250) 100%)');
    return <div style={{
      padding: '40px',
      background: '#ffffff',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <ColorPicker theme='light' value={gradient} onChange={setGradient} solid={false} gradient={true} popupWidth={300} showGradientAngle={true} showGradientStops={true} />
      </div>;
  },
  decorators: [],
  parameters: {
    docs: {
      description: {
        story: 'Gradient picker in light theme with angle and stops controls.'
      }
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Light theme with gradient",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#8b5cf6');
    return <div style={{
      padding: '40px',
      background: '#ffffff',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <ColorPicker theme='light' showWrapper={true} value={color} onChange={setColor} solid={true} gradient={true} popupWidth={300} />
      </div>;
  },
  decorators: [],
  parameters: {
    docs: {
      description: {
        story: 'Light theme color picker with wrapper - wrapper shows current color.'
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Light theme with wrapper",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [lightColor, setLightColor] = useState('#5b4cfd');
    const [darkColor, setDarkColor] = useState('#5b4cfd');
    return <div style={{
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap'
    }}>
        <div>
          <h3 style={{
          marginBottom: '10px',
          color: '#1a1d23'
        }}>
            Light Theme
          </h3>
          <div style={{
          padding: '20px',
          background: '#ffffff',
          borderRadius: '8px'
        }}>
            <ColorPicker theme='light' value={lightColor} onChange={setLightColor} solid={true} gradient={false} popupWidth={260} />
          </div>
        </div>

        <div>
          <h3 style={{
          marginBottom: '10px',
          color: '#f7f8f9'
        }}>Dark Theme</h3>
          <div style={{
          padding: '20px',
          background: '#1e293b',
          borderRadius: '8px'
        }}>
            <ColorPicker theme='dark' value={darkColor} onChange={setDarkColor} solid={true} gradient={false} popupWidth={260} />
          </div>
        </div>
      </div>;
  },
  decorators: [],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Side-by-side comparison of light and dark themes.'
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Light vs Dark comparison",...s.parameters?.docs?.description}}};const u=["BasicLight","GradientLight","WithWrapper","LightVsDark"];export{o as BasicLight,a as GradientLight,s as LightVsDark,i as WithWrapper,u as __namedExportsOrder,m as default};
