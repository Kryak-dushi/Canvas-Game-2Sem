let canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let WIDTH = canvas.width;
let HEIGHT = canvas.height;

let player = {
    name: 'Player',
    pos_x: 100,
    pos_y: 350,
    xp: 0,
    hp: 100,
    strength: 15,
    speed: 20,
    tick_count: 0,
    padding_x: 0,
    padding_y: 128,
    sprites_count: 5,
    max_tick: 30,
    lastKey: null,
    score: 0
}
let medusa = {
    sprites_count: 6,
    s_size: 128,
    size: 320,
    pos_x: WIDTH-300,
    pos_y: 414,
    hp: 30,
    speed: 10,
    strength: 10,
    padding_x: 0,
    padding_y: 128,
    tick_count: 0
}
  
let dragon = {
    sprites_count: 5,
    s_size: 256,
    size: 500,
    pos_x: WIDTH-500,
    pos_y: 300,
    hp: 50,
    speed: 15,
    strength: 20,
    padding_x: 0,
    padding_y: 256
}

let playerAttack = {
    pos_x: 0,
    pos_y: 450,
    padding_x: 0,
    padding_y: 1024,
    tick_count: 0,
    max_tick: 8,
    sprites_count: 6 
}

let dragonAttack = {
    pos_x: 0,
    pos_y: 370,
    padding_x: 0,
    padding_y: 1024,
    tick_count: 0,
    sprites_count: 6
}

let enemiesOnField =[];
  
let background_image = new Image();
let player_sprites = new Image();
let medusa_sprites = new Image();
let dragon_sprites = new Image();
  
background_image.src="images/background.png";
player_sprites.src="images/mage.png";
medusa_sprites.src="images/medusa.png";
dragon_sprites.src="images/dragon.png";
  
player_sprites.onload = function(){
    if (player.hp > 0){
        changeBackground();
        tick();
        tickAttack();
        requestAnimationFrame(tickAttack);
        requestAnimationFrame(tick);
    } else {
        context.fillStyle = "#FFF";
        context.textAlign = 'center';
        context.font = "200px Arial"
        context.fillText('GAME OVER', WIDTH/2, HEIGHT/2);
    }
};