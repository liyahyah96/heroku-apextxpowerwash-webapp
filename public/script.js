function showSection(event, id) {
    var i, sections;
    sections = document.getElementsByClassName("svc-section");
      for (i = 0; i < sections.length; i++) {
        if ( !sections[i].classList.contains("hide") ) { sections[i].classList.add("hide"); }
      }
      document.getElementById(id).classList.remove("hide");
  }

function showMenu(event, id) {
  navbar = document.getElementById(id);
  if (navbar.classList.contains("hide-navbar")) {
    navbar.classList.remove("hide-navbar");
  } else if (!navbar.classList.contains("hide-navbar")) {
    navbar.classList.add("hide-navbar");
  }
}

function hidePointer(event, id) {
  var thisPointer = document.getElementById(id);
  thisPointer.style.opacity = "0";
}

function showPointer(event, id) {
  var thisPointer = document.getElementById(id);
  thisPointer.style.opacity = "1";
}

const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let message = document.getElementById("message").value;

  event.preventDefault();

  let formData = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    message: message
  };

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = () => {
    console.log(xhr.responseText);
    name = '';
    email = '';
    phone = '';
    address = '';
    message = '';
  }
  xhr.send(JSON.stringify(formData));

})

const sendMail = (mail) => {
  fetch("/", {
    method: "post",
    body: mail,
  }).then((response) => {
    console.log(response);
    return response.json();
  });
};