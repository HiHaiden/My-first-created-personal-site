var radio = document.getElementsByName('prim');
for (var i=0; i<radio.length; i++) {
	radio[i].onchange = testRadio;
}
function testRadio(){
	console.log (this.value);
}
document.getElementById('one').onclick = checkRadio;
function checkRadio() {
	var m = document.getElementsByName('prim');
	for(var i=0; i<m.length; i++) {
		if (m[i].checked) {
			swal(m[i].value);
			break;
		}
	}
}
function outputUpdate(vol){
	var output = document.querySelector('#volume');
	output.value = vol;
	output.style.left = vol - 7 + '%';
}
$( document ).ready(function(){
	  $( ".out" ).click(function(){
	    $( ".imeg" ).fadeOut();
	  });
	  $( ".in" ).click(function(){
	    $( ".imeg" ).fadeIn();
	  });
	});