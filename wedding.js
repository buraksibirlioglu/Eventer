var brideName;
var groomName;
var theme;	

	function brideGroom(){
			document.getElementById("dynamicInclude").innerHTML = "<h4>Enter Bride and Groom Names</h4><form class='row contact_form' action='' name='brideGroom'>"
                        +"<div class='col-md-12'>"
                           +" <div class='form-group'>"
                             +" <input type='text' class='form-control' id='bride' name='bride' placeholder='Enter Bride Name'>"
                            +"</div>"
							+"<div class='form-group'>"
                          +   "  <input type='text' class='form-control' name='groom' placeholder='Enter Groom Name'>"
                         +   "</div>"

                       + "<div class='col-md-12 text-right'>"
                      +   "   <button class='btn submit_btn' onClick='saveNames(this.form)'>Continue</button>"
                     +   "</div>"
					+	"</div>"					
                    +"</form>"
		}
		
		function saveNames(form)
		{
			brideName=form.bride.value;
			groomName=form.groom.value;
			sessionStorage.setItem("bride",brideName);
			sessionStorage.setItem("groom",groomName);
			designSittingPlan();
			
		}
		
		function designSittingPlan(){
			var i;
			var j; 
			var k;
			var inside="<div class='col-md-3'><ul> </ul>";
			for (i = 0; i < sessionStorage.getItem("guestNumber"); i++) {
			j="guestName"+i;
			k=sessionStorage.getItem("guestName"+i);
			inside+="<li>"+k+"</li>"
			console.log(inside);
			}
			inside+="</ul></div>";
			document.getElementById("dynamicInclude").innerHTML="<h4>Sitting Plan</h4><div class='col-md-12' style='display:flex'>"
			
			+inside
			+"<img class='col-md-9' src='sitting.jpg' alt='Sitting Plan'>"
			+"</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='prepeareSlideShow()'>Continue</button>"
			+   "</div>"
			
		}
		
		function prepeareSlideShow(){
			document.getElementById("dynamicInclude").innerHTML="<h4>Create a Slideshow</h4><div class='col-md-12' style='display:flex'>"
			+"<img class='col-md-6' src='slide.png' alt='UploadImages'>"
			+"<img class='col-md-6' src='prev.jpg' alt='SlidePreview'>"
			+"</div>"
			+	"<div class='form-group col-md-12'>"
						+	"	<select class='form-control' name='music' >"
						+	"		  <option value='' disabled selected>Select Music</option>"
						+	"		  <option value='love'>Love Story</option>"
						+	"		  <option value='nothing'>Nothing Else Mathers</option>"
						+	"		  <option value='life'>This Is The Life</option>"
						+	"	</select>"
						+	"</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='selectTheme()'>Continue</button>"
			+   "</div>"
			
		}
		
		function weddingDress(){
			document.getElementById("dynamicInclude").innerHTML="<h4>Select Your Dress</h4><div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Bridal Grown</div>"
			+"<img class='col-md-3' src='grown1.jpg' alt='UploadImages'>"
			+"<img class='col-md-3' src='grown2.jpg' alt='SlidePreview'>"
			+"<img class='col-md-3' src='grown3.jpg' alt='SlidePreview'>"
			+   "</div>"
			+"<div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Bridal Boquet</div>"
			+"<img class='col-md-3' src='boquet1.jpg' alt='UploadImages'>"
			+"<img class='col-md-3' src='boquet2.jpeg' alt='SlidePreview'>"
			+"<img class='col-md-3' src='boquet3.jpg' alt='SlidePreview'>"
			+   "</div>"
			+"<div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Bridal Veil</div>"
			+"<img class='col-md-3' src='veil1.jpg' alt='UploadImages'>"
			+"<img class='col-md-3' src='veil2.jpg' alt='SlidePreview'>"
			+"<img class='col-md-3' src='veil3.jpg' alt='SlidePreview'>"
			+   "</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='selectWeddingVehicle()'>Continue</button>"
			+   "</div>"
			+   "</div>"
			
		}
		
		function selectTheme(){
			document.getElementById("dynamicInclude").innerHTML="<form class='row contact_form' action='' name='themeForm'>"
						+   "<h4>Select Theme</h4>"
						+	"<div class='col-md-12' >"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='themeOption' >"
						+	"		  <option value='gothic'>Gothic</option>"
						+	"		  <option value='garden'>Garden</option>"
						+	"		  <option value='vintage'>Vintage</option>"
						+	"		  <option value='bohemian'>Bohemian</option>"
						+	"	</select>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='saveTheme(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>"
		}
		function saveTheme(form){
			
			sessionStorage.setItem("theme",form.themeOption.value);
			theme=form.themeOption.value;
			weddingDress();
		}
		
	
		