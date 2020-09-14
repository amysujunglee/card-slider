const people = [
  {
    id: 1,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Susan Smith",
    job: "Web Developer",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry."
  },
  {
    id: 2,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "Anna Johnson",
    job: "Web Designer",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    id: 3,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Peter Jones",
    job: "Intern",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    id: 4,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "Bill Anderson",
    job: "Boss",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
  }
];

// select items
const img = document.getElementById("img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set the initial number
let item = 0;

// show person based on item
function showPerson() {
  const items = people[item];
  img.src = items.img;
  name.textContent = items.name;
  job.textContent = items.job;
  text.textContent = items.text;
}

// load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson();
});

nextBtn.addEventListener("click", function() {
  item++;
  if (item >= people.length) {
    item = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function() {
  item--;
  if (item < 0) {
    item = people.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", function() {
  item = Math.floor(Math.random() * people.length);
  showPerson();
});
