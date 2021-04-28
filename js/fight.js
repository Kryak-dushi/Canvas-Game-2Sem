function setEnemy(){
    dragon.sprites_count = 5;
    dragon.pos_x = WIDTH-500;
    dragon.hp = 50;
    dragon.padding_x = 0;
    dragon.padding_y = 256;
}

let playerCanAttack = false;

function mageAttack(){
  if (player.padding_x >= 128*(player.sprites_count-2)){
    playerAttack.pos_x=player.pos_x+128;
    playerCanAttack = true;
  }
}

function checkAttack(){
    if (dragon.pos_x <= playerAttack.pos_x){
        dragon.padding_x=0;
        dragon.padding_y=768;
        dragon.sprites_count=2;
        dragon.max_tick=10;
        dragon.hp-=player.strength;
    }
    
    if (medusa.pos_x <= playerAttack.pos_x){
        medusa.padding_x=0;
        medusa.padding_y=384;
        medusa.sprites_count=2;
        medusa.max_tick=10;
        medusa.hp-=player.strength;
    }
    /*
    if (dragon.hp <= 0){
        dragon.padding_x=0;
        dragon.padding_y=1024;
        dragon.sprites_count=5;
    }
    
    if (medusa.hp <= 0){
        medusa.padding_x=0;
        medusa.padding_y=512;
        medusa.sprites_count=6;
    }*/
}

function score(){
    context.fillStyle = "#FFF";
    context.font = "40px Arial"
    context.fillText(player.score, 50, 50);
}
