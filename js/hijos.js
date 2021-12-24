const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    Swal.fire({
        title:'<span class="white">LUPI</span>',
	    text:'Sabia que ibas a decir que si <3',
        // html:
        icon:'success',
        confirmButtonText:'<span class="white">Jiji &#128514</span>',
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
    }).then(function redic(){
        window.location.href = "alerta.html";
    });
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})