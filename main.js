// version: 1.0.0
// author: quanzhang.xyz

// Config
const appState = {
  isTactile: false,
  videosLoaded: 0,
  videoSeriesIndex: 0,
  intervalId: null,
};

// Utility Functions

const updateTextByClassName = (className, newText) => {
  if (newText !== "" && newText !== ".") {
    const elements = document.getElementsByClassName(className);
    for (let element of elements) {
      element.innerText = newText;
    }
  }
};

const appendVideo = (videoName, parentElement) => {
  let video = document.createElement("video");
  video.src = "./videos/" + videoName + ".mp4";
  video.controls = false;
  video.loop = true;
  video.autoplay = true;
  parentElement.appendChild(video);
  return video;
};

const resetVideoClasses = (video) => {
  video.classList.remove("hover-playing");
  video.classList.remove("click-playing");
  video.classList.remove("auto-playing");
};

const removeVideoInteractionClasses = (video) => {
  video.classList.remove("hover-playing");
  video.classList.remove("click-playing");
};

const stopAllVideos = (videos) => {
  videos.forEach((video) => {
    video.pause();
    resetVideoClasses(video);
  });
};

const resetPlaySeries = () => {
  if (appState.intervalId !== null) {
    clearInterval(appState.intervalId);
    appState.videoSeriesIndex = 0;
  }
};

// Video Helpers
const startHoverPlay = (video) => {
  if (!video.classList.contains("click-playing")) {
    video.play();
    video.classList.add("hover-playing");
  }
};

const pauseHoverPlay = (video) => {
  video.pause();
  removeVideoInteractionClasses(video);
};

const toggleHoverPlay = (video) => {
  if (video.classList.contains("hover-playing")) {
    video.pause();
    removeVideoInteractionClasses(video);
  } else {
    video.play();
    video.classList.add("hover-playing");
  }
};

const toggleClickPlay = (video) => {
  if (video.classList.contains("click-playing")) {
    video.pause();
    removeVideoInteractionClasses(video);
  } else {
    video.play();
    video.classList.add("click-playing");
  }
};

// Interactions
const hoverToPopup = (hoverControl, popup) => {
  hoverControl.style.display = "block";
  hoverControl.addEventListener("mouseenter", () => {
    popup.style.display = "block";
  });
  hoverControl.addEventListener("mouseleave", () => {
    popup.style.display = "none";
  });
};

const popup = (popup) => {
  if (popup.style.display == "block") {
    popup.style.display = "none";
  } else if (popup.style.display == "none") {
    popup.style.display = "block";
  }
};

// Other
const isValidColor = (color) => {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
};

document.addEventListener("DOMContentLoaded", (event) => {
  //store DOM elements
  // General
  const loadingPage = document.getElementById("loading-page");
  const mainPage = document.getElementById("main-page");
  const startButton = document.getElementById("start-button");

  // Footer-Right
  const tactileToggle = document.getElementById("tactile-toggle");
  const infoHover = document.getElementById("info-hover");
  const infoPopup = document.getElementsByClassName("info-popup")[0];
  const fullVideoToggle = document.getElementById("full-video-toggle");
  const fullVideoPopup = document.getElementsByClassName("full-video-popup")[0];
  const closeFullVideo = document.getElementById("close-full-video");

  // More Controls
  const moreControls = document.getElementById("more-controls");
  const hiddenControls = document.getElementsByClassName("hidden-controls");
  const closeControls = document.getElementById("close-controls");
  const playSeriesButton = document.getElementById("play-series");
  const playAllButton = document.getElementById("play-all");
  const stopAllButton = document.getElementById("stop-all");

  // DOM Manipulation
  (function () {
    // Set Document Title
    if (config.pageTitle !== "") {
      document.title = config.pageTitle;
    }

    // Set Meta description if config.description is not ''
    if (config.pageDescription !== "") {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.content = config.pageDescription;
      } else {
        meta = document.createElement("meta");
        meta.name = "description";
        meta.content = config.pageDescription;
        document.head.appendChild(meta);
      }
    }

    // Set Project Info
    updateTextByClassName("project-title", config.projectTitle + ".");
    updateTextByClassName("project-subtitle", config.projectSubtitle);
    updateTextByClassName("info-popup", config.projectInfo);

    //Set Color Customization
    if (
      isValidColor(config.hoverVideoBorder) &&
      isValidColor(config.clickVideoBorder) &&
      isValidColor(config.playSeriesVideoBorder) &&
      isValidColor(config.startButton)
    ) {
      const styleColors = document.createElement("style");
      styleColors.innerHTML = `
      body .hover-playing {
        border-color: ${config.hoverVideoBorder} !important;
      }
      body .click-playing {
        border-color: ${config.clickVideoBorder} !important;
      }
      body .auto-playing {
        border-color: ${config.playSeriesVideoBorder} !important;
      }
      body .start-button {
        color: ${config.startButton} !important;
      }
      `;
      document.head.appendChild(styleColors);
    }
  })();

  // Check for config.initialVideoIndex to be valid or output alert
  if (
    config.initialVideoIndex < 1 ||
    config.initialVideoIndex > config.finalVideoIndex
  ) {
    alert(
      `Check your config.js file. config.initialVideoIndex has to be an integer between 1 and ${config.finalVideoIndex}.`
    );
  }

  const videoGrid = document.getElementsByClassName("video-grid")[0];

  for (let i = config.initialVideoIndex; i <= config.finalVideoIndex; i++) {
    const video = document.createElement("video");
    video.src = `videos/video${i}.mp4`;
    video.controls = false;
    video.loop = true;
    video.preload = "auto";
    video.volume = config.videoVolume;

    video.classList.add("video-grid-item");

    videoGrid.appendChild(video);
  }

  videoGrid.style.gridTemplateColumns = `repeat(${Math.min(
    config.finalVideoIndex,
    config.gridColumnCount
  )}, 1fr)`;

  videoGrid.style.columnGap = `${config.gridGapScale * 1}vw`;
  videoGrid.style.rowGap = `${config.gridGapScale * 0.5}vh`;

  // Videos

  const videos = Array.from(document.querySelectorAll(".video-grid video"));

  videos.forEach((video) => {
    video.addEventListener("canplaythrough", () => {
      appState.videosLoaded++;
      if (
        appState.videosLoaded ===
        config.finalVideoIndex - config.initialVideoIndex + 1
      ) {
        document.getElementById("loading-spinner").style.display = "none";
        document.getElementById("start-button").style.display = "block";
      }
    });
  });

  // Event Listeners
  // Start Button
  startButton.addEventListener("click", () => {
    loadingPage.style.display = "none";
    mainPage.style.display = "block";
  });

  // Tactile Toggle
  tactileToggle.addEventListener("click", () => {
    appState.isTactile = !appState.isTactile;
    playAllButton.classList.remove("disabled");
    resetPlaySeries();
    stopAllVideos(videos);
    if (appState.isTactile) {
      tactileToggle.classList.add("light-background");
      tactileToggle.innerHTML = "click mode";
    } else {
      tactileToggle.classList.remove("light-background");
      tactileToggle.innerHTML = "tactile mode";
    }
  });
  // Info Hover Display
  if (config.projectInfo !== "") {
    hoverToPopup(infoHover, infoPopup);
  }

  const fullVideo = appendVideo("fullvideo", fullVideoPopup);
  fullVideo.classList.add("full-size");

  // Full Video Toggle
  if (config.fullVideoExists) {
    fullVideoToggle.style.display = "block";
    fullVideoToggle.addEventListener("click", () => {
      resetPlaySeries();
      stopAllVideos(videos);
      playAllButton.classList.remove("disabled");
      fullVideo.play();
      popup(fullVideoPopup);
    });
    closeFullVideo.addEventListener("click", () => {
      fullVideo.pause();
      popup(fullVideoPopup);
    });
  }

  // More Controls
  moreControls.addEventListener("click", () => {
    moreControls.style.display = "none";
    for (let hiddenControl of hiddenControls) {
      hiddenControl.style.display = "block";
    }
  });
  closeControls.addEventListener("click", () => {
    moreControls.style.display = "block";
    for (let hiddenControl of hiddenControls) {
      hiddenControl.style.display = "none";
    }
  });

  // Play Series Functionality (play all videos in order)

  playSeriesButton.addEventListener("click", () => {
    playAllButton.classList.add("disabled");
    //1. Stop All Videos
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
      resetVideoClasses(video);
    });
    //2. Play Videos in Order
    const playNextVideo = () => {
      if (appState.videoSeriesIndex < videos.length) {
        videos[appState.videoSeriesIndex].currentTime = 0;
        videos[appState.videoSeriesIndex].play();
        videos[appState.videoSeriesIndex].classList.add("auto-playing");

        appState.intervalId = setInterval(() => {
          if (
            videos[appState.videoSeriesIndex].currentTime >=
            videos[appState.videoSeriesIndex].duration - 0.1
          ) {
            videos[appState.videoSeriesIndex].pause();
            clearInterval(appState.intervalId);
            resetVideoClasses(videos[appState.videoSeriesIndex]);
            appState.videoSeriesIndex++;
            playNextVideo();
          }
        }, 1);
      } else {
        playAllButton.classList.remove("disabled");
      }
    };
    playNextVideo();
  });

  // Play All Functionality (play all videos at the same time)
  playAllButton.addEventListener("click", () => {
    if (!playAllButton.classList.contains("disabled")) {
      videos.forEach((video) => {
        video.play();
        if (!appState.isTactile) {
          video.classList.add("click-playing");
        } else {
          video.classList.add("hover-playing");
        }
      });
    }
  });

  // Stop All Functionality (stop all videos)

  stopAllButton.addEventListener("click", () => {
    resetPlaySeries();
    playAllButton.classList.remove("disabled");
    stopAllVideos(videos);
  });

  // Video Event Listeners
  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      if (!video.classList.contains("auto-playing")) {
        if (appState.isTactile) {
          toggleHoverPlay(video);
        } else {
          startHoverPlay(video);
        }
      }
    });

    video.addEventListener("mouseleave", () => {
      if (
        !appState.isTactile &&
        !video.classList.contains("click-playing") &&
        !video.classList.contains("auto-playing") &&
        video.classList.contains("hover-playing")
      ) {
        pauseHoverPlay(video);
      }
    });

    video.addEventListener("click", () => {
      if (!appState.isTactile && !video.classList.contains("auto-playing")) {
        toggleClickPlay(video);
      }
    });
  });
});
