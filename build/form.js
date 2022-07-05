var e=require("@mui/material"),r=require("react"),t=require("react-hook-form"),n=require("react-input-mask"),l=require("@mui/material/Switch");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(r),u=o(n),i=o(l);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function c(e){var r,t,n;if(null!=(null==(r=e.validations)?void 0:r.pattern))try{var l;n=new RegExp(null==(l=e.validations)?void 0:l.pattern)}catch(r){console.warn("Provided pattern is not a valid RegExp",e.validations.pattern)}var o=null!=(t=e.validations)?t:{};return{required:e.required,min:o.min,max:o.max,minLength:o.minLength,maxLength:o.maxLength,pattern:n}}var d,p={required:function(e){var r;return(null!=(r=e.label)?r:e.key)+" is required"},min:function(e){var r;return(null!=(r=e.label)?r:e.key)+" is too small"},max:function(e){var r;return(null!=(r=e.label)?r:e.key)+" is too large"},minLength:function(e){var r;return(null!=(r=e.label)?r:e.key)+" is too short"},maxLength:function(e){var r;return(null!=(r=e.label)?r:e.key)+" is too long"},pattern:function(e){var r;return(null!=(r=e.label)?r:e.key)+" is not valid"}};function m(e,t,n){return r.useMemo(function(){var r;return[null==n?void 0:n.type].concat(Object.keys(null!=(r=null==n?void 0:n.types)?r:{}).filter(function(e){var r;return null!=(null==n||null==(r=n.types)?void 0:r[e])})).filter(function(e){return null!=e}).map(function(r){var l,o;return null!=n&&n.message?n.message:null!=(l=null==e||null==(o=e.messages)?void 0:o[null!=r?r:""])?l:t[r||"pattern"](e)})},[e,n,t])}function f(e){switch(e){case!0:return;case!1:return 0;default:return e}}exports.MpControlType=void 0,(d=exports.MpControlType||(exports.MpControlType={})).number="number",d.text="text",d.multiline="multiline",d.group="group",d.switch="switch";var v={xs:12};function g(r){var n,l=r.size,o=r.layout,u=r.variant,i=r.register,s=r.locale,c=r.errors,d=r.hookFormControl,p=r.defaultMessages,m=r.overridables;return a.default.createElement(e.Grid,{container:!0,spacing:2},null==(n=r.control.children)?void 0:n.map(function(r,n){var f,g;return a.default.createElement(e.Grid,Object.assign({item:!0,key:n,xs:12},null!=(f=r.span)?f:v),a.default.createElement(L,{register:i,control:r,defaultMessages:p,error:t.get(null!=c?c:{},null!=(g=null==r?void 0:r.key)?g:""),size:l,locale:s,hookFormControl:d,noLabel:!0,layout:o,variant:u,overridables:m}))}))}var h={shrink:!0};function x(t){var n=t.control,l=t.size,o=t.layout,u=t.variant,i=t.register,s=t.error,d=t.defaultMessages,p=r.useMemo(function(){return{ref:i(c(n))}},[i,n]),f=m(n,d,s);return a.default.createElement(e.TextField,{error:!!s,multiline:!0,rows:4,maxRows:8,helperText:f[0],name:n.key,required:n.required,placeholder:n.placeholder,label:"separated"===o?"":n.label,size:l,fullWidth:!0,InputLabelProps:h,inputProps:p,variant:u})}var b=["onChange","inputRef","decimalPoint","negative"],y=r.forwardRef(function(e,t){var n=e.onChange,l=e.inputRef,o=e.decimalPoint,u=void 0===o?2:o,i=e.negative,s=void 0===i||i,c=function(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r.indexOf(t=o[n])>=0||(l[t]=e[t]);return l}(e,b),d=r.useCallback(function(e){var r=e.target.value;r=(r=(r=r.replace(/-/g,s?function(e,r){return r>0?"":e}:"")).replace(/[.,]/g,u>0?function(e,r,t){var n,l;return t.indexOf(null!=(n=null==(l=t.match(/[.,]/g))?void 0:l[0])?n:".")!==r||0===r?"":e}:"")).replace(/[^\d.,-]/g,""),u>0&&(r=r.replace(/[.,]\d+/g,function(e){return e.substr(0,u+1)})),e.target.value=r,"function"==typeof n&&n(e)},[n,u,s]),p=c.onBlur,m=r.useCallback(function(e){null!=e.target.value&&""!==e.target.value&&(e.target.value=(+e.target.value).toFixed(u)),"function"==typeof p&&p(e)},[u,p]);return a.default.createElement("input",Object.assign({ref:null!=t?t:l},c,{onBlur:m,onChange:d,inputMode:"decimal"}))}),M={shrink:!0};function k(t){var n=t.control,l=t.size,o=t.layout,u=t.variant,i=t.error,s=t.value,c=t.onChange,d=m(n,t.defaultMessages,i)[0],p=r.useMemo(function(){return{decimalPoint:f(n.decimalPoint),negative:n.negative}},[n]),v=n.endAdornment,g=n.startAdornment,h=r.useMemo(function(){return{inputComponent:y,endAdornment:v,startAdornment:g}},[v,g]);return a.default.createElement(e.TextField,{error:!!i,helperText:d,name:n.key,required:n.required,placeholder:n.placeholder,label:"separated"===o?"":n.label,size:l,fullWidth:!0,InputLabelProps:M,value:null!=s?s:"",onChange:c,inputProps:p,InputProps:h,variant:u})}function C(e){var n,l=e.control,o=e.hookFormControl,u=r.useMemo(function(){return c(l)},[l]);return a.default.createElement(t.Controller,{name:null!=(n=l.key)?n:"",rules:u,defaultValue:null,control:o,render:function(r){return a.default.createElement(k,Object.assign({},e,{onChange:r.onChange,value:r.value}))}})}var E,q={shrink:!0};function T(t){var n=t.control,l=t.size,o=t.layout,i=t.variant,s=t.register,d=t.error,p=t.defaultMessages,f=n.endAdornment,v=n.startAdornment,g=n.format,h=r.useMemo(function(){var e={ref:s(c(n))};return null!=g&&(e.mask=g,e.maskChar=""),e},[s,n,g]),x=m(n,p,d)[0],b=r.useMemo(function(){return{endAdornment:f,startAdornment:v,inputComponent:g?u.default:void 0}},[f,v,g]);return a.default.createElement(e.TextField,{error:!!d,helperText:x,name:n.key,required:n.required,placeholder:n.placeholder,label:"separated"===o?"":n.label,size:l,fullWidth:!0,InputLabelProps:q,inputProps:h,InputProps:b,variant:i})}function P(r){var t=r.control,n=r.layout;return a.default.createElement(e.FormControlLabel,{control:a.default.createElement(i.default,{name:t.key,color:"primary",inputRef:r.register}),label:"separated"===n?"":t.label})}var F=((E={})[exports.MpControlType.text]=T,E[exports.MpControlType.number]=C,E[exports.MpControlType.multiline]=x,E[exports.MpControlType.group]=g,E[exports.MpControlType.switch]=P,E);function L(t){var n=t.register,l=t.control,o=t.size,u=t.layout,i=t.noLabel,s=t.variant,c=t.locale,d=t.error,p=t.errors,m=t.hookFormControl,f=t.defaultMessages,v=t.overridables,g=function(e,t){return r.useMemo(function(){var r,n,l,o,a;return null!=(r=null!=(n=null==t||null==(l=t.controls)?void 0:l[null!=(o=e.type)?o:""])?n:F[null!=(a=e.type)?a:""])?r:F.text},[e,null==t?void 0:t.controls])}(l,v),h=a.default.createElement(g,{control:l,defaultMessages:f,register:n,locale:c,size:o,overridables:v,hookFormControl:m,layout:u,variant:s,errors:p,error:d});return"separated"!==u||i?h:a.default.createElement(e.Grid,{container:!0,spacing:2},a.default.createElement(e.Grid,{item:!0,xs:12,sm:4},a.default.createElement(e.Box,{paddingTop:"small"===o?1:2},a.default.createElement(e.InputLabel,{error:!!d,required:l.required},l.label))),a.default.createElement(e.Grid,{item:!0,xs:12,sm:8},h))}var O={xs:12};exports.Group=g,exports.MpForm=function(n){var l=n.controls,o=n.size,u=n.layout,i=n.variant,c=n.locale,d=n.useFormMethods,m=n.overridables,f=n.defaultMessages,v=d.register,g=d.errors,h=d.control,x=r.useMemo(function(){return s({},p,null!=f?f:{})},[f]);return a.default.createElement(e.Grid,{container:!0,spacing:2},l.map(function(r,n){var l,s;return a.default.createElement(e.Grid,Object.assign({item:!0,key:n,xs:12},null!=(l=r.span)?l:O),a.default.createElement(L,{register:v,control:r,locale:c,hookFormControl:h,defaultMessages:x,error:t.get(null!=g?g:{},null!=(s=null==r?void 0:r.key)?s:""),errors:g,size:o,layout:u,variant:i,overridables:m}))}))},exports.MpFormControl=L,exports.Multiline=x,exports.Number=C,exports.NumberInput=y,exports.Switch=P,exports.Text=T,exports.booleanDecimalPointToNumber=f,exports.controlRegisterOptions=c,exports.defaultMessages=p,exports.useErrorMessages=m;
//# sourceMappingURL=form.js.map