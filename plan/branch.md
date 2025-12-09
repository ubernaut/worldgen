llm instructions for this file: this file contains the short term goals for this git branch. update as necessary. 

immediate goals: 

switch from orbitcontrols to trackball controls for the planet overview mode. 

create input multiplexer abstraction to help map controls for mobile/vr/desktop to each io paradigm. can you come up with a better name than inputmultiplexer? 

add mobile twinstick controls + buttons for any actions (fly/walk/return to trackball controls). 
detect and switch to mobile controls dynamically

add VR mode and controls. 

fix swimming and transition between swimming to walking vice versa

fix being zoomed in too far after exiting first person mode. 

add equivalent mobile control buttons for each input. 


recent progress:

- HUD now collapses and auto-collapses on mobile to free viewport space for upcoming touch controls.
