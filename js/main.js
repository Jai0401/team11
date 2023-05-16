const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

window.addEventListener("scroll", function() {
  if (isElementInViewport(card1)) {
    card1.classList.add("visible");
  }
  if (isElementInViewport(card2)) {
    card2.classList.add("visible");
  }
  if (isElementInViewport(card3)) {
    card3.classList.add("visible");
  }
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("load", function() {
  const descriptionContainer = document.getElementById("description-container");
  descriptionContainer.addEventListener("mouseover", function() {
    descriptionContainer.innerHTML = "Have fun with Fantasy Cricket Leagues!";
  });

  descriptionContainer.addEventListener("mouseout", function() {
    descriptionContainer.innerHTML = "Here you can <strong>create and join fantasy cricket leagues,</strong> track your team's performance, and stay up-to-date on the latest cricket news.";
  });
});
window.onscroll = function() {
  var card1 = document.getElementById("card1");
  var card2 = document.getElementById("card2");
  var card3 = document.getElementById("card3");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    card1.style.display = "flex";
  }

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    card2.style.display = "flex";
  }

  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    card3.style.display = "flex";
  }
};

