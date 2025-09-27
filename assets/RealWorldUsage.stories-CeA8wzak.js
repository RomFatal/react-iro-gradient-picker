import{r as a,R as e}from"./iframe-DoHY_Mpp.js";import{C as d}from"./index-WPcL0I6T.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Examples/Real World Usage",component:d,parameters:{layout:"fullscreen",docs:{description:{component:`This comprehensive example demonstrates real-world usage of the gradient picker with both solid and gradient modes. Key features showcased include:

• **Reset Functionality**: Built-in reset button with custom callback support
• **State Management**: Track reset history and user interactions
• **Dual Mode Support**: Switch between gradient and solid color picking
• **Custom Callbacks**: Handle reset events with your own business logic
• **Interactive Demo**: See live color changes and reset tracking

Perfect for understanding how to integrate the reset functionality into your applications with proper state management and user feedback.`}}},tags:["autodocs"]},c={render:()=>{const[n,r]=a.useState("#FF6B35"),[p,i]=a.useState("linear-gradient(45deg, #FF6B35 0%, #F7931E 25%, #FFD23F 50%, #06FFA5 75%, #3A86FF 100%)"),[s,x]=a.useState(0),[t,o]=a.useState([]),h=()=>{x(l=>l+1),o(l=>[...l,`Reset #${s+1} at ${new Date().toLocaleTimeString()}`]),console.log("Reset button clicked!",{resetCount:s+1})};return e.createElement("div",{style:{padding:"30px",background:"#0f0f0f",color:"#ffffff",minHeight:"100vh",display:"flex",flexDirection:"column",gap:"30px"}},e.createElement("div",null,e.createElement("h2",{style:{marginBottom:"20px",fontSize:"24px"}},"Real World Usage with Reset"),e.createElement("p",{style:{marginBottom:"20px",fontSize:"16px",lineHeight:"1.5"}},"This example demonstrates the reset functionality with custom callbacks.")),e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"30px"}},e.createElement("div",{style:{flex:"1",minWidth:"300px"}},e.createElement("h3",{style:{marginBottom:"15px",fontSize:"18px"}},"Gradient Mode with Reset"),e.createElement(d,{value:p,onChange:i,showReset:!0,onReset:()=>{i("linear-gradient(45deg, #FF6B35 0%, #F7931E 25%, #FFD23F 50%, #06FFA5 75%, #3A86FF 100%)"),console.log("Gradient reset to default!")}})),e.createElement("div",{style:{flex:"1",minWidth:"300px"}},e.createElement("h3",{style:{marginBottom:"15px",fontSize:"18px"}},"Solid Mode with Reset"),e.createElement(d,{value:n,onChange:r,showReset:!0,onReset:h,solid:!0}))),e.createElement("div",{style:{padding:"20px",background:"#1a1a1a",borderRadius:"8px"}},e.createElement("h4",{style:{marginBottom:"15px",fontSize:"16px"}},"Reset History:"),t.length===0?e.createElement("p",{style:{color:"#888"}},"No resets yet"):e.createElement("ul",{style:{listStyle:"none",padding:0,margin:0}},t.map((l,u)=>e.createElement("li",{key:u,style:{padding:"5px 0",borderBottom:u<t.length-1?"1px solid #333":"none"}},l)))),e.createElement("div",{style:{padding:"20px",background:"#1a1a1a",borderRadius:"8px"}},e.createElement("h4",{style:{marginBottom:"15px",fontSize:"16px"}},"Current Values:"),e.createElement("ul",{style:{listStyle:"none",padding:0,margin:0}},e.createElement("li",{style:{padding:"5px 0",color:n}},"Solid Color: ",n),e.createElement("li",{style:{padding:"5px 0"}},"Gradient: ",p),e.createElement("li",{style:{padding:"5px 0"}},"Reset Count: ",s))))}},g={render:()=>{const[n,r]=a.useState("#3B82F6");return e.createElement("div",{style:{padding:"30px",background:"#f5f5f5",minHeight:"100vh",display:"flex",flexDirection:"column",gap:"20px"}},e.createElement("div",null,e.createElement("h2",{style:{marginBottom:"20px",color:"#333"}},"Basic Import Example"),e.createElement("p",{style:{marginBottom:"20px",color:"#666",lineHeight:"1.5"}},"This example shows how a typical user would import and use the component.")),e.createElement("div",{style:{maxWidth:"400px"}},e.createElement(d,{value:n,onChange:r,solid:!0})),e.createElement("div",{style:{padding:"20px",background:"#fff",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}},e.createElement("h4",{style:{marginBottom:"10px",color:"#333"}},"Selected Color:"),e.createElement("div",{style:{width:"100px",height:"40px",backgroundColor:n,borderRadius:"4px",border:"1px solid #ddd"}}),e.createElement("p",{style:{marginTop:"10px",color:"#666",fontFamily:"monospace"}},n)))}},m={render:()=>{const[n,r]=a.useState("linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)"),[p,i]=a.useState([]),s=t=>{r(t),i(o=>[...o,`${new Date().toLocaleTimeString()}: ${t}`])},x=()=>{r("linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)"),i(o=>[...o,`${new Date().toLocaleTimeString()}: RESET to default`]),console.log("Component reset with callback!")};return e.createElement("div",{style:{padding:"30px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",minHeight:"100vh",color:"white"}},e.createElement("h2",{style:{marginBottom:"20px"}},"Gradient Picker with Custom Callbacks"),e.createElement("div",{style:{marginBottom:"30px",maxWidth:"400px"}},e.createElement(d,{value:n,onChange:s,showReset:!0,onReset:x})),e.createElement("div",{style:{width:"100%",height:"100px",background:n,borderRadius:"8px",marginBottom:"20px",border:"2px solid rgba(255,255,255,0.3)"}}),e.createElement("div",{style:{background:"rgba(255,255,255,0.1)",padding:"20px",borderRadius:"8px"}},e.createElement("h4",null,"Change History (last 10):"),e.createElement("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"10px"}},p.slice(-10).reverse().map((t,o)=>e.createElement("div",{key:o,style:{padding:"8px",margin:"4px 0",background:"rgba(255,255,255,0.1)",borderRadius:"4px",fontSize:"14px",fontFamily:"monospace"}},t)))))}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#FF6B35');
    const [gradient, setGradient] = useState('linear-gradient(45deg, #FF6B35 0%, #F7931E 25%, #FFD23F 50%, #06FFA5 75%, #3A86FF 100%)');
    const [resetCount, setResetCount] = useState(0);
    const [resetHistory, setResetHistory] = useState<string[]>([]);
    const handleReset = () => {
      setResetCount(prev => prev + 1);
      setResetHistory(prev => [...prev, \`Reset #\${resetCount + 1} at \${new Date().toLocaleTimeString()}\`]);
      console.log('Reset button clicked!', {
        resetCount: resetCount + 1
      });
    };
    return <div style={{
      padding: '30px',
      background: '#0f0f0f',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px'
    }}>
        <div>
          <h2 style={{
          marginBottom: '20px',
          fontSize: '24px'
        }}>
            Real World Usage with Reset
          </h2>
          <p style={{
          marginBottom: '20px',
          fontSize: '16px',
          lineHeight: '1.5'
        }}>
            This example demonstrates the reset functionality with custom
            callbacks.
          </p>
        </div>

        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px'
      }}>
          <div style={{
          flex: '1',
          minWidth: '300px'
        }}>
            <h3 style={{
            marginBottom: '15px',
            fontSize: '18px'
          }}>
              Gradient Mode with Reset
            </h3>
            <GradientColorPicker value={gradient} onChange={setGradient} showReset onReset={() => {
            setGradient('linear-gradient(45deg, #FF6B35 0%, #F7931E 25%, #FFD23F 50%, #06FFA5 75%, #3A86FF 100%)');
            console.log('Gradient reset to default!');
          }} />
          </div>

          <div style={{
          flex: '1',
          minWidth: '300px'
        }}>
            <h3 style={{
            marginBottom: '15px',
            fontSize: '18px'
          }}>
              Solid Mode with Reset
            </h3>
            <GradientColorPicker value={color} onChange={setColor} showReset onReset={handleReset} solid />
          </div>
        </div>

        <div style={{
        padding: '20px',
        background: '#1a1a1a',
        borderRadius: '8px'
      }}>
          <h4 style={{
          marginBottom: '15px',
          fontSize: '16px'
        }}>
            Reset History:
          </h4>
          {resetHistory.length === 0 ? <p style={{
          color: '#888'
        }}>No resets yet</p> : <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
              {resetHistory.map((entry, index) => <li key={index} style={{
            padding: '5px 0',
            borderBottom: index < resetHistory.length - 1 ? '1px solid #333' : 'none'
          }}>
                  {entry}
                </li>)}
            </ul>}
        </div>

        <div style={{
        padding: '20px',
        background: '#1a1a1a',
        borderRadius: '8px'
      }}>
          <h4 style={{
          marginBottom: '15px',
          fontSize: '16px'
        }}>
            Current Values:
          </h4>
          <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
            <li style={{
            padding: '5px 0',
            color: color
          }}>
              Solid Color: {color}
            </li>
            <li style={{
            padding: '5px 0'
          }}>Gradient: {gradient}</li>
            <li style={{
            padding: '5px 0'
          }}>Reset Count: {resetCount}</li>
          </ul>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <div style={{
      padding: '30px',
      background: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div>
          <h2 style={{
          marginBottom: '20px',
          color: '#333'
        }}>
            Basic Import Example
          </h2>
          <p style={{
          marginBottom: '20px',
          color: '#666',
          lineHeight: '1.5'
        }}>
            This example shows how a typical user would import and use the
            component.
          </p>
        </div>

        <div style={{
        maxWidth: '400px'
      }}>
          <GradientColorPicker value={color} onChange={setColor} solid />
        </div>

        <div style={{
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
          <h4 style={{
          marginBottom: '10px',
          color: '#333'
        }}>
            Selected Color:
          </h4>
          <div style={{
          width: '100px',
          height: '40px',
          backgroundColor: color,
          borderRadius: '4px',
          border: '1px solid #ddd'
        }} />
          <p style={{
          marginTop: '10px',
          color: '#666',
          fontFamily: 'monospace'
        }}>
            {color}
          </p>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [gradient, setGradient] = useState('linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)');
    const [changeHistory, setChangeHistory] = useState<string[]>([]);
    const handleGradientChange = (newGradient: string) => {
      setGradient(newGradient);
      setChangeHistory(prev => [...prev, \`\${new Date().toLocaleTimeString()}: \${newGradient}\`]);
    };
    const handleReset = () => {
      const defaultGradient = 'linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)';
      setGradient(defaultGradient);
      setChangeHistory(prev => [...prev, \`\${new Date().toLocaleTimeString()}: RESET to default\`]);
      console.log('Component reset with callback!');
    };
    return <div style={{
      padding: '30px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
        <h2 style={{
        marginBottom: '20px'
      }}>
          Gradient Picker with Custom Callbacks
        </h2>

        <div style={{
        marginBottom: '30px',
        maxWidth: '400px'
      }}>
          <GradientColorPicker value={gradient} onChange={handleGradientChange} showReset={true} onReset={handleReset} />
        </div>

        <div style={{
        width: '100%',
        height: '100px',
        background: gradient,
        borderRadius: '8px',
        marginBottom: '20px',
        border: '2px solid rgba(255,255,255,0.3)'
      }} />

        <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '20px',
        borderRadius: '8px'
      }}>
          <h4>Change History (last 10):</h4>
          <div style={{
          maxHeight: '200px',
          overflowY: 'auto',
          marginTop: '10px'
        }}>
            {changeHistory.slice(-10).reverse().map((change, index) => <div key={index} style={{
            padding: '8px',
            margin: '4px 0',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
                  {change}
                </div>)}
          </div>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const C=["RealWorldUsage","BasicUserImport","WithCallback"];export{g as BasicUserImport,c as RealWorldUsage,m as WithCallback,C as __namedExportsOrder,b as default};
