// Toggle Forms

$("#signupBtn").click(function(){

    $("#signupForm").show();
    $("#loginForm").hide();

    $("#signupBtn").addClass("active-btn");
    $("#loginBtn").removeClass("active-btn");

});

$("#loginBtn").click(function(){

    $("#loginForm").show();
    $("#signupForm").hide();

    $("#loginBtn").addClass("active-btn");
    $("#signupBtn").removeClass("active-btn");

});



// Signup System

$("#signupForm").submit(function(e){

    e.preventDefault();

    let name = $("#signupName").val();
    let email = $("#signupEmail").val();
    let password = $("#signupPassword").val();

    if(name == "" || email == "" || password == ""){

        $("#message").html(
            "<span style='color:red'>Please fill all fields</span>"
        );

    }else{

        let user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem(
            "fitzoneUser",
            JSON.stringify(user)
        );

        $("#message").html(
            "<span style='color:#00ff88'>Signup Successful 🚀</span>"
        );

    }

});



// Login System

$("#loginForm").submit(function(e){

    e.preventDefault();

    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();

    let storedUser = JSON.parse(
        localStorage.getItem("fitzoneUser")
    );

    if(storedUser == null){

        $("#message").html(
            "<span style='color:red'>No User Found</span>"
        );

    }else if(
        email == storedUser.email &&
        password == storedUser.password
    ){

        $("#message").html(
            "<span style='color:#00ff88'>Login Successful 🔥</span>"
        );

        setTimeout(() => {

            window.location.href = "Gym.html";

        }, 1500);

    }else{

        $("#message").html(
            "<span style='color:red'>Invalid Email or Password</span>"
        );

    }

});