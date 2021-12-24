// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


// treasure coordinates
const WIDTH = 720;
const HEIGH = 546;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20 ) {
    Swal.fire({
        title:'<span class="white">lupi</span>',
        text:'Es la primera parte de la contraseña',
        // html:
        icon:'success',
        confirmButtonText:'<span class="white">Ok, continuemos &#128526</span>',
        footer: `Solo lo conseguiste en ${clicks} clicks XD`,
        // width:
        // padding:
        background:'#f194e5',
        // grow:
        backdrop: true,
        timer: 10000,
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
    }).then(function redic(){
        window.location.href = "game1.html";
    })
    ;
   
  }
});
