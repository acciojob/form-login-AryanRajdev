function getFormvalue() {
    //Write your code here
	let fname = document.querySelector('input[name="fname"]').value;
	let lname = document.querySelector('input[name="lname"]').value;

	fname = fname.trim();
	lname = lname.trim();

	if(fname.length === 0 || lname.length ===0){
		alert('Please specify fname and lname')
	}
	else
	alert(`${fname} ${lname}`);
	
}
