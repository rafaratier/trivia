(this["webpackJsonptrivia-game"]=this["webpackJsonptrivia-game"]||[]).push([[0],{102:function(e,t,a){e.exports=a(161)},115:function(e,t){},148:function(e,t){},157:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),s=a.n(c),i=a(64),o=a(20),l=a(11),u=a(15),p=a.n(u),m=a(22),d=a(27),h=a(6),b=a(7),f=a(9),v=a(8),y=a(162),g=a(163),E=a(97),O=a(164),k=a(96),j=a.n(k),w=function(){var e=Object(m.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem(t,JSON.stringify(a));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=function(e){return JSON.parse(localStorage.getItem(e))},C=function(){var e=Object(m.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.token);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){return{type:"LOGIN",payload:e}},S=function(e){return{type:"TOKEN",payload:e}},I=function(e){return{type:"QUIZ",payload:e}},A=(a(38),a(165)),D=a(166),q=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.handleInputChange;return r.a.createElement("div",null,r.a.createElement(A.a.Label,{htmlFor:"playerName",className:"name-input-label"},"Name",r.a.createElement(A.a.Control,{type:"text","data-testid":"input-player-name",className:"name-input",name:"playerName",spellcheck:"false",onChange:e})))}}]),a}(n.Component),z=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.handleInputChange;return r.a.createElement("div",null,r.a.createElement(A.a.Label,{htmlFor:"playerEmail",className:"email-input-label"},"E-mail",r.a.createElement(A.a.Control,{type:"email","data-testid":"input-gravatar-email",className:"email-input",name:"playerEmail",spellcheck:"false",onChange:e})))}}]),a}(n.Component),Q=/\S+@\S+\.\S+/,T=function(e,t){return Q.test(e)&&t.length>=3},R=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleInputChange,a=e.handleSettingsClick,n=e.handleSubmit,c=e.playerName,s=e.playerEmail;return r.a.createElement("div",null,r.a.createElement(A.a,{className:"form"},r.a.createElement(A.a.Group,null,r.a.createElement(q,{handleInputChange:t}),r.a.createElement(z,{handleInputChange:t}),r.a.createElement(D.a,{variant:"success",type:"submit",className:"play-btn","data-testid":"btn-play",disabled:!T(s,c),onClick:n},"Play")),r.a.createElement(D.a,{variant:"secondary",type:"button",className:"settings-btn","data-testid":"btn-settings",onClick:a},"Configura\xe7\xf5es")))}}]),a}(n.Component),H=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={playerName:"",playerEmail:""},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e.handleSubmit=function(){var t=Object(m.a)(p.a.mark((function t(a){var n,r,c,s,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.props,r=n.history,(c=n.dispatch)(x(e.state)),t.t0=w,t.next=6,C();case 6:t.t1=t.sent,(0,t.t0)("token",t.t1),s=N("token"),e.setState({playerToken:s}),i=e.state.playerToken,c(S(i)),r.push("/gamepage");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSettingsClick=function(){e.props.history.push("./settings")},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.playerName,a=e.playerEmail;return r.a.createElement(y.a,{className:"form-container"},r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(R,{handleInputChange:this.handleInputChange,handleSettingsClick:this.handleSettingsClick,handleSubmit:this.handleSubmit,playerName:t,playerEmail:a})),r.a.createElement(E.a,null,r.a.createElement(O.a,{fluid:!0,className:"trivia-logo",src:j.a,alt:"logo"}))))}}]),a}(n.Component),B=Object(o.b)()(H),_=a(1),G=function(){var e=Object(m.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=N("token"),e.next=3,fetch("".concat("https://opentdb.com/api.php?amount=5&token=").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:if(0!==(n=e.sent).results.length){e.next=21;break}return e.t0=w,e.next=11,C();case 11:return e.t1=e.sent,(0,e.t0)("token",e.t1),t=N("token"),e.next=16,fetch("".concat("https://opentdb.com/api.php?amount=5&token=").concat(t));case 16:return a=e.sent,e.next=19,a.json();case 19:return n=e.sent,e.abrupt("return",n.results);case 21:return e.abrupt("return",n.results);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=a(98),L=a.n(V),M=function(e){var t=L()(e).toString();return"https://www.gravatar.com/avatar/".concat(t)},F=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.userName,a=e.userEmail,n=e.points;return r.a.createElement("div",{className:"gamepage-header"},r.a.createElement("img",{"data-testid":"header-profile-picture",src:M(a),alt:"player avatar",className:"player-avatar"}),r.a.createElement("p",{"data-testid":"header-player-name"},t),r.a.createElement("p",{"data-testid":"header-score"},"score:"," ",n))}}]),a}(r.a.Component),J=Object(o.b)((function(e){return{userName:e.player.name,userEmail:e.player.gravatarEmail,points:e.player.score}}))(F),P=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.timer;return r.a.createElement("div",{id:"timer",className:"timer"},void 0===e?"":e)}}]),a}(n.Component),U=a(37),K=a.n(U),W=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.clickHandler;return r.a.createElement("button",{name:"button-next",className:"next-btn",type:"button",onClick:e,"data-testid":"btn-next"},"Next")}}]),a}(n.Component),Z=a(23),X=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Loading..."))}}]),a}(n.Component),Y=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.correctAnswer,a=e.shuffledAnswers,n=e.handleAnswerClick,c=Object(Z.a)(a);return r.a.createElement("div",{className:"answers-container","data-testid":"answer-options",id:"parentButton",onClick:n,onKeyDown:n,role:"button",tabIndex:0},0===c.length?r.a.createElement(X,null):c.map((function(e,a){var n=K()(e);return e===t?r.a.createElement("button",{name:"answer",className:"answer-btn",key:a,"data-testid":"correct-answer",type:"button",id:"correct"},n):r.a.createElement("button",{name:"answer",className:"answer-btn",key:a,type:"button","data-testid":"wrong-answer-".concat(a),id:"wrong"},n)})))}}]),a}(n.Component),$=function(e,t){var a=document.querySelectorAll(e),n=document.querySelectorAll(t);return[].concat(Object(Z.a)(a),Object(Z.a)(n))},ee=a(31),te=a(99),ae=a(100),ne={gravatarEmail:"",name:"",score:0,assertions:0};var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(_.a)(Object(_.a)({},e),{},{name:t.payload.playerName,gravatarEmail:t.payload.playerEmail});case"ADD_SCORE":return Object(_.a)(Object(_.a)({},e),{},{score:e.score+t.payload,assertions:e.assertions+1});case"RESET_SCORE":return Object(_.a)(Object(_.a)({},e),{},{score:0,assertions:0});default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOKEN":return t.payload;default:return e}},se={quiz:[]};function ie(e){for(var t=e.length-1;t>0;t-=1){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}function oe(e){for(var t=e.length-1;t>=0;t-=1){var a=[e[t].correct_answer].concat(Object(Z.a)(e[t].incorrect_answers));e[t].randoming=ie(a)}return e}var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUIZ":return{quiz:oe(t.payload)};default:return e}},ue=Object(ee.combineReducers)({player:re,token:ce,reducerQuiz:le}),pe=Object(ee.createStore)(ue,Object(te.composeWithDevTools)(Object(ee.applyMiddleware)(ae.a)));window.Cypress&&(window.store=pe);var me=pe,de=function(e,t){var a=t.difficulty,n=10+e*("hard"===a?3:"medium"===a?2:1);me.dispatch({type:"ADD_SCORE",payload:n})},he=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={buttonNextVisible:!1},e.handleAnswerClick=function(t){var a=e.props,n=a.stopCountDown,r=a.timer,c=a.currQuizIndex,s=a.questionsArr;"correct"===t.target.id&&de(r,s[c]),"answer"===t.target.name&&(n(),e.setState({buttonNextVisible:!0}),e.answersButtonActions("select & disable"))},e.answersButtonActions=function(e){var t=$("#wrong","#correct");"select & disable"===e&&t.forEach((function(e){e.disabled=!0,"correct"===e.id?e.className="correct":e.className="wrong"})),"reset & enable"===e&&t.forEach((function(e){e.className="answer-btn",e.disabled=!1}))},e}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.currQuizIndex,n=t.timer;a!==e.currQuizIndex&&(this.answersButtonActions("reset & enable"),this.setState({buttonNextVisible:!1})),0===n&&1===e.timer&&(this.answersButtonActions("select & disable"),this.setState((function(e){return{buttonNextVisible:!e.buttonNextVisible}})))}},{key:"render",value:function(){var e=this,t=this.props,a=t.questionsArr,n=t.currQuizIndex,c=t.nextQuestionHandler,s=this.state.buttonNextVisible;return r.a.createElement("div",null,r.a.createElement(P,null),0===a.length?r.a.createElement(X,null):[a[n]].map((function(t,a){var n=K()(t.category),i=K()(t.question);return r.a.createElement("div",{className:"quiz-container",key:a},r.a.createElement("div",{className:"quiz-title"},r.a.createElement("p",{className:"quiz-category","data-testid":"question-category"},n),r.a.createElement("p",{className:"question","data-testid":"question-text"},i),s?r.a.createElement(W,{clickHandler:c}):""),r.a.createElement(Y,{handleAnswerClick:e.handleAnswerClick,correctAnswer:t.correct_answer,shuffledAnswers:t.randoming}))})))}}]),a}(n.Component),be=Object(o.b)((function(e){return{questionsArr:e.reducerQuiz.quiz}}))(he),fe=function(){var e=me.getState().player,t=e.name,a=e.score,n=e.gravatarEmail,r={name:t,score:a,picture:M(n)},c=N("ranking");if(null===c)w("ranking",[r]);else{var s=[].concat(Object(Z.a)(c),[r]);w("ranking",s)}},ve=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={questions:[],countDownTimer:30,currQuizIndex:0},e.startCountDown=function(){e.setState((function(e){return{countDownTimer:0!==e.countDownTimer?e.countDownTimer-1:0}}))},e.stopCountDown=function(){clearInterval(e.setIntervalId)},e.nextQuestionHandler=function(){(e.stopCountDown(),4===e.state.currQuizIndex)&&e.props.history.push("/feedback");e.setState((function(e){return Object(_.a)(Object(_.a)({},e),{},{currQuizIndex:e.currQuizIndex+1,countDownTimer:30})})),e.setIntervalId=setInterval(e.startCountDown,1e3)},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,a,n=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:t=e.sent,a=this.props.dispatch,this.setIntervalId=setInterval(this.startCountDown,1e3),this.setState({questions:t},(function(){var e=n.state.questions;a(I(e))})),a({type:"RESET_SCORE",payload:0});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;fe(),this.stopCountDown(),e(I([]))}},{key:"render",value:function(){var e=this.state,t=e.countDownTimer,a=e.currQuizIndex;return r.a.createElement("div",{className:"gamepage"},r.a.createElement(J,null),r.a.createElement(P,{timer:t}),r.a.createElement(be,{timer:t,currQuizIndex:a,stopCountDown:this.stopCountDown,nextQuestionHandler:this.nextQuestionHandler,calculateScore:this.calculateScore}))}}]),a}(n.Component),ye=Object(o.b)((function(e){return{questionsArr:e.reducerQuiz.quiz}}))(ve),ge=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{"data-testid":"settings-title"},"Configura\xe7\xf5es")}}]),a}(r.a.Component),Ee=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={wellDone:!1},e.componentDidMount=function(){e.props.correctAnswers>=3&&e.setState({wellDone:!0})},e.handleClickPlayAgain=function(){e.props.history.push("./")},e.handleClickRanking=function(){e.props.history.push("./ranking")},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state.wellDone,t=this.props,a=t.correctAnswers,n=t.finalScore,c=t.userEmail,s=t.userName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"feedback-header"},r.a.createElement("img",{"data-testid":"header-profile-picture",src:M(c),alt:"player avatar",className:"player-avatar"}),r.a.createElement("p",{"data-testid":"header-player-name"},s),r.a.createElement("p",{"data-testid":"header-score"},"score:"," ",n)),r.a.createElement("div",{className:"feedback-container"},r.a.createElement("p",{"data-testid":"feedback-text",className:e?"welldone-msg":"could-better-msg"},e?"Well Done!":"Could be better..."),r.a.createElement("p",{"data-testid":"feedback-total-score",className:"total-score"}," ","Final Score:"," ",r.a.createElement("span",null,n)),r.a.createElement("p",{"data-testid":"feedback-total-question",className:"total-assertions"},"N\xfamero de respostas corretas:"," ",r.a.createElement("span",null,a)),r.a.createElement("button",{id:"playAgain",className:"play-again-btn",type:"button","data-testid":"btn-play-again",onClick:this.handleClickPlayAgain},"Play again"),r.a.createElement("button",{id:"rankingBtn",className:"ranking-btn",type:"button","data-testid":"btn-ranking",onClick:this.handleClickRanking},"Ranking")))}}]),a}(r.a.Component),Oe=Object(o.b)((function(e){return{correctAnswers:e.player.assertions,finalScore:e.player.score,userName:e.player.name,userEmail:e.player.email}}))(Ee),ke=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClickGoHome=function(){e.props.history.push("/")},e}return Object(b.a)(a,[{key:"render",value:function(){var e=N("ranking").sort((function(e,t){return t.score-e.score}));return r.a.createElement("div",{className:"ranking-container"},r.a.createElement("button",{id:"goHomeBtn",className:"go-home-btn",type:"button","data-testid":"btn-go-home",onClick:this.handleClickGoHome},"Go Home"),r.a.createElement("p",{"data-testid":"ranking-title",className:"ranking-title"},"Ranking"),e.map((function(e,t){return r.a.createElement("div",{className:"players",key:t},r.a.createElement("img",{className:"ranking-avatar",src:e.picture,alt:"player avatar"}),r.a.createElement("p",{className:"ranking-pos"},t+1,"\xba"),r.a.createElement("p",{className:0===t?"winner":"","data-testid":"player-name-".concat(t)},e.name),r.a.createElement("p",{className:0===t?"winner":"","data-testid":"player-score-".concat(t)},e.score))})))}}]),a}(n.Component);a(157);function je(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(B,e)}}),r.a.createElement(l.a,{path:"/gamepage",render:function(e){return r.a.createElement(ye,e)}}),r.a.createElement(l.a,{path:"/settings",component:ge}),r.a.createElement(l.a,{path:"/feedback",render:function(e){return r.a.createElement(Oe,e)}}),r.a.createElement(l.a,{path:"/ranking",render:function(e){return r.a.createElement(ke,e)}})))}s.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:me},r.a.createElement(je,null))),document.getElementById("root"))},56:function(e,t){},57:function(e,t){},84:function(e,t){},90:function(e,t){},96:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.14efb16b.chunk.js.map