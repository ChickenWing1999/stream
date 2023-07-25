<!DOCTYPE html>
<html>
<head>
  <title>Embedded Live Stream</title>
  <style>
    /* Base styles */
    .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 aspect ratio (height/width) */
      height: 0;
      overflow: hidden;
    }

    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    /* Media queries for responsiveness */
    @media screen and (max-width: 768px) {
      /* Adjust height for smaller screens */
      .video-container {
        padding-bottom: 75%; /* 4:3 aspect ratio for mobile devices */
      }
    }

    @media screen and (max-width: 480px) {
      /* Adjust height for even smaller screens */
      .video-container {
        padding-bottom: 100%; /* 1:1 aspect ratio for tiny mobile devices */
      }
    }
  </style>
</head>
<body>
  <div class="video-container">
    <iframe src="https://weakstream.org/mma-boxing/stephen-fulton-vs-naoya-inoue/125048/?sport=boxing" frameborder="0" allowfullscreen></iframe>
  </div>

  <script>
    // Optional: Auto-resize the iframe based on the window height
    function resizeIframe() {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.style.height = iframe.offsetWidth * 9 / 16 + 'px'; /* 16:9 aspect ratio */
      }
    }

    // Call the resize function on page load and whenever the window is resized
    window.onload = resizeIframe;
    window.onresize = resizeIframe;
  </script>
</body>
</html>
