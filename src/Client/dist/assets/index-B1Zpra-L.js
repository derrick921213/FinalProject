import{r as c,a as de,H as V,M as ue,L as ne,B as ge,S as Ne,I as Y,b as fe,T as De,E as $e}from"./antd-CgqAf7up.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Ce={exports:{}},ie={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=c,ze=Symbol.for("react.element"),Be=Symbol.for("react.fragment"),Ze=Object.prototype.hasOwnProperty,Ke=Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ue={key:!0,ref:!0,__self:!0,__source:!0};function ke(e,t,n){var s,o={},i=null,u=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(u=t.ref);for(s in t)Ze.call(t,s)&&!Ue.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)o[s]===void 0&&(o[s]=t[s]);return{$$typeof:ze,type:e,key:i,ref:u,props:o,_owner:Ke.current}}ie.Fragment=Be;ie.jsx=ke;ie.jsxs=ke;Ce.exports=ie;var r=Ce.exports,Oe,ve=de;Oe=ve.createRoot,ve.hydrateRoot;var Ee={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xe=V.createContext&&V.createContext(Ee),We=["attr","size","title"];function Je(e,t){if(e==null)return{};var n=Ge(e,t),s,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)s=i[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function Ge(e,t){if(e==null)return{};var n={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;n[s]=e[s]}return n}function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},se.apply(this,arguments)}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,s)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?we(Object(n),!0).forEach(function(s){Ye(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Ye(e,t,n){return t=Xe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xe(e){var t=qe(e,"string");return typeof t=="symbol"?t:t+""}function qe(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _e(e){return e&&e.map((t,n)=>V.createElement(t.tag,oe({key:n},t.attr),_e(t.child)))}function D(e){return t=>V.createElement(Qe,se({attr:oe({},e.attr)},t),_e(e.child))}function Qe(e){var t=n=>{var{attr:s,size:o,title:i}=e,u=Je(e,We),y=o||n.size||"1em",x;return n.className&&(x=n.className),e.className&&(x=(x?x+" ":"")+e.className),V.createElement("svg",se({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,u,{className:x,style:oe(oe({color:e.color||n.color},n.style),e.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),i&&V.createElement("title",null,i),e.children)};return xe!==void 0?V.createElement(xe.Consumer,null,n=>t(n)):t(Ee)}function et(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z"},child:[]}]})(e)}function tt(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 3H20C20.5523 3 21 3.44772 21 4V11H3V4C3 3.44772 3.44772 3 4 3ZM3 13H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13ZM7 16V18H10V16H7ZM7 6V8H10V6H7Z"},child:[]}]})(e)}function rt(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM3 12.5L7 9V16L3 12.5Z"},child:[]}]})(e)}function nt(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM7 12.5L3 16V9L7 12.5Z"},child:[]}]})(e)}function st(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z"},child:[]}]})(e)}function ot(e){return D({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"},child:[]}]})(e)}function lt(e){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125 73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z"},child:[]}]})(e)}function it(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 16l-4 4"},child:[]},{tag:"path",attr:{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"},child:[]},{tag:"path",attr:{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M3 21l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M18.5 5.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M10 11l-2 2"},child:[]},{tag:"path",attr:{d:"M13 14l-2 2"},child:[]},{tag:"path",attr:{d:"M16 16l4 4"},child:[]}]})(e)}function at(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"},child:[]},{tag:"path",attr:{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M3 21l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M18.5 5.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M10 11l-2 2"},child:[]},{tag:"path",attr:{d:"M13 14l-2 2"},child:[]}]})(e)}async function X(e,...t){if(!!window.pywebview)if(typeof e=="function")try{await e(...t)}catch(s){console.error("Error executing the provided function:",s)}else console.error("Provided function is not valid.");else console.error("Please use pywebview environment")}const Le=c.createContext(void 0),ct=({children:e})=>{const[t,n]=c.useState(!1),[s,o]=c.useState(""),[i,u]=c.useState([]);return r.jsx(Le.Provider,{value:{isLogining:t,setIsLogining:n,message:s,setMessage:o,sendStatus:i,setSendStatus:u},children:e})},U=()=>{const e=c.useContext(Le);if(e===void 0)throw new Error("useGlobalState must be used within a GlobalStateProvider");return e},dt=({toggleConnectStatusOpen:e,toggleLocalFileListOpen:t,toggleSendStatusOpen:n,toggleRemoteFileListOpen:s,handleReload:o})=>{const[i,u]=c.useState(!1),[y,x]=c.useState([]),[b,v]=c.useState("127.0.0.1"),[m,k]=c.useState(""),[E,w]=c.useState(""),[L,f]=c.useState("50051"),[j,_]=c.useState(""),[C,R]=c.useState(!1),[T,P]=c.useState(!1),{setIsLogining:S,setMessage:H}=U();c.useEffect(()=>{(async()=>{const M=await window.pywebview.api.read_host();x(M||[])})()},[]);const z=async()=>{if(b.trim()&&j.trim()&&E.trim()&&L.trim()){const d=y.some(M=>M.host===b);x(M=>{let F;return d?F=M.map(G=>G.host===b?{name:m,host:b,user:j,password:E,port:L}:G):F=[...M,{name:m.trim(),host:b.trim(),user:j,password:E,port:L}],console.log("Data saved:",F),F}),v(""),_(""),w(""),f(""),k("")}},W=()=>{console.log("Cancelling...")},$=()=>{console.log("Connecting to the last connected server...")},J=async()=>{const d=await window.pywebview.api.close(),M=JSON.parse(d);H(M.message),S(!1)},p=d=>{switch(d.currentTarget.getAttribute("id")){case"1":e();break;case"2":t();break;case"3":s();break;case"4":n();break;case"5":X(o);break;case"6":X(W);break;case"7":X($);break;case"8":X(J);break}},O=d=>{v(d.host),k(d.name),_(d.user),w(d.password),f(d.port),P(!0),u(!0)},N=d=>{console.log(`Connecting to ${d.host}`)},I=async d=>{const M=y.filter(F=>F.host!==d.host);x(M),await window.pywebview.api.save_host(M)},A=()=>{v("127.0.0.1"),_(""),w(""),f("50051"),k(""),P(!1),u(!1)};return r.jsxs("div",{className:"flex flex-row items-center space-x-5 bg-gray-500 border border-white",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("button",{title:"站台管理員",onClick:()=>u(!0),children:r.jsx(tt,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#87A2FF"})}),r.jsx(ue,{title:"保存資料管理",open:i,onCancel:A,cancelText:"關閉",okText:m?"保存":"新增",onOk:z,destroyOnClose:!0,children:r.jsxs("div",{className:"flex flex-row w-full",children:[r.jsx("div",{className:"w-1/2 text-center flex1 h-[250px] overflow-auto",children:r.jsx(ne,{dataSource:y,header:r.jsx("div",{children:"站台列表"}),renderItem:(d,M)=>r.jsxs(ne.Item,{onClick:()=>O(d),className:"w-full text-lg cursor-pointer",children:[r.jsx("p",{children:`${d.name}`}),r.jsxs("div",{children:[r.jsx(ge,{className:"ml-2",onClick:F=>{F.stopPropagation(),I(d)},children:"刪除"}),r.jsx(ge,{className:"ml-2",onClick:F=>{F.stopPropagation(),N(d)},children:"連線"})]})]},M)})}),r.jsx("div",{className:"w-1/2 text-center flex1",children:r.jsxs(Ne,{direction:"vertical",children:[r.jsx(Y,{placeholder:"名稱",value:m,disabled:T,onChange:d=>k(d.target.value)}),r.jsx(Y,{placeholder:"主機地址",value:b,defaultValue:"127.0.0.1",onChange:d=>v(d.target.value)}),r.jsx(Y,{placeholder:"使用者帳號",value:j,onChange:d=>_(d.target.value)}),r.jsx(Y.Password,{placeholder:"使用者密碼",visibilityToggle:{visible:C,onVisibleChange:R},value:E,onChange:d=>w(d.target.value)}),r.jsx(Y,{placeholder:"連接埠",value:L,defaultValue:"50051",onChange:d=>f(d.target.value)})]})})]})})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("button",{title:"連線紀錄",id:"1",onClick:p,children:r.jsx(st,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#ffc800"})}),r.jsx("button",{title:"切換本地目錄樹",id:"2",onClick:p,children:r.jsx(rt,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#7acf6a"})}),r.jsx("button",{title:"切換遠端目錄樹",id:"3",onClick:p,children:r.jsx(nt,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#87A2FF"})}),r.jsx("button",{title:"檔案傳輸過程",id:"4",onClick:p,children:r.jsx(et,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#5ba4a4"})})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("button",{title:"重新整理檔案及資料夾",id:"5",onClick:p,children:r.jsx(ot,{className:"h-9 w-9 lg:w-16 lg:h-16 md:w-12 md:h-12",color:"#99ff99"})}),r.jsx("button",{title:"取消檔案動作",className:"ml-2 lg:ml-4 md:ml-3",id:"6",onClick:p,children:r.jsx(lt,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#cc0000"})}),r.jsx("button",{title:"連接伺服器",className:"ml-1 md:ml-2",id:"7",onClick:p,children:r.jsx(at,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#99ff33"})}),r.jsx("button",{title:"中斷伺服器",className:"-ml-1 md:-ml-2",id:"8",onClick:p,children:r.jsx(it,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#ff6600"})})]})]})},ut=()=>{const[e,t]=c.useState("127.0.0.1"),[n,s]=c.useState(""),[o,i]=c.useState(""),[u,y]=c.useState("50051"),{setIsLogining:x,setMessage:b}=U(),v=()=>{X(async()=>{if(e===""||u===""||n===""||o===""){b("請輸入完整資訊");return}const m=await window.pywebview.api.login(e,u,n,o),k=JSON.parse(m);"error"in k?b(k.error):(b(k.message),x(!0))})};return r.jsxs("div",{className:"flex flex-wrap items-center justify-start p-2 bg-gray-500 border border-white gap-7",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"host",className:"mr-1 text-sm text-white whitespace-nowrap",children:"主機(H):"}),r.jsx("input",{type:"text",id:"host",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:e,onChange:m=>t(m.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"username",className:"mr-1 text-sm text-white whitespace-nowrap",children:"使用者名稱(U):"}),r.jsx("input",{type:"text",id:"username",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:n,onChange:m=>s(m.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"password",className:"mr-1 text-sm text-white whitespace-nowrap",children:"密碼(W):"}),r.jsx("input",{type:"password",id:"password",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:o,onChange:m=>i(m.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"port",className:"mr-1 text-sm text-white whitespace-nowrap",children:"連接埠(P):"}),r.jsx("input",{type:"number",id:"port",className:"w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500",value:u,onChange:m=>y(m.target.value)})]}),r.jsx("button",{className:"px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:v,children:"快速連線(Q)"})]})},ft=()=>{const[e,t]=c.useState([]),n=c.useRef(null),{message:s}=U();return c.useEffect(()=>{t(o=>[...o,s])},[s]),c.useEffect(()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight)},[e]),r.jsx("div",{ref:n,className:"w-full h-full p-2 overflow-auto bg-gray-500 border",style:{maxHeight:"400px"},children:r.jsx(Ne,{direction:"vertical",children:r.jsx(ne,{dataSource:e,renderItem:(o,i)=>r.jsx(ne.Item,{style:{paddingTop:"2px",paddingBottom:"2px"},children:r.jsx("div",{className:"flex items-center w-full h-full px-2 text-white",children:o})},i)})})})};function Me(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Me(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function re(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=Me(e))&&(s&&(s+=" "),s+=t);return s}var Pe=c.createContext({}),ht=()=>c.useContext(Pe),mt=e=>V.createElement(Pe.Provider,{...e});function pt(){let e=new Map;return{on(t,n){return e.has(t)?e.get(t).add(n):e.set(t,new Set([n])),this},off(t,n){return e.has(t)&&e.get(t).delete(n),this},emit(t,n){return e.has(t)&&e.get(t).forEach(s=>{s(n)}),this}}}var le=pt(),gt=()=>c.useRef(new Map).current,vt=()=>{},ye=["resize","contextmenu","click","scroll","blur"],he={show({event:e,id:t,props:n,position:s}){e.preventDefault&&e.preventDefault(),le.emit(0).emit(t,{event:e.nativeEvent||e,props:n,position:s})},hideAll(){le.emit(0)}};function xt(){let e=new Map,t,n,s,o,i=!1;function u(f){o=Array.from(f.values()),t=-1,s=!0}function y(){o[t].node.focus()}let x=()=>t>=0&&o[t].isSubmenu,b=()=>Array.from(o[t].submenuRefTracker.values());function v(){return t===-1?(m(),!1):!0}function m(){t+1<o.length?t++:t+1===o.length&&(t=0),i&&w(),y()}function k(){t===-1||t===0?t=o.length-1:t-1<o.length&&t--,i&&w(),y()}function E(){if(v()&&x()){let f=b(),{node:j,setSubmenuPosition:_}=o[t];return e.set(j,{isRoot:s,focusedIndex:t,parentNode:n||j,items:o}),_(),j.classList.add("contexify_submenu-isOpen"),n=j,f.length>0?(t=0,o=f):i=!0,s=!1,y(),!0}return!1}function w(){if(v()&&!s){let f=e.get(n);n.classList.remove("contexify_submenu-isOpen"),o=f.items,n=f.parentNode,f.isRoot&&(s=!0,e.clear()),i||(t=f.focusedIndex,y())}}function L(f){function j(_){for(let C of _)C.isSubmenu&&C.submenuRefTracker&&j(Array.from(C.submenuRefTracker.values())),C.keyMatcher&&C.keyMatcher(f)}j(o)}return{init:u,moveDown:m,moveUp:k,openSubmenu:E,closeSubmenu:w,matchKeys:L}}function q(e){return typeof e=="function"}function be(e){return typeof e=="string"}function wt(e,t){return c.Children.map(c.Children.toArray(e).filter(Boolean),n=>c.cloneElement(n,t))}function yt(e){let t={x:e.clientX,y:e.clientY},n=e.changedTouches;return n&&(t.x=n[0].clientX,t.y=n[0].clientY),(!t.x||t.x<0)&&(t.x=0),(!t.y||t.y<0)&&(t.y=0),t}function je(e,t){return q(e)?e(t):e}function bt(e,t){return{...e,...q(t)?t(e):t}}var Fe=({id:e,theme:t,style:n,className:s,children:o,animation:i="fade",preventDefaultOnKeydown:u=!0,disableBoundariesCheck:y=!1,onVisibilityChange:x,...b})=>{let[v,m]=c.useReducer(bt,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),k=c.useRef(null),E=gt(),[w]=c.useState(()=>xt()),L=c.useRef(),f=c.useRef();c.useEffect(()=>(le.on(e,_).on(0,C),()=>{le.off(e,_).off(0,C)}),[e,i,y]),c.useEffect(()=>{v.visible?w.init(E):E.clear()},[v.visible,w,E]);function j(p,O){if(k.current&&!y){let{innerWidth:N,innerHeight:I}=window,{offsetWidth:A,offsetHeight:d}=k.current;p+A>N&&(p-=p+A-N),O+d>I&&(O-=O+d-I)}return{x:p,y:O}}c.useEffect(()=>{v.visible&&m(j(v.x,v.y))},[v.visible]),c.useEffect(()=>{function p(N){u&&N.preventDefault()}function O(N){switch(N.key){case"Enter":case" ":w.openSubmenu()||C();break;case"Escape":C();break;case"ArrowUp":p(N),w.moveUp();break;case"ArrowDown":p(N),w.moveDown();break;case"ArrowRight":p(N),w.openSubmenu();break;case"ArrowLeft":p(N),w.closeSubmenu();break;default:w.matchKeys(N);break}}if(v.visible){window.addEventListener("keydown",O);for(let N of ye)window.addEventListener(N,C)}return()=>{window.removeEventListener("keydown",O);for(let N of ye)window.removeEventListener(N,C)}},[v.visible,w,u]);function _({event:p,props:O,position:N}){p.stopPropagation();let I=N||yt(p),{x:A,y:d}=j(I.x,I.y);de.flushSync(()=>{m({visible:!0,willLeave:!1,x:A,y:d,triggerEvent:p,propsFromTrigger:O})}),clearTimeout(f.current),!L.current&&q(x)&&(x(!0),L.current=!0)}function C(p){p!=null&&(p.button===2||p.ctrlKey)&&p.type!=="contextmenu"||(i&&(be(i)||"exit"in i&&i.exit)?m(O=>({willLeave:O.visible})):m(O=>({visible:O.visible?!1:O.visible})),f.current=setTimeout(()=>{q(x)&&x(!1),L.current=!1}))}function R(){v.willLeave&&v.visible&&de.flushSync(()=>m({visible:!1,willLeave:!1}))}function T(){return be(i)?re({[`contexify_willEnter-${i}`]:P&&!$,[`contexify_willLeave-${i} contexify_willLeave-'disabled'`]:P&&$}):i&&"enter"in i&&"exit"in i?re({[`contexify_willEnter-${i.enter}`]:i.enter&&P&&!$,[`contexify_willLeave-${i.exit} contexify_willLeave-'disabled'`]:i.exit&&P&&$}):null}let{visible:P,triggerEvent:S,propsFromTrigger:H,x:z,y:W,willLeave:$}=v,J=re("contexify",s,{[`contexify_theme-${t}`]:t},T());return V.createElement(mt,{value:E},P&&V.createElement("div",{...b,className:J,onAnimationEnd:R,style:{...n,left:z,top:W,opacity:1},ref:k,role:"menu"},wt(o,{propsFromTrigger:H,triggerEvent:S})))},K=({id:e,children:t,className:n,style:s,triggerEvent:o,data:i,propsFromTrigger:u,keyMatcher:y,onClick:x=vt,disabled:b=!1,hidden:v=!1,closeOnClick:m=!0,handlerEvent:k="onClick",...E})=>{let w=c.useRef(),L=ht(),f={id:e,data:i,triggerEvent:o,props:u},j=je(b,f),_=je(v,f);function C(S){f.event=S,S.stopPropagation(),j||(m?R():x(f))}function R(){let S=w.current;S.focus(),S.addEventListener("animationend",()=>setTimeout(he.hideAll),{once:!0}),S.classList.add("contexify_item-feedback"),x(f)}function T(S){S&&!j&&(w.current=S,L.set(S,{node:S,isSubmenu:!1,keyMatcher:!j&&q(y)&&(H=>{y(H)&&(H.stopPropagation(),H.preventDefault(),f.event=H,R())})}))}function P(S){(S.key==="Enter"||S.key===" ")&&(S.stopPropagation(),f.event=S,R())}return _?null:V.createElement("div",{...E,[k]:C,className:re("contexify_item",n,{"contexify_item-disabled":j}),style:s,onKeyDown:P,ref:T,tabIndex:-1,role:"menuitem","aria-disabled":j},V.createElement("div",{className:"contexify_itemContent"},t))};const{DirectoryTree:jt}=De,{Option:Se}=fe,St=e=>({fileMenuId:`file_menu_${e?"local":"remote"}`,folderMenuId:`folder_menu_${e?"local":"remote"}`}),Nt=({nodeKey:e,onOpenFolder:t,nodeTitle:n,isLocal:s,menuId:o,disableMenu:i})=>r.jsxs(Fe,{id:o,children:[r.jsx(K,{onClick:()=>t(e),disabled:i,children:"開啟資料夾"}),r.jsx(K,{onClick:()=>console.log(s?"新增檔案":"新增遠端檔案"),disabled:i,children:s?"新增檔案":"新增遠端檔案"}),r.jsx(K,{onClick:()=>console.log("刪除資料夾"),disabled:i||n==="根目錄"||n==="遠端根目錄"||n==="downloads"||n==="uploads",children:"刪除資料夾"})]}),Ve=({initialTreeData:e=[{title:"根目錄",key:"root",children:void 0}],isLocal:t,onNodeSelect:n})=>{const[s,o]=c.useState(e),[i,u]=c.useState([]),[y,x]=c.useState(""),[b,v]=c.useState(null),[m,k]=c.useState([]),[E,w]=c.useState([]),[L,f]=c.useState(!1),[j,_]=c.useState(!1),[C,R]=c.useState(""),{setSendStatus:T}=U(),P=St(t);c.useEffect(()=>{u(t?["localStorage"]:["remoteStorage"])},[t]);const S=async(l,a,h,g)=>{const Q=a.key,Re=await window.pywebview.api.get_file_size(Q),ae=JSON.parse(Re);if(ae.error){console.error(ae.error);return}const He=`${ae.size}`,ce=l==="上傳檔案"?"上傳":"下載";console.log(a.key);const me=a.key.match(/(\\remoteStorage\\.+)/);let pe;me&&(pe=me[1]);const Te=t?"":`${pe}`;T(B=>[...B,{fileName:String(a.title),fileSize:He,direction:ce,remotePath:Te,status:"傳送中"}]),console.log("action:",l);try{l==="上傳檔案"?await window.pywebview.api.upload_file_to_remote(Q,h||""):l==="下載檔案"&&await window.pywebview.api.download_file_to_local(Q,g||"");const B=await window.pywebview.api.get_file_size(Q),ee=JSON.parse(B);if(ee.error)throw new Error(ee.error);T(Z=>Z.map(te=>te.fileName===String(a.title)&&te.direction===ce?{...te,status:"完成"}:te))}catch(B){console.error("File action failed:",B),T(ee=>ee.map(Z=>Z.fileName===String(a.title)&&Z.direction===ce?{...Z,status:"失敗"}:Z))}const Ie=t?await O(a.key):await N(a.key);o(B=>z(B,a.key,Ie))},H=({isLocal:l,menuId:a,disableMenu:h})=>r.jsxs(Fe,{id:a,children:[r.jsx(K,{onClick:()=>console.log("開啟檔案"),disabled:h,children:"開啟檔案"}),r.jsx(K,{onClick:()=>console.log("刪除檔案"),disabled:h,children:"刪除檔案"}),r.jsx(K,{onClick:()=>{console.log(l?"上傳":"下載"),l?$():p()},disabled:h,children:l?"上傳檔案":"下載檔案"})]}),z=(l,a,h)=>l.map(g=>g.key===a?{...g,children:h}:g.children?{...g,children:z(g.children,a,h)}:g),W=async()=>{try{const l=await window.pywebview.api.get_remote_folders(),a=l?JSON.parse(l):{};return a.error?(console.error("Error:",a.error),[]):(console.log("data",a.folders),a.folders||[])}catch(l){return console.error("Failed to fetch remote folders:",l),[]}},$=async()=>{const l=await W();k(l),f(!0)},J=async()=>{try{const l=await window.pywebview.api.get_local_folders(),a=l?JSON.parse(l):{};return a.error?(console.error("Error:",a.error),[]):(console.log("data",a.folders),a.folders||[])}catch(l){return console.error("Failed to fetch local folders:",l),[]}},p=async()=>{const l=await J();w(l),_(!0)},O=async l=>{try{const a=await window.pywebview.api.get_local_children(l),h=JSON.parse(a);return h.error?(console.error("Error:",h.error),[]):!Array.isArray(h)||h.length===0?[{title:"無檔案",key:`${l}-empty`,isLeaf:!0}]:h.map(g=>({title:g.title,key:g.key,isLeaf:g.isLeaf,children:g.children||void 0}))}catch(a){return console.error("Failed to fetch local children:",a),[]}},N=async l=>{try{const a=await window.pywebview.api.get_server_children(l),h=JSON.parse(a);return h.error?(console.error("Error:",h.error),[]):!Array.isArray(h)||h.length===0?[{title:"無檔案",key:`${l}-empty`,isLeaf:!0}]:h.map(g=>({title:g.title,key:g.key,isLeaf:g.isLeaf,children:g.children||void 0}))}catch(a){return console.error("Failed to fetch remote children:",a),[]}},I=async({key:l,children:a})=>{if(a)return Promise.resolve();const h=t?await O(l):await N(l);o(g=>z(g,l,h))},A=(l,a)=>{if(l.preventDefault(),String(a.key).includes("-empty")||a.children&&a.children.length===0)return;const h=typeof a.title=="string"?a.title:String(a.title);x(h),v(a.key);const g=a.children&&a.children.length===0;a.isLeaf?he.show({id:P.fileMenuId,event:l,props:{node:a,disableMenu:g}}):he.show({id:P.folderMenuId,event:l,props:{node:a,disableMenu:g}})},d=(l,a)=>{if(n&&l.length>0){const h=l[0],g=a.node;n(h,g)}},M=l=>{u(a=>[...a,l])},F=(l,a)=>{for(const h of l){if(h.key===a)return h;if(h.children){const g=F(h.children,a);if(g)return g}}return null},G=async()=>{if(C&&b){const l=F(s,b);console.log("選擇的資料夾:",C),console.log("選擇的檔案節點:",l),l?t?await S("上傳檔案",l,C):await S("下載檔案",l,C):console.warn("無法找到對應的檔案節點")}else console.warn("未選取資料夾或檔案節點");t?_(!1):f(!1)};return r.jsxs(r.Fragment,{children:[r.jsx(jt,{loadData:I,treeData:s,onSelect:d,expandedKeys:i,onRightClick:({event:l,node:a})=>A(l,a),onExpand:l=>u(l)}),r.jsx(ue,{title:"選擇遠端上傳資料夾",visible:L,onOk:G,onCancel:()=>f(!1),children:r.jsx(fe,{onChange:l=>R(l),style:{width:"100%"},children:m.map(l=>r.jsx(Se,{value:l,children:l},l))})}),r.jsx(ue,{title:"選擇本地上傳資料夾",visible:j,onOk:G,onCancel:()=>_(!1),children:r.jsx(fe,{onChange:l=>R(l),style:{width:"100%"},children:E.map(l=>r.jsx(Se,{value:l,children:l},l))})}),r.jsx(H,{isLocal:t,menuId:P.fileMenuId,disableMenu:!1}),b!==null&&r.jsx(Nt,{nodeKey:b,onOpenFolder:M,nodeTitle:y,isLocal:t,menuId:P.folderMenuId,disableMenu:!1})]})},Ct=(e,t)=>{console.log("Selected node key:",e)},kt=()=>{const e=[{title:"根目錄",key:"localStorage",children:void 0}];return r.jsx("div",{className:"h-full px-2 py-1 bg-gray-500 border-2 rounded",children:r.jsx(Ve,{onNodeSelect:Ct,initialTreeData:e,isLocal:!0})})},Ot=(e,t)=>{console.log("Selected remote node key:",e)},Et=()=>{const{isLogining:e}=U(),t=[{title:"遠端根目錄",key:"remoteStorage",children:void 0}];return r.jsx("div",{className:"h-full px-2 py-1 bg-gray-500 border-2 rounded",children:e?r.jsx(Ve,{onNodeSelect:Ot,initialTreeData:t,isLocal:!1}):r.jsx($e,{description:"請先登入"})})},_t=({localOpen:e,remoteOpen:t})=>r.jsxs("div",{className:"flex flex-row w-full h-full gap-2",children:[e&&r.jsx("div",{className:"flex-1",children:r.jsx(kt,{})}),t&&r.jsx("div",{className:"flex-1",children:r.jsx(Et,{})})]}),Lt=()=>{const{sendStatus:e}=U();return console.log(e),r.jsxs("div",{className:"box-border w-full h-full p-2 pb-4 bg-gray-500 border rounded",children:[r.jsxs("div",{className:"box-border grid grid-cols-5 gap-1 p-2 text-white bg-gray-600 border rounded",children:[r.jsx("div",{className:"col-span-1 truncate",children:"檔案名稱"}),r.jsx("div",{className:"col-span-1 truncate",children:"檔案大小/本地檔案"}),r.jsx("div",{className:"col-span-1 truncate",children:"方向"}),r.jsx("div",{className:"col-span-1 truncate",children:"遠端檔案"}),r.jsx("div",{className:"col-span-1 truncate",children:"狀態"})]}),r.jsx("div",{className:"overflow-y-auto",style:{maxHeight:"3.5rem"},children:e.map((t,n)=>r.jsxs("div",{className:`grid grid-cols-5 gap-1 p-2 ${n%2===0?"bg-gray-400":"bg-gray-300"} border rounded box-border`,children:[r.jsx("div",{className:"col-span-1 truncate",children:t.fileName}),r.jsxs("div",{className:"col-span-1 truncate",children:[t.fileSize," "]}),r.jsx("div",{className:"col-span-1 truncate",children:t.direction}),r.jsx("div",{className:"col-span-1 truncate",children:t.remotePath}),r.jsx("div",{className:"col-span-1 truncate",children:t.status})]},n))})]})},Mt=()=>{const[e,t]=c.useState(!0),[n,s]=c.useState(!0),[o,i]=c.useState(!0),[u,y]=c.useState(!0),[x,b]=c.useState(0),v=()=>{console.log("Reloading..."),b(L=>L+1)},m=()=>t(!e),k=()=>s(!n),E=()=>y(!u),w=()=>i(!o);return console.log(n,o),r.jsxs("div",{className:"grid grid-rows-[auto_auto_2fr_auto] h-screen min-w-full gap-1 p-2 bg-gray-700",children:[r.jsxs("div",{children:[r.jsx(dt,{handleReload:v,toggleConnectStatusOpen:m,toggleLocalFileListOpen:k,toggleRemoteFileListOpen:w,toggleSendStatusOpen:E}),r.jsx(ut,{})]}),e&&r.jsx("div",{className:"h-28",children:r.jsx(ft,{})}),(n||o)&&r.jsx("div",{className:"grid grid-cols-1 gap-1",children:r.jsx(_t,{localOpen:n,remoteOpen:o},x)}),u&&r.jsx("div",{className:"h-28",children:r.jsx(Lt,{})})]})};Oe(document.getElementById("root")).render(r.jsx(c.StrictMode,{children:r.jsx(ct,{children:r.jsx(Mt,{})})}));