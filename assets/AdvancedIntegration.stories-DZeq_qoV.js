import{R as e}from"./iframe-BhXHjRNh.js";import{C as s}from"./ColorPickerDemo-B5HqFXKL.js";import{e as g}from"./decorators-DB-j-kWM.js";import{d as m,g as f}from"./storyData-zpFB94QM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CNG_CHOG.js";const k={title:"Examples/Advanced Integration",component:s,parameters:{layout:"fullscreen",docs:{description:{component:`
**Advanced Integration Examples** - Real-world scenarios for React Iro Gradient Picker

These examples demonstrate how to integrate the color picker into real applications with:

🔧 **Advanced Features:**
- Form integration with validation
- Multiple picker instances
- Custom styling and theming
- State management patterns
- Responsive layouts

💡 **Professional Use Cases:**
- Design tool interfaces
- Theme customization panels
- Brand color management
- CSS generator applications
        `}}},decorators:[g],tags:["autodocs"]},i={render:()=>{const[r,d]=e.useState("#3b82f6"),[o,c]=e.useState("#10b981"),[p,n]=e.useState("linear-gradient(135deg, #667eea 0%, #764ba2 100%)"),[a,u]=e.useState("#1f2937");return e.createElement("div",{style:{padding:"2rem",background:"#0f172a",minHeight:"600px"}},e.createElement("h2",{style:{textAlign:"center",marginBottom:"2rem",color:"#f8fafc"}},"🎨 Design Tool Interface"),e.createElement("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"2rem"}},e.createElement("div",{style:{background:p,borderRadius:"12px",padding:"2rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:a,minHeight:"200px",position:"relative",overflow:"hidden"}},e.createElement("div",{style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"16px",padding:"2rem",textAlign:"center",border:"1px solid rgba(255, 255, 255, 0.2)",maxWidth:"400px"}},e.createElement("h3",{style:{color:a,marginBottom:"1rem"}},"Design Preview"),e.createElement("p",{style:{color:a,opacity:.9,marginBottom:"1.5rem",lineHeight:1.6}},"This is how your design looks with the selected colors. The background uses your gradient, while text uses your chosen color."),e.createElement("div",{style:{display:"flex",gap:"12px",justifyContent:"center"}},e.createElement("button",{style:{background:r,color:"#ffffff",border:"none",padding:"12px 24px",borderRadius:"8px",fontSize:"14px",fontWeight:"600",cursor:"pointer"}},"Primary Action"),e.createElement("button",{style:{background:o,color:"#ffffff",border:"none",padding:"12px 24px",borderRadius:"8px",fontSize:"14px",fontWeight:"600",cursor:"pointer"}},"Secondary Action")))),e.createElement("div",{style:{background:"#1e293b",border:"1px solid #475569",borderRadius:"12px",padding:"1.5rem"}},e.createElement("h3",{style:{marginBottom:"1.5rem",color:"#f8fafc",fontSize:"16px",textAlign:"center"}},"Color Palette"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.5rem"}},e.createElement("div",null,e.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"#f8fafc"}},"Primary Color"),e.createElement(s,{...m,solid:!0,value:r,onChange:t=>(d(t),t),colorBoardHeight:80,popupWidth:240})),e.createElement("div",null,e.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"#f8fafc"}},"Secondary Color"),e.createElement(s,{...m,solid:!0,value:o,onChange:t=>(c(t),t),colorBoardHeight:80,popupWidth:240})),e.createElement("div",null,e.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"#f8fafc"}},"Background Gradient"),e.createElement(s,{...m,gradient:!0,solid:!1,value:p,onChange:t=>(n(t),t),colorBoardHeight:80,popupWidth:240}))))))},parameters:{docs:{description:{story:"Complete design tool interface showing multiple color pickers working together to create a cohesive design system."}}}},l={render:()=>{const[r,d]=e.useState("linear-gradient(135deg, #667eea 0%, #764ba2 100%)"),[o,c]=e.useState(!1),p=async()=>{try{await navigator.clipboard.writeText(`background: ${r};`),c(!0),setTimeout(()=>c(!1),2e3)}catch(n){console.error("Failed to copy: ",n)}};return e.createElement("div",{style:{padding:"2rem",maxWidth:"800px",margin:"0 auto"}},e.createElement("h2",{style:{textAlign:"center",marginBottom:"2rem",color:"#f8fafc"}},"🎨 CSS Gradient Generator"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem",alignItems:"start"}},e.createElement("div",null,e.createElement("h3",{style:{marginBottom:"1rem",color:"#f8fafc"}},"Design Your Gradient"),e.createElement(s,{...m,gradient:!0,solid:!1,value:r,onChange:n=>(d(n),n),colorBoardHeight:120,popupWidth:300})),e.createElement("div",null,e.createElement("h3",{style:{marginBottom:"1rem",color:"#f8fafc"}},"Live Preview"),e.createElement("div",{style:{width:"100%",height:"200px",background:r,borderRadius:"8px",border:"2px solid #475569",marginBottom:"1rem"}}),e.createElement("h4",{style:{marginBottom:"0.5rem",color:"#f8fafc"}},"Generated CSS:"),e.createElement("div",{style:{background:"#1e293b",border:"1px solid #475569",borderRadius:"6px",padding:"1rem",fontFamily:'Monaco, "Cascadia Code", monospace',fontSize:"14px",position:"relative"}},e.createElement("code",{style:{color:"#f8fafc"}}," ","background: ",r,";"),e.createElement("button",{onClick:p,style:{position:"absolute",top:"8px",right:"8px",background:o?"#10b981":"var(--colorpicker-primary, #3b82f6)",color:"#ffffff",border:"none",padding:"6px 12px",borderRadius:"4px",fontSize:"12px",cursor:"pointer"}},o?"✓ Copied!":"📋 Copy")))),e.createElement("div",{style:{marginTop:"2rem"}},e.createElement("h4",{style:{marginBottom:"1rem",color:"#f8fafc"}},"Quick Gradient Presets:"),e.createElement("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},f.slice(0,4).map((n,a)=>e.createElement("button",{key:a,onClick:()=>d(n.value),style:{background:n.value,border:"2px solid #475569",borderRadius:"8px",width:"60px",height:"40px",cursor:"pointer",fontSize:"12px",color:"#ffffff",textShadow:"0 1px 2px rgba(0,0,0,0.5)"},title:n.name},n.name.split(" ")[0])))))},parameters:{docs:{description:{story:"CSS gradient generator with live preview and copy-to-clipboard functionality."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [primaryColor, setPrimaryColor] = React.useState('#3b82f6');
    const [secondaryColor, setSecondaryColor] = React.useState('#10b981');
    const [backgroundGradient, setBackgroundGradient] = React.useState('linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
    const [textColor, setTextColor] = React.useState('#1f2937');
    return <div style={{
      padding: '2rem',
      background: '#0f172a',
      // Dark main background
      minHeight: '600px'
    }}>
        <h2 style={{
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#f8fafc' // Light text for dark theme
      }}>
          🎨 Design Tool Interface
        </h2>

        <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
          {/* Preview Panel - Top */}
          <div style={{
          background: backgroundGradient,
          borderRadius: '12px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: textColor,
          minHeight: '200px',
          position: 'relative',
          overflow: 'hidden'
        }}>
            <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '400px'
          }}>
              <h3 style={{
              color: textColor,
              marginBottom: '1rem'
            }}>
                Design Preview
              </h3>
              <p style={{
              color: textColor,
              opacity: 0.9,
              marginBottom: '1.5rem',
              lineHeight: 1.6
            }}>
                This is how your design looks with the selected colors. The
                background uses your gradient, while text uses your chosen
                color.
              </p>

              <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
                <button style={{
                background: primaryColor,
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                  Primary Action
                </button>
                <button style={{
                background: secondaryColor,
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                  Secondary Action
                </button>
              </div>
            </div>
          </div>

          {/* Color Pickers - Bottom Horizontal */}
          <div style={{
          background: '#1e293b',
          border: '1px solid #475569',
          borderRadius: '12px',
          padding: '1.5rem'
        }}>
            <h3 style={{
            marginBottom: '1.5rem',
            color: '#f8fafc',
            fontSize: '16px',
            textAlign: 'center'
          }}>
              Color Palette
            </h3>

            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
              <div>
                <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#f8fafc'
              }}>
                  Primary Color
                </label>
                <ColorPickerDemo {...defaultArgs} solid value={primaryColor} onChange={(value: string) => {
                setPrimaryColor(value);
                return value;
              }} colorBoardHeight={80} popupWidth={240} />
              </div>

              <div>
                <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#f8fafc'
              }}>
                  Secondary Color
                </label>
                <ColorPickerDemo {...defaultArgs} solid value={secondaryColor} onChange={(value: string) => {
                setSecondaryColor(value);
                return value;
              }} colorBoardHeight={80} popupWidth={240} />
              </div>

              <div>
                <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#f8fafc'
              }}>
                  Background Gradient
                </label>
                <ColorPickerDemo {...defaultArgs} gradient solid={false} value={backgroundGradient} onChange={(value: string) => {
                setBackgroundGradient(value);
                return value;
              }} colorBoardHeight={80} popupWidth={240} />
              </div>
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete design tool interface showing multiple color pickers working together to create a cohesive design system.'
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Complete design tool interface mockup",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [cssGradient, setCssGradient] = React.useState('linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
    const [copySuccess, setCopySuccess] = React.useState(false);
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(\`background: \${cssGradient};\`);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    };
    return <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
        <h2 style={{
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#f8fafc' // Light text for dark theme
      }}>
          🎨 CSS Gradient Generator
        </h2>

        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'start'
      }}>
          <div>
            <h3 style={{
            marginBottom: '1rem',
            color: '#f8fafc' // Light text
          }}>
              Design Your Gradient
            </h3>
            <ColorPickerDemo {...defaultArgs} gradient solid={false} value={cssGradient} onChange={(value: string) => {
            setCssGradient(value);
            return value;
          }} colorBoardHeight={120} popupWidth={300} />
          </div>

          <div>
            <h3 style={{
            marginBottom: '1rem',
            color: '#f8fafc' // Light text
          }}>
              Live Preview
            </h3>
            <div style={{
            width: '100%',
            height: '200px',
            background: cssGradient,
            borderRadius: '8px',
            border: '2px solid #475569',
            // Dark border
            marginBottom: '1rem'
          }} />

            <h4 style={{
            marginBottom: '0.5rem',
            color: '#f8fafc' // Light text for dark theme
          }}>
              Generated CSS:
            </h4>
            <div style={{
            background: '#1e293b',
            // Dark code background
            border: '1px solid #475569',
            // Dark border
            borderRadius: '6px',
            padding: '1rem',
            fontFamily: 'Monaco, "Cascadia Code", monospace',
            fontSize: '14px',
            position: 'relative'
          }}>
              <code style={{
              color: '#f8fafc'
            }}>
                {' '}
                {/* Light text */}
                background: {cssGradient};
              </code>
              <button onClick={copyToClipboard} style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: copySuccess ? '#10b981' : 'var(--colorpicker-primary, #3b82f6)',
              color: '#ffffff',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer'
            }}>
                {copySuccess ? '✓ Copied!' : '📋 Copy'}
              </button>
            </div>
          </div>
        </div>

        <div style={{
        marginTop: '2rem'
      }}>
          <h4 style={{
          marginBottom: '1rem',
          color: '#f8fafc' // Light text
        }}>
            Quick Gradient Presets:
          </h4>
          <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
            {gradientPickerPresets.slice(0, 4).map((preset: ColorPreset, index: number) => <button key={index} onClick={() => setCssGradient(preset.value)} style={{
            background: preset.value,
            border: '2px solid #475569',
            // Dark border
            borderRadius: '8px',
            width: '60px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '12px',
            color: '#ffffff',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)'
          }} title={preset.name}>
                  {preset.name.split(' ')[0]}
                </button>)}
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'CSS gradient generator with live preview and copy-to-clipboard functionality.'
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"CSS Generator with live preview",...l.parameters?.docs?.description}}};const S=["DesignToolInterface","CSSGenerator"];export{l as CSSGenerator,i as DesignToolInterface,S as __namedExportsOrder,k as default};
