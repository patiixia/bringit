(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(55)},31:function(e,t,n){},32:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(22),l=n.n(s),i=(n(31),n(6)),o=n(7),c=n(9),u=n(8),m=n(10),h=(n(32),n(59)),g=n(58),d=n(23),p=n.n(d),v=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{email:e,password:n}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/login",{email:e,password:n}).then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var n=p.a.create({baseURL:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).API_URL,"/"),withCredentials:!0});this.service=n},f=n(12),b=n(56),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.email,a=n.state.password,r=n.state.name,s=n.state.lastName;n.service.signup(t,a,r,s).then(function(e){n.setState({email:"",password:"",name:"",lastName:""}),n.props.getUser(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.state={email:"",password:"",name:"",lastName:""},n.service=new v,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{type:"text",name:"lastName",value:this.state.lastName,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have an account?",r.a.createElement(b.a,{to:"/login"}," Login")))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:null},n.service=new v,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-style"})}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.email,a=n.state.password;n.service.login(t,a).then(function(e){n.setState({email:"",password:""}),n.props.getUser(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.state={email:"",password:""},n.service=new v,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have account?",r.a.createElement(b.a,{to:"/signup"}," Signup")))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){n.setState({loggedInUser:e})},n.state={loggedInUser:null},n.service=new v,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?r.a.createElement("div",{className:"App"},r.a.createElement(w,{userInSession:this.state.loggedInUser}),r.a.createElement(h.a,null)):r.a.createElement("div",{className:"App"},r.a.createElement(w,{userInSession:this.state.loggedInUser}),r.a.createElement(h.a,null,r.a.createElement(g.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(O,{getUser:e.getTheUser})}}),r.a.createElement(g.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(E,{getUser:e.getTheUser})}})))}}]),t}(a.Component),U=n(57);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(U.a,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.d71042ff.chunk.js.map