// Insert Javascript hier

function changeBackgroundVideo() {
  var date = new Date();
  var currentTime = date.getHours();
  var video = document.getElementById('bg-video');
  var source = document.createElement('source');


  if (7 <= currentTime <= 20) {
    video.setAttribute('poster', 'assets/images/cloudspic.jpg')
    source.setAttribute('src', 'assets/videos/clouds.mp4');
  }

  else {
    source.setAttribute('src', 'assets/videos/aurora2.mp4');
  }

  video.appendChild(source);
  video.load();
};

changeBackgroundVideo();
console.log("Hello");
