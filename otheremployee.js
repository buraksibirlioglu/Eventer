function pickBabySitterHomeCleaner(){
			document.getElementById("dynamicInclude").innerHTML="<form class='row contact_form' action='' name='babysitterhomecleaner'>"
						+	"<div class='col-md-12' >"
						+   "<p>Babysitter Option</p>"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='babySitter' >"
						+	"		  <option value='no'>No</option>"
						+	"		  <option value='yes'>Yes</option>"
						+	"	</select>"
						+	"</div>"
						+   "<p>Home Cleaner Option</p>"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='homeCleaner' >"
						+	"		  <option value='no'>No</option>"
						+	"		  <option value='yes'>Yes</option>"
						+	"	</select>"
						+	"</div>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='babySitterHomeCleanerComplete(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>"
		}
		function babySitterHomeCleanerComplete(form){
			sessionStorage.setItem("babySitter", form.babySitter.value);
			sessionStorage.setItem("homeCleaner", form.homeCleaner.value);
			sendInformation();
		}
function pickDriver(){
			document.getElementById("dynamicInclude").innerHTML="<form class='row contact_form' action='' name='driverForBirthday'>"
						+   "<p>Driver For Birthday</p>"
						+	"<div class='col-md-12' >"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='driverforbirthday' >"
						+	"		  <option value='no'>No</option>"
						+	"		  <option value='yes'>Yes</option>"
						+	"	</select>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='driverForBirthdayComplete(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>"
		}
function driverForBirthdayComplete(form){
			sessionStorage.setItem("driver", form.driverforbirthday.value);
			sendInformation();
		}
function chooseEntertainer(){
			document.getElementById("dynamicInclude").innerHTML="<form class='row contact_form' action='' name='entertainerForBirthdayForm'>"
						+   "<p>Entertainer For Birthday</p>"
						+	"<div class='col-md-12' >"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='varEntertainerForBirthday' >"
						+	"		  <option value='clown'>Clown</option>"
						+	"		  <option value='standup'>Stand Up</option>"
						+	"		  <option value='singer'>Singer</option>"
						+	"	</select>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='entertainerForBirthdayComplete(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>"
		}
function entertainerForBirthdayComplete(form){
			sessionStorage.setItem("entertainer", form.varEntertainerForBirthday.value);
			planTheDay();
}

function pickPhotographer(){
			document.getElementById("dynamicInclude").innerHTML="<form class='row contact_form' action='' name='photographerForm'>"
						+   "<p>Do you want photographer for organization?</p>"
						+	"<div class='col-md-12' >"
						+	"<div class='form-group '>"
						+	"	<select class='form-control' name='varPhotographer' >"
						+	"		  <option value='no'>No</option>"
						+	"		  <option value='yes'>Yes</option>"
						+	"	</select>"
						+ 	"<div class='col-md-12 text-right'>"
						+   "   <button class='btn submit_btn' onClick='photographerComplete(this.form)'>Continue</button>"
						+   "</div>"
						+"</form>"
		}
		
function photographerComplete(form){
			sessionStorage.setItem("varPhotographer", form.varPhotographer.value);
			var pV=sessionStorage.getItem("pV");
			if(pV==1)
			{
				selectWeddingPlace();
			}
			if(pV==2)
			{
				selectBirthdayPlace();
			}
			if(pV==3)
			{
				giftForGuests();
			}
}