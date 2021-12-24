function colorSi1_1(){
    butn1_1.style.background="#cc33b8";
}
function colorSi1_2(){
    butn1_1.style.background="#17191b";
}
butn1_1.addEventListener("mouseover",colorSi1_1)
butn1_1.addEventListener("mouseout",colorSi1_2)


function colorNo1_1(){
    butn1_2.style.background="#33CCCC";
}
function colorNo1_2(){
    butn1_2.style.background="#17191b";
}
butn1_2.addEventListener("mouseover",colorNo1_1)
butn1_2.addEventListener("mouseout",colorNo1_2)

function sweetalertNo(){
    Swal.fire({
        title:'<span class="white">LUPI</span>',
	    text:'Vuelve cuando estes lista :(',
        // html:
        icon:'error',
        confirmButtonText:'<span class="white">Ta Weno &#x1F610</span>',
        //footer:
        // width:
        // padding:
        background:'#f194e5',
        // grow:
        backdrop: true,
        timer: 5000,
        timerProgressBar: true,
        // toast:
        // position:
        allowOutsideClick: false,
        // allowEscapeKey:
        // allowEnterKey:
        // stopKeydownPropagation:

        // input:
        // inputPlaceholder:
        // inputValue:
        // inputOptions:
        
        //  customClass:
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	

        // showConfirmButton:
        // confirmButtonColor:
        // confirmButtonAriaLabel:

        // showCancelButton:
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:
        
        // buttonsStyling:
        // showCloseButton:
        // closeButtonAriaLabel:


        // imageUrl:
        // imageWidth:
        // imageHeight:
        // imageAlt:
    });
}

window.onload = function musicaAbrir(){
window.open('https://www.youtube.com/watch?v=b3GyAtcoogc', '_blank'); 
}

