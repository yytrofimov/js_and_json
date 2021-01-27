/**
 * Javascript exempel
 * nr. 2
 * 
 */
let firstname = 'Paul';
let age = 43;
let futureAge = age + 10;
let subtitle = document.querySelector('h3.subtitle');

 console.log('Om tio år är du: ' + futureAge);

 subtitle.innerHTML = 'Hej ' + firstname + ', du är ' + age + ' år gammal';

 const upg8 = document.querySelector('#upg8');
 upg8.innerHTML = 'Testar innerHTML'
