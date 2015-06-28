<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Dojo + Spring MVC</title>
		<script> 
			var dojoConfig = {
				async : true,
				parseOnLoad : true	
			};
		</script>
		<script src="${pageContext.request.contextPath}/resources/js/dojoRoot/dojo/dojo.js"></script>
	</head>

	<body>
		<div>
			<h1>${title}</h1>
			<p>${msg}</p>
		</div>
		<div id="greeting"></div>
		<script>
			require(["dojo/dom", "dojo/domReady!"], function (dom) {
				var greeting = dom.byId("greeting");
				greeting.innerHTML = "Hello <em>Dojo!</em>";
			});
		</script>
	</body>
</html>