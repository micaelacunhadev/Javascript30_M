const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo(){
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(localMediaStream =>{
        console.log(localMediaStream, typeof localMediaStream)
        video.srcObject = localMediaStream;
        video.play();
      })
      .catch(err => console.error("Oh no!!", err));
}


function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;
  console.log('width', width, 'height', height)
  canvas.width = width;
  canvas.height = height;

  setInterval(() =>{
    ctx.drawImage(video,0,0, width, height)

  }, 16)

}

paintToCanvas();
getVideo()