const inputs = document.querySelectorAll(".input");
function functionFocus(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}
function functionBlur(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", functionFocus);
	input.addEventListener("blur", functionBlur);
});
// 

const form = document.getElementById('formulario')

formulario.addEventListener('submit', (e)=> {
	e.preventDefault()
	let nome = document.getElementById('nome').value;
	let email = document.getElementById('email').value;
	let data = {
		nome, 
		email,
	}
	let convertData = JSON.stringify(data);

	localStorage.setItem('lead', convertData)

})

