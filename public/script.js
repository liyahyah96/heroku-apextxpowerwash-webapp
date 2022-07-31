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

// function showLink(event, id) {
//   var thisLink = document.getElementById(id);
//   thisLink.style.opacity = "1";
// }

// function hideLink(event, id) {
//   var thisLink = document.getElementById(id);
//   thisLink.style.opacity = "0";
// }