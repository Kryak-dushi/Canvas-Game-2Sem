let bg_x = 0;

function changeBackground(){
  context.drawImage(background_image, -bg_x, 0, WIDTH, HEIGHT);
  context.drawImage(background_image, WIDTH-bg_x, 0, WIDTH, HEIGHT);
}

let key = {
  left: 'KeyA',
  right: 'KeyD',
  jump: 'KeyW',
  attack: 'Space' 
}

function moveLeft(){
  if (player.pos_x>WIDTH/3 || bg_x <= 0){
    player.pos_x = Math.max(0, player.pos_x-player.speed);
  }
  else if (bg_x > 0){
    bg_x = Math.max(0, bg_x-player.speed);
  }
}

function moveRight(){
  if (player.pos_x<WIDTH/3 || bg_x >= WIDTH){
    player.pos_x = Math.min(WIDTH-256, player.pos_x+player.speed);
  }
  else if (bg_x < WIDTH){
    bg_x = Math.min(WIDTH, bg_x+player.speed);
  }
}

addEventListener('keydown', function(e){
  if(e.keyCode===65 || e.keyCode===37){
    player.padding_y=0;
    player.sprites_count=4;
    player.max_tick=15;
    player.lastKey=key.left;
    moveLeft();
  }
  if (e.keyCode===68 || e.keyCode===39){
    player.padding_y=256;
    player.sprites_count=4;
    player.max_tick=15;
    player.lastKey=key.right;
    moveRight();
  }
  if (e.keyCode===32){
    player.padding_x=0;
    player.padding_y=384;
    player.sprites_count=6;
    player.max_tick=10;
    player.lastKey=key.attack;
  }
  if (e.keyCode===87 || e.keyCode===38){
    player.padding_x=0;
    player.padding_y=896;
    player.sprites_count=5;
    player.max_tick=15;
    player.lastKey=key.jump;
  }
}); 


addEventListener('keyup', function(e){
  if (player.lastKey==key.left || player.lastKey==key.right){
    player.padding_y=128;
    player.sprites_count=5;
    player.max_tick=40;
  }
});

function enemyMove(enemy){
  if (enemy.pos_x > player.pos_x){
    enemy.pos_x-=enemy.speed;
    enemy.padding_y = 256;
  }
  else {
    enemy.pos_x+=enemy.speed;
    enemy.padding_y = 1664;
  }
}

