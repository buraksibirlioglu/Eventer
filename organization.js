var date;
var name;
var place;
var information;
var meal;
var playlist;
var cake; 

document.getElementById("dynamicInclude").innerHTML = "<h4>Plan Your Organization</h4><form class='row contact_form' action='' name='organizationForm'>"
                        +"<div class='col-md-12'>"
                           +" <div class='form-group'>"
                             +" <input type='text' class='form-control' id='orgName' name='orgName' placeholder='Organization Name'>"
                            +"</div>"
							+"<div class='form-group'>"
                          +   "  <input type='date' class='form-control' name='date'>"
                         +   "</div>"
                       + "<div class='col-md-12 text-right'>"
                      +   "   <button class='btn submit_btn' onClick='completeOrg(this.form)'>Continue</button>"
                     +   "</div>"
					+	"</div>"					
                    +"</form>"
					
		
					
		function completeOrg (form) {
			sessionStorage.setItem("orgName", form.orgName.value);
			name=form.orgName.value;
			setDate(form.date.value);
			designMeal();
		}
		function setDate(orgDate)
		{
			date=orgDate;
			sessionStorage.setItem("date", orgDate);
		}
				
		function designMeal(){
			document.getElementById("dynamicInclude").innerHTML="<h4>Menu Design</h4><form class='row contact_form' action='' name='menuForm'>"
						+	"<div class='col-md-12' >"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='soup' >"
						+	"		  <option value='' disabled selected>Soup</option>"
						+	"		  <option value='Fish Soup'>Fish Soup</option>"
						+	"		  <option value='Lentil Soup'>Lentil Soup</option>"
						+	"		  <option value='Tripe Soup'>Tripe Soup</option>"
						+	"	</select>"
						+	"</div>"
                        +	"<div class='form-group '>"
						+	"	<select class='form-control' name='mainCourse' >"
						+	"		  <option value='' disabled selected>Main Course</option>"
						+	"		  <option value='Steak'>Steak</option>"
						+	"		  <option value='Stuffed Lamb'>Stuffed Lamb</option>"
						+	"		  <option value='Stew'>Stew</option>"
						+	"		  <option value='Cutlet' >Cutlet</option>"
						+	"	</select>"
						+	"</div>"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='drink' >"
						+	"		  <option value='' disabled selected>Drink</option>"
						+	"		  <option value='Coke'>Coke</option>"
						+	"		  <option value='Wine'>Wine</option>"
						+	"		  <option value='Beer'>Beer</option>"
						+	"		  <option value='FruitJuice' >FruitJuice</option>"
						+	"	</select>"
						+	"</div>"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='sweet' >"
						+	"		  <option value='' disabled selected>Sweet</option>"
						+	"		  <option value='Ice Cream'>Ice Cream</option>"
						+	"		  <option value='Cake'>Cake</option>"
						+	"		  <option value='Pudding'>Pudding</option>"
						+	"		  <option value='Baklava' >Baklava</option>"
						+	"	</select>"
						+	"</div>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='completeMenu(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>";
			}				
		
		function completeMenu (form) {
			sessionStorage.setItem("mainCourse", form.mainCourse.value);
			sessionStorage.setItem("soup", form.soup.value);
			sessionStorage.setItem("drink", form.drink.value);
			sessionStorage.setItem("sweet", form.sweet.value);
			meal = new Array(form.mainCourse.value,form.soup.value,form.drink.value,form.sweet.value);
			prepeareInvitation();
		}
		
		
		function designPlaylist(){
			document.getElementById("dynamicInclude").innerHTML="<h4>Design Playlist</h4><form class='row contact_form' action='' name='menuForm'><div class='col-md-12' style='display:flex'>"
			+"<img class='col-md-6' src='slide.png' alt='UploadSongs'>"
			+"<div class='form-group col-md-6'>"
						+	"	<select class='form-control' name='music1' >"
						+	"		  <option value='' disabled selected>Select Music</option>"
						+	"		  <option value='Love Story'>Love Story</option>"
						+	"		  <option value='Nothing Else Mathers'>Nothing Else Mathers</option>"
						+	"		  <option value='This Is The Life'>This Is The Life</option>"
						+	"		  <option value='Get the Party Started'>Get the Party Started</option>"
						+	"		  <option value='Happy Birthday'>Happy Birthday</option>"
						+	"		  <option value='Dance Again'>Dance Again</option>"
						+	"		  <option value='Let's Get Loud'>Let's Get Loud</option>"
						+	"	</select>"
						+	"	<select class='form-control' name='music2' >"
						+	"		  <option value='' disabled selected>Select Music</option>"
						+	"		  <option value='Love Story'>Love Story</option>"
						+	"		  <option value='Nothing Else Mathers'>Nothing Else Mathers</option>"
						+	"		  <option value='This Is The Life'>This Is The Life</option>"
						+	"		  <option value='Get the Party Started'>Get the Party Started</option>"
						+	"		  <option value='Happy Birthday'>Happy Birthday</option>"
						+	"		  <option value='Dance Again'>Dance Again</option>"
						+	"		  <option value='Let's Get Loud'>Let's Get Loud</option>"
						+	"	</select>"
						+	"	<select class='form-control' name='music3' >"
						+	"		  <option value='' disabled selected>Select Music</option>"
						+	"		  <option value='Love Story'>Love Story</option>"
						+	"		  <option value='Nothing Else Mathers'>Nothing Else Mathers</option>"
						+	"		  <option value='This Is The Life'>This Is The Life</option>"
						+	"		  <option value='Get the Party Started'>Get the Party Started</option>"
						+	"		  <option value='Happy Birthday'>Happy Birthday</option>"
						+	"		  <option value='Dance Again'>Dance Again</option>"
						+	"		  <option value='Let's Get Loud'>Let's Get Loud</option>"
						+	"	</select>"
						+	"	<select class='form-control' name='music4' >"
						+	"		  <option value='' disabled selected>Select Music</option>"
						+	"		  <option value='Love Story'>Love Story</option>"
						+	"		  <option value='Nothing Else Mathers'>Nothing Else Mathers</option>"
						+	"		  <option value='This Is The Life'>This Is The Life</option>"
						+	"		  <option value='Get the Party Started'>Get the Party Started</option>"
						+	"		  <option value='Happy Birthday'>Happy Birthday</option>"
						+	"		  <option value='Dance Again'>Dance Again</option>"
						+	"		  <option value='Let's Get Loud'>Let's Get Loud</option>"
						+	"	</select>"
						+	"	<select class='form-control' name='music5' >"
						+	"		  <option value='' disabled selected>Select Music</option>"
						+	"		  <option value='Love Story'>Love Story</option>"
						+	"		  <option value='Nothing Else Mathers'>Nothing Else Mathers</option>"
						+	"		  <option value='This Is The Life'>This Is The Life</option>"
						+	"		  <option value='Get the Party Started'>Get the Party Started</option>"
						+	"		  <option value='Happy Birthday'>Happy Birthday</option>"
						+	"		  <option value='Dance Again'>Dance Again</option>"
						+	"		  <option value='Let's Get Loud'>Let's Get Loud</option>"
						+	"	</select>"
						+	"	<select class='form-control' name='music6' >"
						+	"		  <option value='' disabled selected>Select Music</option>"
						+	"		  <option value='Love Story'>Love Story</option>"
						+	"		  <option value='Nothing Else Mathers'>Nothing Else Mathers</option>"
						+	"		  <option value='This Is The Life'>This Is The Life</option>"
						+	"		  <option value='Get the Party Started'>Get the Party Started</option>"
						+	"		  <option value='Happy Birthday'>Happy Birthday</option>"
						+	"		  <option value='Dance Again'>Dance Again</option>"
						+	"		  <option value='Let's Get Loud'>Let's Get Loud</option>"
						+	"	</select>"
						+	"	<select class='form-control' name='music7' >"
						+	"		  <option value='' disabled selected>Select Music</option>"
						+	"		  <option value='Love Story'>Love Story</option>"
						+	"		  <option value='Nothing Else Mathers'>Nothing Else Mathers</option>"
						+	"		  <option value='This Is The Life'>This Is The Life</option>"
						+	"		  <option value='Get the Party Started'>Get the Party Started</option>"
						+	"		  <option value='Happy Birthday'>Happy Birthday</option>"
						+	"		  <option value='Dance Again'>Dance Again</option>"
						+	"		  <option value='Let's Get Loud'>Let's Get Loud</option>"
						+	"	</select>"
			+	"</div>"
			+	"</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='savePlaylist(this.form)'>Continue</button>"
			+   "</div>"
			+"</form>"
		}
		
		function savePlaylist(form){
			sessionStorage.setItem("music1", form.music1.value);
			sessionStorage.setItem("music2", form.music2.value);
			sessionStorage.setItem("music3", form.music3.value);
			sessionStorage.setItem("music4", form.music4.value);
			sessionStorage.setItem("music5", form.music5.value);
			sessionStorage.setItem("music6", form.music6.value);
			sessionStorage.setItem("music7", form.music7.value);
			playlist = new Array(form.music1.value,form.music2.value,form.music3.value,form.music4.value,form.music5.value,form.music6.value,form.music7.value);
			designCake();
		}
		
		function designCake()
		{
			document.getElementById("dynamicInclude").innerHTML="<h4>Design Cake</h4><div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<img class='col-md-4' src='cake1.jpg' alt='cake1'>"
			+"<img class='col-md-4' src='cake2.jpg' alt='cake1'>"
			+"<img class='col-md-4' src='cake3.jpg' alt='cake1'>"
			+   "</div>"
			+"<div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<img class='col-md-4' src='cake4.jpg' alt='cake1'>"
			+"<img class='col-md-4' src='cake5.jpg' alt='cake1'>"
			+"<img class='col-md-4' src='cake6.jpg' alt='cake1'>"
			+   "</div>"
			+"<div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<img class='col-md-4' src='cake7.jpg' alt='cake1'>"
			+"<img class='col-md-4' src='cake8.jpg' alt='cake1'>"
			+"<img class='col-md-4' src='cake9.jpg' alt='cake1'>"
			+   "</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='router1()'>Continue</button>"
			+   "</div>"
			+   "</div>"
		}
		function router1(){
			var pV=sessionStorage.getItem("pV");
			if(pV==1)
			{
				giftForGuests();
			}
			if(pV==2)
			{
				setInformation();
			}
			
		}
		
		function setInformation(){
			document.getElementById("dynamicInclude").innerHTML = "<h4>Additional Information</h4><form class='row contact_form' action='' name='ınfroamtion'>"
						+"<textarea class='form-control' name='addInfo' rows='4' cols='50'>"
						+"</textarea>"
                       + "<div class='col-md-12 text-right'>"
                      +   "   <button class='btn submit_btn' onClick='saveInfo(this.form)'>Continue</button>"
                     +   "</div>"
					+	"</div>"					
                    +"</form>"
			
		}
		function saveInfo(form)
		{
			sessionStorage.setItem("addInfo", form.addInfo.value);
			information=form.addInfo.value;
			var pV=sessionStorage.getItem("pV");
			sendGiftRecommendation();
			
			
		}
		
		function sendGiftRecommendation()
		{
			var pV=sessionStorage.getItem("pV");
			if(pV==2)
			{	
				sessionStorage.setItem("birhtdayGift", "T-Shirt");
				selectBirthdayCar();
			}
			if(pV==3)
			{
				sessionStorage.setItem("motherGift", "Skirt");
				setBabyShowerInfo();
			}
		}