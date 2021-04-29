var tabLink = document.querySelectorAll('.btn'); // select all btn
 var tabContent = document.querySelectorAll('.tab-con'); // select all content section

// rest is used to not display in contewnt in the page in page reload
 function reset(){

	for(var i=0 ; i < tabContent.length ; i++){
	tabContent[i].style.display = "none";
 }

 }
// this is used for desplay first contant as default in the page 
  function tabContetnOne(){
 	 reset();
 	 tabContent[0].style.display = "block";
  }
  tabContetnOne();
// this is the main working function. whenever a btn click everything reset and that particular button will display.
 for( let a=0 ; a < tabLink.length ; a++)
 {
 	
 	tabLink[a].addEventListener('click',function(){

 		reset();
 		tabContent[a].style.display ="block";
 	})
 }

