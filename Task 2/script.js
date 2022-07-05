console.log('javascript init');

const cb1 = document.querySelector('#cb1');
const cb2 = document.querySelector('#cb2');
const cb3 = document.querySelector('#cb3');

// Attaching Event Listeners
cb1.addEventListener('change', (e) => {
  // Remove current select item from cb1 and cb2.

  cb2.selectedIndex = 0;
  cb3.selectedIndex = 0;

  for (let option of cb2.options) {
    option.disabled = false;
  }

  for (let option of cb3.options) {
    option.disabled = false;
  }

  cb2.options[cb1.selectedIndex].disabled = true;
  cb3.options[cb1.selectedIndex].disabled = true;
});
cb2.addEventListener('change', (e) => {
  // Remove current select item from cb3.
  for (let option of cb3.options) {
    option.disabled = false;
  }
  cb3.options[cb1.selectedIndex].disabled = true;
  cb3.options[cb2.selectedIndex].disabled = true;
});
cb3.addEventListener('change', (e) => {
  // Well.....
});
