var Siono = false;

function myTrue(){
	Siono = true;	
}

function myFunction(textito){
	
	if (textito.value == ""){
		alert("Enter the text");
		textito.focus();
	}
		

}

function myFunc(){
	
	if(document.getElementById("val").value == ""){
		alert("You have to enter the average");
		document.getElementById("val").focus();
	}
}

function valCheckbox() {
        var checkBoxes = document.getElementsByClassName('uk-checkbox');
        var isChecked = false;
        for (var i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked) {
                isChecked = true;
				break;
            }
		}
			
        if (!isChecked) {
            alert('Sie muessen bei der ersten Frage mindestens ein Feld markieren!');
        }
		
		else{
			if(Siono){
				var texto = document.getElementById("text");
				myFunction(texto);
			}
			else{
				var texts = document.getElementsByClassName('textarea');
				for(var i = 0; i < checkBoxes.length; i++){
					if(checkBoxes[i].checked){
						myFunction(texts[i]);
					}
				}
			}
		}
				
}

	


