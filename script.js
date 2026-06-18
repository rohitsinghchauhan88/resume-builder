const fields = [
'name',
'email',
'phone',
'address',
'objective',
'skills',
'education',
'experience',
'projects',
'certifications',
'languages'
];

function updatePreview() {

fields.forEach(field => {

const value = document.getElementById(field).value;

localStorage.setItem(field,value);

const previewId =
'preview' +
field.charAt(0).toUpperCase() +
field.slice(1);

if(document.getElementById(previewId)){
document.getElementById(previewId).textContent=value;
}

});

}

fields.forEach(field=>{

const input=document.getElementById(field);

const saved=localStorage.getItem(field);

if(saved){
input.value=saved;
}

input.addEventListener('input',updatePreview);

});

updatePreview();

document.getElementById('photo')
.addEventListener('change',function(){

const file=this.files[0];

if(file){

const reader=new FileReader();

reader.onload=function(e){

document.getElementById('previewPhoto').src=e.target.result;

localStorage.setItem(
'photo',
e.target.result
);

};

reader.readAsDataURL(file);

}

});

const savedPhoto =
localStorage.getItem('photo');

if(savedPhoto){
document.getElementById('previewPhoto').src=savedPhoto;
}

document
.getElementById('themeToggle')
.addEventListener('click',()=>{

document.body.classList.toggle('dark');

localStorage.setItem(
'theme',
document.body.classList.contains('dark')
);

});

if(localStorage.getItem('theme')==='true'){
document.body.classList.add('dark');
}

document
.getElementById('clearBtn')
.addEventListener('click',()=>{

localStorage.clear();

location.reload();

});

document
.getElementById('downloadBtn')
.addEventListener('click',()=>{

const email =
document.getElementById('email').value;

const phone =
document.getElementById('phone').value;

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phonePattern =
/^[0-9]{10}$/;

if(!emailPattern.test(email)){
alert('Enter valid email');
return;
}

if(!phonePattern.test(phone)){
alert('Enter valid 10-digit phone number');
return;
}

html2canvas(
document.getElementById('resume')
).then(canvas=>{

const imgData =
canvas.toDataURL('image/png');

const { jsPDF } = window.jspdf;

const pdf =
new jsPDF('p','mm','a4');

const width =
pdf.internal.pageSize.getWidth();

const height =
(canvas.height * width) /
canvas.width;

pdf.addImage(
imgData,
'PNG',
0,
0,
width,
height
);

pdf.save('Resume.pdf');

});

});
