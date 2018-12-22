var information;
var recommendation; 

		function prepeareInvitation (){
			document.getElementById("dynamicInclude").innerHTML="<h4>Enter Number of Guests</h4><form class='row contact_form' action='' name='guestNumber'>"
						+	"<div class='col-md-12' >"
						+"<div class='form-group'>"
                        +   "  <input type='number' class='form-control' name='guestNumber'>"
                        +   "</div>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='createGuestList(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>"
		
		}	
		
		function createGuestList(form){
			var i;
			var innerForm=""; 
			for (i = 0; i < form.guestNumber.value; i++) { 
				innerForm+="<div class='col-md-12' style='display:flex'>"
						+"<div class='form-group col-md-6'>"
                        +"  <input type='text' class='form-control' name='guestName"+i+"'>"
                        +"</div>"
						+"<div class='form-group col-md-6'>"
                        +"  <input type='email' class='form-control' name='guestMail"+i+"'>"
                        +"</div>"
						+"</div>"
			}
			console.log(innerForm);
			sessionStorage.setItem("guestNumber", form.guestNumber.value);
			document.getElementById("dynamicInclude").innerHTML="<h4>Geust List</h4><div class='col-md-12' style='display:flex'>"
						+"<div class='form-group col-md-6'>"
                        +"  <h4>Name</h4>"
                        +"</div>"
						+"<div class='form-group col-md-6'>"
                        +" <h4>Email</h4> "
                        +"</div>"
						+"</div>"
						+"<form class='row contact_form' action='' name='guestsForm'>"
						+innerForm
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='saveGuestList(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>"
			
			
		}
		
		function saveGuestList (form){
			
			var i;
			var j; 
			var k; 
			for (i = 0; i < sessionStorage.getItem("guestNumber"); i++) {
			j="guestName"+i;
			k="guestMail"+i;
			sessionStorage.setItem("guestName"+i, document.getElementsByName(j)[0].value);
			sessionStorage.setItem("guestMail"+i, document.getElementsByName(k)[0].value);
			}
			document.getElementById("dynamicInclude").innerHTML="";
			//sittingPlan();
			pickPhotographer();
		}
		
		function sendInformation()
		{
			var pV=sessionStorage.getItem("pV");
			information = sessionStorage.getItem("addInfo");
			if(pV==2)
				recommendation=sessionStorage.getItem("birhtdayGift");
			if(pV==3)
				recommendation=sessionStorage.getItem("motherGift");
			
			document.getElementById("dynamicInclude").innerHTML="<div class='col-md-12' >"
						+	"<h4>Information</h4>"
						+	"<p>"+information+"</p>"
						+	"<h4>Recommendation</h4>"
						+	"<p>"+recommendation+"</p>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='sendInvitation()'>Send Information & Recommendation</button>"
						+   "</div>"
		}
		
		function sendInvitation()
		{
			var pV=sessionStorage.getItem("pV");
			if(pV==1){
				var orgName= sessionStorage.getItem("orgName");
				var date= sessionStorage.getItem("date");
				var soup= sessionStorage.getItem("soup");
				var mainCourse= sessionStorage.getItem("mainCourse");
				var drink=sessionStorage.getItem("drink");
				var sweet=sessionStorage.getItem("sweet");
				var guestNumber=sessionStorage.getItem("guestNumber");
				var	varPhotographer=sessionStorage.getItem("varPhotographer");
				var music1=sessionStorage.getItem("music1");
				var	music2=sessionStorage.getItem("music2");
				var	music3=sessionStorage.getItem("music3");
				var	music4=sessionStorage.getItem("music4");
				var	music5=sessionStorage.getItem("music5");
				var	music6=sessionStorage.getItem("music6");
				var	music7=sessionStorage.getItem("music7");
				var	wgCount=sessionStorage.getItem("wgCount");
				var	bride=sessionStorage.getItem("bride");
				var	groom=sessionStorage.getItem("groom");
				var	theme=sessionStorage.getItem("theme");
				var i;
				var j; 
				var k;
				var inside="<div class='col-md-6'><h4>Guests</h4><ul> </ul>";
				for (i = 0; i < sessionStorage.getItem("guestNumber"); i++) {
				j="guestName"+i;
				k=sessionStorage.getItem("guestName"+i);
				inside+="<li>"+k+"</li>"
				console.log(inside);
				}
				inside+="</ul></div>";
				document.getElementById("dynamicInclude").innerHTML="<div class='col-md-12' style='display:flex' >"
						+  	"<div class='col-md-6' >"
						+	"<h4>"+orgName+"</h4>"
						+	"<p>Bride Name: "+bride+"</p>"
						+	"<p>Groom Name: "+groom+"</p>"
						+	"<p>Date: "+date+"</p>"
						+	"<p>Food Menu: "+soup+", "+mainCourse+", "+drink+", "+sweet+"</p>"
						+	"<p>Guest Number: "+guestNumber+"</p>"
						+	"<p>Photographer: "+varPhotographer+"</p>"
						+	"<p>Playlist: "+music1+", "+music2+", "+music3+", "+music4+", "+music5+", "+music6+", "+music7+"</p>"
						+	"<p>Theme: "+theme+"</p>"
						+	"<p>Number of Candies: "+wgCount+"</p>"
						+  	"</div>"
						+	inside
						+	"</div>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <a class='main_btn mr-10' href='index.html'>Send Invitation</a>"
						+   "</div>"
			
			}
			if(pV==2){
				var orgName= sessionStorage.getItem("orgName");
				var date= sessionStorage.getItem("date");
				var soup= sessionStorage.getItem("soup");
				var mainCourse= sessionStorage.getItem("mainCourse");
				var drink=sessionStorage.getItem("drink");
				var sweet=sessionStorage.getItem("sweet");
				var guestNumber=sessionStorage.getItem("guestNumber");
				var	varPhotographer=sessionStorage.getItem("varPhotographer");
				var music1=sessionStorage.getItem("music1");
				var	music2=sessionStorage.getItem("music2");
				var	music3=sessionStorage.getItem("music3");
				var	music4=sessionStorage.getItem("music4");
				var	music5=sessionStorage.getItem("music5");
				var	music6=sessionStorage.getItem("music6");
				var	music7=sessionStorage.getItem("music7");
				var	age=sessionStorage.getItem("age");
				var	personName=sessionStorage.getItem("personName");
				var	gender=sessionStorage.getItem("gender");
				var	surprize=sessionStorage.getItem("surprize");
				var	entertainer=sessionStorage.getItem("entertainer");
				var	act1=sessionStorage.getItem("act1");
				var	act2=sessionStorage.getItem("act2");
				var	act3=sessionStorage.getItem("act3");
				var	act4=sessionStorage.getItem("act4");
				var	driver=sessionStorage.getItem("driver");
				var i;
				var j; 
				var k;
				var inside="<div class='col-md-6'><h4>Guests</h4><ul> </ul>";
				for (i = 0; i < sessionStorage.getItem("guestNumber"); i++) {
				j="guestName"+i;
				k=sessionStorage.getItem("guestName"+i);
				inside+="<li>"+k+"</li>"
				console.log(inside);
				}
				inside+="</ul></div>";
				document.getElementById("dynamicInclude").innerHTML="<div class='col-md-12' style='display:flex' >"
						+  	"<div class='col-md-6' >"
						+	"<h4>"+orgName+"</h4>"
						+	"<p>Person Name: "+personName+"</p>"
						+	"<p>Age: "+age+"</p>"
						+	"<p>Gender: "+gender+"</p>"
						+	"<p>Date: "+date+"</p>"
						+	"<p>Food Menu: "+soup+", "+mainCourse+", "+drink+", "+sweet+"</p>"
						+	"<p>Guest Number: "+guestNumber+"</p>"
						+	"<p>Photographer: "+varPhotographer+"</p>"
						+	"<p>Playlist: "+music1+", "+music2+", "+music3+", "+music4+", "+music5+", "+music6+", "+music7+"</p>"
						+	"<p>Surprize Option: "+surprize+"</p>"
						+	"<p>Entertainer: "+entertainer+"</p>"
						+ 	"<p>Actvities: 19:00-"+act1+", 20:00-"+act2+", 21:00-"+act3+", 22:00-"+act4+"</p>"
						+	"<p>Driver: "+driver+"</p>"
						+  	"</div>"
						+	inside
						+	"</div>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <a class='main_btn mr-10' href='index.html'>Send Invitation</a>"
						+   "</div>"
			}
			if(pV==3){
				var orgName= sessionStorage.getItem("orgName");
				var date= sessionStorage.getItem("date");
				var soup= sessionStorage.getItem("soup");
				var mainCourse= sessionStorage.getItem("mainCourse");
				var drink=sessionStorage.getItem("drink");
				var sweet=sessionStorage.getItem("sweet");
				var guestNumber=sessionStorage.getItem("guestNumber");
				var	varPhotographer=sessionStorage.getItem("varPhotographer");
				var	motherName=sessionStorage.getItem("motherName");
				var	childName=sessionStorage.getItem("childName");
				var	address=sessionStorage.getItem("address");
				var	babySitter=sessionStorage.getItem("babySitter");
				var	homeCleaner=sessionStorage.getItem("homeCleaner");
				var	bgCount=sessionStorage.getItem("bgCount");
				var i;
				var j; 
				var k;
				var inside="<div class='col-md-6'><h4>Guests</h4><ul> </ul>";
				for (i = 0; i < sessionStorage.getItem("guestNumber"); i++) {
				j="guestName"+i;
				k=sessionStorage.getItem("guestName"+i);
				inside+="<li>"+k+"</li>"
				console.log(inside);
				}
				inside+="</ul></div>";
				document.getElementById("dynamicInclude").innerHTML="<div class='col-md-12' style='display:flex' >"
						+  	"<div class='col-md-6' >"
						+	"<h4>"+orgName+"</h4>"
						+	"<p>Mother Name: "+motherName+"</p>"
						+	"<p>Child Name: "+childName+"</p>"
						+	"<p>Address: "+address+"</p>"
						+	"<p>Date: "+date+"</p>"
						+	"<p>Food Menu: "+soup+", "+mainCourse+", "+drink+", "+sweet+"</p>"
						+	"<p>Guest Number: "+guestNumber+"</p>"
						+	"<p>Photographer: "+varPhotographer+"</p>"
						+	"<p>Babysitter: "+babySitter+"</p>"
						+	"<p>Home Cleaner: "+homeCleaner+"</p>"
						+	"<p>Number of Candies: "+bgCount+"</p>"
						+  	"</div>"
						+	inside
						+	"</div>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <a class='main_btn mr-10' href='index.html'>Send Invitation</a>"
						+   "</div>"
			}
			
		}
