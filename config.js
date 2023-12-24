const config = {
  /* Please read the instructions carefully before making any changes to this file. */

  /** Instructions:
  * Respect the current apostrophe situation:
  * 1. Avoid using double apostrophe in the texts you enter.
  * 2. Edit strictly within the quotation marks.
  * 3. Leave un-apostrophed items as so and make changes directly.
  * 4. If you want to leave a field blank, just leave it empty between the quotation marks.
  * ----------------------------------------------------------------------------------------- *
  * finalVideoIndex is the only field that can not be left blank. It should be an integer.
  * ----------------------------------------------------------------------------------------- *
  * Please refer to: for detailed configuration of the project.
  */

  // Video Information
  finalVideoIndex: 16, // the number of the last video in your folder
  

  // Page Setting (what shows up in the browser tab and search results)
  
  pageTitle: "", 
  pageDescription: "",

  // Project Information (what shows up in the window)

  projectTitle: "",
  projectSubtitle: "",
  projectInfo: "", // displayed in an info popup

  /* Only edit the following if you know what you're doing. */
  
  // More Customization
  fullVideoExists: false, // enter true if you've included a fullvideo.mp4 in the folder
  initialVideoIndex: 1, // start at a different video
  gridColumnCount: 4, // number of columns in the video grid
  gridGapScale: 1, // size of the gap between videos (1 is default)
  videoVolume: 1, // 1 is full volume, and 0 is completely mute

  // Color Theme
  /** 
  * You can use any color you want, but you need to use hex color codes
  * Hex color codes start with a # and are followed by 6 alphanumeric characters.
  * You can use this color picker: https://g.co/kgs/sDiHLk to get the hex color code of a color.
  */
  hoverVideoBorder: "#e32d45", // border of videos when they are hovered over
  clickVideoBorder: "#0c8a3a", // border of videos when they are clicked
  playSeriesVideoBorder: "#88609c", // border of videos when they are playing in a series
  startButton: "#e32d45", // start button in the loading page
};
