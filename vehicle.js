	function selectWeddingVehicle(){
			document.getElementById("dynamicInclude").innerHTML="<h4>Select Vehicle</h4><div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Wedding Car</div>"
			+"<img class='col-md-3' src='car1.png' alt=''>"
			+"<img class='col-md-3' src='car2.jpg' alt=''>"
			+"<img class='col-md-3' src='car3.jpg' alt=''>"
			+   "</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='sendInvitation()'>Continue</button>"
			+   "</div>"
			+   "</div>"
		}
		
		function selectBirthdayCar(){
			document.getElementById("dynamicInclude").innerHTML="<h4>Select Vehicle</h4><div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Birthday Car</div>"
			+"<img class='col-md-3' src='bcar1.jpg' alt=''>"
			+"<img class='col-md-3' src='bcar2.png' alt=''>"
			+"<img class='col-md-3' src='bcar3.jpg' alt=''>"
			+   "</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='setPersonalInfo()'>Continue</button>"
			+   "</div>"
			+   "</div>"
		}