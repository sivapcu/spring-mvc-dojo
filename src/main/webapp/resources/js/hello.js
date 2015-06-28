var httpRequest = null;
require([ "dojo/request", "dojo/dom"], function(request, dom) {
	httpRequest = {
		send : function(url, args) {
			request(url, args).then(function(data) {
				dom.byId("result").innerHTML += "<br/>" + data;
			}, function(err) {
				dom.byId("result").innerHTML += "<br/>" + err;
			});
		}
	};
});

require(["dojo/aspect", "dijit/registry", "dojo/dom", "dojo/domReady!"], function(aspect, registry, dom){
	aspect.before(httpRequest, "send", function(){
		dom.byId("result").innerHTML += "<br/> Before Http Request";
		toggleProgressDiv();
	});
	
	aspect.after(httpRequest, "send", function(){
		dom.byId("result").innerHTML += "<br/> After Http Request";
		toggleProgressDiv();
	});
});

require(["dojo/aspect", "dojo/request", "dojo/dom", "dijit/registry", "dojo/domReady!"], function(aspect, request, dom, registry){
	/*aspect.before(request, "get", function(){
		console.log("request.get");
		dom.byId("aspectBeforeResult").innerHTML += "<br/>"+"Aspect Before request.get";
	});
	
	aspect.after(request, "get", function(){
		console.log("request.get");
		dom.byId("aspectAfterResult").innerHTML += "<br/>"+"Aspect after request.get";
	});*/
	
	aspect.around(request, "get", function(originalXhr){
		return function(url, args){
			//logic before ajax request
			var dialog = registry.byId("myDialog");
			dialog.show();
	    	console.log("Before request.get");
			dom.byId("result").innerHTML += "<br/>"+"Aspect Before request.get";

			// make ajax request
			var promise = originalXhr(url, args);
	      
			//logic after ajax request
			console.log("After request.get");
			dom.byId("result").innerHTML += "<br/>"+"Aspect after request.get";
			dialog.hide();
			
			return promise;
	    };
	});
});

function toggleProgressDiv(){
	require(["dojo/dom", "dojo/dom-style", "dojo/domReady!"], function(dom, domStyle){
		
		if (domStyle.get(dom.byId('progressDiv'), "display") == "none") {
			domStyle.set(dom.byId('progressDiv'), "display", "block");
		} else {
			domStyle.set(dom.byId('progressDiv'), "display", "none");
		}
	});
}


function customObjectClick(url){
	var fullUrl = "http://localhost:8080"+url;
	httpRequest.send(fullUrl, {method : "GET"});
}

function requestClick(url) {
	require([ "dojo/request", "dojo/dom", "dijit/registry", "dojo/domReady!" ], function(request, dom, registry) {
		var fullUrl = "http://localhost:8080"+url;
		var dialog = registry.byId("myDialog");
		dialog.show();
		request(fullUrl).then(function(data) {
			dom.byId("result").innerHTML += "<br/>"+data;
		}, function(err) {
			dom.byId("result").innerHTML += "<br/>"+err;
		});
	});
}

function requestDotGetClick(url) {
	require([ "dojo/request", "dojo/dom", "dojo/domReady!" ], function(request, dom) {
		var fullUrl = "http://localhost:8080"+url;
		request.get(fullUrl, {/*handleAs:"json"*/}).then(function(data) {
			dom.byId("result").innerHTML += "<br/>"+data;
		}, function(err) {
			dom.byId("result").innerHTML += "<br/>"+err;
		});
	});
}

function requestMethodGetClick(url) {
	require([ "dojo/request", "dojo/dom", "dojo/domReady!" ], function(request, dom) {
		var fullUrl = "http://localhost:8080"+url;
		request(fullUrl, {method : "GET"}).then(function(data) {
			dom.byId("result").innerHTML += "<br/>"+data;
		}, function(err) {
			dom.byId("result").innerHTML += "<br/>"+err;
		});
	});
}



function xhrClick(url) {
	require([ "dojo/request/xhr", "dojo/dom", "dojo/domReady!" ], function(xhr, dom) {
		var fullUrl = "http://localhost:8080"+url;
		xhr(fullUrl).then(function(data) {
			dom.byId("result").innerHTML += "<br/>"+data;
		}, function(err) {
			dom.byId("result").innerHTML += "<br/>"+err;
		});
	});
}

function xhrDotGetClick(url) {
	require([ "dojo/request/xhr", "dojo/dom", "dojo/domReady!" ], function(xhr, dom) {
		var fullUrl = "http://localhost:8080"+url;
		xhr.get(fullUrl).then(function(data) {
			dom.byId("result").innerHTML += "<br/>"+data;
		}, function(err) {
			dom.byId("result").innerHTML += "<br/>"+err;
		});
	});
}

function xhrMethodGetClick(url) {
	require([ "dojo/request/xhr", "dojo/dom", "dojo/domReady!" ], function(xhr, dom) {
		var fullUrl = "http://localhost:8080"+url;
		xhr(fullUrl, {method : "GET"}).then(function(data) {
			dom.byId("result").innerHTML += "<br/>"+data;
		}, function(err) {
			dom.byId("result").innerHTML += "<br/>"+err;
		});
	});
}
