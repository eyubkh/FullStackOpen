var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,c=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&l(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&l(e,n,t[n]);return e},i=(e,r)=>t(e,n(r));import{q as m,e as p,r as s,u,c as d,R as f,a as b}from"./vendor.1a831309.js";const h="https://warm-bastion-30668.herokuapp.com/api/persons/",E=m(p.p)`
  position: absolute;
  transform: translateX(-50%);
  left: 15%;
  display: inline-block;
  padding: 10px 50px;
  font-size: 20px;
  color: #fff;
  margin-top: 10px;
  border: solid 3px #111;
  background-color: #333;

`;function g(){const[e,t]=s.exports.useState([]),[n,r]=s.exports.useState(""),[a,o]=s.exports.useState("Welcome");function l(n){const r=e.filter((e=>e.id!==n)),a=e.find((e=>e.id==n));o(`Contac ${a.name} removed`),t(r),(e=>{fetch(`${h}${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))})(n)}s.exports.useEffect((()=>{fetch(h).then((e=>e.json())).then((e=>{t(e)})).catch((e=>console.log("Error del fetch",{err:e})))}),[]);const[m,p]=u((()=>({from:{top:"-73px"}})));s.exports.useEffect((()=>{p({to:[{top:"25px"},{top:"-75px"}],delay:500,config:d.slow})}),[e]);let b=new RegExp(n,"ig");return f.createElement("main",null,f.createElement(E,{style:m},a),f.createElement("h2",null,"Phonebook"),f.createElement("input",{type:"text",name:"",id:"",onChange:function(e){r(e.target.value)}}),f.createElement("h2",null,"Add a new"),f.createElement("form",{onSubmit:function(n){n.preventDefault(),o(`Contac ${n.target[0].value} added`);let r=e.map((e=>e.name==n.target[0].value?e.id:"")).filter((e=>""!=e));const a={name:n.target[0].value,number:n.target[1].value};if(0===r.length)t(e.concat(i(c({},a),{id:Math.random()}))),((e={})=>{fetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(a);else{const l=e.filter((e=>e.id!=r[0]));t(l.concat(i(c({},a),{id:Math.random()}))),o(`Contac ${n.target[0].value} Updated`),((e,t)=>{fetch(`${h}${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(a,r[0])}n.target[0].value="",n.target[1].value=""}},f.createElement("label",{htmlFor:"name"},"name: "),f.createElement("input",{type:"text",id:"name",required:!0}),f.createElement("label",{htmlFor:"number"},"number: "),f.createElement("input",{type:"tel",name:"",id:"number",pattern:"[0-9]{9}",required:!0}),f.createElement("button",null,"add")),f.createElement("h2",null,"Numbers"),e.filter((e=>e.name.match(b))).map(((e,t)=>f.createElement("div",{key:e.id?e.id:e.name},f.createElement("p",null,e.name),f.createElement("p",null,e.number),f.createElement("button",{onClick:()=>l(e.id)},"remove")))))}b.render(f.createElement(f.StrictMode,null,f.createElement(g,null)),document.getElementById("root"));
