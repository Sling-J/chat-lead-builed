(this["webpackJsonpmlp-preview"]=this["webpackJsonpmlp-preview"]||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/growth-tool-example.c7bbc01f.png"},123:function(e,t,a){e.exports=a(209)},208:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(4),i=a.n(o),r=a(51),s=a(118),c=a(25),m=a(35),p=a(100),u=a(101),d=a(52),f=a(103),h=a.n(f).a.create({baseURL:"https://api.chatlead.io/app/api",headers:{"Content-Type":"application/json"}}),g=function(e){return h.post("/GetMlpGuest/",e)},y={singleMLP:{},loadingOfMLP:!1,errorOfMLP:null},E=Object(m.applyMiddleware)(u.a),w=Object(m.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SINGLE_MLP_REQUEST":return Object(d.a)({},e,{singleMLP:{},loadingOfMLP:!0,errorOfMLP:null});case"GET_SINGLE_MLP_SUCCESS":return Object(d.a)({},e,{singleMLP:t.payload,loadingOfMLP:!1,errorOfMLP:null});case"GET_SINGLE_MLP_FAILURE":return Object(d.a)({},e,{singleMLP:{},loadingOfMLP:!1,errorOfMLP:t.error});default:return e}}),Object(p.composeWithDevTools)(E)),b=a(120),v=a(211),_=a(213),L=a(212),C=function(e){var t=/\D*/g;-1!==e.target.value.search(t)&&(e.target.value=e.target.value.replace(t,""))},M=a(104),P=a.n(M),N=a(214),k=a(24),T=function(e){var t=e.title,a=e.subTitle;return l.a.createElement(N.a,{style:{paddingTop:"5%"},status:"404",title:t,subTitle:a,extra:l.a.createElement("a",{href:"https://chatlead.io/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(k.a,{type:"primary"},"Chatlead.io"))})},S=Object(r.b)((function(e){return{singleMLP:e.singleMLP,loadingOfMLP:e.loadingOfMLP,errorOfMLP:e.errorOfMLP}}),(function(e){return{getSingleMLP:function(t){return e(function(e){var t=function(e){return{type:"GET_SINGLE_MLP_FAILURE",error:e}};return function(a){a({type:"GET_SINGLE_MLP_REQUEST"});var n=new FormData;n.append("key",e),g(n).then((function(e){return e.data.ok?a({type:"GET_SINGLE_MLP_SUCCESS",payload:e.data.mlp}):a(t(e.data))})).catch((function(e){return a(t(e.messages))}))}}(t))}}}))((function(e){var t=e.singleMLP,a=e.mlpId,o=e.getSingleMLP,i=e.errorOfMLP,r=e.loadingOfMLP,s=Object(n.useState)(!1),c=Object(b.a)(s,2),m=c[0],p=c[1],u=t.content?t.content.description.firstSection.title:"",d=t.content?t.content.description.firstSection.phone:"",f=t.content?t.content.description.secondSection.title:"",h=t.content?t.content.description.secondSection.phone:"",g=t.content?t.content.description.actionTitle:"",y=t.content?JSON.parse(t.content.socialList):[];Object(n.useEffect)((function(){o(a)}),[o,a]);return i?l.a.createElement(T,{title:"Oops!",subTitle:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 MLP"}):l.a.createElement(v.a,{spinning:r,tip:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 MLP ..."},l.a.createElement("div",{className:"mlp-content__result"},l.a.createElement("div",{className:"mlp-content-result__info"},l.a.createElement("div",{className:"mlp-content-result__info-container"},l.a.createElement("div",{className:"mlp-content-result-info__img"},l.a.createElement("img",{src:P.a,alt:"MLP Example"})),0!==u.length&&0===f.length&&l.a.createElement("div",{className:"mlp-content-result-info__item"},l.a.createElement("h1",{className:"mlp-content-result-info-item__title mlp-content-result-info-item__title-1"},0!==u.length?u:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),l.a.createElement("div",{className:"mlp-content-result-info-item__field"},l.a.createElement("p",null,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430:"),l.a.createElement(_.a,{type:"text",value:h,placeholder:"87022585858",onInput:C}))),0===u.length&&0!==f.length&&l.a.createElement("div",{className:"mlp-content-result-info__item"},l.a.createElement("div",{className:"mlp-content-result-info-item__field mlp-content-result-info-item__field-input-2"},l.a.createElement("p",null,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430:"),l.a.createElement(_.a,{type:"text",value:d,onInput:C})),l.a.createElement("h1",{className:"mlp-content-result-info-item__title mlp-content-result-info-item__title-2"},0!==f.length?f:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435")),0!==u.length&&0!==f.length&&l.a.createElement("div",{className:"mlp-content-result-info__item"},l.a.createElement("h1",{className:"mlp-content-result-info-item__title mlp-content-result-info-item__title-3"},0!==u.length?u:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),l.a.createElement("h1",{className:"mlp-content-result-info-item__title-4"},0!==f.length?f:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),l.a.createElement("div",null,l.a.createElement("p",{className:"mlp-content-result__action"},g),l.a.createElement("div",{className:"mlp-content-result__socials"},y.map((function(e,t){return l.a.createElement("a",{key:t,href:e.url,className:"mlp-content-result-socials__item mlp-content-result-socials__item-".concat(e.social),target:"_blank",rel:"noopener noreferrer"},"vk"===e.social?l.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"vk",className:"svg-inline--fa fa-vk fa-w-18",role:"img",viewBox:"0 0 576 512"},l.a.createElement("path",{fill:"currentColor",d:"M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"})):"telegram"===e.social?l.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"telegram",className:"svg-inline--fa fa-telegram fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},l.a.createElement("path",{fill:"currentColor",d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"})):"facebook"===e.social?l.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-messenger",className:"svg-inline--fa fa-facebook-messenger fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{fill:"currentColor",d:"M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"})):"whatsapp"===e.social?l.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"whatsapp",className:"svg-inline--fa fa-whatsapp fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.a.createElement("path",{fill:"currentColor",d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"})):"",l.a.createElement("p",{className:"mlp-content-result-socials-item__title"},"vk"===e.social?"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435":"telegram"===e.social?"Telegram":"facebook"===e.social?"Messenger":"whatsapp"===e.social?"WhatsApp":""))}))))),l.a.createElement("div",{className:"mlp-content-result__footer"},l.a.createElement("p",{className:"mlp-content-result__terms"},"\u0412\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 ",l.a.createElement("span",{onClick:function(){return p(!0)}},"Terms of Use & Privacy Policy")),l.a.createElement("p",{className:"mlp-content-result__link"},"\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0432 ",l.a.createElement("a",{href:"https://chatlead.io/",target:"_blank",rel:"noopener noreferrer"},"\u0421hatlead.io")," ",l.a.createElement("span",null,"\u2665"))),l.a.createElement(L.a,{title:"Web Site Terms and Conditions of Use",visible:m,onCancel:function(){return p(!1)},footer:null,wrapClassName:"mlp-terms-popup-content",style:{top:25}},l.a.createElement("div",{className:"popup-content"},l.a.createElement("p",null,"By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law."),l.a.createElement("h3",null,"2. Use License"),l.a.createElement("ol",{type:"a",className:"popup-content-ol"},l.a.createElement("li",null,"Permission is granted to temporarily download one copy of the materials (information or software) on Chatlead's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",l.a.createElement("ol",{type:"i",className:"popup-content-ol-sub"},l.a.createElement("li",null,"modify or copy the materials;"),l.a.createElement("li",null,"use the materials for any commercial purpose, or for any public display (commercial or non-commercial);"),l.a.createElement("li",null,"attempt to decompile or reverse engineer any software contained on Chatlead's web site;"),l.a.createElement("li",null,"remove any copyright or other proprietary notations from the materials; or"),l.a.createElement("li",null,'transfer the materials to another person or "mirror" the materials on any other server.'))),l.a.createElement("li",null,"This license shall automatically terminate if you violate any of these restrictions and may be terminated by Chatlead at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.")),l.a.createElement("h3",null,"3. 'Disclaimer'"),l.a.createElement("ol",{type:"a",className:"popup-content-ol"},l.a.createElement("li",null,'The materials on Chatlead\'s web site are provided "as is". Chatlead makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Chatlead does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.')),l.a.createElement("h3",null,"4. 'Limitations'"),l.a.createElement("p",null,"In no event shall Chatlead or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Chatlead's Internet site, even if Chatlead or a Chatlead authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."),l.a.createElement("h3",null,"5. 'Revisions and Errata'"),l.a.createElement("p",null,"The materials appearing on Chatlead's web site could include technical, typographical, or photographic errors. Chatlead does not warrant that any of the materials on its web site are accurate, complete, or current. Chatlead may make changes to the materials contained on its web site at any time without notice. Chatlead does not, however, make any commitment to update the materials."),l.a.createElement("h3",null,"6. 'Links'"),l.a.createElement("p",null,"Chatlead has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Chatlead of the site. Use of any such linked web site is at the user's own risk."),l.a.createElement("h3",null,"7. 'Site Terms of Use Modifications'"),l.a.createElement("p",null,"Chatlead may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use."),l.a.createElement("h3",null,"8. 'Governing Law'"),l.a.createElement("p",null,"Any claim relating to Chatlead's web site shall be governed by the laws of the State of Delaware without regard to its conflict of law provisions."),l.a.createElement("p",null,"General Terms and Conditions applicable to Use of a Web Site."),l.a.createElement("h2",null,"Privacy Policy"),l.a.createElement("p",null,"Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy."),l.a.createElement("ul",null,l.a.createElement("li",null,"Before or at the time of collecting personal information, we will identify the purposes for which information is being collected."),l.a.createElement("li",null,"We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law."),l.a.createElement("li",null,"We will only retain personal information as long as necessary for the fulfillment of those purposes."),l.a.createElement("li",null,"We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned."),l.a.createElement("li",null,"Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date."),l.a.createElement("li",null,"We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification."),l.a.createElement("li",null,"We will make readily available to customers information about our policies and practices relating to the management of personal information.")),l.a.createElement("p",null,"We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.")))))})),O=function(){return l.a.createElement(r.a,{store:w},l.a.createElement(s.a,null,l.a.createElement(c.a,{path:"/mlp/:mlpId",exact:!0,render:function(e){return l.a.createElement(S,{mlpId:e.match.params.mlpId})}})))};a(207),a(208);i.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.f005f298.chunk.js.map