// Chrome Dino Runner Hack :: https://github.com/JulianPEllis/dino-runner-hack/blob/main/hack.js
// By MashyDev
// Inject code into web console and start game.

countCS=0
countSpeedCS=0
loopActive=false

Runner.prototype.gameOver=function funcNameCustomGO(){
    countCS+=1;
    if (loopActive) { // Loop
        if(countCS%10==0){
            countSpeedCS += 1;
            Runner.prototype.setSpeed=function setSpeed(opt_speed=999999){speed=opt_speed;} 
            console.log(`Reset Speed to 999999 (ct:${countCS}) (spc:${countSpeedCS})`);
        } // Change Speed to '999999' every 10 would-be-deaths
        console.log(`Would be deaths: ${countCS} (spc:${countSpeedCS} every 10)`);
    } // Disable GameOver Function
    else if (!loopActive) {
        return 0;
    }
}
// Opt.
// Type 'stats()' to see stats, 'startCSLoop()' to show console spam., 'stopCSLoop()' to stop console spam.
function stats(){ 
    console.log(`${countCS} would-be deaths.`)
    console.log(`Runner.prototype.setSpeed function was accessed ${countSpeedCS} times.`)
}

function stopCSLoop(){
    if (loopActive){
        loopActive=false; // Stop loop
    }
    else if (!loopActive){
        console.log('Loop is not active. Nothing changed.')
    }
}

function startCSLoop(){
    if (!loopActive){
        loopActive=true; // (Re)start loop
    }
    else if (loopActive){
        console.log('Loop is already active. Nothing changed.')
    }
}
