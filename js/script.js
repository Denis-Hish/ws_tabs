// ----- TABS ----- //
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
   item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('active');
         });

         tabsItems.forEach(function (item) {
            item.classList.remove('active');
         });

         currentBtn.classList.add('active');
         currentTab.classList.add('active');
      }
   });
}

const currentDay = new Date().getDay();

let activeTab;
if (currentDay === 0 || currentDay === 6) {
   activeTab = document.querySelector('[data-tab="#tab_1"]');
} else {
   activeTab = document.querySelector(`[data-tab="#tab_${currentDay}"]`);
}

activeTab.classList.add('active');
document.querySelector(activeTab.getAttribute('data-tab')).classList.add('active');

// ----- BTN OPEN / CLOSE ----- //
const btnOpen = document.querySelector('.ws-btn-open');
const btnClose = document.querySelector('.btn-close');
const content = document.querySelector('.ws-plan');

btnOpen.addEventListener('click', function () {
   content.style.display = 'block';
   btnOpen.style.display = 'none';
});

btnClose.addEventListener('click', function () {
   content.style.display = 'none';
   btnOpen.style.display = 'block';
});

// ----- BLACKING THE CARDS ----- //
const wsPlan = document.querySelector('.ws-plan');
const wsCards = document.querySelectorAll('.card');
const shadowTabsNav = document.querySelector('.tabs__nav');
const tabsContent = document.querySelector('.tabs__content');

wsCards.forEach((card) => {
   card.addEventListener('click', () => {
      // если кликнуть по карточке содержащей класс active
      if (card.classList.contains('active')) {
         wsCards.forEach((c) => {
            c.classList.remove('active');
         });
         shadowTabsNav.classList.remove('active');
         wsPlan.classList.remove('active');
         tabsContent.classList.remove('active');
      } else {
         // иначе удалить класс
         card.classList.add('active');

         const className = card.classList[1];
         wsCards.forEach((c) => {
            if (c !== card && c.classList.contains(className)) {
               c.classList.add('active');
            }
         });

         wsCards.forEach((c) => {
            // если кликнуть на другой карточке с таким же классом
            if (c !== card && !c.classList.contains(className)) {
               c.classList.remove('active');
            }
         });

         shadowTabsNav.classList.add('active');
         wsPlan.classList.add('active');
         tabsContent.classList.add('active');
      }
   });
});

// если кликнуть вне карточки
document.addEventListener('click', (event) => {
   if (!event.target.closest('.card')) {
      wsCards.forEach((card) => {
         card.classList.remove('active');
      });
      shadowTabsNav.classList.remove('active');
      wsPlan.classList.remove('active');
      tabsContent.classList.remove('active');
   }
});
