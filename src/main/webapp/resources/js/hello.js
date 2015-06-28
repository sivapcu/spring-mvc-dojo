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
