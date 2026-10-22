// =========================================================
// Maison Ora · interactions du site
// 1. Ouvrir / fermer le menu sur téléphone
// 2. Afficher le message de remerciement quand on envoie le formulaire
// =========================================================


// ---------- 1. Menu mobile ----------

const menuButton = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const menuIcon = menuButton.querySelector('.material-symbols-outlined');

function setMenuOpen(open) {
  mobileNav.hidden = !open;
  menuButton.setAttribute('aria-expanded', open);
  menuIcon.textContent = open ? 'close' : 'menu';  // l'icône devient une croix quand le menu est ouvert
}

menuButton.addEventListener('click', function () {
  setMenuOpen(mobileNav.hidden);
});

// Quand on clique sur un lien du menu, on referme le menu
mobileNav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    setMenuOpen(false);
  });
});


// ---------- 2. Formulaire de devis ----------

const form = document.getElementById('devis-form');
const thanks = document.getElementById('devis-merci');
const firstNameSpot = document.getElementById('merci-prenom');
const resetButton = document.getElementById('devis-reset');

form.addEventListener('submit', function (event) {
  event.preventDefault();  // empêche le navigateur de recharger la page

  // On garde seulement le premier mot du champ "Nom et prénom"
  const fullName = form.elements.nom.value.trim();
  firstNameSpot.textContent = fullName.split(' ')[0];

  // Pour l'instant, la demande n'est envoyée nulle part.
  // Étape suivante possible : la transmettre par e-mail (Formspree, EmailJS…)

  form.hidden = true;
  thanks.hidden = false;
});

resetButton.addEventListener('click', function () {
  form.reset();
  thanks.hidden = true;
  form.hidden = false;
});
