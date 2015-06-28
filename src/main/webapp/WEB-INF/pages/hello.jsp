<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title></title>
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/js/dojoRoot/dijit/themes/claro/claro.css">
		<script> 
			var dojoConfig = {
				async : true
			};
		</script>
		<script src="${pageContext.request.contextPath}/resources/js/dojoRoot/dojo/dojo.js"></script>
		<script src="${pageContext.request.contextPath}/resources/js/hello.js"></script>
		<script>
			require(["dijit/form/Button", "dijit/Dialog"]);
		</script>
	</head>
	
	<body class="claro">
		<h2>dojo/request and dojo/xhr</h2>
		<h3>${greeting}</h3>
		<br/>
		<div data-dojo-type="dijit/Dialog" id="myDialog" >
			<p>This is dialog content</p>
		</div>
		<div id="progressDiv" style="display: none;">
			<p>Progressing..........</p>
		</div>
		<br/>
		<button id="request" data-dojo-type="dijit/form/Button" type="button">request</button>
		<button id="requestDotGet" data-dojo-type="dijit/form/Button" type="button">request dot get</button>
		<button id="requestMethodGet" data-dojo-type="dijit/form/Button" type="button">request method get</button>
		<br/><br/>
		<button id="xhr" data-dojo-type="dijit/form/Button" type="button">xhr</button>
		<button id="xhrDotGet" data-dojo-type="dijit/form/Button" type="button">xhr dot get</button>
		<button id="xhrMethodGet" data-dojo-type="dijit/form/Button" type="button">xhr method get</button>
		<br/><br/>
		<button id="customObject" data-dojo-type="dijit/form/Button" type="button">Custom</button>
		<br/><br/>

		<div id="result"></div>
		<div id="aspectBeforeResult"></div>
		<div id="aspectAfterResult"></div>
		
		<script>
			require(["dojo/parser", "dojo/on", "dijit/registry", "dijit/form/Button", "dojo/domReady!"], function(parser, on, registry){
				parser.parse();

				on(registry.byId("request"), "click", function(evt){
					requestClick("${pageContext.request.contextPath}/hellojson");
				});
				
				on(registry.byId("requestDotGet"), "click", function(evt){
					requestDotGetClick("${pageContext.request.contextPath}/hellojson");
				});

				on(registry.byId("requestMethodGet"), "click", function(evt){
					requestMethodGetClick("${pageContext.request.contextPath}/hellojson");
				});

				on(registry.byId("xhr"), "click", function(evt){
					xhrClick("${pageContext.request.contextPath}/hellojson");
				});

				on(registry.byId("xhrDotGet"), "click", function(evt){
					xhrDotGetClick("${pageContext.request.contextPath}/hellojson");
				});
				
				on(registry.byId("xhrMethodGet"), "click", function(evt){
					xhrMethodGetClick("${pageContext.request.contextPath}/hellojson");
				});

				on(registry.byId("customObject"), "click", function(evt){
					customObjectClick("${pageContext.request.contextPath}/hellojson");
				});
			});
		</script>
	</body>
</html>