'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelName = capitalizeName(input.name);

  input.parentNode.insertAdjacentHTML(
    'afterbegin',
    `<label class="field-label" for="${input.id}">${labelName}</label>`,
  );
  input.setAttribute('placeholder', labelName);
}

function capitalizeName(inputName) {
  let capitalizedName = '';

  for (const ch of inputName) {
    if (ch === ch.toUpperCase()) {
      capitalizedName += ' ';
    }
    capitalizedName += ch;
  }

  capitalizedName = capitalizedName[0].toUpperCase() + capitalizedName.slice(1);

  return capitalizedName;
}
