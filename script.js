document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("bg-video");

  // Log video loading status
  video.addEventListener("loadeddata", () => {
    console.log("Video loaded successfully");
  });

  // Log any errors
  video.addEventListener("error", (e) => {
    console.error("Video Error:", {
      error: video.error,
      src: video.currentSrc,
      readyState: video.readyState,
    });
  });
});
