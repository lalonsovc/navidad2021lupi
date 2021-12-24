Swal.fire({
    title:'<span class="white">Ingresa la contraseña</span>',
    text:'Apunte la contraseña en 2 papelitos pero se fueron volando y ya no lo recuerdo, ayudame a buscarlo :/',
    // html:
    icon:'error',
    confirmButtonText:'<span class="white">Buscar contraseña &#128527</span>',
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
if (pregunta1.value === "lupijijiji"){
    Swal.fire({
        title:'<span class="white">Esa era la contraseña correcta</span>',
        text:'Espero no tu mouse siga funcionando de tantos clicks xd',
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
        window.location.href = "alerta2.html";
    })
    ;

}
else{
    Swal.fire({
        title:'<span class="white">Contraseña</span>',
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

function colorSi2_1(){
    butn1_2.style.background="#cc33b8";
}
function colorSi2_2(){
    butn1_2.style.background="#17191b";
}
butn1_2.addEventListener("mouseover",colorSi2_1)
butn1_2.addEventListener("mouseout",colorSi2_2)