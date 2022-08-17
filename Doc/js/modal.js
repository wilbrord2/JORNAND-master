let modal = document.getElementById('contact-modal');
let openModal = document.getElementById('modal-open');
let closeModal = document.querySelector('.close-modal');
openModal.addEventListener('click', function (){
    modal.style.display = 'flex';
})
closeModal.addEventListener('click', function (){
    modal.style.display = 'none';
})
window.addEventListener('click', function (e){
if(e.target == modal){
    modal.style.display = 'none';
}
})