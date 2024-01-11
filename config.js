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
  finalVideoIndex: 15, // the index of the last video in your folder, enter 15 if video15.mp4 is the last video in your folder

  // =================
  // | Page Settings |
  // =================
  pageTitle: "", // for the browser tabs and search results
  pageDescription: "",

  // ======================
  // | Project Information|
  // ======================
  projectTitle: "Don't Look Now: Paradoxes of Suture",
  projectSubtitle: "A Reconfiguration of Shane Denson's Interactive Video Essay",
  projectInfo: '"Thus, in summary, the speculary, unifying, imaginary function constitutes, on the one hand, the proper body of the subject and, on the other, the limits and the common ground without which linguistic syntagms and paradigms would be dissolved in an infinite sea of differences. Without the imaginary and the limit it imposes on any statement, statements would not function as mirrors of the referent. " \n \n - Daniel Dayan, "The Tutor Code of Classical Cinema" p.25',

  // ==================
  // |Custom Variables|
  // ==================
  fullVideoExists: false, // enter true if you've included a fullvideo.mp4 in the videos folder
  initialVideoIndex: 1, // enter 4 will start the project at video4.mp4
  gridColumnCount: 4, // number of columns
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
