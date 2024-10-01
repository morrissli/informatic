$(document).ready(function () {
   $('.text-input').focus(function (e) {
      e.preventDefault();
      $(this).css('background', 'violet')
   })
   $('.text-input').blur(function (e) { 
      e.preventDefault();
      $(this).css('background', 'white');
   });

   const form = document.querySelector('#form');
   const nameInp = document.querySelector('#name');
   const surnameInp = document.querySelector ('#surname');
   const emailInp = document.querySelector ('#email');
   const phoneInp = document.querySelector ('#phone');
   const genderSel = document.querySelector ('#gender');
   const usersLi = document.querySelector ('#users');
   const msg = document.querySelector ('.msg');

   form.addEventListener('submit', onSubmit);

   function onSubmit(e) {
      e.preventDefault();

      if (nameInp.value === '' || surnameInp.value === '' || emailInp.value === '' || phoneInp === '') {
         msg.classList.add('error');
         msg.innerHTML = 'Заповніть форму!';

         setInterval (()=> {
            msg.classList.remove('error');
            msg.innerHTML = '';
         }, 3000);
      } else {
         const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${nameInp.value}: ${surnameInp.value}: ${emailInp.value}: ${phoneInp.value}: ${genderSel.value}`));

      usersLi.appendChild(li);

      msg.classList.add('msg-good');
      msg.innerHTML = 'Ви були зарєстрованні на сайт Morrissli!';

      setInterval (() => {
         msg.classList.remove('msg-good');
         msg.innerHTML = '';
      }, 2000)

      nameInp.value = '';
      surnameInp.value = '';
      emailInp.value = '';
      phoneInp.value = '';
      genderSel.value = '';
      }
   }
});