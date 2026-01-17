import{R as e,r as x}from"./iframe-BI2QRghM.js";import{C as l}from"./index-BG1ooRdC.js";import"./preload-helper-PPVm8Dsz.js";const T={title:"Testing/Dynamic Gradient Tester",component:l,parameters:{layout:"centered",docs:{description:{component:"Test any gradient value dynamically by typing it into the input field. Perfect for testing radial gradients, linear gradients, and edge cases."}}},argTypes:{value:{control:"text",description:"Dynamic gradient value to test"},colorBoardHeight:{control:{type:"range",min:120,max:300,step:10},description:"Color board height"}}},k=({initialGradient:a,colorBoardHeight:i=120})=>{const[n,o]=x.useState(a),[t,u]=x.useState(a),[m,d]=x.useState(""),v=r=>{const f=r.target.value;u(f),d("")},h=r=>{r.key==="Enter"&&(r.preventDefault(),b())},b=()=>{if(console.log("🔥 Apply button clicked, inputValue:",t),!t.trim()){d("Please enter a gradient value");return}if(!t.includes("gradient")&&!t.includes("#")&&!t.includes("rgb")&&!t.includes("hsl")){d("Please enter a valid CSS color or gradient value");return}const r=t.trim();console.log("🎯 Applying gradient:",r),console.log("🔄 Current gradientValue before update:",n),o(r),d(""),setTimeout(()=>{console.log("✅ gradientValue after update:",n)},100)},y=r=>{u(r),o(r),d("")},E=["linear-gradient(90deg, #ff0000, #00ff00, #0000ff)","radial-gradient(circle at 70% 30%, #2ED573, #1EAE98, #004E64)","radial-gradient(circle at 20% 80%, #FFB347, #FFCC33, #FF6347)","radial-gradient(circle at center, #11998E, #38EF7D, #8BC34A)","radial-gradient(50%, #F7971E, #FFD200, #FF512F)","radial-gradient(70, #ff0000, #0000ff)","radial-gradient(150%, #FFB347, #FFCC33, #FF6347)","linear-gradient(45deg, #667eea 0%, #764ba2 100%)","radial-gradient(ellipse at top, #e3ffe7 0%, #d9e7ff 100%)","linear-gradient(135deg, #667eea 0%, #764ba2 100%)","radial-gradient(circle at 100% 50%, #ffffff 0%, #000000 100%)","linear-gradient(to right, #ff9a00, #ffcd00, #ff9a00)"];return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minWidth:"500px",padding:"20px",borderRadius:"12px"}},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},e.createElement("h3",{style:{margin:0,fontSize:"16px",fontWeight:"600"}},"🎨 Dynamic Gradient Tester"),e.createElement("div",{style:{display:"flex",gap:"10px",alignItems:"flex-start"}},e.createElement("input",{type:"text",value:t,onChange:v,onKeyDown:h,placeholder:"Enter gradient value...",style:{flex:1,padding:"8px 12px",border:`1px solid ${m?"#ff4444":"var(--colorpicker-border, #475569)"}`,borderRadius:"4px",fontSize:"14px",fontFamily:"monospace",backgroundColor:"var(--colorpicker-input-bg, #334155)",color:"var(--colorpicker-text, #f8fafc)"}}),e.createElement("button",{onClick:b,style:{padding:"8px 16px",backgroundColor:"#22c55e",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"600",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}},"✅ Apply")),m&&e.createElement("div",{style:{color:"#ff4444",fontSize:"12px",backgroundColor:"#ffebee",padding:"6px 10px",borderRadius:"4px",border:"1px solid #ffcdd2"}},"⚠️ ",m),e.createElement("div",{style:{backgroundColor:"var(--colorpicker-input-bg, #334155)",padding:"10px",borderRadius:"4px",fontSize:"12px",fontFamily:"monospace",wordBreak:"break-all",color:"var(--colorpicker-text, #f8fafc)",border:"1px solid var(--colorpicker-border, #475569)",position:"relative"}},e.createElement("strong",null,"Current:")," ",n,e.createElement("div",{style:{marginTop:"8px",height:"20px",borderRadius:"4px",background:n,border:"1px solid var(--colorpicker-border, #475569)"},title:"Current gradient preview"}))),e.createElement("div",null,e.createElement("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"500",color:"var(--colorpicker-text, #f8fafc)"}},"📋 Quick Presets"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"8px",maxHeight:"120px",overflowY:"auto",padding:"4px"}},E.map((r,f)=>e.createElement("button",{key:f,onClick:()=>y(r),style:{padding:"6px 10px",fontSize:"11px",fontFamily:"monospace",backgroundColor:n===r?"var(--colorpicker-accent-bg, #3b82f6)":"var(--colorpicker-input-bg, #334155)",border:`1px solid ${n===r?"var(--colorpicker-accent, #60a5fa)":"var(--colorpicker-border, #475569)"}`,borderRadius:"4px",cursor:"pointer",textAlign:"left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--colorpicker-text, #f8fafc)"},title:r},r.length>30?r.substring(0,30)+"...":r)))),e.createElement("div",{style:{border:"2px solid var(--colorpicker-border, #475569)",borderRadius:"8px",padding:"20px",backgroundColor:"var(--colorpicker-panel-bg, #0f172a)"}},e.createElement("h4",{style:{margin:"0 0 15px 0",fontSize:"14px",fontWeight:"500",color:"var(--colorpicker-text, #f8fafc)"}},"🖼️ Gradient Picker Preview"),e.createElement(l,{key:n,gradient:!0,solid:!1,value:n,onChange:r=>{console.log("🎨 ColorPicker onChange triggered:",r),console.log("🔄 Setting new values - gradientValue and inputValue to:",r),o(r),u(r)},colorBoardHeight:i,showInputs:!0,showAlpha:!0,showGradientResult:!0,showGradientStops:!0,showGradientMode:!0,showGradientAngle:!0,showGradientPosition:!0,allowAddGradientStops:!0})),e.createElement("div",{style:{fontSize:"12px",color:"var(--colorpicker-text-muted, #cbd5e1)",backgroundColor:"var(--colorpicker-input-bg, #334155)",padding:"10px",borderRadius:"4px",lineHeight:"1.4",border:"1px solid var(--colorpicker-border, #475569)"}},e.createElement("div",null,"💡 ",e.createElement("strong",null,"Tips:")),e.createElement("div",null,"• Test radial gradients:"," ",e.createElement("code",null,"radial-gradient(circle at 50% 50%, red, blue)")),e.createElement("div",null,"• Test linear gradients:"," ",e.createElement("code",null,"linear-gradient(90deg, red, blue)")),e.createElement("div",null,"• Try edge cases like numeric modifiers:"," ",e.createElement("code",null,"radial-gradient(70, red, blue)")),e.createElement("div",null,"• Watch console for parsing logs and errors")))},s={name:"🧪 Dynamic Gradient Tester",render:a=>e.createElement(k,{initialGradient:a.value,colorBoardHeight:a.colorBoardHeight}),args:{value:"radial-gradient(circle at 70% 30%, #2ED573, #1EAE98, #004E64)",colorBoardHeight:120},parameters:{docs:{description:{story:"Interactive gradient tester with preset gradients and real-time editing. Perfect for testing problematic gradient formats and debugging parsing issues."}}}},c={name:"🔴 Radial Gradient Tests",render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"30px",padding:"20px",borderRadius:"12px"}},e.createElement("h3",{style:{margin:0}},"🔴 Radial Gradient Test Suite"),[{name:"Circle at Center",gradient:"radial-gradient(circle at center, #ff0000, #00ff00, #0000ff)"},{name:"Circle at 70% 30%",gradient:"radial-gradient(circle at 70% 30%, #2ED573, #1EAE98, #004E64)"},{name:"Numeric Modifier (70)",gradient:"radial-gradient(70, #FFB347, #FFCC33, #FF6347)"},{name:"Circle at 20% 80%",gradient:"radial-gradient(circle at 20% 80%, #F7971E, #FFD200, #FF512F)"},{name:"Ellipse at Top",gradient:"radial-gradient(ellipse at top, #11998E, #38EF7D, #8BC34A)"},{name:"Percentage Size (50%)",gradient:"radial-gradient(50%, #667eea, #764ba2)"}].map(({name:a,gradient:i},n)=>e.createElement("div",{key:n,style:{border:"1px solid var(--colorpicker-border, #475569)",borderRadius:"8px",padding:"20px",backgroundColor:"var(--colorpicker-panel-bg, #0f172a)"}},e.createElement("h4",{style:{margin:"0 0 10px 0"}},a),e.createElement("div",{style:{fontFamily:"monospace",fontSize:"12px",color:"var(--colorpicker-text-muted, #cbd5e1)",marginBottom:"15px",backgroundColor:"var(--colorpicker-input-bg, #334155)",padding:"8px",borderRadius:"4px",border:"1px solid var(--colorpicker-border, #475569)"}},i),e.createElement(l,{gradient:!0,solid:!1,value:i,onChange:o=>console.log(`${a} changed:`,o),colorBoardHeight:100,showInputs:!0,showGradientResult:!0})))),parameters:{layout:"padded",docs:{description:{story:"Collection of radial gradient test cases that were previously problematic. Each gradient should maintain its positioning and render correctly."}}}},p={name:"⚠️ Edge Case Tests",render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"30px",padding:"20px",borderRadius:"12px"}},e.createElement("h3",{style:{margin:0}},"⚠️ Edge Case Test Suite"),[{name:"Numeric Only Modifier",gradient:"radial-gradient(70, #ff0000, #0000ff)",description:"Tests parsing of numeric-only radial gradient modifiers"},{name:"Complex Positioning",gradient:"radial-gradient(circle at 75% 25%, #2ED573 0%, #1EAE98 50%, #004E64 100%)",description:"Tests complex positioning with explicit stop percentages"},{name:"Large Percentage Values",gradient:"radial-gradient(150%, #FFB347, #FFCC33, #FF6347)",description:"Tests large percentage values as size modifier"},{name:"Multiple Color Stops",gradient:"radial-gradient(circle, #ff0000 0%, #ff8800 25%, #ffff00 50%, #88ff00 75%, #00ff00 100%)",description:"Tests gradients with many color stops"},{name:"Ellipse Shape",gradient:"radial-gradient(ellipse 200px 100px at 50% 50%, #667eea, #764ba2)",description:"Tests ellipse shape with explicit dimensions"}].map(({name:a,gradient:i,description:n},o)=>e.createElement("div",{key:o,style:{border:"1px solid var(--colorpicker-border, #475569)",borderRadius:"8px",padding:"20px",backgroundColor:"var(--colorpicker-panel-bg, #0f172a)"}},e.createElement("h4",{style:{margin:"0 0 5px 0",color:"var(--colorpicker-text, #f8fafc)"}},a),e.createElement("p",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"var(--colorpicker-text-muted, #cbd5e1)"}},n),e.createElement("div",{style:{fontFamily:"monospace",fontSize:"12px",color:"var(--colorpicker-text, #f8fafc)",marginBottom:"15px",backgroundColor:"var(--colorpicker-input-bg, #334155)",padding:"8px",borderRadius:"4px",wordBreak:"break-all",border:"1px solid var(--colorpicker-border, #475569)"}},i),e.createElement(l,{gradient:!0,solid:!1,value:i,onChange:t=>console.log(`${a} changed:`,t),colorBoardHeight:100,showInputs:!0,showGradientResult:!0})))),parameters:{layout:"padded",docs:{description:{story:"Tests edge cases and complex gradient formats to ensure robust parsing and rendering."}}}},g={name:"🎨 Basic Usage",render:()=>e.createElement("div",{style:{padding:"20px",borderRadius:"12px"}},e.createElement("h3",{style:{margin:"0 0 20px 0"}},"🎨 Basic Gradient Usage"),e.createElement(l,{gradient:!0,solid:!1,value:"linear-gradient(45deg, #ff6b6b, #4ecdc4)",onChange:a=>console.log("Color changed:",a),colorBoardHeight:120,showInputs:!0,showGradientResult:!0})),parameters:{layout:"padded",docs:{description:{story:"Simple gradient picker with basic linear gradient for quick testing."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '🧪 Dynamic Gradient Tester',
  render: args => <GradientTester initialGradient={args.value as string} colorBoardHeight={args.colorBoardHeight as number} />,
  args: {
    value: 'radial-gradient(circle at 70% 30%, #2ED573, #1EAE98, #004E64)',
    colorBoardHeight: 120
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive gradient tester with preset gradients and real-time editing. Perfect for testing problematic gradient formats and debugging parsing issues.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '🔴 Radial Gradient Tests',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    padding: '20px',
    borderRadius: '12px'
  }}>
      <h3 style={{
      margin: 0
    }}>🔴 Radial Gradient Test Suite</h3>

      {[{
      name: 'Circle at Center',
      gradient: 'radial-gradient(circle at center, #ff0000, #00ff00, #0000ff)'
    }, {
      name: 'Circle at 70% 30%',
      gradient: 'radial-gradient(circle at 70% 30%, #2ED573, #1EAE98, #004E64)'
    }, {
      name: 'Numeric Modifier (70)',
      gradient: 'radial-gradient(70, #FFB347, #FFCC33, #FF6347)'
    }, {
      name: 'Circle at 20% 80%',
      gradient: 'radial-gradient(circle at 20% 80%, #F7971E, #FFD200, #FF512F)'
    }, {
      name: 'Ellipse at Top',
      gradient: 'radial-gradient(ellipse at top, #11998E, #38EF7D, #8BC34A)'
    }, {
      name: 'Percentage Size (50%)',
      gradient: 'radial-gradient(50%, #667eea, #764ba2)'
    }].map(({
      name,
      gradient
    }, index) => <div key={index} style={{
      border: '1px solid var(--colorpicker-border, #475569)',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: 'var(--colorpicker-panel-bg, #0f172a)'
    }}>
          <h4 style={{
        margin: '0 0 10px 0'
      }}>
            {name}
          </h4>
          <div style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        color: 'var(--colorpicker-text-muted, #cbd5e1)',
        marginBottom: '15px',
        backgroundColor: 'var(--colorpicker-input-bg, #334155)',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid var(--colorpicker-border, #475569)'
      }}>
            {gradient}
          </div>
          <ColorPicker gradient={true} solid={false} value={gradient} onChange={color => console.log(\`\${name} changed:\`, color)} colorBoardHeight={100} showInputs={true} showGradientResult={true} />
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Collection of radial gradient test cases that were previously problematic. Each gradient should maintain its positioning and render correctly.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '⚠️ Edge Case Tests',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    padding: '20px',
    borderRadius: '12px'
  }}>
      <h3 style={{
      margin: 0
    }}>⚠️ Edge Case Test Suite</h3>

      {[{
      name: 'Numeric Only Modifier',
      gradient: 'radial-gradient(70, #ff0000, #0000ff)',
      description: 'Tests parsing of numeric-only radial gradient modifiers'
    }, {
      name: 'Complex Positioning',
      gradient: 'radial-gradient(circle at 75% 25%, #2ED573 0%, #1EAE98 50%, #004E64 100%)',
      description: 'Tests complex positioning with explicit stop percentages'
    }, {
      name: 'Large Percentage Values',
      gradient: 'radial-gradient(150%, #FFB347, #FFCC33, #FF6347)',
      description: 'Tests large percentage values as size modifier'
    }, {
      name: 'Multiple Color Stops',
      gradient: 'radial-gradient(circle, #ff0000 0%, #ff8800 25%, #ffff00 50%, #88ff00 75%, #00ff00 100%)',
      description: 'Tests gradients with many color stops'
    }, {
      name: 'Ellipse Shape',
      gradient: 'radial-gradient(ellipse 200px 100px at 50% 50%, #667eea, #764ba2)',
      description: 'Tests ellipse shape with explicit dimensions'
    }].map(({
      name,
      gradient,
      description
    }, index) => <div key={index} style={{
      border: '1px solid var(--colorpicker-border, #475569)',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: 'var(--colorpicker-panel-bg, #0f172a)'
    }}>
          <h4 style={{
        margin: '0 0 5px 0',
        color: 'var(--colorpicker-text, #f8fafc)'
      }}>
            {name}
          </h4>
          <p style={{
        margin: '0 0 10px 0',
        fontSize: '14px',
        color: 'var(--colorpicker-text-muted, #cbd5e1)'
      }}>
            {description}
          </p>
          <div style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        color: 'var(--colorpicker-text, #f8fafc)',
        marginBottom: '15px',
        backgroundColor: 'var(--colorpicker-input-bg, #334155)',
        padding: '8px',
        borderRadius: '4px',
        wordBreak: 'break-all',
        border: '1px solid var(--colorpicker-border, #475569)'
      }}>
            {gradient}
          </div>
          <ColorPicker gradient={true} solid={false} value={gradient} onChange={color => console.log(\`\${name} changed:\`, color)} colorBoardHeight={100} showInputs={true} showGradientResult={true} />
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Tests edge cases and complex gradient formats to ensure robust parsing and rendering.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '🎨 Basic Usage',
  render: () => <div style={{
    padding: '20px',
    borderRadius: '12px'
  }}>
      <h3 style={{
      margin: '0 0 20px 0'
    }}>🎨 Basic Gradient Usage</h3>
      <ColorPicker gradient={true} solid={false} value='linear-gradient(45deg, #ff6b6b, #4ecdc4)' onChange={color => console.log('Color changed:', color)} colorBoardHeight={120} showInputs={true} showGradientResult={true} />
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Simple gradient picker with basic linear gradient for quick testing.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const S=["DynamicTester","RadialGradientTests","EdgeCases","BasicUsage"];export{g as BasicUsage,s as DynamicTester,p as EdgeCases,c as RadialGradientTests,S as __namedExportsOrder,T as default};
