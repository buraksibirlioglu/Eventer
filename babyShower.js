var motherName;
var childName;
var address; 

function setBabyShowerInfo(){
	document.getElementById("dynamicInclude").innerHTML = "<h4>Enter Baby Shower Information</h4><form class='row contact_form' action='' name='babyShowerInfo'>"
                        +"<div class='col-md-12'>"
                           +" <div class='form-group'>"
                             +" <input type='text' class='form-control' id='bride' name='motherName' placeholder='Mother Name' >"
                            +"</div>"
							+"<div class='form-group'>"
                          +   "  <input type='text' class='form-control' name='childName' placeholder='Child Name'>"
                         +   "</div>"
						 	+"<div class='form-group'>"
                          +   "  <input type='text' class='form-control' name='address' placeholder='Address'>"
                         +   "</div>"
                       + "<div class='col-md-12 text-right'>"
                      +   "   <button class='btn submit_btn' onClick='saveBabyInfo(this.form)'>Continue</button>"
                     +   "</div>"
					+	"</div>"					
                    +"</form>"
	
}
function saveBabyInfo(form){
			motherName=form.motherName.value;
			childName=form.childName.value;
			address=form.address.value;
			sessionStorage.setItem("motherName",motherName);
			sessionStorage.setItem("childName",childName);
			sessionStorage.setItem("address",address);
			designHome();
	
}

function designHome(){
			document.getElementById("dynamicInclude").innerHTML="<h4>Design Home</h4><div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Balloons</div>"
			+"<img class='col-md-3' src='balon1.jpg' alt='UploadImages'>"
			+"<img class='col-md-3' src='balon2.jpg' alt='SlidePreview'>"
			+"<img class='col-md-3' src='balon3.jpg' alt='SlidePreview'>"
			+   "</div>"
			+"<div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Wall Ornament1</div>"
			+"<img class='col-md-3' src='wallornament1.jpg' alt='UploadImages'>"
			+"<img class='col-md-3' src='wallornament2.jpg' alt='SlidePreview'>"
			+"<img class='col-md-3' src='wallornament3.jpg' alt='SlidePreview'>"
			+   "</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='competeDesignHome()'>Continue</button>"
			+   "</div>"
			+   "</div>"
		}
		function competeDesignHome(){
			selectMotherDress();
			
		}
function selectMotherDress(){
			document.getElementById("dynamicInclude").innerHTML="<div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Baby Shower Mother Dresses</div>"
			+"<img class='col-md-3' src='dress1.jpg' alt='UploadImages'>"
			+"<img class='col-md-3' src='dress2.jpg' alt='SlidePreview'>"
			+"<img class='col-md-3' src='dress3.jpg' alt='SlidePreview'>"
			+   "</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='competeBabyShowerDress()'>Continue</button>"
			+   "</div>"
			+   "</div>"
		}
function competeBabyShowerDress(){
			pickBabySitterHomeCleaner();
		}