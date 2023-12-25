/* 
  =======================================================================================
  ||                                                                                    ||
  || Please read the instructions carefully before making any changes to this file!     ||
  ||                                                                                    ||
  =======================================================================================

  INSTRUCTIONS:
  ----------------
    1. Respect the current apostrophe situation:
        a. Avoid using double apostrophe in the texts you enter.
        b. Edit strictly within the quotation marks.
        c. Leave un-apostrophed items as so and make changes directly.
        d. If you want to leave a field blank, just leave it empty between the quotation marks.
  
  ----------------
    2. 'finalVideoIndex' is the only field that you have to make change to and cannot leave blank. 
        It should be an integer.
  
  ----------------
    3. Please refer to: https://quan-1.gitbook.io/interactive-video-grid/ for documentation of the project.

  =======================================================================================
*/

const config = {
  // =====================
  // | Global Variables |
  // =====================
  finalVideoIndex: 23, // the index of the last video in your folder, enter 15 if video15.mp4 is the last video in your folder

  // =================
  // | Page Settings |
  // =================
  pageTitle: "Only Life in Footsteps - An Interactive Video Grid Project", // for the browser tabs and search results
  pageDescription: "",

  // ======================
  // | Project Information|
  // ======================
  projectTitle: "Only Life in Footsteps",
  projectSubtitle: "Hear Bresson's Mouchette(1967) with hands(or feet)",
  projectInfo: "Bresson's Mouchette teeters between a rhythm of life and, paradoxically, the constant interruption of it. Mouchette's extra loud and oddly wooden footsteps are only audible when she sporadically walks between places in town. It is in those moments, in the sound of her footsteps, when she is not being derisively called out by the townspeople or summoned by her dying mother, that we can truly witness life within her. While a linear editing promises continuation in space and movements, this approach unexpectedly accentuates the hearing. ",

  // ==================
  // |Custom Variables|
  // ==================
  fullVideoExists: true, // enter true if you've included a fullvideo.mp4 in the videos folder
  initialVideoIndex: 1, // enter 4 will start the project at video4.mp4
  gridColumnCount: 5, // number of columns
  gridGapScale: 1, // grid gap size (1 is default)
  videoVolume: 1, // 1 is full volume, and 0 is completely mute

  // ==============
  // |Color Theme|
  // ==============

  /* 
    You can use any color you want, but you need to use hex color codes.
    Here are some guidelines:
    - Hex color codes start with a '#' 
    - They are followed by 6 alphanumeric characters.
    - You can use this color picker to get the hex color code of a color:
      https://g.co/kgs/sDiHLk
  */
  hoverVideoBorder: "#e32d45",
  clickVideoBorder: "#0c8a3a",
  playSeriesVideoBorder: "#88609c",
  startButton: "#e32d45",

  // ===========================================
  // |Automated Permission Granting for Display|
  // ===========================================
  /* 
    If it's set to true, the system will automatically grant permission 
    for including your project for display on the project page and its Github page.
  */
  autoGrantPermission: false,
  authorNameforDisplay: "",
  authorContact: "",
};
