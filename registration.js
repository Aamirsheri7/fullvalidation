
let firstname_validate_nameError = true; 
let lastname_validate_nameError = true;
let email_validate_nameError = true;
let phone_validate_nameError = true;
let pasword_validation_nameError = true;
let fullname_validate_nameError = true;

function fun(input){
    if(/^\s./.test(input.value))
    input.value='';
}

function fn(input){
    var regex = /[^a-z]/gi;
    input.value=input.value.replace(regex,"");

}
function namespc(input){
      var regex = /[\s][a-zA-Z0-9]/gi;
      input.value=input.value.replace(regex,"");
  }

  function onedot(input){
      var regex = /[\s.][^a-zA-Z0-9]/gi;
      input.value=input.value.replace(regex,"");
  }



    function space(input){
    var regex = /[^A-Za-z0-9-!@#%&$*._]/g;
    input.value= input.value.replace(regex,"");
}
    

function fn1(input){
    var regex = /[^A-Za-z0-9]/gi;
    input.value= input.value.replace(regex,"");
}
function ln1(input){
    var regex = /[^a-z.]/gi;
    input.value=input.value.replace(regex,"");

}
function mbno(input){
    var regex = /[^0-9]/gi;
    input.value= input.value.replace(regex,"");
}
function nn(input){
    var regex = /[^.]/gi;
    var regex1 = /[^a-zA-Z0-9]/gi;
    if(input.value == '.'){
        input.value = input.value.replace(regex,"");
    }
    else{
        input.value= input.value.replace(regex1,"");
    }
}



       

function firstname_validate(){
		var user = document.getElementById("user").value;
		
        if (user == "") {
            document.getElementById('ffname').innerHTML = "**Please fill the First Name";
            
            firstname_validate_nameError = false;
        }else if(/^[A-z][a-z0-9_-]$/.test( user )){
			document.getElementById('ffname').innerHTML = "** invalid";
            firstname_validate_nameError = false;
		}else if(user.indexOf(" ") >-1) {
			document.getElementById('ffname').innerHTML = "** Space not allowed";
            firstname_validate_nameError = false;
		}
        else if(/([A-Za-z])\1+\1+/g.test(user)) {
			document.getElementById('ffname').innerHTML = "** Repeated character more than two  not allowed";
            firstname_validate_nameError = false;
        }
        else if(!/^[A-Z][A-Za-z0-9_-]{0,20}$/.test(user)){
            document.getElementById('ffname').innerHTML = "First Letter should be Capital Character"
            firstname_validate_nameError = false;
        }else if (!/^[a-zA-Z\s]*$/.test(user)){
            document.getElementById("ffname").innerHTML = "**Only characters are allowed"
            firstname_validate_nameError=false;
        }
        

    
        else{
			 document.getElementById('ffname').innerHTML = "";
             firstname_validate_nameError = true;
		}
}

function lastname_validate(){
		var lastname = document.getElementById("lastname").value;
		
        if (lastname == "") {
            document.getElementById('llname').innerHTML = "**Please fill the Last Name";
            lastname_validate_nameError = false;
        }else if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/.test( lastname )){
			document.getElementById('llname').innerHTML = "** special characters not allowed";
            lastname_validate_nameError = false;
		}else if(lastname.indexOf(" ") >-1) {
			document.getElementById('llname').innerHTML = "** Space not allowed";
            lastname_validate_nameError = false;
		}else if (lastname.length < 1 || user.length > 20) {
            document.getElementById('llname').innerHTML = "** user Length must be Between 1 and 20";
            lastname_validate_nameError = false;
        
        }else if(/^[.]|^[A-Z][A-Za-z0-9_-]{0,20}$/.test(lastname)){
            document.getElementById('llname').innerHTML = "Invalid"
            lastname_validate_nameError = false;

        }else if(/([A-Za-z])\1+\1+/g.test(lastname)) {
			document.getElementById('llname').innerHTML = "** Repeated character more than two  not allowed";
            lastname_validate_nameError = false;   
        }else if(!/^[a-zA-Z\s]*$/.test(lastname)){
            document.getElementById("llname").innerHTML = "**Only characters are allowed"
            lastname_validate_nameError=false;
        }
        else{
			 document.getElementById('llname').innerHTML = "";
             lastname_validate_nameError = true;
		}
}

///^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    //  
function fullname_validate(){
		var fullname = document.getElementById("fullname").value;
		var fulname =  /^[A-Z][A-Za-z0-9\.,-\s]+$/;
        if (fullname == "") {
            document.getElementById('flname').innerHTML = "**Please fill the Full Name";
            fullname_validate_nameError = false;
        }
        else if (!fulname.test(fullname)){
			document.getElementById('flname').innerHTML = "** Invalid";
            fullname_validate_nameError = false;
		}else if(/([A-Za-z])\1+\1+/gi.test(fullname)) {
			document.getElementById('flname').innerHTML = "** Repeated character more than two  not allowed";
            fulltname_validate_nameError = false;   
        }
        else{
			 document.getElementById('flname').innerHTML = "";
             fullname_validate_nameError = true;
		}
}
function email_validate(){
		var email = document.getElementById("email").value;
	
        if (email == "") {
            document.getElementById('eml').innerHTML = "**Please field the Email";
            email_validate_nameError = false;
        }else if(/^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/.test( email )){
			document.getElementById('eml').innerHTML = "";	
            email_validate_nameError = true;		
		}else{
			document.getElementById('eml').innerHTML = "** Invalid Email";
            email_validate_nameError =  true;
		}
}

function phone_validate(){
				var phone = document.getElementById('phone').value;			
                

			if(phone == ""){
				document.getElementById('phn').innerHTML =
				"** Please fill the mobile Number field";
                phone_validate_nameError  = false;
				return false;
			}
			else if(isNaN(phone)){
				document.getElementById('phn').innerHTML =
				"** user must write digits only not characters";
                phone_validate_nameError  = false;
				return false;
			}
			else if((phone.charAt(0)!=9) && (phone.charAt(0)!=8) && (phone.charAt(0)!=7) && (phone.charAt(0)!=6))
			{
				document.getElementById('phn').innerHTML = 
				"** Mobile no. must start with 9,8,7 and 6";
                phone_validate_nameError  = false;
				return false;
			}
			else if(phone.length!=10){
				document.getElementById('phn').innerHTML =
				"** Mobile Number must be 10 digits only";
                phone_validate_nameError  = false;
				return false;
			}
			else{
				document.getElementById('phn').innerHTML = "" ;
                phone_validate_nameError =true;

			}
		    }

            function validateFileType(){
                var fileName = document.getElementById("file").value;
                var idxDot = fileName.lastIndexOf(".")+1;
                var extFile = fileName.substr(idxDot, fileName).toLowerCase();
                if (extFile=="jpeg" || extFile=="svg" || extFile=="gif" || extFile=="png"){
                    
                }
    
            }

            function rem(){
                const fileInput = document.getElementById('file');
                fileInput.value="";
            }
        const fileIn = document.getElementById('imfile');
        fileIn.addEventListener('click', rem)

           
           
            function validate_txt_FileType(){
                var txtfile = document.getElementById("txtfile").value;
                var idxDot = txtfile.lastIndexOf(".")+1;
                var extFile = txtfile.substr(idxDot,txtfile).toLowerCase();
                if(extFile=="txt" || extFile=="csv" || extFile=="xls"){

            }
        }

        function del(){
            const txtfile = document.getElementById("txtfile");
            txtfile.value="";

        }

        const txtFileInput = document.getElementById("txfile");
        txtFileInput.addEventListener('click',del)
        




    function pasword_validation() {

      
        var passs = document.getElementById("pass").value;
        var cpass = document.getElementById("cpass").value;

        if (passs == "") {
            document.getElementById('pas').innerHTML = "** Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character";
            pasword_validation_nameError = false;
        }

        else if ((passs.length) < 8 || (passs.lenth > 16)) {
            document.getElementById('pas').innerHTML = "** Password  must be Between 8 and 16";
            pasword_validation_nameError =  false;
        }else if(/^[a-zA-Z0-9]+$/.test( passs )){
                    document.getElementById('pas').innerHTML = "** Invalid";
                    pasword_validation_nameError =  false;
        }
        else{
			document.getElementById('pas').innerHTML = "";
            pasword_validation_nameError = true;
		}
        if (cpass == "") {
            document.getElementById('cpas').innerHTML = "** Please Enter the Password Again";
            pasword_validation_nameError = false;
        }
        else if ((cpass.length) < 5 || (cpass.lenth > 20)) {
            document.getElementById('cpas').innerHTML = "** Password  must be Between 5 and 20";
            pasword_validation_nameError =  false;
        
        }else{
			document.getElementById('cpas').innerHTML = "";
		}if(/^[a-zA-Z0-9]+$/.test( passs )){
                    document.getElementById('cpas').innerHTML = "** Invalid";
                    pasword_validation_nameError = false;
        }if (passs != cpass) {
            document.getElementById('cpas').innerHTML = "Password are not matching";
            pasword_validation_nameError =  false;
        }else{
			document.getElementById('cpas').innerHTML = "";
            pasword_validation_nameError =  true;
		}

    }

    function showPass(){
     var x = document.getElementById("pass");
     if(x.type === "password"){
         x.type = "text";
     }else{
         x.type = "password"
     }
    } 
    function ShowPass(){
        var x = document.getElementById("cpass");
        if(x.type === "password"){
            x.type = "text";
        }else{
            x.type = "password"
        }
    }
    function validation(){
	firstname_validate();
	lastname_validate();
    fullname_validate();
	email_validate();
    phone_validate();
	pasword_validation();
    
   
   			if(firstname_validate_nameError == true && lastname_validate_nameError == true && email_validate_nameError == true && phone_validate_nameError== true && pasword_validation_nameError == true && fullname_validate_nameError==true )
				{
					return true;
                    
				}
				else{
					return false;
				}
			}
	
	

