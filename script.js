document.getElementById("likeButton").addEventListener("click", function() {
    this.classList.toggle("clicked");
  });
  
  document.getElementById("comment").addEventListener("click", function() {
    var commentSection = document.getElementById("commentSection");
    commentSection.classList.toggle("hidden");
  });
  
  document.getElementById("closeComment").addEventListener("click", function() {
    var commentSection = document.getElementById("commentSection");
    commentSection.classList.add("hidden");
  
    var shareSection = document.getElementById("shareSection");
    shareSection.classList.add("shareHidden");
  });
  

  
  document.getElementById("share").addEventListener("click", function() {
    var shareSection = document.getElementById("shareSection");
    shareSection.classList.toggle("shareHidden");
  });
  

  var video = document.getElementById("videoElement"); // Get the video element by its ID

  document.getElementById("playPauseButton").addEventListener("click", function() {
    if (video.paused) {
      video.play(); 
      document.getElementById("pausedIcon").classList.add("pauseHidden"); // Play the video if it's paused
    } else {
      video.pause(); 
      document.getElementById("pausedIcon").classList.remove("pauseHidden"); // Pause the video if it's playing
    }
  });


  document.getElementById("follow").addEventListener("click", function() {
    var followButton = document.getElementById("follow");
    followButton.style.display = "none";
  });





  





  
  