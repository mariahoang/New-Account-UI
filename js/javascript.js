// will flip back to the front form
document.getElementById( 'returnBack' ).addEventListener( 'click', function( event ) {
    document.getElementById( 'back' ).className = 'flip';
    document.getElementById( 'front' ).className = 'flip';
}, false );

// alert pop up telling user form was submitted
document.getElementById("theForm").addEventListener("submit", popUp);
function popUp() {
    alert("The form was submitted.");
}

// using RegEx to validate postal code
document.getElementById("postalCode").addEventListener('keydown', validatePostalCode);
function validatePostalCode() {
	var pattern = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
	if(document.getElementById('postalCode').value.length == 6){
		if(!(pattern.test(document.getElementById('postalCode').value))){
			alert('Invalid Postal Code');
		}
	}
}	

document.getElementById('contd').addEventListener('click', validatePassword)
// function that checks if the two passwords match
function validatePassword() {
        var pwd = document.getElementById("pwd1").value;
        var rePwd = document.getElementById("pwd2").value;
        if (pwd != rePwd) {
            alert("Passwords do not match.");
            return false;
        }
        else{
        	// ##### will flip to the back form
			document.getElementById( 'contd' ).addEventListener( 'click', function( event ) {
    		document.getElementById( 'back' ).className = 'flip flip-front';
    		document.getElementById( 'front' ).className = 'flip flip-back';
			}, false );
        	return true;
        }
    }