let mynew = document.getElementById('navbar').getElementsByTagName('a')[0]
console.log(mynew)
mynew.innerHTML = '<h1>old</h1>'
let formValues = document.forms['frm1']
var i=0 ;
for (i ; i<formValues.length; i++){
  document.getElementById('footer').getElementsByTagName('demo')[0].innerHTML = formValues[i].value
}