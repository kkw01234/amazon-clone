!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));const r=(e,t,n="black")=>{e.innerHTML=t,e.style.color=n},o=(e,t=document)=>t.querySelector(e)},,,,function(e,t,n){"use strict";function r(e){return i(o(c(e)))}function o(e){return a(s(l(e),8*e.length))}function i(e){for(var t,n=f?"0123456789ABCDEF":"0123456789abcdef",r="",o=0;o<e.length;o++)t=e.charCodeAt(o),r+=n.charAt(t>>>4&15)+n.charAt(15&t);return r}function c(e){for(var t,n,r="",o=-1;++o<e.length;)t=e.charCodeAt(o),n=o+1<e.length?e.charCodeAt(o+1):0,t>=55296&&56319>=t&&n>=56320&&57343>=n&&(t=65536+((1023&t)<<10)+(1023&n),o++),127>=t?r+=String.fromCharCode(t):2047>=t?r+=String.fromCharCode(192|t>>>6&31,128|63&t):65535>=t?r+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):2097151>=t&&(r+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return r}function l(e){for(var t=Array(e.length>>2),n=0;n<t.length;n++)t[n]=0;for(n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<24-n%32;return t}function a(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return t}function s(e,t){null==b&&(b=new Array(new d(1116352408,-685199838),new d(1899447441,602891725),new d(-1245643825,-330482897),new d(-373957723,-2121671748),new d(961987163,-213338824),new d(1508970993,-1241133031),new d(-1841331548,-1357295717),new d(-1424204075,-630357736),new d(-670586216,-1560083902),new d(310598401,1164996542),new d(607225278,1323610764),new d(1426881987,-704662302),new d(1925078388,-226784913),new d(-2132889090,991336113),new d(-1680079193,633803317),new d(-1046744716,-815192428),new d(-459576895,-1628353838),new d(-272742522,944711139),new d(264347078,-1953704523),new d(604807628,2007800933),new d(770255983,1495990901),new d(1249150122,1856431235),new d(1555081692,-1119749164),new d(1996064986,-2096016459),new d(-1740746414,-295247957),new d(-1473132947,766784016),new d(-1341970488,-1728372417),new d(-1084653625,-1091629340),new d(-958395405,1034457026),new d(-710438585,-1828018395),new d(113926993,-536640913),new d(338241895,168717936),new d(666307205,1188179964),new d(773529912,1546045734),new d(1294757372,1522805485),new d(1396182291,-1651133473),new d(1695183700,-1951439906),new d(1986661051,1014477480),new d(-2117940946,1206759142),new d(-1838011259,344077627),new d(-1564481375,1290863460),new d(-1474664885,-1136513023),new d(-1035236496,-789014639),new d(-949202525,106217008),new d(-778901479,-688958952),new d(-694614492,1432725776),new d(-200395387,1467031594),new d(275423344,851169720),new d(430227734,-1194143544),new d(506948616,1363258195),new d(659060556,-544281703),new d(883997877,-509917016),new d(958139571,-976659869),new d(1322822218,-482243893),new d(1537002063,2003034995),new d(1747873779,-692930397),new d(1955562222,1575990012),new d(2024104815,1125592928),new d(-2067236844,-1578062990),new d(-1933114872,442776044),new d(-1866530822,593698344),new d(-1538233109,-561857047),new d(-1090935817,-1295615723),new d(-965641998,-479046869),new d(-903397682,-366583396),new d(-779700025,566280711),new d(-354779690,-840897762),new d(-176337025,-294727304),new d(116418474,1914138554),new d(174292421,-1563912026),new d(289380356,-1090974290),new d(460393269,320620315),new d(685471733,587496836),new d(852142971,1086792851),new d(1017036298,365543100),new d(1126000580,-1676669620),new d(1288033470,-885112138),new d(1501505948,-60457430),new d(1607167915,987167468),new d(1816402316,1246189591)));var n,r,o=new Array(new d(1779033703,-205731576),new d(-1150833019,-2067093701),new d(1013904242,-23791573),new d(-1521486534,1595750129),new d(1359893119,-1377402159),new d(-1694144372,725511199),new d(528734635,-79577749),new d(1541459225,327033209)),i=new d(0,0),c=new d(0,0),l=new d(0,0),a=new d(0,0),s=new d(0,0),f=new d(0,0),I=new d(0,0),A=new d(0,0),T=new d(0,0),y=new d(0,0),_=new d(0,0),L=new d(0,0),S=new d(0,0),g=new d(0,0),N=new d(0,0),D=new d(0,0),O=new d(0,0),k=new Array(80);for(r=0;80>r;r++)k[r]=new d(0,0);for(e[t>>5]|=128<<24-(31&t),e[31+(t+128>>10<<5)]=t,r=0;r<e.length;r+=32){for(u(l,o[0]),u(a,o[1]),u(s,o[2]),u(f,o[3]),u(I,o[4]),u(A,o[5]),u(T,o[6]),u(y,o[7]),n=0;16>n;n++)k[n].h=e[r+2*n],k[n].l=e[r+2*n+1];for(n=16;80>n;n++)h(N,k[n-2],19),m(D,k[n-2],29),p(O,k[n-2],6),L.l=N.l^D.l^O.l,L.h=N.h^D.h^O.h,h(N,k[n-15],1),h(D,k[n-15],8),p(O,k[n-15],7),_.l=N.l^D.l^O.l,_.h=N.h^D.h^O.h,E(k[n],L,k[n-7],_,k[n-16]);for(n=0;80>n;n++)S.l=I.l&A.l^~I.l&T.l,S.h=I.h&A.h^~I.h&T.h,h(N,I,14),h(D,I,18),m(O,I,9),L.l=N.l^D.l^O.l,L.h=N.h^D.h^O.h,h(N,l,28),m(D,l,2),m(O,l,7),_.l=N.l^D.l^O.l,_.h=N.h^D.h^O.h,g.l=l.l&a.l^l.l&s.l^a.l&s.l,g.h=l.h&a.h^l.h&s.h^a.h&s.h,w(i,y,L,S,b[n],k[n]),v(c,_,g),u(y,T),u(T,A),u(A,I),v(I,f,i),u(f,s),u(s,a),u(a,l),v(l,i,c);v(o[0],o[0],l),v(o[1],o[1],a),v(o[2],o[2],s),v(o[3],o[3],f),v(o[4],o[4],I),v(o[5],o[5],A),v(o[6],o[6],T),v(o[7],o[7],y)}var C=new Array(16);for(r=0;8>r;r++)C[2*r]=o[r].h,C[2*r+1]=o[r].l;return C}function d(e,t){this.h=e,this.l=t}function u(e,t){e.h=t.h,e.l=t.l}function h(e,t,n){e.l=t.l>>>n|t.h<<32-n,e.h=t.h>>>n|t.l<<32-n}function m(e,t,n){e.l=t.h>>>n|t.l<<32-n,e.h=t.l>>>n|t.h<<32-n}function p(e,t,n){e.l=t.l>>>n|t.h<<32-n,e.h=t.h>>>n}function v(e,t,n){var r=(65535&t.l)+(65535&n.l),o=(t.l>>>16)+(n.l>>>16)+(r>>>16),i=(65535&t.h)+(65535&n.h)+(o>>>16),c=(t.h>>>16)+(n.h>>>16)+(i>>>16);e.l=65535&r|o<<16,e.h=65535&i|c<<16}function E(e,t,n,r,o){var i=(65535&t.l)+(65535&n.l)+(65535&r.l)+(65535&o.l),c=(t.l>>>16)+(n.l>>>16)+(r.l>>>16)+(o.l>>>16)+(i>>>16),l=(65535&t.h)+(65535&n.h)+(65535&r.h)+(65535&o.h)+(c>>>16),a=(t.h>>>16)+(n.h>>>16)+(r.h>>>16)+(o.h>>>16)+(l>>>16);e.l=65535&i|c<<16,e.h=65535&l|a<<16}function w(e,t,n,r,o,i){var c=(65535&t.l)+(65535&n.l)+(65535&r.l)+(65535&o.l)+(65535&i.l),l=(t.l>>>16)+(n.l>>>16)+(r.l>>>16)+(o.l>>>16)+(i.l>>>16)+(c>>>16),a=(65535&t.h)+(65535&n.h)+(65535&r.h)+(65535&o.h)+(65535&i.h)+(l>>>16),s=(t.h>>>16)+(n.h>>>16)+(r.h>>>16)+(o.h>>>16)+(i.h>>>16)+(a>>>16);e.l=65535&c|l<<16,e.h=65535&a|s<<16}n.d(t,"a",(function(){return r}));var b,f=0},function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return c}));var r=n(0),o=n(4);const i={DEFAULT:{content:"",color:"black"},INVALID_ID:{content:"5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",color:"red"},VALID_ID:{content:"사용 가능한 아이디입니다.",color:"green"},EXIST_USER:{content:"이미 사용중인 아이디 입니다.",color:"red"},SAFETY_PASSWORD:{content:"안전한 비밀번호 입니다.",color:"green"},IMPROPER_LENGTH_PASSWORD:{content:"8자 이상 16자 이하로 입력해주세요",color:"red"},NOT_FIND_CAPITAL_LETTER:{content:"영문 대문자를 최소 1자 이상 포함해주세요",color:"red"},NOT_FIND_NUMBER:{content:"숫자를 최소 1자 이상 포함해주세요",color:"red"},NOT_FIND_SPECIAL_LETTER:{content:"특수문자를 최소 1자 이상 포함해주세요",color:"red"},NOT_MATCHING_PASSWORD:{content:"비밀번호가 일치하지 않습니다.",color:"red"},MATCHING_PASSWORD:{content:"비밀번호가 일치합니다.",color:"green"},INVALID_BIRTH_YEAR:{content:"태어난 년도 4자리를 정확하게 입력하세요",color:"red"},UNABLE_REGISTER:{content:"15세 이상 99세 이하일 경우만 회원가입 하실 수 있습니다.",color:"red"},INVALID_BIRTH_MONTH:{content:"월을 선택해 주세요",color:"red"},INVALID_BIRTH_DATE:{content:"정확한 일자를 입력해주세요",color:"red"},INVALID_EMAIL:{content:"이메일 주소를 확인하세요",color:"red"},INVALID_PHONE_NUMBER:{content:"형식에 맞지않는 번호입니다.",color:"red"},OVER_THREE_TAGS:{content:"관심사를 3개 이상 입력해 주세요",color:"red"}},c={render:()=>'\n        <div class="title">회원가입</div>\n        <form>\n        <div class="input-container">\n            <p>아이디</p>\n            <div class="inputText">\n                <input type="text" name="id">\n            </div>\n            <div id="nameError"></div>\n        </div>\n        <div class="input-container">\n            <p>패스워드</p>\n            <div class="inputText">\n                <input type="password" name="password">\n            </div>\n            <div id="passwordError"></div>\n        </div>\n        <div class="input-container">\n            <p>비밀번호 재확인</p>\n            <div class="inputText">\n                <input type="password" name="reconfirmationPassword">\n            </div>\n            <div id="reconfirmationPasswordError"></div>\n        </div>\n        <div class="input-container">\n            <p>이름</p>\n            <div class="inputText">\n                <input type="text" name="name">\n            </div>\n            <div id="nameError"></div>\n        </div>\n        <div class="input-container">\n            <p>생년월일</p>\n            <div class="inputText">\n                <input type="text" name="birthYear" placeholder="년(6자)">\n                <select name="birthMonth">\n                    <option value="">월</option>\n                </select>\n                <input type="text" name="birthDate" placeholder="일">\n            </div>\n            <div id="birthError"></div>\n        </div>\n        <div class="input-container">\n            <p>성별</p>\n            <div class="inputText">\n                <select name="gender">\n                    <option value="">성별</option>\n                    <option value="0">남</option>\n                    <option value="1">여</option>\n                </select>\n            </div>\n        </div>\n        <div class="input-container">\n            <p>이메일</p>\n            <div class="inputText">\n                <input type="email" name="email">\n            </div>\n            <div id="emailError"></div>\n        </div>\n        <div class="input-container">\n            <p>휴대전화</p>\n            <div class="inputText">\n                <input type="text" name="phone">\n            </div>\n            <div id="phoneError"></div>\n        </div>\n        <div class="input-container">\n            <p>관심사</p>\n            <div class="tags-input">\n                <input type="interests" name="interestsform">\n                <input type="hidden" name="interests" value="">\n            </div>\n            <div id="interestsError"></div>\n        </div>\n        <div class="terms-container">\n            <span> 약관에 동의합니다.</span>\n            <input type="checkbox" name="terms" disabled="disabled">\n        </div>\n        <div class="btn-container">\n            <button type="button" class="btn btn-middle" id="initialization-button">초기화</button>\n            <button type="button" class="btn btn-middle" id="register-button">가입하기</button>\n        </div>\n        </form>\n    <div id="register-modal" class="modal">\n        <div class="modal-content">\n           \n        </div>\n    </div>\n    ',init(){l.init(),a.init(),s.init(),d.init(),u.init(),h.init(),m.init(),p.init(),v.init(),w.init(),E.init()}},l={init(){let e=!1;const t=document.querySelector("input[name=id]"),n=document.querySelector("#nameError");t.addEventListener("focusout",async()=>{e=!1;const o=await this.checkId(t.value);Object(r.b)(n,o.content,o.color),o===i.VALID_ID&&(e=!0)}),this.clearIdForm=()=>{t.value="",Object(r.b)(n,""),e=!1},this.getId=()=>!!e&&t.value},async checkId(e){return this.checkAvailableId(e)?await this.findUser(e)?i.EXIST_USER:i.VALID_ID:i.INVALID_ID},checkAvailableId(e){if(e.length<5)return!1;return 0===e.replace(/[_0-9a-zA-z-]*/,"").length},findUser:async e=>new Promise(t=>{fetch("/auth/checkid",{method:"post",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/json"}}).then(e=>{e.json().then(e=>{t(e.result)})})})},a={init(){let e,t;const n=document.querySelector("input[name=password]"),o=document.querySelector("input[name=reconfirmationPassword]"),c=document.querySelector("#passwordError"),l=document.querySelector("#reconfirmationPasswordError");n.addEventListener("input",()=>{e=!1;const t=this.checkPassword(n.value);Object(r.b)(c,t.content,t.color),Object(r.b)(l,i.DEFAULT.content),t==i.SAFETY_PASSWORD&&(e=!0)}),o.addEventListener("input",()=>{t=!1;const e=this.checkReconfirmationandPassword(n.value,o.value);Object(r.b)(l,e.content,e.color),e===i.MATCHING_PASSWORD&&(t=!0)}),this.clearPasswordForm=()=>{n.value="",o.value="",Object(r.b)(c,i.DEFAULT.content),Object(r.b)(l,i.DEFAULT.content),e=!1},this.getPassword=()=>!(!e||!t)&&n.value},checkPassword(e){if(e.length<8)return i.IMPROPER_LENGTH_PASSWORD;let t=/[A-Z]/,n=t.test(e);return n?(n=(t=/[0-9]/).test(e))?(n=(t=/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/).test(e))?i.SAFETY_PASSWORD:i.NOT_FIND_SPECIAL_LETTER:i.NOT_FIND_NUMBER:i.NOT_FIND_CAPITAL_LETTER},checkReconfirmationandPassword:(e,t)=>e===t?i.MATCHING_PASSWORD:i.NOT_MATCHING_PASSWORD},s={init(){const e=document.querySelector("input[name=name]");this.clearNameForm=()=>{e.value=""},this.getName=()=>""!=e.value&&e.value}},d={init(){let e,t,n;const o=document.querySelector("input[name=birthYear]"),c=document.querySelector("Select[name=birthMonth]"),l=document.querySelector("input[name=birthDate]"),a=document.querySelector("#birthError");for(let e=1;e<=12;e++)c.insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`);o.addEventListener("input",()=>{e=!1;const s=this.checkBirthYear(o.value);if(Object(r.b)(a,s.content,s.color),s==i.DEFAULT){e=!0;const s=this.checkBirthYear(o.value),d=this.checkBirthDate(o.value,c.value,l.value);s===i.INVALID_BIRTH_MONTH?(Object(r.b)(a,s.content,s.color),t=!1):d===i.INVALID_BIRTH_DATE&&(Object(r.b)(a,d.content,d.color),n=!1)}}),c.addEventListener("input",()=>{t=!1;const s=this.checkBirthMonth(c.value);if(Object(r.b)(a,s.content,s.color),s===i.DEFAULT){t=!0;const s=this.checkBirthYear(o.value),d=this.checkBirthDate(o.value,c.value,l.value);s===i.INVALID_BIRTH_YEAR?(e=!1,Object(r.b)(a,s.content,s.color)):d===i.INVALID_BIRTH_DATE&&(n=!1,Object(r.b)(a,d.content,d.color))}}),l.addEventListener("input",()=>{n=!1;const e=this.checkBirthDate(o.value,c.value,l.value);Object(r.b)(a,e.content,e.color),e===i.DEFAULT&&(n=!0)}),this.clearBirthForm=()=>{o.value="",c.value="",l.value="",Object(r.b)(a,""),e=!1,t=!1,n=!1},this.getBirth=()=>!!(e&&t&&n)&&[o.value,c.value,l.value]},checkBirthYear(e){if(4!==e.length)return i.INVALID_BIRTH_YEAR;const t=(new Date).getFullYear();return t-e<15||t-e>99?i.UNABLE_REGISTER:i.DEFAULT},checkBirthMonth:e=>""===e?i.INVALID_BIRTH_MONTH:i.DEFAULT,checkBirthDate(e,t,n){if(4!==e.length)return i.INVALID_BIRTH_YEAR;if(n<0)return i.INVALID_BIRTH_DATE;switch(1*t){case 1:case 3:case 5:case 7:case 8:case 10:case 12:if(n>31)return i.INVALID_BIRTH_DATE;break;case 4:case 6:case 9:case 11:if(n>30)return i.INVALID_BIRTH_DATE;break;case 2:if(this.checkLeapYear(e)&&n>29)return i.INVALID_BIRTH_DATE;if(n>28)return i.INVALID_BIRTH_DATE;break;default:return i.INVALID_BIRTH_MONTH}return i.DEFAULT},checkLeapYear(e){if(e%4)return!(e%100)||!!(e%400)}},u={init(){const e=document.querySelector("select[name=gender]");this.clearGenderform=()=>{e.value=""},this.getGender=()=>""!==e.value&&e.value}},h={init(){let e=!1;const t=document.querySelector("input[name=email]"),n=document.querySelector("#emailError");t.addEventListener("input",()=>{e=!1;const o=this.checkEmail(t.value);Object(r.b)(n,o.content,o.color),o===i.DEFAULT&&(e=!0)}),this.clearEmailForm=()=>{t.value="",Object(r.b)(n,""),e=!1},this.getEmail=()=>!!e&&t.value},checkEmail:e=>/[^@]+@[^@]+(\.)[^@]+/.test(e)?i.DEFAULT:i.INVALID_EMAIL},m={init(){let e=!1;const t=document.querySelector("input[name=phone]"),n=document.querySelector("#phoneError");t.addEventListener("input",()=>{e=!1;const o=this.checkPhone(t.value);Object(r.b)(n,o.content,o.color),o===i.DEFAULT&&(e=!0)}),this.clearPhoneForm=()=>{t.value="",Object(r.b)(n,""),e=!1},this.getPhone=()=>!!e&&t.value},checkPhone(e){if(e.length<10||e.length>11)return i.INVALID_PHONE_NUMBER;if(1*e[0]!=0||1*e[1]!=1||1*e[2]!=0)return i.INVALID_PHONE_NUMBER;return/[0-9]+/.test(e)?i.DEFAULT:i.INVALID_PHONE_NUMBER}},p={init(){this.interestList=[];let e=!1;const t=document.querySelector(".tags-input"),n=document.querySelector("input[name=interestsform]");n.addEventListener("keydown",o=>{if(!e&&8==o.keyCode&&t.children.length>1){const e=document.getElementsByClassName(`${p.interestList.length}`)[0];t.removeChild(e),this.interestList.pop(),n.value=e.textContent,this.checkInterests()?Object(r.b)(document.querySelector("#interestsError"),registeEnum.DEFAULT.content):Object(r.b)(document.querySelector("#interestsError"),i.OVER_THREE_TAGS.content,i.OVER_THREE_TAGS.color)}}),n.addEventListener("input",o=>{if(8==o.keyCode)return;if(0===n.value.length)return void(e=!1);e=!0;const c=this.checkComma(n.value);if("removeComma"===c)n.value="";else if(c){const o=document.createElement("span");o.classList.add("tag"),o.classList.add(`${p.interestList.length+1}`),o.textContent=n.value.split(",")[0],this.interestList.push(o.textContent),o.appendChild(this.makeClose(o)),t.insertBefore(o,n),n.value="",e=!1,this.checkInterests()?Object(r.b)(document.querySelector("#interestsError"),i.DEFAULT.content):Object(r.b)(document.querySelector("#interestsError"),i.OVER_THREE_TAGS.content,i.OVER_THREE_TAGS.color)}})},checkComma(e){const t=e.split(",");return t.length>=2&&""!==t[0]?t[0]:""==t[0]?"removeComma":""},makeClose(e){const t=document.createElement("img");return t.style.width="1em",t.style.height="1em",t.setAttribute("src","./images/close.svg"),t.addEventListener("click",()=>{document.querySelector(".tags-input").removeChild(e)}),t},checkInterests(){return!(this.interestList.length<3)},getInterests(){return!!this.checkInterests()&&this.interestList},clearInterests(){const e=document.querySelector(".tags-input");for(;"tag"==e.firstElementChild.className;)e.removeChild(e.firstElementChild)}},v={init(){const e=document.querySelector(".terms-container"),t=document.querySelector(".modal");e.addEventListener("click",()=>{const e=document.querySelectorAll(".modal-content")[0];e.className="modal-content modal-large",e.innerHTML="",t.style.display="block",this.makeTerms(e),e.querySelector(".close").addEventListener("click",()=>{t.style.display="none"});const n=e.querySelector(".terms"),r=e.querySelector("#terms-btn");r.addEventListener("click",this.clickButton),n.addEventListener("scroll",()=>{const e=n.scrollTop;n.scrollHeight-n.offsetHeight<=e&&(r.disabled=!1,r.classList.remove("btn-disabled"))})})},makeTerms(e){const t=document.createElement("div"),n=document.createElement("img"),r=document.createElement("h4"),o=document.createElement("textarea"),i=document.createElement("div"),c=document.createElement("button");t.className="close",n.src="./images/close.svg",n.style.width="20px",n.style.height="20px",t.appendChild(n),r.textContent="개인정보 수집 및 이용에 대한 안내",o.className="terms",o.readOnly=!0,o.textContent="  정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.\n    \n    1. 수집하는 개인정보의 항목\n    최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.\n    - 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사\n    \n    2. 개인정보의 수집 및 이용 목적\n    가. 컨텐츠 제공, 특정 맞춤 서비스 제공\n    나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재\n    \n    3. 개인정보의 보유 및 이용기간\n    이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.\n    \n    가. 회사 내부 방침에 의한 정보보유 사유\n    - 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)\n    보존 항목 : 가입인증 휴대폰 번호\n    보존 이유 : 부정 가입 및 이용 방지\n    보존 기간 : 6개월\n    ※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.\n    \n    나. 관련법령에 의한 정보보유 사유\n    상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다. \n    - 계약 또는 청약철회 등에 관한 기록\n    보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률\n    보존 기간 : 5년\n    - 소비자의 불만 또는 분쟁처리에 관한 기록\n    보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률\n    보존 기간 : 3년\n    - 웹사이트 방문기록\n    보존 이유 : 통신비밀보호법\n    보존 기간 : 3개월",i.className="btn-container",c.id="terms-btn",c.className="btn btn-disabled btn-small",c.disabled="disabled",c.textContent="가입",i.appendChild(c),e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(i)},clickButton(){const e=document.querySelector("input[name=terms]"),t=document.querySelector(".modal");e.checked=!0,t.style.display="none"}},E={init(){document.querySelector("#initialization-button").addEventListener("click",this.initializationListener)},initializationListener(){const e=document.querySelector(".modal"),t=document.querySelector(".modal-content"),n=document.createElement("p");n.textContent="정말로 삭제하시겠습니까?",t.innerHTML="",t.appendChild(n);const r=document.createElement("div");r.className="btn-container";const o=document.createElement("button"),i=document.createElement("button");return o.className="btn btn-small",o.textContent="삭제",o.addEventListener("click",E.deleteAll),i.className="btn btn-small",i.textContent="취소",i.addEventListener("click",()=>{t.className="modal-content modal-large",e.style.display="none"}),r.appendChild(o),r.appendChild(i),t.appendChild(r),t.className="modal-content modal-small",e.style.display="block",!1},deleteAll(){const e=document.querySelector(".modal");l.clearIdForm(),a.clearPasswordForm(),s.clearNameForm(),d.clearBirthForm(),u.clearGenderform(),h.clearEmailForm(),m.clearPhoneForm(),p.clearInterests(),document.querySelector("input[name=terms]").checked=!1,e.style.display="none"}},w={init(){document.querySelector("#register-button").addEventListener("click",this.checkRegisterHandler)},checkRegisterHandler(){const e=document.querySelector(".modal"),t=l.getId(),n=a.getPassword(),r=s.getName(),o=d.getBirth(),i=u.getGender(),c=h.getEmail(),v=m.getPhone(),E=p.getInterests(),b={"아이디":t,"패스워드":n,"이름":r,"생년월일":o,"셩별":i,"이메일":c,"휴대전화":v,"관심사":E,"약관":document.querySelector("input[name=terms]").checked};for(let t in b)if(!b[t]){const n=document.querySelector(".modal-content"),r=document.createElement("p"),o=document.createElement("div"),i=document.createElement("button");return r.textContent=`${t}를(을) 확인해 주세요`,o.className="btn-container",i.className="btn btn-small",i.textContent="확인",i.addEventListener("click",()=>{n.innerHTML="",e.style.display="none"}),n.innerHTML="",o.appendChild(i),n.appendChild(r),n.appendChild(o),n.className="modal-content modal-small",e.style.display="block",!1}fetch("/auth/register",{method:"post",body:w.makeJSON(t,n,r,o,i,c,v,E),headers:{"Content-Type":"application/json"}}).then(e=>{e.json().then(e=>{e.result?window.location.href="/":alert("에러발생")})})},makeJSON:(e,t,n,r,i,c,l,a)=>JSON.stringify({id:e,password:Object(o.a)(e+t),name:n,birth:r.join("-"),gender:i,email:c,phone:l,interests:a})};Object(r.a)("#root").innerHTML=c.render(),c.init()}]);