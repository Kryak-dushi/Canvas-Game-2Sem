function tick(){
    if (player.tick_count>player.max_tick){
        changePlayerSprite();
        /*for (var i=0; i<enemiesOnField.length; i++){
            changeEnemySprite(enemiesOnField[i]);
        }*/
        changeEnemySprite(dragon);
        player.tick_count=0;
    }
    
    player.tick_count+=1;
    score();
    requestAnimationFrame(tick);
}

function tickAttack(){
    if (playerCanAttack == true){
        if (playerAttack.tick_count>playerAttack.max_tick){
            changeAttackSprite();
            playerAttack.tick_count=0;
        }        
        playerAttack.tick_count+=1;
    }
    requestAnimationFrame(tickAttack);
}

function changePlayerSprite() {
    context.clearRect(0, 0, WIDTH, HEIGHT);

    player.padding_x = (player.padding_x>=128*(player.sprites_count-1) ? 0 : player.padding_x+128);

    if ((player.lastKey == key.attack || player.lastKey==key.jump) && player.padding_x>=128*(player.sprites_count-1)){
        player.padding_y = 128;
        player.padding_x = 0;
        player.pos_y = 350;
        player.sprites_count = 5;
        player.max_tick = 40;
        player.lastKey=key.left;
    }
    else if (player.lastKey==key.jump){
        if(player.pos_y > 100 && player.pos_y <= 350){
            player.pos_y-=125;
        }
        else player.pos_y+=125;
    }
    if (player.lastKey == key.attack){
        mageAttack();
    }

    changeBackground();
    context.drawImage(player_sprites, player.padding_x, player.padding_y, 128, 128, player.pos_x, player.pos_y, 384, 384);
}

function changeAttackSprite(){
    playerAttack.padding_x = (playerAttack.padding_x>=128*(playerAttack.sprites_count-1) ? 0 : playerAttack.padding_x+128);
    if (player.lastKey=key.right) {
        playerAttack.pos_x+=30;
    } else playerAttack.pos_x-=30;
    if (playerAttack.padding_x>=128*(playerAttack.sprites_count-1)){
        checkAttack();
        playerCanAttack = false;
    }

    changeBackground();
    context.drawImage(player_sprites, playerAttack.padding_x, playerAttack.padding_y, 128, 128, playerAttack.pos_x, playerAttack.pos_y, 256, 256);
}

function changeEnemySprite(enemy){
    if (enemy.hp > 0){
        enemy.padding_x = (enemy.padding_x>=enemy.s_size*(enemy.sprites_count-1) ? 0 : enemy.padding_x+enemy.s_size);

        enemyMove(enemy);
        if (enemy.s_size==128){
            context.drawImage(medusa_sprites, enemy.padding_x, enemy.padding_y, enemy.s_size, enemy.s_size, enemy.pos_x, enemy.pos_y, enemy.size, enemy.size);
        }
        else context.drawImage(dragon_sprites, enemy.padding_x, enemy.padding_y, enemy.s_size, enemy.s_size, enemy.pos_x, enemy.pos_y, enemy.size, enemy.size);
    } else {
        player.score+=1;
        setEnemy();
    }
}