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
        const str = textInput.innerHTML;
        textInput.innerHTML = str.substring(0, (str.length - 1));
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
        if ((!button[i].classList.contains('enter_key'))
					&& !button[i].classList.contains('backspace_key')
					&& !button[i].classList.contains('shift_left')
					&& !button[i].classList.contains('shift_right')
					&& !button[i].classList.contains('alt')
					&& !button[i].classList.contains('tab_key')) {
          if (!shiftL.classList.contains('active') && !shiftR.classList.contains('active')
						&& !capsllock.classList.contains('active_caps')) {
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
    if ((CtrlLeft.classList.contains('active') && e.code === 'KeyZ')
			|| (ctrlRight.classList.contains('active') && e.code === 'KeyZ')) {
      const str = textInput.innerHTML;
      textInput.innerHTML = str.substring(0, (str.length - 2));
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
      const str = textInput.innerHTML;
      textInput.innerHTML = str.substring(0, (str.length - 1));
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
