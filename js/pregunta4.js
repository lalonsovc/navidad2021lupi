Swal.fire({
    title:'<span class="white">Cuarta Pregunta</span>',
    text:'¿Cuál es el color favorito de Ranita?',
    // html:
    icon:'question',
    confirmButtonText:'<span class="white">Responder &#128527</span>',
    //footer:
    // width:
    // padding:
    background:'#f194e5',
    // grow:
    backdrop: true,
    //timer: 50000,
    timerProgressBar: true,
    // toast:
    // position:
    allowOutsideClick: false,
    // allowEscapeKey:
    // allowEnterKey:
    // stopKeydownPropagation:

    //input:'select',
    //inputPlaceholder: 'Fecha',
    //inputValue:'',
    //inputOptions:
    
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


var pregunta1 = document.getElementById('texto1');

function pregunta_1(){
if (pregunta1.value === "morado" || pregunta1.value === "Morado"){
    Swal.fire({
        title:'<span class="white">LUPI</span>',
        text:'Solo tu sabes y no dudé :3',
        // html:
        icon:'success',
        confirmButtonText:'<span class="white">Ok, continuemos &#128526</span>',
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
        window.location.href = "pregunta5.html";
    })
    ;

}
else{
    Swal.fire({
        title:'<span class="white">LUPI</span>',
        text:'Que mal, mejor ya no sigas T_T',
        // html:
        icon:'error',
        confirmButtonText:'<span class="white">Ok, me voy. &#128543</span>',
        //footer:
        // width:
        // padding:
        background:'#17191b',
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
}

function colorSi1_1(){
    butn1_1.style.background="#cc33b8";
}
function colorSi1_2(){
    butn1_1.style.background="#17191b";
}
butn1_1.addEventListener("mouseover",colorSi1_1)
butn1_1.addEventListener("mouseout",colorSi1_2)