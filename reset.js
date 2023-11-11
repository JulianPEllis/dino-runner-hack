// Reset hack
// Paste into console and press ENTER(RETURN)

Runner.prototype.gameOver=function() {
    this.playSound(this.soundFx.HIT);
    vibrate(200);
    this.stop();
    this.crashed = true;
    this.distanceMeter.acheivement = false;
    var cscr = document.getElementById("currentScore");
    cscr.innerText = currentScore;
    var sb = document.getElementById("shareBlock");
    sb.style.display = 'none'; // block
    this.tRex.update(100, Trex.status.CRASHED);
    if (!this.gameOverPanel) {
        this.gameOverPanel = new GameOverPanel(this.canvas, this.spriteDef.TEXT_SPRITE, this.spriteDef.RESTART, this.dimensions)
    } else {
        this.gameOverPanel.draw()
    }
    if (this.distanceRan > this.highestScore) {
        this.highestScore = Math.ceil(this.distanceRan);
        this.distanceMeter.setHighScore(this.highestScore);
        currentScore = Math.round(this.highestScore * 0.025);
        cscr.innerText = currentScore;
        var score_d = 0;
        if (document.getElementById("score-5") !== null) {
            score_d = document.getElementById("score-5").innerHTML
        }
        if (currentScore > score_d) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/inc/check.php?score=' + currentScore, false);
            xhr.send();
            if (xhr.status != 200) {} else {
                if (xhr.responseText != '') {
                    if (user_name == '') {
                        user_name = prompt(xhr.responseText, 'Anonym');
                        if (user_name == 'null' || user_name == '') {
                            user_name = 'Anonym'
                        }
                    } else {
                        alert(xhr.responseText)
                    }
                    xhr.open('GET', '/inc/set.php?name=' + user_name + '&score=' + currentScore, false);
                    xhr.send();
                    //location.reload()
                }
            }
        }
    }
    this.time = getTimeStamp()
}