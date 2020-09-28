function signupData(){
    let firstName= $("#firstName").val();
    let lastName= $("#lastName").val();
    let emailName= $("#Email1").val();
    let password= $("#password").val();
    let confirmPassword = $("#repassword").val();
    
 
           
    
  
    if(firstName!=0 && lastName!=0 && emailName!=0 && password!=0 && confirmPassword!=0 ){
    if (password != confirmPassword){
        alert("password mismatch");
        event.preventDefault();
      }
      else
      {
        event.preventDefault();
        swal({
            title: "Good job!",
            text: "your account is ready!",
            icon: "success",
          });
      alert("first name:"+firstName+"last name:"+lastName+"Email name:"+emailName+"password:"+password).val();
    }
}
}