const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick=()=> {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
  };
  function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phonenumber : document.getElementById("number").value,
        skills : document.getElementById("subjects").value,
        yourmessages : document.getElementById("textarea").value,
    }

    emailjs.send("service_pdbzrlu","template_gcijz6q",parms).then(alert("Email has been sent!"))



  }