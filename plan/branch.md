llm instructions for this file: this file contains the short term goals for this git branch. update as necessary. 

immediate goals: 

switch from orbitcontrols to trackball controls for the planet overview mode. 

create input multiplexer abstraction to help map controls for mobile/vr/desktop to each io paradigm. can you come up with a better name than inputmultiplexer? 

add mobile twinstick controls + buttons for any actions (fly/walk/return to trackball controls). 
detect and switch to mobile controls dynamically

freeze all water in polar reigons. 

add VR mode and controls. 

fix swimming and transition between swimming to walking vice versa. exiting the water does not reset player orientation. "shallow" water should not trigger swim mechanic. 

fix being zoomed in too far after exiting first person mode. 

add equivalent mobile control buttons for each input. 


recent progress:

- HUD now collapses and auto-collapses on mobile to free viewport space for upcoming touch controls.
- Input router scaffold added (desktop keymap wired, mobile/desktop mode hook); TinyPlanetControls now reads shared action state, paving the way for touch/VR mappings.
- TrackballControls now replace OrbitControls for overview; added basic mobile overlay buttons (move/run/jump/fly/exit) wired into the input router and auto-shown on small screens.
- Water shader now blends to ice near poles using the iceCap slider.
