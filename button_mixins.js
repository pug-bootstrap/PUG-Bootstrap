function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(i){pug_rethrow(n,null,r)}var a=3,o=t.split("\n"),h=Math.max(r-a,0),s=Math.min(o.length,r+a),a=o.slice(h,s).map(function(n,e){var t=e+h+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+a+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_mixins["a-btn"] = pug_interp = function(url,style){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
var type = (typeof style === 'undefined') ? "default" : style
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_html = pug_html + "\u003Ca class=\"btn btn-#{type}\" href=\"#{url}\" role=\"button\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fa\u003E";
};
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";










;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";










;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";










;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";










;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";










;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_mixins["btn"] = pug_interp = function(caption,style,size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
var type = (typeof style === 'undefined') ? "default" : style
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
if (!(size)) {
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-#{type}\" type=\"button\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
}
else {
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-#{type} btn-#{size}\" type=\"button\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
}
};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_mixins["btn-primary"] = pug_interp = function(caption){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_mixins["btn"](caption,"primary");
};
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";







;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";







;pug_debug_line = 77;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 80;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 83;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 86;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 89;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";







;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 100;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 103;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 106;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 109;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 113;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_mixins["input-btn"] = pug_interp = function(caption,style){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 114;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
var type = (typeof style === 'undefined') ? "default" : style
;pug_debug_line = 115;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_html = pug_html + "\u003Cinput class=\"btn btn-#{type}\" type=\"button\" value=\"#{caption}\"\u002F\u003E";
};
;pug_debug_line = 117;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 120;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 123;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 126;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 129;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 133;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_mixins["submit"] = pug_interp = function(caption,style){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 134;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
var type = (typeof style === 'undefined') ? "default" : style
;pug_debug_line = 135;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";
pug_html = pug_html + "\u003Cinput class=\"btn btn-#{type}\" type=\"submit\" value=\"#{caption}\"\u002F\u003E";
};
;pug_debug_line = 137;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 140;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 143;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 149;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Fcomponents\u002Fbuttons.pug";





;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Faaron\u002Fprojects\u002FJADE-Bootstrap\u002Ftest\u002Fbuttons.pug";
pug_mixins["btn-primary"]('Primary Button');} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}