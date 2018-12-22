var age;
var personName;
var gender;

function setPersonalInfo(){
	document.getElementById("dynamicInclude").innerHTML = "<h4>Enter Birthday Person Information</h4><form class='row contact_form' action='' name='birthdayPersonInfo'>"
                        +"<div class='col-md-12'>"
                           +" <div class='form-group'>"
                             +" <input type='number' class='form-control' id='bride' name='age' placeholder='Age'>"
                            +"</div>"
							+"<div class='form-group'>"
                          +   "  <input type='text' class='form-control' name='personName' placeholder='Name'>"
                         +   "</div>"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='gender' >"
						+	"		  <option value='male'>Male</option>"
						+	"		  <option value='female'>Female</option>"
						+	"	</select>"
						+	"</div>"
                       + "<div class='col-md-12 text-right'>"
                      +   "   <button class='btn submit_btn' onClick='savePersonInfo(this.form)'>Continue</button>"
                     +   "</div>"
					+	"</div>"					
                    +"</form>"
	
}
function savePersonInfo(form){
			age=form.age.value;
			personName=form.personName.value;
			gender=form.gender.value;
			sessionStorage.setItem("age",age);
			sessionStorage.setItem("personName",personName);
			sessionStorage.setItem("gender",gender);
			recommendSuprise();
	
}

function recommendSuprise(){
			document.getElementById("dynamicInclude").innerHTML="<form class='row contact_form' action='' name='surpriseForm'>"
						+	"<div class='col-md-12' >"
						+   "<p>Surprize Option For Birthday</p>"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='surprize' >"
						+	"		  <option value='' disabled selected>Surprize</option>"
						+	"		  <option value='surprize1'>Balloon Blast behind the Closed Door</option>"
						+	"		  <option value='surprize2'>Unplanned Road Trip</option>"
						+	"		  <option value='surprize3'>Radio Broadcasting</option>"
						+	"	</select>"
						+	"</div>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='completeSurprize(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>"
		}
		function completeSurprize(form){
			sessionStorage.setItem("surprize", form.surprize.value);
			chooseEntertainer();
		}
		
function planTheDay()
		{
			document.getElementById("dynamicInclude").innerHTML="<h4>Activity Plan</h4><form class='row contact_form' action='' name='menuForm'>"
						+	"<div class='col-md-12' >Activity Plan"
						+	"<div class='form-group '>19:00"
						+	"	<select class='form-control' name='act1' >"
						+	"		  <option value='' disabled selected>Choose Activty</option>"
						+	"		  <option value='Football'>Football</option>"
						+	"		  <option value='Paintball'>Paintball</option>"
						+	"		  <option value='DrinkCoffee'>DrinkCoffee</option>"
						+	"		  <option value='Dance' >Dance</option>"
						+	"	</select>"
						+	"</div>"
                        +	"<div class='form-group '>20:00"
						+	"	<select class='form-control' name='act2' >"
						+	"		  <option value='' disabled selected>Choose Activty</option>"
						+	"		  <option value='Football'>Football</option>"
						+	"		  <option value='Paintball'>Paintball</option>"
						+	"		  <option value='DrinkCoffee'>DrinkCoffee</option>"
						+	"		  <option value='Dance' >Dance</option>"
						+	"	</select>"
						+	"</div>"
						+	"<div class='form-group '>21:00"
						+	"	<select class='form-control' name='act3' >"
						+	"		  <option value='' disabled selected>Choose Activty</option>"
						+	"		  <option value='Football'>Football</option>"
						+	"		  <option value='Paintball'>Paintball</option>"
						+	"		  <option value='DrinkCoffee'>DrinkCoffee</option>"
						+	"		  <option value='Dance' >Dance</option>"
						+	"	</select>"
						+	"</div>"
						+	"<div class='form-group '>22:00"
						+	"	<select class='form-control' name='act4' >"
						+	"		  <option value='' disabled selected>Choose Activty</option>"
						+	"		  <option value='Football'>Football</option>"
						+	"		  <option value='Paintball'>Paintball</option>"
						+	"		  <option value='DrinkCoffee'>DrinkCoffee</option>"
						+	"		  <option value='Dance' >Dance</option>"
						+	"	</select>"
						+	"</div>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='saveActivity(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>"
		}
		function saveActivity(form){
			sessionStorage.setItem("act1", form.act1.value);
			sessionStorage.setItem("act2", form.act2.value);
			sessionStorage.setItem("act3", form.act3.value);
			sessionStorage.setItem("act4", form.act4.value);
			pickDriver();
		}