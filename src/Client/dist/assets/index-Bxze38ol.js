import{r as i,a as W,H as k,M as me,L as B,B as Y,S as re,I as R,T as ge,E as pe}from"./antd-BtRyJUWE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var ne={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=i,ve=Symbol.for("react.element"),we=Symbol.for("react.fragment"),ye=Object.prototype.hasOwnProperty,be=xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,je={key:!0,ref:!0,__self:!0,__source:!0};function se(e,t,n){var s,l={},o=null,h=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(h=t.ref);for(s in t)ye.call(t,s)&&!je.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)l[s]===void 0&&(l[s]=t[s]);return{$$typeof:ve,type:e,key:o,ref:h,props:l,_owner:be.current}}U.Fragment=we;U.jsx=se;U.jsxs=se;ne.exports=U;var r=ne.exports,le,G=W;le=G.createRoot,G.hydrateRoot;var oe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},X=k.createContext&&k.createContext(oe),Ce=["attr","size","title"];function Ne(e,t){if(e==null)return{};var n=Se(e,t),s,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)s=o[l],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function Se(e,t){if(e==null)return{};var n={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;n[s]=e[s]}return n}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Z.apply(this,arguments)}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,s)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(s){Ee(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Ee(e,t,n){return t=Oe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oe(e){var t=ke(e,"string");return typeof t=="symbol"?t:t+""}function ke(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ie(e){return e&&e.map((t,n)=>k.createElement(t.tag,z({key:n},t.attr),ie(t.child)))}function _(e){return t=>k.createElement(Me,Z({attr:z({},e.attr)},t),ie(e.child))}function Me(e){var t=n=>{var{attr:s,size:l,title:o}=e,h=Ne(e,Ce),g=l||n.size||"1em",p;return n.className&&(p=n.className),e.className&&(p=(p?p+" ":"")+e.className),k.createElement("svg",Z({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,h,{className:p,style:z(z({color:e.color||n.color},n.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),o&&k.createElement("title",null,o),e.children)};return X!==void 0?k.createElement(X.Consumer,null,n=>t(n)):t(oe)}function Le(e){return _({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z"},child:[]}]})(e)}function _e(e){return _({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 3H20C20.5523 3 21 3.44772 21 4V11H3V4C3 3.44772 3.44772 3 4 3ZM3 13H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13ZM7 16V18H10V16H7ZM7 6V8H10V6H7Z"},child:[]}]})(e)}function Pe(e){return _({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM3 12.5L7 9V16L3 12.5Z"},child:[]}]})(e)}function Ve(e){return _({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM7 12.5L3 16V9L7 12.5Z"},child:[]}]})(e)}function He(e){return _({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z"},child:[]}]})(e)}function Te(e){return _({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"},child:[]}]})(e)}function Re(e){return _({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125 73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z"},child:[]}]})(e)}function De(e){return _({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 16l-4 4"},child:[]},{tag:"path",attr:{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"},child:[]},{tag:"path",attr:{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M3 21l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M18.5 5.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M10 11l-2 2"},child:[]},{tag:"path",attr:{d:"M13 14l-2 2"},child:[]},{tag:"path",attr:{d:"M16 16l4 4"},child:[]}]})(e)}function Ie(e){return _({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"},child:[]},{tag:"path",attr:{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M3 21l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M18.5 5.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M10 11l-2 2"},child:[]},{tag:"path",attr:{d:"M13 14l-2 2"},child:[]}]})(e)}const Fe=()=>{const[e,t]=i.useState(!1),[n,s]=i.useState(()=>{const c=localStorage.getItem("dataList");return c?JSON.parse(c):[]}),[l,o]=i.useState(""),[h,g]=i.useState(""),[p,C]=i.useState(""),[u,x]=i.useState(""),[S,N]=i.useState(""),[v,M]=i.useState(!1),[m,a]=i.useState(!1);i.useEffect(()=>{localStorage.setItem("dataList",JSON.stringify(n))},[n]);const f=()=>{if(l.trim()&&S.trim()&&p.trim()&&u.trim()){const c=n.some(O=>O.host===l);s(c?n.map(O=>O.name===h?{host:l,user:S,password:p,port:u}:O):[...n,{name:h.trim(),host:l.trim(),user:S,password:p,port:u}]),o(""),N(""),C(""),x(""),g("")}},d=c=>{const O=c.currentTarget.getAttribute("title");console.log(`Button clicked: ${O}`)},y=c=>{o(c.host),g(c.name),N(c.user),C(c.password),x(c.port),a(!0),t(!0)},V=c=>{console.log(`Connecting to ${c.host}`)},L=c=>{s(n.filter(O=>O.host!==c.host))},w=()=>{o(""),N(""),C(""),x(""),g(""),a(!1),t(!1)};return r.jsxs("div",{className:"flex flex-row items-center space-x-5 bg-gray-500 border border-white",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("button",{title:"站台管理員",onClick:()=>t(!0),children:r.jsx(_e,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#87A2FF"})}),r.jsx(me,{title:"保存資料管理",open:e,onCancel:w,cancelText:"關閉",okText:h?"保存":"新增",onOk:f,destroyOnClose:!0,children:r.jsxs("div",{className:"flex flex-row w-full",children:[r.jsx("div",{className:"w-1/2 text-center flex1 h-[250px] overflow-auto",children:r.jsx(B,{dataSource:n,header:r.jsx("div",{children:"站台列表"}),renderItem:(c,O)=>r.jsxs(B.Item,{onClick:()=>y(c),className:"w-full text-lg cursor-pointer",children:[r.jsx("p",{children:`${c.name}`}),r.jsxs("div",{children:[r.jsx(Y,{className:"ml-2",onClick:H=>{H.stopPropagation(),L(c)},children:"刪除"}),r.jsx(Y,{className:"ml-2",onClick:H=>{H.stopPropagation(),V(c)},children:"連線"})]})]},O)})}),r.jsx("div",{className:"w-1/2 text-center flex1",children:r.jsxs(re,{direction:"vertical",children:[r.jsx(R,{placeholder:"名稱",value:h,disabled:m,onChange:c=>g(c.target.value)}),r.jsx(R,{placeholder:"主機地址",value:l,defaultValue:"127.0.0.1",onChange:c=>o(c.target.value)}),r.jsx(R,{placeholder:"使用者帳號",value:S,onChange:c=>N(c.target.value)}),r.jsx(R.Password,{placeholder:"使用者密碼",visibilityToggle:{visible:v,onVisibleChange:M},value:p,onChange:c=>C(c.target.value)}),r.jsx(R,{placeholder:"連接埠",value:u,defaultValue:"50051",onChange:c=>x(c.target.value)})]})})]})})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("button",{title:"連線紀錄",onClick:d,children:r.jsx(He,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#ffc800"})}),r.jsx("button",{title:"切換本地目錄樹",onClick:d,children:r.jsx(Pe,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#7acf6a"})}),r.jsx("button",{title:"切換遠端目錄樹",onClick:d,children:r.jsx(Ve,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#87A2FF"})}),r.jsx("button",{title:"檔案傳輸過程",onClick:d,children:r.jsx(Le,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#5ba4a4"})})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("button",{title:"重新整理檔案及資料夾",onClick:d,children:r.jsx(Te,{className:"h-9 w-9 lg:w-16 lg:h-16 md:w-12 md:h-12",color:"#99ff99"})}),r.jsx("button",{title:"取消檔案動作",className:"ml-2 lg:ml-4 md:ml-3",onClick:d,children:r.jsx(Re,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#cc0000"})}),r.jsx("button",{title:"連接伺服器",className:"ml-1 md:ml-2",onClick:d,children:r.jsx(Ie,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#99ff33"})}),r.jsx("button",{title:"中斷伺服器",className:"-ml-1 md:-ml-2",onClick:d,children:r.jsx(De,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#ff6600"})})]})]})},Ae=({setMessage:e})=>{const[t,n]=i.useState("127.0.0.1"),[s,l]=i.useState(""),[o,h]=i.useState(""),[g,p]=i.useState("50051"),C=async()=>{if(window.pywebview){if(t===""||g===""||s===""||o===""){e("請輸入完整資訊");return}const u=await window.pywebview.api.login(t,g,s,o),x=JSON.parse(u);"error"in x?e(x.error):e(x.message)}else e("請在pywebview環境下使用")};return r.jsxs("div",{className:"flex flex-wrap items-center justify-start p-2 bg-gray-500 border border-white gap-7",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"host",className:"mr-1 text-sm text-white whitespace-nowrap",children:"主機(H):"}),r.jsx("input",{type:"text",id:"host",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:t,onChange:u=>n(u.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"username",className:"mr-1 text-sm text-white whitespace-nowrap",children:"使用者名稱(U):"}),r.jsx("input",{type:"text",id:"username",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:s,onChange:u=>l(u.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"password",className:"mr-1 text-sm text-white whitespace-nowrap",children:"密碼(W):"}),r.jsx("input",{type:"password",id:"password",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:o,onChange:u=>h(u.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"port",className:"mr-1 text-sm text-white whitespace-nowrap",children:"連接埠(P):"}),r.jsx("input",{type:"number",id:"port",className:"w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500",value:g,onChange:u=>p(u.target.value)})]}),r.jsx("button",{className:"px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:C,children:"快速連線(Q)"})]})},$e=({message:e})=>{const[t,n]=i.useState([]),s=i.useRef(null);return i.useEffect(()=>{n(l=>[...l,e])},[e]),i.useEffect(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[t]),r.jsx("div",{ref:s,className:"w-full h-full p-2 overflow-auto bg-gray-500 border",style:{maxHeight:"400px"},children:r.jsx(re,{direction:"vertical",children:r.jsx(B,{dataSource:t,renderItem:(l,o)=>r.jsx(B.Item,{style:{paddingTop:"2px",paddingBottom:"2px"},children:r.jsx("div",{className:"flex items-center w-full h-full px-2 text-white",children:l})},o)})})})};function ae(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ae(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function $(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=ae(e))&&(s&&(s+=" "),s+=t);return s}var ce=i.createContext({}),Be=()=>i.useContext(ce),Ze=e=>k.createElement(ce.Provider,{...e});function ze(){let e=new Map;return{on(t,n){return e.has(t)?e.get(t).add(n):e.set(t,new Set([n])),this},off(t,n){return e.has(t)&&e.get(t).delete(n),this},emit(t,n){return e.has(t)&&e.get(t).forEach(s=>{s(n)}),this}}}var K=ze(),Ke=()=>i.useRef(new Map).current,Ue=()=>{},Q=["resize","contextmenu","click","scroll","blur"],J={show({event:e,id:t,props:n,position:s}){e.preventDefault&&e.preventDefault(),K.emit(0).emit(t,{event:e.nativeEvent||e,props:n,position:s})},hideAll(){K.emit(0)}};function We(){let e=new Map,t,n,s,l,o=!1;function h(m){l=Array.from(m.values()),t=-1,s=!0}function g(){l[t].node.focus()}let p=()=>t>=0&&l[t].isSubmenu,C=()=>Array.from(l[t].submenuRefTracker.values());function u(){return t===-1?(x(),!1):!0}function x(){t+1<l.length?t++:t+1===l.length&&(t=0),o&&v(),g()}function S(){t===-1||t===0?t=l.length-1:t-1<l.length&&t--,o&&v(),g()}function N(){if(u()&&p()){let m=C(),{node:a,setSubmenuPosition:f}=l[t];return e.set(a,{isRoot:s,focusedIndex:t,parentNode:n||a,items:l}),f(),a.classList.add("contexify_submenu-isOpen"),n=a,m.length>0?(t=0,l=m):o=!0,s=!1,g(),!0}return!1}function v(){if(u()&&!s){let m=e.get(n);n.classList.remove("contexify_submenu-isOpen"),l=m.items,n=m.parentNode,m.isRoot&&(s=!0,e.clear()),o||(t=m.focusedIndex,g())}}function M(m){function a(f){for(let d of f)d.isSubmenu&&d.submenuRefTracker&&a(Array.from(d.submenuRefTracker.values())),d.keyMatcher&&d.keyMatcher(m)}a(l)}return{init:h,moveDown:x,moveUp:S,openSubmenu:N,closeSubmenu:v,matchKeys:M}}function D(e){return typeof e=="function"}function ee(e){return typeof e=="string"}function Je(e,t){return i.Children.map(i.Children.toArray(e).filter(Boolean),n=>i.cloneElement(n,t))}function Ye(e){let t={x:e.clientX,y:e.clientY},n=e.changedTouches;return n&&(t.x=n[0].clientX,t.y=n[0].clientY),(!t.x||t.x<0)&&(t.x=0),(!t.y||t.y<0)&&(t.y=0),t}function te(e,t){return D(e)?e(t):e}function Ge(e,t){return{...e,...D(t)?t(e):t}}var de=({id:e,theme:t,style:n,className:s,children:l,animation:o="fade",preventDefaultOnKeydown:h=!0,disableBoundariesCheck:g=!1,onVisibilityChange:p,...C})=>{let[u,x]=i.useReducer(Ge,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),S=i.useRef(null),N=Ke(),[v]=i.useState(()=>We()),M=i.useRef(),m=i.useRef();i.useEffect(()=>(K.on(e,f).on(0,d),()=>{K.off(e,f).off(0,d)}),[e,o,g]),i.useEffect(()=>{u.visible?v.init(N):N.clear()},[u.visible,v,N]);function a(b,E){if(S.current&&!g){let{innerWidth:j,innerHeight:T}=window,{offsetWidth:F,offsetHeight:A}=S.current;b+F>j&&(b-=b+F-j),E+A>T&&(E-=E+A-T)}return{x:b,y:E}}i.useEffect(()=>{u.visible&&x(a(u.x,u.y))},[u.visible]),i.useEffect(()=>{function b(j){h&&j.preventDefault()}function E(j){switch(j.key){case"Enter":case" ":v.openSubmenu()||d();break;case"Escape":d();break;case"ArrowUp":b(j),v.moveUp();break;case"ArrowDown":b(j),v.moveDown();break;case"ArrowRight":b(j),v.openSubmenu();break;case"ArrowLeft":b(j),v.closeSubmenu();break;default:v.matchKeys(j);break}}if(u.visible){window.addEventListener("keydown",E);for(let j of Q)window.addEventListener(j,d)}return()=>{window.removeEventListener("keydown",E);for(let j of Q)window.removeEventListener(j,d)}},[u.visible,v,h]);function f({event:b,props:E,position:j}){b.stopPropagation();let T=j||Ye(b),{x:F,y:A}=a(T.x,T.y);W.flushSync(()=>{x({visible:!0,willLeave:!1,x:F,y:A,triggerEvent:b,propsFromTrigger:E})}),clearTimeout(m.current),!M.current&&D(p)&&(p(!0),M.current=!0)}function d(b){b!=null&&(b.button===2||b.ctrlKey)&&b.type!=="contextmenu"||(o&&(ee(o)||"exit"in o&&o.exit)?x(E=>({willLeave:E.visible})):x(E=>({visible:E.visible?!1:E.visible})),m.current=setTimeout(()=>{D(p)&&p(!1),M.current=!1}))}function y(){u.willLeave&&u.visible&&W.flushSync(()=>x({visible:!1,willLeave:!1}))}function V(){return ee(o)?$({[`contexify_willEnter-${o}`]:L&&!I,[`contexify_willLeave-${o} contexify_willLeave-'disabled'`]:L&&I}):o&&"enter"in o&&"exit"in o?$({[`contexify_willEnter-${o.enter}`]:o.enter&&L&&!I,[`contexify_willLeave-${o.exit} contexify_willLeave-'disabled'`]:o.exit&&L&&I}):null}let{visible:L,triggerEvent:w,propsFromTrigger:c,x:O,y:H,willLeave:I}=u,he=$("contexify",s,{[`contexify_theme-${t}`]:t},V());return k.createElement(Ze,{value:N},L&&k.createElement("div",{...C,className:he,onAnimationEnd:y,style:{...n,left:O,top:H,opacity:1},ref:S,role:"menu"},Je(l,{propsFromTrigger:c,triggerEvent:w})))},P=({id:e,children:t,className:n,style:s,triggerEvent:l,data:o,propsFromTrigger:h,keyMatcher:g,onClick:p=Ue,disabled:C=!1,hidden:u=!1,closeOnClick:x=!0,handlerEvent:S="onClick",...N})=>{let v=i.useRef(),M=Be(),m={id:e,data:o,triggerEvent:l,props:h},a=te(C,m),f=te(u,m);function d(w){m.event=w,w.stopPropagation(),a||(x?y():p(m))}function y(){let w=v.current;w.focus(),w.addEventListener("animationend",()=>setTimeout(J.hideAll),{once:!0}),w.classList.add("contexify_item-feedback"),p(m)}function V(w){w&&!a&&(v.current=w,M.set(w,{node:w,isSubmenu:!1,keyMatcher:!a&&D(g)&&(c=>{g(c)&&(c.stopPropagation(),c.preventDefault(),m.event=c,y())})}))}function L(w){(w.key==="Enter"||w.key===" ")&&(w.stopPropagation(),m.event=w,y())}return f?null:k.createElement("div",{...N,[S]:d,className:$("contexify_item",n,{"contexify_item-disabled":a}),style:s,onKeyDown:L,ref:V,tabIndex:-1,role:"menuitem","aria-disabled":a},k.createElement("div",{className:"contexify_itemContent"},t))};const{DirectoryTree:Xe}=ge,ue="file_menu",fe="folder_menu",qe=({isLocal:e})=>r.jsxs(de,{id:ue,children:[r.jsx(P,{onClick:()=>console.log("開啟檔案"),children:"開啟檔案"}),r.jsx(P,{onClick:()=>console.log("刪除檔案"),children:"刪除檔案"}),r.jsx(P,{onClick:()=>console.log(e?"上傳檔案":"下載檔案"),children:e?"上傳檔案":"下載檔案"})]}),Qe=({nodeKey:e,onOpenFolder:t,nodeTitle:n})=>r.jsxs(de,{id:fe,children:[r.jsx(P,{onClick:()=>t(e),children:"開啟資料夾"}),r.jsx(P,{onClick:()=>console.log("刪除資料夾"),disabled:n==="根目錄"||n==="downloads",children:"刪除資料夾"}),r.jsx(P,{onClick:()=>console.log("新增檔案"),children:"新增檔案"})]}),et=({initialTreeData:e=[{title:"根目錄",key:"root",children:void 0}],isLocal:t,onNodeSelect:n})=>{const[s,l]=i.useState(e),[o,h]=i.useState([]),[g,p]=i.useState(""),[C,u]=i.useState(null);i.useEffect(()=>{h(t?["localStorage"]:["uploads"])},[]);const x=(a,f,d)=>a.map(y=>y.key===f?{...y,children:d}:y.children?{...y,children:x(y.children,f,d)}:y),S=async a=>{try{const f=await(t?window.pywebview.api.get_local_children(a):window.pywebview.api.get_server_children(a)),d=JSON.parse(f);return"error"in d?(console.error("Error:",d.error),[]):d}catch(f){return console.error("Failed to fetch children:",f),[]}},N=async({key:a,children:f})=>f?Promise.resolve():S(a).then(d=>{l(y=>x(y,a,d))}),v=(a,f)=>{a.preventDefault();const d=typeof f.title=="string"?f.title:String(f.title);p(d),u(f.key),f.isLeaf?J.show({id:ue,event:a,props:{node:f}}):J.show({id:fe,event:a,props:{node:f}})},M=(a,f)=>{if(n&&a.length>0){const d=a[0],y=f.node;n(d,y)}},m=a=>{h(f=>[...f,a])};return r.jsxs(r.Fragment,{children:[r.jsx(Xe,{loadData:N,treeData:s,onSelect:M,expandedKeys:o,onRightClick:({event:a,node:f})=>v(a,f),onExpand:a=>h(a)}),r.jsx(qe,{isLocal:t}),C!==null&&r.jsx(Qe,{nodeKey:C,onOpenFolder:m,nodeTitle:g})]})},tt=(e,t)=>{console.log("Selected node key:",e)},rt=[{title:"根目錄",key:"localStorage",children:void 0}];function nt(){return r.jsx("div",{className:"h-full px-2 py-1 bg-gray-500 border-2 rounded",children:r.jsx(et,{onNodeSelect:tt,initialTreeData:rt,isLocal:!0})})}const st=()=>r.jsx("div",{className:"h-full px-2 py-1 bg-gray-500 border-2 rounded",children:r.jsx(pe,{})}),lt=()=>r.jsxs("div",{className:"flex flex-row w-full h-full gap-2",children:[r.jsx("div",{className:"flex-1",children:r.jsx(nt,{})}),r.jsx("div",{className:"flex-1",children:r.jsx(st,{})})]}),ot=()=>r.jsx("div",{className:"w-full h-full p-2 bg-gray-500 border rounded",children:r.jsx("div",{className:"flex items-center w-full h-full px-4",children:"SendStatus"})}),it=()=>{const[e,t]=i.useState("");return r.jsxs("div",{className:"grid grid-rows-[auto_auto_2fr_auto] h-screen min-w-full bg-gray-700 gap-1 p-2",children:[r.jsxs("div",{children:[r.jsx(Fe,{}),r.jsx(Ae,{setMessage:t})]}),r.jsx("div",{className:"h-28",children:r.jsx($e,{message:e})}),r.jsx("div",{className:"grid grid-rows-1 gap-1",children:r.jsx("div",{className:"grid grid-cols-1 gap-1",children:r.jsx(lt,{})})}),r.jsx("div",{className:"h-28",children:r.jsx(ot,{})})]})};le(document.getElementById("root")).render(r.jsx(i.StrictMode,{children:r.jsx(it,{})}));