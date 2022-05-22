document.head.innerHTML += '<link rel="stylesheet" href="style.css">'


let div = document.createElement('div')
document.body.append(div)
div.className = "conteiner"

let str = document.createElement('h1')
document.body.append(str)
str.className = 'stroke'
str.innerHTML = 'Клавиатура создана в операционной системе \'Windows\'.<br> Для переключения раскладки нажмите \'ALt + Shift\''

let textarea = document.createElement('textarea')
div.append(textarea)
textarea.className = 'text'
let del = document.createElement('div')
div.append(del)
del.className = 'del'
del.classList.add('keys')
del.innerHTML = 'Del'


let KeybordWrapper = document.createElement('div')
div.append(KeybordWrapper)
KeybordWrapper.className = 'keyboard__wrapper'

let row1 = document.createElement('div');
let row2 = document.createElement('div');
let row3 = document.createElement('div');
let row4 = document.createElement('div');
let row5 = document.createElement('div')
let rowArr = [row1, row2, row3, row4, row5];
rowArr.forEach(el => el.classList.add('row'));

KeybordWrapper.append(...rowArr)

let firstKey = document.createElement('div')
row1.prepend(firstKey)
firstKey.className = 'first_key'
firstKey.classList.add('keys')
firstKey.innerHTML = '`'

let tab = document.createElement('div')
row2.append(tab)
tab.className = 'tab_key'
tab.classList.add('keys')
tab.innerHTML = 'Tab'

let capslock = document.createElement('div')
row3.prepend(capslock)
capslock.className = 'capslock_key'
capslock.classList.add('keys')
capslock.innerHTML = 'Capslock'

let shiftLeft = document.createElement('div')
row4.prepend(shiftLeft)
shiftLeft.className = 'shift_left'
shiftLeft.classList.add('keys')
shiftLeft.innerHTML = 'Shift'

let CtrlLeft = document.createElement('div')
row5.append(CtrlLeft)
CtrlLeft.className = 'keys'
CtrlLeft.classList.add('ctrl')
CtrlLeft.innerHTML = 'Ctrl'

let fn = document.createElement('div')
row5.append(fn)
fn.className = 'keys'
fn.classList.add('fn')
fn.innerHTML = 'Fn'

let Win = document.createElement('div')
row5.append(Win)
Win.className = 'keys'
Win.classList.add('win')
Win.innerHTML = 'Win'

let altLeft = document.createElement('div')
row5.append(altLeft)
altLeft.className = 'keys'
altLeft.classList.add('alt')
altLeft.innerHTML = 'Alt'

let space = document.createElement('div')
row5.append(space)
space.className = 'keys'
space.classList.add('space_key')
space.innerHTML = ''

let altRight = document.createElement('div')
row5.append(altRight)
altRight.className = 'keys'
altRight.classList.add('alt')
altRight.innerHTML = 'Alt'

let ctrlRight = document.createElement('div')
row5.append(ctrlRight)
ctrlRight.className = 'keys'
ctrlRight.classList.add('ctrl')
ctrlRight.innerHTML = 'Ctrl'

let leftArrow = document.createElement('div')
row5.append(leftArrow)
leftArrow.className = 'keys'
leftArrow.classList.add('left_arr')
leftArrow.innerHTML = '&larr;'

let upDown = document.createElement('div')
row5.append(upDown)
let up = document.createElement('div')
upDown.append(up)
up.innerHTML = '&uarr;'
up.classList.add('keys', 'up_down', 'up')


let down = document.createElement('div')
upDown.append(down)
down.innerHTML = '&darr;'
down.className = 'up_down'
down.classList.add('keys', 'down')

let leftRight = document.createElement('div')
row5.append(leftRight)
leftRight.className = 'keys'
leftRight.classList.add('right_arr')
leftRight.innerHTML = '&rarr;'


let symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
for (let i = 0; i < symbol.length; i++) {
	let key = document.createElement('div')
	row1.append(key)
	key.className = 'keys'
	key.classList.add('en')
	key.classList.add('num')
	key.classList.add('numdisactive')
	key.innerHTML = symbol[i]
}
let symbolRU = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+']
for (let i = 0; i < symbol.length; i++) {
	let key = document.createElement('div')
	row1.append(key)
	key.className = 'keys'
	key.classList.add('rus')
	key.classList.add('num')
	key.classList.add('ru')
	key.classList.add('numdisactive')
	key.innerHTML = symbolRU[i]
}


let keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
	'-', '=', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I',
	'O', 'P', '[', ']', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K',
	'L', ';', '\'', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']

let keysRU = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
	'-', '=', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш',
	'Щ', 'З', 'Х', 'Ъ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л',
	'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.']
for (let i = 0; i < keysRU.length; i++) {
	if (i < 12) {
		let key = document.createElement('div')
		row1.append(key)
		key.className = 'keys'
		key.classList.add('ru')
		key.classList.add('rus')
		key.classList.add('num')
		key.innerHTML = keysRU[i]
	}
	if (i >= 12 && i < 24) {
		let key = document.createElement('div')
		row2.append(key)
		key.className = 'keys'
		key.classList.add('ru')
		key.classList.add('rus')
		key.innerHTML = keysRU[i]
	}
	if (i >= 24 && i < 35) {
		let key = document.createElement('div')
		row3.append(key)
		key.className = 'keys'
		key.classList.add('ru')
		key.classList.add('rus')
		key.innerHTML = keysRU[i]
	}
	if (i >= 35 && i < 46) {
		let key = document.createElement('div')
		row4.append(key)
		key.className = 'keys'
		key.classList.add('ru')
		key.classList.add('rus')
		key.innerHTML = keysRU[i]
	}
}

for (let i = 0; i < keys.length; i++) {
	if (i < 12) {
		let key = document.createElement('div')
		row1.append(key)
		key.className = 'keys'
		key.classList.add('en')
		key.classList.add('num')
		key.innerHTML = keys[i]
	}
	if (i >= 12 && i < 24) {
		let key = document.createElement('div')
		row2.append(key)
		key.className = 'keys'
		key.classList.add('en')
		key.innerHTML = keys[i]
	}
	if (i >= 24 && i < 35) {
		let key = document.createElement('div')
		row3.append(key)
		key.className = 'keys'
		key.classList.add('en')
		key.innerHTML = keys[i]
	}
	if (i >= 35 && i < 46) {
		let key = document.createElement('div')
		row4.append(key)
		key.className = 'keys'
		key.classList.add('en')
		key.innerHTML = keys[i]
	}
}
let slash = document.createElement('div')
row2.append(slash)
slash.className = 'slash_key'
slash.classList.add('keys')
slash.innerHTML = ' \\ '

let Backspace = document.createElement('div')
row1.append(Backspace)
Backspace.className = 'backspace_key'
Backspace.classList.add('keys')
Backspace.innerHTML = 'Backspace'

let enter = document.createElement('div')
row3.append(enter)
enter.className = 'enter_key'
enter.classList.add('keys')
enter.innerHTML = 'Enter'

let shiftright = document.createElement('div')
row4.append(shiftright)
shiftright.className = 'shift_right'
shiftright.classList.add('keys')
shiftright.innerHTML = 'Shift'
