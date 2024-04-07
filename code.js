let start = document.querySelector('.start');
let popup = document.querySelector('.popup');
let back = document.querySelector('#overlay');
let close = document.querySelector(".close");
let mic;
let selfie;
let cam;

let options = false;





async function media(){
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
    })

    const mediarecorder = new MediaRecorder(media, {
        mimeType: 'video/webm;codecs=vp8,opus'
      })

    const mediaStream = new MediaRecorder(stream,mimeType);
}

start.addEventListener('click',function(){
    if(options === false){
    popup.style.height = "130px"; 
    popup.style.visibility = "visible"; 
    options = true;
    back.style.display = "block"
}
    else{
    popup.style.height = "0px"; 
    popup.style.visibility = "hidden"; 
    options = false;
    back.style.display = "block"
    }
})

close.addEventListener('click',function(){
    popup.style.height = "0px"; 
    popup.style.visibility = "hidden"; 
    options = false;
    back.style.display = "none"
})

back.addEventListener('click',function(){
    popup.style.height = "0px"; 
    popup.style.visibility = "hidden"; 
    options = false;
    back.style.display = "none"
})