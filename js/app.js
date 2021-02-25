window.addEventListener('DOMContentLoaded', function () {
	// get the form elements defined in your form HTML above

	var form = document.getElementById('my-form');
	// var button = document.getElementById('my-form-button');
	var status = document.getElementById('contactStatus');

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		status.classList.add('contactSuccess');
		status.innerHTML = 'Message Successfully Sent.';
	}

	function error() {
		status.classList.add('contactError');
		status.innerHTML = 'Oops! There was a problem.';
	}

	// handle the form submission event

	form.addEventListener('submit', function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}

const addName = document.getElementById('name');
const addItemButton = document.getElementById('mainRegisterButton');

console.log(document.getElementById('name').value);

addItemButton.addEventListener('submit', () => {
	let ul = document.querySelector('#list.ul')[0]; //returns a collection which is like an array so selecting first itm with 0
	let li = document.createElement('li');
	li.textContent = addName.value;
	ul.appendChild(li);
	addName.value = '';
});
