import{R as e,r as i}from"./iframe-BI2QRghM.js";import{C as p}from"./index-BG1ooRdC.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Examples/Loading Demo",component:p,parameters:{layout:"centered"}},c=()=>{const[n,s]=i.useState(!1),[r,l]=i.useState("#ff0000"),a=()=>{s(!n)};return e.createElement("div",{style:{padding:"40px",textAlign:"center",minHeight:"400px"}},e.createElement("div",{style:{width:"300px",height:"300px",margin:"0 auto",background:r,borderRadius:"16px",boxShadow:"0 8px 24px rgba(0,0,0,0.15)",transition:"background 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"20px"}},e.createElement("div",{style:{color:"white",fontSize:"18px",fontWeight:"bold",textShadow:"0 2px 4px rgba(0,0,0,0.3)"}},"Main Page Color"),e.createElement("button",{onClick:a,style:{padding:"12px 24px",background:"rgba(255,255,255,0.2)",backdropFilter:"blur(10px)",color:"white",border:"2px solid rgba(255,255,255,0.3)",borderRadius:"8px",cursor:"pointer",fontSize:"16px",fontWeight:"600",boxShadow:"0 4px 12px rgba(0,0,0,0.2)",transition:"all 0.2s ease"}},"Open Color Picker"),e.createElement("div",{style:{color:"white",fontSize:"14px",textShadow:"0 2px 4px rgba(0,0,0,0.3)",fontFamily:"monospace"}},r)),n&&e.createElement(e.Fragment,null,e.createElement("div",{onClick:a,style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(4px)",zIndex:9998,animation:"fadeIn 0.2s ease-in-out"}}),e.createElement("div",{style:{position:"fixed",top:"50%",right:"40px",transform:"translateY(-50%)",zIndex:9999,background:"#1a1a1a",borderRadius:"16px",padding:"30px",boxShadow:"0 20px 60px rgba(0,0,0,0.4)",animation:"slideIn 0.3s ease-out"}},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}},e.createElement("h3",{style:{margin:0,color:"white",fontSize:"20px"}},"Choose Color"),e.createElement("button",{onClick:a,style:{background:"transparent",border:"none",color:"#999",fontSize:"24px",cursor:"pointer",padding:"0",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px",transition:"all 0.2s ease"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(255,255,255,0.1)",t.currentTarget.style.color="white"},onMouseLeave:t=>{t.currentTarget.style.background="transparent",t.currentTarget.style.color="#999"}},"×")),e.createElement(p,{solid:!0,gradient:!0,value:r,onChange:t=>(l(t),t),theme:"dark",showWrapper:!0,wrapperPadding:"20px",wrapperRounded:"12px",showAlpha:!0,showInputs:!0,colorBoardHeight:150,popupWidth:280})),e.createElement("style",null,`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateY(-50%) translateX(100px);
                }
                to {
                  opacity: 1;
                  transform: translateY(-50%) translateX(0);
                }
              }
            `)))},o={render:()=>e.createElement(c,null),parameters:{docs:{description:{story:'Click "Open Color Picker" to launch a popup modal with the dual mode picker. As you select colors in the popup, the main page background updates in real-time. Click the × button or the backdrop to close the popup.'}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <LoadingWithPopup />,
  parameters: {
    docs: {
      description: {
        story: 'Click "Open Color Picker" to launch a popup modal with the dual mode picker. ' + 'As you select colors in the popup, the main page background updates in real-time. ' + 'Click the × button or the backdrop to close the popup.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const x=["LoadingWithDualMode"];export{o as LoadingWithDualMode,x as __namedExportsOrder,g as default};
