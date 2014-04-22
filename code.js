var subjects = new Array("3DS", "AAS", "ACCT", "AE", "AH", "AL", "ANTH", "ARBC", "ART", "AS", "ASTR", "BA", "BCOM", "BIOL", "BRFV", "BUSA", "CER", "CHEM", "CHIN", "CIS", "CLAS", "COMM", "COOP", "CPI", "CPS", "CRJU", "CSC", "CSD", "DP", "DPP", "ECE", "ECON", "EDB", "EDBT", "EDCI", "EDLA", "EDMT", "EDRD", "EDSC", "EDSS", "EDUC", "EMBA", "ENGL", "EPEL", "EPHE", "EPRS", "EPS", "EPSF", "EPY", "ESL", "EXC", "FI", "FILM", "FOLK", "FORL", "FREN", "GEOG", "GEOL", "GEOS", "GERO", "GMBA", "GRD", "GRKA", "GRKM", "GRMN", "GSU", "HA", "HADM", "HBRB", "HBRM", "HHS", "HIST", "HON", "IB", "ID", "IEP", "ISCI", "ITAL", "JAPN", "JOUR", "JST", "KH", "KORE", "LATN", "LAW", "LGLS", "LT", "MATH", "MBA", "MES", "MGS", "MIT", "MK", "MRM", "MSL", "MTM", "MUA", "MUS", "NEUR", "NSCI", "NURS", "NUTR", "PERS", "PFP", "PH", "PHIL", "PHOT", "PHYS", "PMAP", "PMBA", "POLS", "PORT", "PRT", "PSYC", "PT", "RCB", "RE", "RELS", "RMI", "RT", "RUSS", "SCUL", "SNHP", "SOCI", "SPAN", "SPCH", "STAT", "SW", "SWAH", "TEXT", "THEA", "TSLE", "TURK", "TX", "WGSS");

//fgnass.github.com/spin.js#v2.0.0
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(b&&(b.insertBefore(f,b.firstChild||null),e(f,{left:d.left,top:d.top})),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});

$(function(){
	addLinks('body');
	
	$('#dialogBox').dialog({
		autoOpen: false,
		closeOnEscape: true,
		draggable: false,
		width: 800,
	});
	
	$('a.openModal').click(function(event) {
		$('#dialogContent').empty();
		var courseAbbreviation = $(this).attr('data-course-abbreviation');
		var courseNumber = $(this).attr('data-course-number');
		
		$('#dialogBox').dialog( "option", "title", courseAbbreviation+' '+courseNumber).dialog('open');
		$('#dialogBox').dialog( "option", 'position', { my: "center bottom-10", at: "center top", of: event });
		
		if(courseNumber > 5999) {
			apiUrl = 'http://catalog.gsu.edu/graduate20132014';
		} else {
			apiUrl = 'http://catalog.gsu.edu/undergraduate20132014';
		}
		
		$.ajax({
			url: apiUrl + '/api/course/' + courseAbbreviation + '_' + courseNumber,
			beforeSend: function() {
				var opts = {};
				var spinner = new Spinner(opts).spin();
				$('#loader').append(spinner.el);
			},
			error: function(){
				$('#dialogContent').html("There was an error retrieving course information.<br /><br />Please try again later.");
			},
			success: function (data) {
				courseInfo = JSON.parse(data);
				$('#dialogContent').html(
					'Title: '+courseInfo.title+
					'<br />Credit Hours: '+courseInfo.credit_hours+
					'<br />Description: '+courseInfo.content+
					'<br />Prerequisites: '+courseInfo.prerequisites
				);
				addLinks('#dialogContent');
			},
			complete: function() {
				$('#dialogBox').dialog( "option", 'position', { my: "center bottom-10", at: "center top", of: event });
				$('.spinner').hide();
			},
		});
	});
});

function addLinks(containerName) {
	var container = $(containerName);
	var containerHtml = container.html();
	var needle = new RegExp("[A-Z]{2,4} ?(\\d{4,4})","gi");
	
	container.html(
		
		//Replace function searches for needle (REGEX)
		containerHtml.replace(needle, function(match,p1) {
			var returnMatch = match;
			
			// If needle is found, loop through the subjects array to seek subject within match (WWWW ####) - we don't want June 2005 to match
			for (var i = 0; i < subjects.length; i++) {
				var subject = subjects[i];
			
				// Search returns -1 if not found 
				if(match.search(subject) != -1) {
					returnMatch = '<a class="openModal" href="#" title="'+subject+' '+p1+'" data-course-abbreviation="'+subject+'" data-course-number="'+p1+'">'+match+'</a>';
				}
			}
			
			//Return the original match if not modified by loop			
			return returnMatch;
		})
	);
}