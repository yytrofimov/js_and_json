//loops

//while-loopen

//anvisar räknare:
let i = 1;

while(i < 5) {
    console.log('rad ' + i);
i++;
}

for(let x = 1; x <= 5; x++) {
    console.log('for-rad: ' + x);
}

//spara loop-datat i en variabel
let txt = '<ul>';
for(x=0; x < 10; x++) {
    txt += '<li>string-for-rad: ' + x + '</li>\n';
}
//console.log(txt);
txt += '</ul>'
document.querySelector('#output').innerHTML = txt;