(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(14),n(3)),s=n(4),l=n(6),u=n(5),h=n(7),d=(n(15),n(16),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.worker.id,"?set=set5&size=180x180"),alt:"robots"}),r.a.createElement("h1",null,e.worker.name),r.a.createElement("p",null,e.worker.email))}),f=function(e){return r.a.createElement("div",{className:"cardList"},e.workers.map(function(e){return r.a.createElement(d,{key:e.id,worker:e})}))},m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),w=(n(18),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChangeHandler=function(t){e.setState({searchfield:t.target.value})},e.state={workers:[],searchfield:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"searchfieldHandler",value:function(){var e=this,t=this.state,n=t.workers,a=t.searchfield;return n.filter(function(t){return t.name.toLowerCase().includes(a.toLowerCase(function(t){return e.setState({searchfield:t.target.value})}))})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({workers:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Workers"),r.a.createElement(m,{placeholder:"search user",handleChange:this.handleChangeHandler,id:"search"}),r.a.createElement(f,{workers:this.searchfieldHandler()}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.5a2bd505.chunk.js.map