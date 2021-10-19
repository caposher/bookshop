'use strict';
var gLanguage = 'en';
var gDefaultLanguage = 'en';
var gTrans = {
  'welcome-label': {
    en: 'Welcome',
    he: 'ברוך הבא',
  },
  'shop-name': {
    en: 'SHOP SHOP SHOP',
    he: '!!!קנה קנה קנה',
  },
  'book-id': {
    en: 'Id',
    he: 'מזהה',
  },
  'book-title': {
    en: 'Title',
    he: 'כותרת',
  },
  'book-price': {
    en: 'Price',
    he: 'מחיר',
  },
  'book-action': {
    en: 'Action',
    he: 'פעולות',
  },
  'book-read': {
    en: 'Read',
    he: 'תצוגה',
  },
  'book-update': {
    en: 'Update',
    he: 'עדכן',
  },
  'book-delete': {
    en: 'Delete',
    he: 'מחק',
  },
  'book-name': {
    en: 'Book Name',
    he: 'שם הספר',
  },
  'create-book': {
    en: 'Create new book',
    he: 'צור ספר',
  },
  close: {
    en: 'Close',
    he: 'סגור',
  },
  'update-action': {
    en: 'Please enter price (DONT ADD $):',
    he: 'הכנס מחיר (ללא סימן מחיר)',
  },
};

function setLanguage(language) {
  var elBody = document.querySelector('body');
  gLanguage = language;
  if (language === 'he') {
    elBody.classList.add('rtl');
  } else {
    elBody.classList.remove('rtl');
  }
}
function getCurrLanguage() {
  return gLanguage;
}
function getTranslation(txt) {
  var transTxt = ' --TRANSLATION ERROR-- ';
  var txtSection = gTrans[txt];
  if (txtSection) {
    transTxt = txtSection[gLanguage];
    if (!transTxt) transTxt = transTxt[gDefaultLanguage];
  }
  return transTxt;
}

function getPromptMsg() {
  return getTranslation('update-action');
}

function doTrans() {
  var elTexts = document.querySelectorAll('[data-trans]');
  elTexts.forEach(function (elTxt) {
    if (elTxt.nodeName !== 'INPUT') {
      elTxt.innerText = getTranslation(elTxt.dataset.trans);
    } else {
      elTxt.placeholder = getTranslation(elTxt.dataset.trans);
    }
  });
}

function formatCurrency(num) {
  return new Intl.NumberFormat(gLanguage, { style: 'currency', currency: 'USD' }).format(num);
}

// function USDtoNISConvert(val, doReverse = false) {
//   const convertion = 3.21; // nis/usd
//   var newVal;
//   if (!doReverse) {
//     newVal = val * convertion;
//   } else {
//     newVal = val / convertion;
//   }
//   return newVal.toFixed(2);
// }
