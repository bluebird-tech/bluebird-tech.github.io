// Insert Javascript hier

function changeBackgroundVideo() {
  var date = new Date();
  var currentTime = date.getHours();
  var video = document.getElementById('bg-video');
  var source = document.createElement('source');


  if (7 < currentTime && currentTime < 17) {
    video.setAttribute('poster', 'assets/images/cloudspic.jpg')
    source.setAttribute('src', 'assets/videos/clouds2.mp4');
  }

  else {
    source.setAttribute('src', 'assets/videos/aurora2.mp4');
  };

  video.appendChild(source);
  video.load();
  console.log(currentTime);
};

changeBackgroundVideo();
