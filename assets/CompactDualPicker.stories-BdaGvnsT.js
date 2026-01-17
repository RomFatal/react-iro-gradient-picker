import{R as e,r as c,T as u}from"./iframe-BRbqbX9o.js";import{C as g}from"./index-DMmxPZ3T.js";import{d as f}from"./storyData-zpFB94QM.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Components/Color Picker/~Compact (In Development)",parameters:{layout:"centered",docs:{description:{component:`
# ⚠️ **STILL IN DEVELOPMENT - NOT PRODUCTION READY**

**Compact Dual Mode Picker** - New streamlined horizontal design!

✅ Features:
- **Horizontal Layout** - Everything side by side
- **Close Button** - Built-in close functionality
- **Space Efficient** - Compact square design
- **Modern Design** - Clean, minimal interface
- **Dark Theme** - Full theme support

🎨 **Perfect for:**
- Modal dialogs
- Dropdown menus
- Sidebar panels
- Embedded color pickers
        `}}},tags:["autodocs"]},s=({onClose:p})=>{const[t,i]=c.useState("linear-gradient(90deg, #667eea 0%, #764ba2 100%)"),[m,l]=c.useState(!0),d=()=>{l(!1),p?.()};return m?e.createElement(u,{defaultTheme:"dark"},e.createElement("div",{className:"dark compact-picker-wrapper",style:{background:"#1e293b",borderRadius:"12px",padding:"1rem",border:"1px solid #334155",position:"relative",width:"fit-content",maxWidth:"90vw"}},e.createElement("style",null,`
          /* Show only the iro wheel */
          .compact-picker-wrapper .w-full.rounded-xl {
            display: block !important;
          }

          /* Remove vertical spacing */
          .compact-picker-wrapper .space-y-2 > * + * {
            margin-top: 0 !important;
          }

          /* Iro picker - 50% smaller, visible */
          .compact-picker-wrapper .relative {
            transform: scale(0.5) !important;
            transform-origin: left top !important;
            display: block !important;
          }

          /* Hue slider - hidden */
          .compact-picker-wrapper .rounded-lg.colorpicker-glass.px-4:first-of-type {
            display: none !important;
          }

          /* Popular colors - hide completely */
          .compact-picker-wrapper .pt-4.px-2 {
            display: none !important;
          }

          /* Color value display - hide completely */
          .compact-picker-wrapper .rounded-lg.colorpicker-glass.flex.items-center.gap-2 {
            display: none !important;
          }

          /* Hide text inputs */
          .compact-picker-wrapper input[type="text"] {
            display: none !important;
          }

          /* Hide tabs header (SOLID/GRADIENT tabs) */
          .compact-picker-wrapper .popup-tabs-header {
            display: none !important;
          }

          /* Hide gradient bar/slider */
          .compact-picker-wrapper .gradient-interaction {
            display: none !important;
          }

          .compact-picker-wrapper .popup-tabs-body-item {
            min-height: auto !important;
            padding: 0 !important;
          }

          .compact-picker-wrapper .color-picker-panel {
            max-width: 200px !important;
          }
        `),e.createElement("button",{onClick:d,style:{position:"absolute",top:"1rem",right:"1rem",background:"transparent",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:"1.25rem",lineHeight:1,padding:"0.25rem 0.5rem",borderRadius:"4px",transition:"all 0.2s",zIndex:10},onMouseEnter:r=>{r.currentTarget.style.background="#334155",r.currentTarget.style.color="#f8fafc"},onMouseLeave:r=>{r.currentTarget.style.background="transparent",r.currentTarget.style.color="#94a3b8"},title:"Close"},"✕"),e.createElement(g,{...f,value:t,solid:!0,gradient:!0,onChange:i,popupWidth:520,colorBoardHeight:140,showGradientAngle:!1,showGradientPosition:!1,showInputs:!1}),e.createElement("div",{style:{marginTop:"1rem",paddingTop:"1rem",borderTop:"1px solid #334155",display:"flex",gap:"0.5rem",justifyContent:"flex-end"}},e.createElement("button",{onClick:()=>i("linear-gradient(90deg, #667eea 0%, #764ba2 100%)"),style:{padding:"0.5rem 1rem",background:"#334155",color:"#f8fafc",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"0.75rem",fontWeight:"600",transition:"all 0.2s"},onMouseEnter:r=>{r.currentTarget.style.background="#475569"},onMouseLeave:r=>{r.currentTarget.style.background="#334155"}},"Reset"),e.createElement("button",{onClick:d,style:{padding:"0.5rem 1.5rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"0.75rem",fontWeight:"600",transition:"all 0.2s"},onMouseEnter:r=>{r.currentTarget.style.background="#2563eb"},onMouseLeave:r=>{r.currentTarget.style.background="#3b82f6"}},"Apply")))):e.createElement("div",{style:{padding:"2rem",textAlign:"center",color:"#94a3b8"}},e.createElement("p",null,"Picker closed"),e.createElement("button",{onClick:()=>l(!0),style:{padding:"0.5rem 1rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"0.875rem",fontWeight:"500"}},"Reopen Picker"))},n={render:()=>e.createElement(s,null)},o={render:()=>{const[p,t]=c.useState(!1);return e.createElement("div",null,e.createElement("button",{onClick:()=>t(!0),style:{padding:"0.75rem 1.5rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"0.875rem",fontWeight:"600"}},"Open Color Picker"),p&&e.createElement("div",{style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>t(!1)},e.createElement("div",{onClick:i=>i.stopPropagation()},e.createElement(s,{onClose:()=>t(!1)}))))}},a={render:()=>e.createElement("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"}},e.createElement(s,null),e.createElement(s,null))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <CompactDualPickerDemo />
}`,...n.parameters?.docs?.source},description:{story:"Default compact dual mode picker",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <button onClick={() => setIsOpen(true)} style={{
        padding: '0.75rem 1.5rem',
        background: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '0.875rem',
        fontWeight: '600'
      }}>
          Open Color Picker
        </button>

        {isOpen && <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }} onClick={() => setIsOpen(false)}>
            <div onClick={e => e.stopPropagation()}>
              <CompactDualPickerDemo onClose={() => setIsOpen(false)} />
            </div>
          </div>}
      </div>;
  }
}`,...o.parameters?.docs?.source},description:{story:"Compact picker in a modal context",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <CompactDualPickerDemo />
        <CompactDualPickerDemo />
      </div>;
  }
}`,...a.parameters?.docs?.source},description:{story:"Multiple compact pickers side by side",...a.parameters?.docs?.description}}};const x=["Default","InModal","MultiplePickers"];export{n as Default,o as InModal,a as MultiplePickers,x as __namedExportsOrder,h as default};
