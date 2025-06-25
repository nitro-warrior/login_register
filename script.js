function reg() {
    const jname = document.getElementById("name").value;
    const jpswd = document.getElementById("pswd").value;

    if (jname == localStorage.getItem("name") && jpswd == localStorage.getItem("pswd")) {
        // alert("Already Present");
        document.getElementById("d3").innerHTML=`<div class="alert alert-success alert-dismissible">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>Present!</strong> This user exist.
  </div>`;
    }
    else {
        localStorage.setItem("name", jname);
        localStorage.setItem("pswd", jpswd);
        // alert("Saved to localStorage!");
        document.getElementById("d3").innerHTML=`<div class="alert alert-success alert-dismissible">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>Saved!</strong> Name and Password Saved in Local Storage.
  </div>`;
    }


}



function login() {
    const lname = document.getElementById("uname").value;
    const lpswd = document.getElementById("upswd").value;
    // console.log(name, pswd)
    // console.log(localStorage.getItem("name"))
    // console.log(localStorage.getItem("pswd"))
    if (lname === localStorage.getItem("name") && lpswd === localStorage.getItem("pswd")) {
        // alert("Login Success");
    document.getElementById("d3").innerHTML=`<div class="alert alert-success alert-dismissible">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>Success!</strong> You have Logged in Successfully.
  </div>`;
        window.location.href = 'welcome.html';
    }
    else {
    document.getElementById("d3").innerHTML=`<div class="alert alert-success alert-dismissible">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>Failed!</strong> Username and Password do not match.
  </div>`;
        // alert("Login Failed");
    }
}



    document.getElementById("reset1").addEventListener("click",function(){
            document.getElementById("name").value = "";
            document.getElementById("pswd").value = "";
    });

    document.getElementById("reset2").addEventListener("click",function(){
            document.getElementById("uname").value = "";
            document.getElementById("upswd").value = "";
    });

// document.getElementById("submit").addEventListener("click",function(){
//     document.getElementById("d3").innerHTML=`<div class="alert alert-success alert-dismissible">
//     <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
//     <strong>Success!</strong> This alert box could indicate a successful or positive action.
//   </div>`;
// });

// document.getElementById("login").addEventListener("click",function(){
//     document.getElementById("d3").innerHTML=`<div class="alert alert-success alert-dismissible">
//     <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
//     <strong>Success!</strong> This alert box could indicate a successful or positive action.
//   </div>`;
// });

