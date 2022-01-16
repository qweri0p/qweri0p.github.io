var gameover = false, score = 0, started = false, timerval = 200;
if (localStorage.highscore) {
  var highscore = Number(localStorage.getItem('highscore'));
} else {
  var highscore = 0
}
class tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.val = Math.round(random(3, 9));
    this.color='BLUE';
  }
  show() {
    fill(this.color);
    rect(this.x, this.y, 200, 200);
  }
  writeValue() {  
    textSize(125);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.val, this.x+100, this.y+100)
  }
  countValue() {
    this.val -= 1;
  }
  resetValue() {
    if (this.val == -1) {
      this.val = Math.round(random(3, 9))
    }   
  }
  changeColors() {
    switch (this.val) {
      case 9:      
      case 8:
        this.color = 'GREEN'
        break;
      case 7:       
      case 6:
        this.color = 'PURPLE'
        break;
      case 5:
      case 4:
        this.color = 'DARKBLUE'
        break;
      case 3:
        this.color = 'ORANGE'
        break;
      case 2:
        this.color = 'ORANGERED'
        break; 
      case 1:
      case 0:
        this.color = 'RED'
        break;
    }
  }
  doAll() {
    this.countValue()
    this.resetValue()
    this.changeColors()
    this.show()
    this.writeValue()
  }
  checkGameOver() {
    if (this.val == 0) {
      if (mouseX > this.x && mouseX < this.x+200 && mouseY > this.y && mouseY < this.y+200) {
        gameover = true;
      }
    } 
  }
}
function preload() {
    font = loadFont('font.ttf');
}
function detectCheaters() {
  if (mouseX > 600 || mouseX == 0 || mouseY > 600 || mouseY == 0) {
    gameover = true
  }
}
function setup() {
  createCanvas(600, 650).parent('game');
  textFont(font);
  tile1 = new tile(0, 0)
  tile2 = new tile(200, 0)
  tile3 = new tile(400, 0)
  tile4 = new tile(0, 200)
  tile5 = new tile(200, 200)
  tile6 = new tile(400, 200)
  tile7 = new tile(0, 400)
  tile8 = new tile(200, 400)
  tile9 = new tile(400, 400)
}
function draw() {
  if (gameover == true) {
    background(220)
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(250);
    text('GAME', 300, 100)
    text('OVER', 300, 250)
    textSize(50);
    if (score > highscore) {
      highscore = score;
      text('score: '+ score, 300, 400)
      text('highscore: '+ score, 300, 450)
      localStorage.setItem('highscore', Number(highscore))
    } else {
      text('highscore: '+ highscore, 300, 450)
      text('score: '+ score, 300, 400)
    }
  } else {
    fill(0);
    textSize(50);
    textAlign(LEFT, BOTTOM);
    text('score: '+ score, 0, 645)
    text('highscore: '+ highscore, 300, 645)}
  if (timerval > 0) {
    background(220)
    textAlign(CENTER, CENTER);
    textSize(250);
    timerval--;
    text(Math.round(timerval), 300, 300)
  } else {
    started = true;
  }
}
setInterval(function() {
  background(220)
  if (gameover == false && started == true) {
  tile1.doAll()
  tile2.doAll()
  tile3.doAll()
  tile4.doAll()
  tile5.doAll()
  tile6.doAll()
  tile7.doAll()
  tile8.doAll()
  tile9.doAll()
  score += 1;}
}, 1000);
setInterval(function() {
  if (gameover == false && started == true) {
  tile1.checkGameOver()
  tile2.checkGameOver()
  tile3.checkGameOver()
  tile4.checkGameOver()
  tile5.checkGameOver()
  tile6.checkGameOver()
  tile7.checkGameOver()
  tile8.checkGameOver()
  tile9.checkGameOver()
  detectCheaters()}
}, 100);