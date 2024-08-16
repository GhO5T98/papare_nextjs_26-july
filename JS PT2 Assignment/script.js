import {
  heroCards,
  featuredNewsCards,
  csgoTeams,
  eventMatches,
  pollResults,
} from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navLogo = document.getElementById("nav__logo");
  const footerLogo = document.getElementById("footer__logo");
  const themeToggleButton = document.getElementById("theme-toggle");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const mobileNav = document.querySelector(".mobile__nav");

  themeToggleButton.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);

    const icon = themeToggleButton.querySelector("i");
    if (newTheme === "dark") {
      icon.classList.replace("bxs-moon", "bxs-sun");
      navLogo.src = "./assets/logo-dark-theme.png";
      footerLogo.src = "./assets/logo-dark-theme.png";
    } else {
      icon.classList.replace("bxs-sun", "bxs-moon");
      navLogo.src = "./assets/logo-light-theme.png";
      footerLogo.src = "./assets/footer-light-theme.png";
    }
  });

  if (window.innerWidth < 992) {
    hamburgerMenu.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }

  // Resize event to toggle hamburger based on screen width
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      mobileNav.classList.remove("open");
    }
  });
  // Cards Map and DOM Insertion
  insertHeroCards();
  insertFeaturedNewsCards();
  insertTeamLogos();
  insertEventMatches();
  insertPollCandidates();
});

// Functions for DOM Insertion
function insertHeroCards() {
  const heroSection = document.querySelector(".hero__section");
  if (heroSection && Array.isArray(heroCards)) {
    const heroCardEl = heroCards
      .map(
        (card) => `
      <div class="hero__card" id="card-${card.id}">
        <img src="${card.image}" alt="${card.title}" class="card-image" />
        <div class="card-content">
          <h2 class="card-title">${card.title}</h2>
          <p class="card-subtitle">${card.subtitle}</p>
        </div>
      </div>
    `
      )
      .join("");
    heroSection.innerHTML = heroCardEl;
  }
}

function insertFeaturedNewsCards() {
  const featuredNewsGallery = document.querySelector(".featured__news-gallery");
  if (featuredNewsGallery && Array.isArray(featuredNewsCards)) {
    const maxTitleLength = 42;
    const featuredNewsCardsEl = featuredNewsCards
      .map((card) => {
        const truncatedTitle =
          card.title.length > maxTitleLength
            ? card.title.slice(0, maxTitleLength) + "..."
            : card.title;
        return `
        <div class="featured__news-card" id="card-${card.id}">
          <img src="${card.image}" alt="${card.title}" class="ftnews__card-image" />
          <div class="ftnews__card-content">
            <h5 class="ftnews__card-date">${card.date}</h5>
            <h2 class="ftnews__card-title">${truncatedTitle}</h2>
            <p class="ftnews__card-subtitle">Read More</p>
          </div>
        </div>
      `;
      })
      .join("");
    featuredNewsGallery.innerHTML = featuredNewsCardsEl;
  }
}

function insertTeamLogos() {
  const teamsLogoSec = document.querySelector(".teams__logo");
  if (teamsLogoSec && Array.isArray(csgoTeams)) {
    const teamLogos = csgoTeams
      .map(
        (team) => `
      <img src="${team.image}" alt="${team.name}" class="team__logo-img" />
    `
      )
      .join("");
    teamsLogoSec.innerHTML = teamLogos;
  }
}

function insertEventMatches() {
  const finishedEventSec = document.querySelector(".event__games");
  if (finishedEventSec && Array.isArray(eventMatches)) {
    const matchInfoEl = eventMatches
      .map(
        (game) => `
      <div class="match__info" id="${game.id}">
        <div class="match__date">
          <h5>${game.stage}</h5>
          <span>${game.date}</span>
        </div>
        <div class="game__result">
          <div class="team team-home">
            <span class="event__team-name">${game.homeTeamName}</span>
            <img src="${game.homeTeamImg}" alt="${game.homeTeamName} Logo" class="event__team-logo" />
          </div>
          <span class="score">${game.score}</span>
          <div class="team team-away">
            <img src="${game.awayTeamImg}" alt="${game.awayTeamName} Logo" class="event__team-logo" />
            <span class="event__team-name">${game.awayTeamName}</span>
          </div>
        </div>
      </div>
    `
      )
      .join("");
    finishedEventSec.innerHTML = matchInfoEl;
  }
}

function insertPollCandidates() {
  const pollSection = document.querySelector(".poll__candidates");
  if (pollSection && Array.isArray(pollResults)) {
    const pollCandidatesEl = pollResults
      .map(
        (player) => `
      <div class="player__vote" id="${player.id}">
        <div class="vote__percentage">${player.votePerc}</div>
        <div class="player__name"><h4>${player.name}</h4></div>
        <div class="player__team">
          <img src="${player.teamImg}" alt="Team Logo" />
        </div>
      </div>
    `
      )
      .join("");
    pollSection.innerHTML = pollCandidatesEl;
  }
}
