(this.webpackJsonpkonfi=this.webpackJsonpkonfi||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),r=n(18),o=n.n(r),c=(n(27),n(28),n.p+"static/media/logo.01210f68.png"),h=(n(29),n(13)),l=n(3),d=n(7),u=n(8),g=n(11),b=n(10),j=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"determineStyle",value:function(){var e="btn";return this.props.secondary&&(e+=" bg-indigo"),this.props.size&&("big"===this.props.size?e+=" btn-lg":"medium"===this.props.size?e+=" btn-md":"small"===this.props.size&&(e+=" btn-sm")),e}},{key:"render",value:function(){var e=this.determineStyle();return Object(a.jsx)("div",{className:e,onClick:this.props.onClick,children:this.props.text})}}]),n}(s.a.Component),p=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).canvasRef=s.a.createRef(),a.state={textValue:""},a}return Object(u.a)(n,[{key:"determineStyle",value:function(){return{width:this.props.size?this.props.size:"90vw"}}},{key:"onInputHandler",value:function(e){var t;this.setState({textValue:e.target.value},null===(t=this.props)||void 0===t?void 0:t.onInput(e.target.value))}},{key:"render",value:function(){var e=this.determineStyle();return Object(a.jsxs)("div",{className:"TextareaParent",children:[Object(a.jsx)("textarea",{maxLength:this.props.textMaxLength,style:e,className:this.props.isDisabled?"InputTextArea TextDisabled":"InputTextArea",type:"text",placeholder:"Your Secret Message",value:this.state.textValue,onInput:this.onInputHandler.bind(this)}),Object(a.jsxs)("p",{className:"InformationText",children:["This image can only take up to ",this.props.textMaxLength," characters. You used ",this.state.textValue.length," characters ( not words )"]})]})}}]),n}(s.a.Component),f=n(19),m=n.n(f);function x(e){if(e<0||e>255||e%1!==0)throw new Error(e+" does not fit in a byte");return("000000000"+e.toString(2)).substr(-8)}function v(e){return parseInt(e,2)}function O(e,t){if(8!==e.length)throw new Error("This is not a valid byte!");return void 0===t?e:e.substr(0,7)+t}var y=function(){function e(t,n){Object(d.a)(this,e),this.rawImage=[],this.currentImg=n,this.imageContext=t,console.log("Steganography created with raw data. Dimensions",t)}return Object(u.a)(e,[{key:"CalculateByteSize",value:function(){if(this.currentImg)return this.currentImg.width*this.currentImg.height*3;throw new Error("Function requires an image! Please check your constructor")}},{key:"HideDataInContext",value:function(e){return this.CreateRawDataFromContext(),{data:this.EmbedTextInsideRawData(e),image:this.currentImg}}},{key:"CreateRawDataFromContext",value:function(){for(var e=[],t=0;t<this.currentImg.width;t++){for(var n=[],a=0;a<this.currentImg.height;a++){var i=this.imageContext.getImageData(t,a,1,1).data;n.push(i)}e.push(n)}this.rawImage=e}},{key:"EmbedTextInsideRawData",value:function(e){if(!this.rawImage)throw new Error("Please call CreateRawDataFromContext() first!");if(8*e.length>this.CalculateByteSize())throw new Error("Can't do the operation! Text is too big");e=btoa(unescape(encodeURIComponent(e))),console.log("Content length",e.length);var t=function(e){if(e<0||e>4294967296||e%1!==0)throw new Error(e+" does not fit in a 4294967296");return("00000000000000000000000000000000"+e.toString(2)).substr(-32)}(e.length),n=function(e){for(var t="",n=0;n<e.length;n++)t+=("000000000"+e[n].charCodeAt(0).toString(2)).substr(-8);return t}(e);n=t+n;for(var a=0,i=0;i<this.rawImage.length;i++)for(var s=0;s<this.rawImage[0].length;s++){for(var r=0;r<3;r++){var o=this.rawImage[i][s][r];this.rawImage[i][s][r]=v(O(x(o),n[a])),a++}if(a>=n.length)return this.rawImage}}},{key:"GetHiddenContent",value:function(){for(var e="",t=0;t<this.currentImg.width;t++){for(var n=0;n<this.currentImg.height;n++){for(var a=this.imageContext.getImageData(t,n,1,1).data,i=0;i<3&&32!==(e+=x(a[i]).slice(-1)).length;i++);if(32===e.length)break}if(32===e.length)break}var s=v(e),r=-32,o="";for(t=0;t<this.currentImg.width;t++){for(n=0;n<this.currentImg.height;n++){for(var c=this.imageContext.getImageData(t,n,1,1).data,h=0;h<3&&(o+=x(c[h]).slice(-1),!(++r>=8*s));h++);if(r>=8*s)break}if(r>=8*s)break}return decodeURIComponent(escape(atob(function(e){if(e.match(/[10]{8}/g))return e.match(/([10]{8}|\s+)/g).map((function(e){return String.fromCharCode(parseInt(e,2))})).join("")}(o.substr(32)))))}}]),e}(),w=n(20),C=n.n(w),I=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).canvasRef=s.a.createRef(),a.steganObj=null,a.state={isUploaded:!1,maxCharCount:100,disableTextarea:!1,userContent:""},a}return Object(u.a)(n,[{key:"onChangeFile",value:function(e){e.stopPropagation(),e.preventDefault();var t=this,n=e.target.files[0],a=this.canvasRef.current,i=new FileReader;i.onload=function(e){var n=new Image;n.src=e.target.result,n.onload=function(){a.width=n.width,a.height=n.height;var e=a.getContext("2d");e.drawImage(n,0,0),t.setState({isLoading:!0},(function(){t.steganObj=new y(e,n);var a=t.steganObj.CalculateByteSize();t.setState({maxCharCount:Math.floor(a/10.96),isUploaded:!0,isLoading:!1})}))}},i.readAsDataURL(n)}},{key:"saveCanvas",value:function(){var e=this,t=this;t.setState({isLoading:!0},(function(){for(var n=e.steganObj.HideDataInContext(e.state.userContent),a=e.canvasRef.current,i=a.getContext("2d"),s=0;s<n.image.width;s++)for(var r=0;r<n.image.height;r++)i.putImageData(new ImageData(n.data[s][r],1,1),s,r);m()(a,{name:"ImageCrypted",type:"png",quality:1}),t.setState({isLoading:!1,disableTextarea:!0})}))}},{key:"onTextInputChange",value:function(e){this.setState({userContent:e})}},{key:"render",value:function(){var e=this,t=this.state.isUploaded?{height:"auto"}:{height:"0px"};return Object(a.jsxs)("div",{className:"CryptHolder",children:[this.state.isLoading&&Object(a.jsx)("span",{className:"LoadingFrame",children:Object(a.jsx)(C.a,{className:"LoadingSpinner",type:"Grid",color:"#5A4FCF",height:100,width:100})}),Object(a.jsx)("h2",{children:"Hide Your Message"}),Object(a.jsx)("p",{children:" Hide a text message in your image. Don't worry, it won't be visible in your image. You can learn more about this in About section."}),this.state.isUploaded&&Object(a.jsx)(j,{size:"big",text:"Reupload",onClick:function(){e.upload.click()}}),!this.state.isUploaded&&Object(a.jsx)(j,{size:"big",text:"Upload",onClick:function(){e.upload.click()}}),Object(a.jsx)("canvas",{className:"ImageCanvas",ref:this.canvasRef,style:t}),Object(a.jsx)("input",{id:"fileUploadInput",type:"file",accept:"image/png",ref:function(t){return e.upload=t},style:{display:"none"},onChange:this.onChangeFile.bind(this)}),this.state.isUploaded&&Object(a.jsxs)("span",{style:{display:"contents"},children:[Object(a.jsx)(p,{isDisabled:this.state.disableTextarea,textMaxLength:this.state.maxCharCount,onInput:this.onTextInputChange.bind(this)}),Object(a.jsx)(j,{text:"Download",secondary:!0,onClick:function(){e.saveCanvas()}}),Object(a.jsx)("subtitle",{children:"This can take a while if your image is big"})]})]})}}]),n}(s.a.Component),k=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).canvasRef=s.a.createRef(),a.steganObj=null,a.state={isUploaded:!1,hiddenText:""},a}return Object(u.a)(n,[{key:"onChangeFile",value:function(e){e.stopPropagation(),e.preventDefault();var t=this,n=e.target.files[0],a=this.canvasRef.current,i=new FileReader;console.log(n),i.onload=function(e){var n=new Image;n.src=e.target.result,n.onload=function(){a.width=n.width,a.height=n.height;var e=a.getContext("2d");e.drawImage(n,0,0),t.steganObj=new y(e,n);var i=t.steganObj.GetHiddenContent();t.setState({hiddenText:i,isUploaded:!0})}},i.readAsDataURL(n)}},{key:"render",value:function(){var e=this,t=this.state.isUploaded?{height:"auto"}:{height:"0px"};return Object(a.jsxs)("div",{className:"CryptHolder",children:[Object(a.jsx)("h2",{children:"Reveal Hidden Message"}),Object(a.jsx)("p",{children:" If your image includes a hidden message, you can reveal it from here. You can learn more about this in About section."}),Object(a.jsx)("canvas",{className:"ImageCanvas",ref:this.canvasRef,style:t}),Object(a.jsx)("input",{id:"fileUploadInput",type:"file",accept:"image/png",ref:function(t){return e.upload=t},style:{display:"none"},onChange:this.onChangeFile.bind(this)}),this.state.isUploaded&&Object(a.jsxs)("p",{children:["Hidden text is: ",Object(a.jsxs)("div",{className:"HiddenTextContainer",children:[this.state.hiddenText," "]})," "]}),Object(a.jsx)(j,{text:"Upload",size:"big",onClick:function(){e.upload.click()}})]})}}]),n}(s.a.Component),S=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"AboutSection",children:[Object(a.jsxs)("div",{className:"ImageHolder",children:[" ",Object(a.jsx)("img",{alt:"Demo",src:"https://i.ibb.co/DLNzGjX/Untitled.png"})," "]}),Object(a.jsx)("h1",{children:"About"}),Object(a.jsx)("h3",{children:"About Steganography"}),Object(a.jsxs)("p",{children:["Steganography is the technique of hiding secret data within an ordinary, non-secret, file or message in order to avoid detection; the secret data is then extracted at its destination. The use of steganography can be combined with encryption as an extra step for hiding or protecting data. The word steganography is derived from the Greek words steganos (meaning hidden or covered) and the Greek root graph (meaning to write).",Object(a.jsx)("br",{}),"Steganography can be used to conceal almost any type of digital content, including text, image, video or audio content; the data to be hidden can be hidden inside almost any other type of digital content. The content to be concealed through steganography -- called hidden text -- is often encrypted before being incorporated into the innocuous-seeming cover text file or data stream. If not encrypted, the hidden text is commonly processed in some way in order to increase the difficulty of detecting the secret content."]}),Object(a.jsx)("h3",{children:"About Konfi"}),Object(a.jsxs)("p",{children:["Konfi is a small project that demonstrates the usage of Steganography algorithms.",Object(a.jsx)("br",{}),"All you need to do is uploading a photo and defining your message. Rest will be handled by the algorithm.",Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:" You are not uploading anything to any server - everything happens in the browser, hence, it's secure ( also slow if you upload a huge image ) "})]}),Object(a.jsx)("h3",{children:" Technical Information "}),Object(a.jsxs)("p",{children:["For this project, I'm using a quite common technique which is called LSB Replacing. LSB stands for ",Object(a.jsx)("b",{children:"least significant bit"}),". If you are not familiar with bits and bytes, here is an example of how a byte looks like in binary. ",Object(a.jsx)("br",{})," ",Object(a.jsx)("img",{alt:"Bytes",src:"https://i.ibb.co/jRw62j3/Untitled.jpg"}),Object(a.jsx)("br",{}),"What Konfi does is the following:",Object(a.jsx)("br",{}),"It converts the entire message to Base64 to avoid any conversion loss, then it converts it to bytes hence to its bits. Then, it gets each pixel, breaks each pixel into its channels ( Red, Green, Blue and Alpha ) and breaks down each channel into bits. Once this is done, rest is just replacing each bit with the message's bits. Depending on your content and depending on your style, this process can take a while. Once the process is completed, you can download the file.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{children:"Beware:"})," ",Object(a.jsxs)("i",{children:["I'm exporting images in PNG format. It should ",Object(a.jsx)("b",{children:"always"})," keep it in this format. JPEG and other formats are not a lossless compression. Any compression can result in a break in the message structure. "]})]})]})}}]),n}(s.a.Component);var R=function(){return Object(a.jsxs)(h.a,{children:[Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsxs)("ul",{className:"nav",children:[Object(a.jsx)("img",{alt:"logo",src:c,className:"logo"}),Object(a.jsx)("h1",{className:"BrandName",children:"Konfi"}),Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/",children:"Hide"})}),Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/reveal",children:"Reveal"})}),Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/about",children:"About"})})]})}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/about",children:Object(a.jsx)(S,{})}),Object(a.jsx)(l.a,{path:"/reveal",children:Object(a.jsx)(k,{})}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(I,{})})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),T()}},[[59,1,2]]]);
//# sourceMappingURL=main.1448f2d1.chunk.js.map