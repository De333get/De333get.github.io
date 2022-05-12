document.head.innerHTML += '<link rel="stylesheet" href="style.css">';

const div = document.createElement('div');
document.body.append(div);
div.className = 'conteiner';

let str = document.createElement('h1');
document.body.append(str);
str.className = 'stroke';
str.innerHTML = "Клавиатура создана в операционной системе 'Windows'.<br> Для переключения раскладки нажмите 'ALt + Shift'";

const textarea = document.createElement('textarea');
div.append(textarea);
textarea.className = 'text';
const del = document.createElement('div');
div.append(del);
del.className = 'del';
del.classList.add('keys');
del.innerHTML = 'Del';

const KeybordWrapper = document.createElement('div');
div.append(KeybordWrapper);
KeybordWrapper.className = 'keyboard__wrapper';

const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');
const row5 = document.createElement('div');
const rowArr = [row1, row2, row3, row4, row5];
rowArr.forEach((el) => el.classList.add('row'));

KeybordWrapper.append(...rowArr);

const firstKey = document.createElement('div');
row1.prepend(firstKey);
firstKey.className = 'first_key';
firstKey.classList.add('keys');
firstKey.innerHTML = '`';

const tab = document.createElement('div');
row2.append(tab);
tab.className = 'tab_key';
tab.classList.add('keys');
tab.innerHTML = 'Tab';

const capslock = document.createElement('div');
row3.prepend(capslock);
capslock.className = 'capslock_key';
capslock.classList.add('keys');
capslock.innerHTML = 'Capslock';

const shiftLeft = document.createElement('div');
row4.prepend(shiftLeft);
shiftLeft.className = 'shift_left';
shiftLeft.classList.add('keys');
shiftLeft.innerHTML = 'Shift';

const CtrlLeft = document.createElement('div');
row5.append(CtrlLeft);
CtrlLeft.className = 'keys';
CtrlLeft.classList.add('ctrl');
CtrlLeft.innerHTML = 'Ctrl';

const fn = document.createElement('div');
row5.append(fn);
fn.className = 'keys';
fn.classList.add('fn');
fn.innerHTML = 'Fn';

const Win = document.createElement('div');
row5.append(Win);
Win.className = 'keys';
Win.classList.add('win');
Win.innerHTML = 'Win';

const altLeft = document.createElement('div');
row5.append(altLeft);
altLeft.className = 'keys';
altLeft.classList.add('alt');
altLeft.innerHTML = 'Alt';

const space = document.createElement('div');
row5.append(space);
space.className = 'keys';
space.classList.add('space_key');
space.innerHTML = '';

const altRight = document.createElement('div');
row5.append(altRight);
altRight.className = 'keys';
altRight.classList.add('alt');
altRight.innerHTML = 'Alt';

const ctrlRight = document.createElement('div');
row5.append(ctrlRight);
ctrlRight.className = 'keys';
ctrlRight.classList.add('ctrl');
ctrlRight.innerHTML = 'Ctrl';

const leftArrow = document.createElement('div');
row5.append(leftArrow);
leftArrow.className = 'keys';
leftArrow.classList.add('left_arr');
leftArrow.innerHTML = '&larr;';

const upDown = document.createElement('div');
row5.append(upDown);
const up = document.createElement('div');
upDown.append(up);
up.innerHTML = '&uarr;';
up.classList.add('keys', 'up_down', 'up');

const down = document.createElement('div');
upDown.append(down);
down.innerHTML = '&darr;';
down.className = 'up_down';
down.classList.add('keys', 'down');

const leftRight = document.createElement('div');
row5.append(leftRight);
leftRight.className = 'keys';
leftRight.classList.add('right_arr');
leftRight.innerHTML = '&rarr;';

const keys = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  '[',
  ']',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  ';',
  "'",
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  ',',
  '.',
  '/',
];

const keysRU = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Й',
  'Ц',
  'У',
  'К',
  'Е',
  'Н',
  'Г',
  'Ш',
  'Щ',
  'З',
  'Х',
  'Ъ',
  'Ф',
  'Ы',
  'В',
  'А',
  'П',
  'Р',
  'О',
  'Л',
  'Д',
  'Ж',
  'Э',
  'Я',
  'Ч',
  'С',
  'М',
  'И',
  'Т',
  'Ь',
  'Б',
  'Ю',
  '.',
];
for (let i = 0; i < keysRU.length; i += 1) {
  if (i < 12) {
    const key = document.createElement('div');
    row1.append(key);
    key.className = 'keys';
    key.classList.add('ru');
    key.classList.add('rus');
    key.classList.add('num');
    key.innerHTML = keysRU[i];
  }
  if (i >= 12 && i < 24) {
    const key = document.createElement('div');
    row2.append(key);
    key.className = 'keys';
    key.classList.add('ru');
    key.classList.add('rus');
    key.innerHTML = keysRU[i];
  }
  if (i >= 24 && i < 35) {
    const key = document.createElement('div');
    row3.append(key);
    key.className = 'keys';
    key.classList.add('ru');
    key.classList.add('rus');
    key.innerHTML = keysRU[i];
  }
  if (i >= 35 && i < 46) {
    const key = document.createElement('div');
    row4.append(key);
    key.className = 'keys';
    key.classList.add('ru');
    key.classList.add('rus');
    key.innerHTML = keysRU[i];
  }
}

for (let i = 0; i < keys.length; i += 1) {
  if (i < 12) {
    const key = document.createElement('div');
    row1.append(key);
    key.className = 'keys';
    key.classList.add('en');
    key.classList.add('num');
    key.innerHTML = keys[i];
  }
  if (i >= 12 && i < 24) {
    const key = document.createElement('div');
    row2.append(key);
    key.className = 'keys';
    key.classList.add('en');
    key.innerHTML = keys[i];
  }
  if (i >= 24 && i < 35) {
    const key = document.createElement('div');
    row3.append(key);
    key.className = 'keys';
    key.classList.add('en');
    key.innerHTML = keys[i];
  }
  if (i >= 35 && i < 46) {
    const key = document.createElement('div');
    row4.append(key);
    key.className = 'keys';
    key.classList.add('en');
    key.innerHTML = keys[i];
  }
}
const slash = document.createElement('div');
row2.append(slash);
slash.className = 'slash_key';
slash.classList.add('keys');
slash.innerHTML = ' \\ ';

const Backspace = document.createElement('div');
row1.append(Backspace);
Backspace.className = 'backspace_key';
Backspace.classList.add('keys');
Backspace.innerHTML = 'Backspace';

const enter = document.createElement('div');
row3.append(enter);
enter.className = 'enter_key';
enter.classList.add('keys');
enter.innerHTML = 'Enter';

const shiftright = document.createElement('div');
row4.append(shiftright);
shiftright.className = 'shift_right';
shiftright.classList.add('keys');
shiftright.innerHTML = 'Shift';
const button = document.querySelectorAll('.keys');
const textInput = document.querySelector('.text');
const KeyPad = document.querySelector('.keyboard__wrapper');
const spaceKey = document.querySelector('.space_key');
const shiftL = document.querySelector('.shift_left');
const shiftR = document.querySelector('.shift_right');
const capsllock = document.querySelector('.capslock_key');
const altL = document.querySelector('.alt');
const arrowL = document.querySelector('.left_arr');
const arrowR = document.querySelector('.right_arr');
const arrowUp = document.querySelector('.up');
const meta = document.querySelector('.win');
const arrowD = document.querySelector('.down');

if (button && textInput && KeyPad) {
  const capsLockMode = false;
  button.forEach((key) => {
    key.addEventListener('click', function func() {
      if (this.classList.contains('capslock_key')) {
        this.classList.toggle('active_caps');
      } else if (shiftL.classList.contains('active')) {
        textInput.innerHTML += this.innerHTML.toUpperCase();
      } else if (this.classList.contains('backspace_key')) {
        str = textInput.innerHTML;
        textInput.innerHTML = str.substring(0, str.length - 1);
      } else if (this.classList.contains('space_key')) {
        textInput.innerHTML += ' ';
      } else if (this.classList.contains('tab_key')) {
        textInput.innerHTML += '\t';
      } else if (this.classList.contains('ctrl')) {
        textInput.innerHTML += '';
      } else if (this.classList.contains('alt')) {
        textInput.innerHTML += '';
      } else if (this.classList.contains('win')) {
        textInput.innerHTML += '';
      } else if (this.classList.contains('fn')) {
        textInput.innerHTML += '';
      } else if (this.classList.contains('shift_left') || this.classList.contains('shift_right')) {
        textInput.innerHTML += '';
      } else if (this.classList.contains('enter_key')) {
        textInput.innerHTML += '\n';
      } else if (capsLockMode) {
        textInput.innerHTML += this.innerText.toUpperCase();
      } else {
        textInput.innerHTML += this.innerText.toLowerCase();
      }
    });
  });
}

/*= =============KEYPRESS============= */

for (let i = 0; i < button.length; i += 1) {
  button[i].setAttribute('keyname', button[i].innerText);
  button[i].setAttribute('lowerCaseName', button[i].innerText.toLowerCase());
}
if (button) {
  window.addEventListener('keydown', function func(e) {
    if ((e.key === 'Shift' && altL.classList.contains('active')) || (e.key === 'Alt' && shiftL.classList.contains('active'))) {
      const ru = document.querySelectorAll('.rus');
      const en = this.document.querySelectorAll('.en');
      ru.forEach((elen) => {
        elen.classList.toggle('ru');
      });
      en.forEach((elen) => {
        elen.classList.toggle('ru');
      });
    }
    for (let i = 0; i < button.length; i += 1) {
      if (e.key === button[i].getAttribute('keyname') || e.key === button[i].getAttribute('lowerCaseName')) {
        button[i].classList.add('active');
        if (
          !button[i].classList.contains('enter_key')
          && !button[i].classList.contains('backspace_key')
          && !button[i].classList.contains('shift_left')
          && !button[i].classList.contains('shift_right')
          && !button[i].classList.contains('alt')
          && !button[i].classList.contains('tab_key')
        ) {
          if (!shiftL.classList.contains('active') && !shiftR.classList.contains('active') && !capsllock.classList.contains('active_caps')) {
            textInput.innerHTML += button[i].innerText.toLowerCase();
          } else if (capsllock.classList.contains('active_caps') && shiftL.classList.contains('active')) {
            textInput.innerHTML += button[i].innerHTML.toLowerCase();
          } else {
            textInput.innerHTML += button[i].innerText.toUpperCase();
          }
        }
      }
      e.preventDefault();
    }
    if (e.code === 'MetaLeft') {
      meta.classList.add('active');
    }
    if (e.code === 'ArrowLeft') {
      arrowL.classList.add('active');
      textInput.innerHTML += '&larr;';
    }
    /*= ======================shift Left======= */
    if (shiftL.classList.contains('active') && e.code === 'Equal') {
      textInput.innerHTML += '+';
    }
    if (shiftL.classList.contains('active') && e.code === 'Minus') {
      textInput.innerHTML += '_';
    }
    if (shiftL.classList.contains('active') && e.code === 'Backquote') {
      textInput.innerHTML += '~';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit0') {
      textInput.innerHTML += ')';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit9') {
      textInput.innerHTML += '(';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit8') {
      textInput.innerHTML += '*';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit7') {
      textInput.innerHTML += '&';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit6') {
      textInput.innerHTML += '^';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit5') {
      textInput.innerHTML += '%';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit4') {
      textInput.innerHTML += '$';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit3') {
      textInput.innerHTML += '#';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit2') {
      textInput.innerHTML += '@';
    }
    if (shiftL.classList.contains('active') && e.code === 'Digit1') {
      textInput.innerHTML += '!';
    }
    if (shiftL.classList.contains('active') && e.code === 'BracketLeft') {
      textInput.innerHTML += '{';
    }
    if (shiftL.classList.contains('active') && e.code === 'BracketRight') {
      textInput.innerHTML += '}';
    }
    if (shiftL.classList.contains('active') && e.code === 'Semicolon') {
      textInput.innerHTML += ':';
    }
    if (shiftL.classList.contains('active') && e.code === 'Quote') {
      textInput.innerHTML += '"';
    }
    if (shiftL.classList.contains('active') && e.code === 'Comma') {
      textInput.innerHTML += '<';
    }
    if (shiftL.classList.contains('active') && e.code === 'Slash') {
      textInput.innerHTML += '?';
    }
    if (shiftL.classList.contains('active') && e.code === 'Period') {
      textInput.innerHTML += '>';
    }
    if (shiftL.classList.contains('active') && e.code === 'Backslash') {
      textInput.innerHTML += '|';
    }
    /*= ======================shift right======= */
    if (shiftR.classList.contains('active') && e.code === 'Equal') {
      textInput.innerHTML += '+';
    }
    if (shiftR.classList.contains('active') && e.code === 'Minus') {
      textInput.innerHTML += '_';
    }
    if (shiftR.classList.contains('active') && e.code === 'Backquote') {
      textInput.innerHTML += '~';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit0') {
      textInput.innerHTML += ')';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit9') {
      textInput.innerHTML += '(';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit8') {
      textInput.innerHTML += '*';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit7') {
      textInput.innerHTML += '&';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit6') {
      textInput.innerHTML += '^';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit5') {
      textInput.innerHTML += '%';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit4') {
      textInput.innerHTML += '$';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit3') {
      textInput.innerHTML += '#';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit2') {
      textInput.innerHTML += '@';
    }
    if (shiftR.classList.contains('active') && e.code === 'Digit1') {
      textInput.innerHTML += '!';
    }
    if (shiftR.classList.contains('active') && e.code === 'BracketLeft') {
      textInput.innerHTML += '{';
    }
    if (shiftR.classList.contains('active') && e.code === 'BracketRight') {
      textInput.innerHTML += '}';
    }
    if (shiftR.classList.contains('active') && e.code === 'Semicolon') {
      textInput.innerHTML += ':';
    }
    if (shiftR.classList.contains('active') && e.code === 'Quote') {
      textInput.innerHTML += '"';
    }
    if (shiftR.classList.contains('active') && e.code === 'Comma') {
      textInput.innerHTML += '<';
    }
    if (shiftR.classList.contains('active') && e.code === 'Slash') {
      textInput.innerHTML += '?';
    }
    if (shiftR.classList.contains('active') && e.code === 'Period') {
      textInput.innerHTML += '>';
    }
    if (shiftR.classList.contains('active') && e.code === 'Backslash') {
      textInput.innerHTML += '|';
    }
    /*= ============CTRLZ============= */
    if ((CtrlLeft.classList.contains('active') && e.code === 'KeyZ') || (ctrlRight.classList.contains('active') && e.code === 'KeyZ')) {
      str = textInput.innerHTML;
      textInput.innerHTML = str.substring(0, str.length - 2);
    }
    if (e.code === 'ArrowRight') {
      arrowR.classList.add('active');
      textInput.innerHTML += '&rarr;';
    }
    if (e.code === 'ArrowDown') {
      arrowD.classList.add('up_active');
      arrowD.classList.remove('up_down');
      textInput.innerHTML += '&darr;';
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.add('up_active');
      arrowUp.classList.remove('up_down');
      textInput.innerHTML += '&uarr;';
    }
    if (e.code === 'Tab') {
      textInput.innerHTML += '\t';
    }
    if (e.code === 'Space') {
      spaceKey.classList.add('active');
      textInput.innerHTML += ' ';
    }
    if (e.code === 'ShiftLeft') {
      shiftR.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      shiftL.classList.remove('active');
    }
    if (e.code === 'ControlLeft') {
      CtrlLeft.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.add('active');
    }
    if (e.code === 'AltLeft') {
      altRight.classList.remove('active');
    }
    if (e.code === 'AltRight') {
      altLeft.classList.remove('active');
    }
    if (e.code === 'Backspace') {
      str = textInput.innerHTML;
      textInput.innerHTML = str.substring(0, str.length - 1);
    }
    if (e.code === 'CapsLock') {
      capsllock.classList.toggle('active_caps');
    }
    if (e.code === 'Enter') {
      textInput.innerHTML += '\n';
    }
  });
  window.addEventListener('keyup', (e) => {
    for (let i = 0; i < button.length; i += 1) {
      if (e.key === button[i].getAttribute('keyname') || e.key === button[i].getAttribute('lowerCaseName')) {
        button[i].classList.remove('active');
        button[i].classList.add('remove');
      }
      if (e.code === 'MetaLeft') {
        meta.classList.remove('active');
        meta.classList.add('remove');
      }
      if (e.code === 'ArrowRight') {
        arrowR.classList.remove('active');
        arrowR.classList.add('remove');
      }
      if (e.code === 'ArrowLeft') {
        arrowL.classList.remove('active');
        arrowL.classList.add('remove');
      }
      if (e.code === 'ArrowUp') {
        arrowUp.classList.remove('up_active');
        arrowUp.classList.add('up_down');
      }
      if (e.code === 'ArrowDown') {
        arrowD.classList.remove('up_active');
        arrowD.classList.add('up_down');
      }
      if (e.code === 'AltLeft') {
        altRight.classList.remove('active');
        altRight.classList.remove('remove');
      }
      if (e.code === 'AltRight') {
        altLeft.classList.remove('active');
        altLeft.classList.remove('remove');
      }
      if (e.code === 'ControlLeft') {
        ctrlRight.classList.remove('remove');
        CtrlLeft.classList.remove('active');
      }
      if (e.code === 'ControlRight') {
        CtrlLeft.classList.remove('remove');
        ctrlRight.classList.remove('active');
      }
      if (e.code === 'Space') {
        spaceKey.classList.remove('active');
        spaceKey.classList.add('remove');
      }
      if (e.code === 'ShiftLeft') {
        shiftL.classList.add('remove');
        shiftR.classList.remove('active');
        shiftR.classList.remove('remove');
      }

      if (e.code === 'ShiftRight') {
        shiftL.classList.remove('active');
        shiftL.classList.remove('remove');
      }
      setTimeout(() => {
        button[i].classList.remove('remove');
      }, 100);
    }
  });
}
