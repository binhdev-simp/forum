//get all element
const ten_hien_thi = document.getElementById('usr');
const ten_chu = document.getElementById('name');
const pass = document.getElementById('pass');
const submit = document.getElementById('sub');


//window.localStorage;

//check loop
ten_hien_thi.addEventListener('keyup', function(e) {
	var e = ten_hien_thi.value;
	console.log(e);
	if (e === window.localStorage.key(ten_hien_thi)) {
		alert("da ton tai");
		ten_hien_thi.value=null;
		pass.value=null;
	}
});

//add account to localstorage
function AddAccount() {
	make_account = {
		username: ten_hien_thi.value,
		name: ten_chu.value,
		pass: pass.value,
	}

	window.localStorage.setItem(ten_hien_thi.value, JSON.stringify(make_account) );
	ten_hien_thi.value=null;
	ten_chu.value=null;
	pass.value=null;
}

//make register

submit.addEventListener('click', AddAccount);