function giftForGuests(){
			var pV=sessionStorage.getItem("pV");
			if(pV==1)
			{
				selectWeddingCandy();
			}
			if(pV==3)
			{
				selectBabyCandies();
			}
}
function selectWeddingCandy()
{
	document.getElementById("dynamicInclude").innerHTML="<h4>Select Candies</h4><form class='row contact_form' action='' name='wCount'>"
						+	"<div class='col-md-12' >"
						+"<div class='form-group'>"
                        +   "  <input type='number' class='form-control' name='wgCount'>"
                        +   "</div>"
						+"</form>"
			+"<div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Candies</div>"
			+"<img class='col-md-3' src='wg1.jpg' alt='wg'>"
			+"<img class='col-md-3' src='wg2.jpg' alt='wg'>"
			+"<img class='col-md-3' src='wg3.jpg' alt='wg'>"
			+   "</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='saveWG(this.form)'>Continue</button>"
			+   "</div>"
			+   "</div>"
}

function saveWG(form){
	
	sessionStorage.setItem("wgCount", form.wgCount.value);
	brideGroom();
}

function selectBabyCandies()
{
	document.getElementById("dynamicInclude").innerHTML="<h4>Select Candies</h4><form class='row contact_form' action='' name='bCount'>"
						+	"<div class='col-md-12' >"
						+"<div class='form-group'>"
                        +   "  <input type='number' class='form-control' name='bgCount'>"
                        +   "</div>"
						+"</form>"
			+"<div class='col-md-12' style='display:flex;height: 200px;padding:10px;'>"
			+"<div class='col-md-3'>Candies</div>"
			+"<img class='col-md-3' src='bg1.jpg' alt='wg'>"
			+"<img class='col-md-3' src='bg2.jpeg' alt='wg'>"
			+"<img class='col-md-3' src='bg3.jpg' alt='wg'>"
			+   "</div>"
			+ 	"<div class='col-md-12 text-right'>"
			+   "   <button class='btn submit_btn' onClick='saveBG(this.form)'>Continue</button>"
			+   "</div>"
			+   "</div>"
}

function saveBG(form){
	
	sessionStorage.setItem("bgCount", form.bgCount.value);
	setInformation();
}