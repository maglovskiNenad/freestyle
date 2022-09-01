"use strict";

// hamburger menu
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

// scroll home button
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const blog = document.querySelector(".blog");
const contact = document.querySelector(".contact");

const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");

//blog
const blogText = document.querySelector(".blog_text");
const text = document.querySelector(".text");
const dots = document.querySelector(".dots");
const span = document.getElementsByClassName("span");

/////////////////////////////////////////////////////////////////

// hamburger menu
function menuActive() {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
}

menu.addEventListener("click", menuActive);

// scroll home button
function takeMeHome(e) {
  e.preventDefault();
  const scroll1 = section1.getBoundingClientRect();
  window.scrollTo(
    scroll1.left + window.pageXOffset,
    scroll1.top + window.pageYOffset
  );
}

function aboutSection(e) {
  e.preventDefault(e);
  const scroll2 = section2.getBoundingClientRect();
  window.scrollTo(
    scroll2.left + window.pageXOffset,
    scroll2.top + window.pageYOffset
  );
}

function blogSection(e) {
  e.preventDefault();
  const scroll3 = section3.getBoundingClientRect();
  window.scrollTo(
    scroll3.left + window.pageXOffset,
    scroll3.top + window.pageYOffset
  );
}

function takeMeContact(e) {
  e.preventDefault();
  const scroll4 = section4.getBoundingClientRect();
  window.scrollTo(
    scroll4.left + window.pageXOffset,
    scroll4.top + window.pageYOffset
  );
}

home.addEventListener("click", takeMeHome);
about.addEventListener("click", aboutSection);
blog.addEventListener("click", blogSection);
contact.addEventListener("click", takeMeContact);

//blog

let whatPeopleSay = [
  {
    id: 1,
    name: "Liam",
    surname: "Smith",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quas aspernatur provident deserunt beatae officia fuga excepturi,voluptas voluptate harum quis pariatur nam saepe quod. Itaque,nesciunt! Aut id iusto itaque laboriosam voluptate, quo repudiandae,illo officia excepturi in quam, iure distinctio quas molestiae ipsalaborum! Repellendus totam quis dignissimos?",
    img: "/img/blog_img/user-.jpg",
  },
  {
    id: 2,
    name: "Noah",
    surname: "Johnson",
    text: "Mr. and Mrs. Charly were on a tour to Europe. They were travelling on a guided tour to five countries. They were going to travel through The Netherland, Belgium, Germany, Switzerland, and France for two weeks.Te guide for the tour was a Swiss. On the day of the travel the guide told them to check their passports, their traveler cheques, and their foreign cash. He told them to keep them safely.",
    img: "/img/blog_img/user-.jpg",
  },
  {
    id: 3,
    name: "Liam",
    surname: "Williams",
    text: "They traveled in a comfortable coach with a toilet, music, and video. The guide stopped the coach at many famous places. He explained the cultural importance of the places. They stayed in big hotels for the night and ate in the restaurants.",
    img: "/img/blog_img/user-.jpg",
  },
  {
    id: 4,
    name: "	Oliver",
    surname: "Brown",
    text: "Once three fish lived in a pond. One evening, some fishermen passed by the pond and saw the fish. “This pond is full of fish”, they told each other excitedly. “we have never fished here before. We must come back tomorrow morning with our nets and catch these fish!” So saying, the fishermen left.When the eldest of the three fish heard this, he was troubled. He called the other fish together and said.",
    img: "/img/blog_img/user-.jpg",
  },
];

// show all dots on screen
function addDots() {
  let html = "";
  for (let i = 0; i < whatPeopleSay.length; i++) {
    html += `<span class="${"span"}" id=${
      whatPeopleSay[i].id
    } onclick="getNumber(${whatPeopleSay[i].id})"></span>`;
  }
  dots.insertAdjacentHTML("beforeend", html);
}
addDots();

function getNumber(idNumber) {
  let html = "";
  for (let i = 0; i < whatPeopleSay.length; i++) {
    if (idNumber === whatPeopleSay[i].id) {
      html = `<div class="blog_text">
      <div class="text">
       ${whatPeopleSay[i].text}
      </div>
      <div class="user">
        <img src="img/blog_img/user-${whatPeopleSay[i].id}.jpg" alt="" />
        <p>${whatPeopleSay[i].name} ${whatPeopleSay[i].surname}</p>
      </div>
    </div>`;
      blogText.innerHTML = html;

      document.getElementById(`${whatPeopleSay[i].id}`).style.opacity = 2;
    } else {
      document.getElementById(`${whatPeopleSay[i].id}`).style.opacity = 0.3;
    }
  }
}

// FORMA

const name = document.querySelector(".name");
const username = document.querySelector(".username");
const nickname = document.querySelector(".nickname");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const btn = document.querySelector(".btn");

btn.addEventListener("click", doRequest);

async function doRequest(e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:3000/posts";
  let added = true;

  if (name.value.trim() === "") {
    added = false;
    name.classList.add("active");
  }

  if (username.value.trim() === "") {
    added = false;
    username.classList.add("active");
  }

  if (nickname.value.trim() === "") {
    added = false;
    nickname.classList.add("active");
  }

  if (email.value.trim() === "") {
    added = false;
    email.classList.add("active");
  }

  if (message.value.trim() === "") {
    added = false;
    message.classList.add("active");
  }

  if (added == true) {
    // POSTING USER
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);
      }
    };
    var data = JSON.stringify({
      name: name.value,
      username: username.value,
      nickname: nickname.value,
      email: email.value,
      message: message.value,
    });

    xhr.send(data);

    //INPUTS ARE EMPTY
    name.value =
      username.value =
      nickname.value =
      email.value =
      message.value =
        "";

    //
    name.classList.remove("active");
    username.classList.remove("active");
    nickname.classList.remove("active");
    email.classList.remove("active");
    message.classList.remove("active");
  }
}

// JUST ANOTHER WAY TO DO IT

const getJSON = function () {
  let url = "http://localhost:3000/posts";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      for (let i = 0; i < json.length; i++) {
        console.log(json[i], "data from users");
      }
    }
  };
  xhr.send(null);
};

getJSON();

const getComents = function () {
  let url = "http://localhost:3000/comments";
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i], "data from blog");
      }
    }
  };

  xhr.send(null);
};

getComents();

//ZADACI KOJI TREBA DA SE ODRADE

// form treba da se promeni da bude vid poruke koja moze da se posalje na server
// validacija na formi postoji pokusaj da je poboljsas
// mali,srednji i veliki ekran nisu uradjeni
// footer nije uradjen ujedno bi trebao na tekstu sam tekst ima animaciju koja je vec postojeca ako ne bar da pointer bude cursor
// pokusaj da slijder bude na poziv od json podatka po mogucstu da bude isti
// ako je ikako moguce da sve generalno bude responsive
