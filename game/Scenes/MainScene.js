import Phaser from 'phaser';

import lion from '../assets/lion.png';
import banana from '../assets/banana.png';
import bg from '../assets/bg.jpg';

import Player from '../Objects/Player';
import Banana from '../Objects/Banana';
import pop from '../assets/audio/pop.mp3';
import jump from '../assets/audio/jump.mp3';

export default class MainScene extends Phaser.Scene {

    constructor() {
        super('main-scene');
    }

    preload() {
        this.load.image(bg, bg);
        this.load.image(lion, lion);
        this.load.image(banana, banana);
        this.load.audio(pop, pop);
        this.load.audio(jump, jump);
    }

    create() {

        this.bg = this.add.image(0, 0, bg);
        this.bg.setOrigin(0, 0);
        this.bg.displayWidth = this.sys.canvas.width;
        this.bg.displayHeight = this.sys.canvas.height;
        this.physics.world.setFPS(144);

        // Setup score
        this.scoreText = this.add.text(16, 16, 'Score: 0', {fontSize: '62px', fontStyle: 'bold', fill: 'white'});
        this.scoreText.setShadow(3, 3, 'rgba(0,0,0,0.8)', 2);

        this.score = 0;

        // Setup Player
        this.player = new Player(this);

        // Setup keyboard cursors
        this.cursors = this.input.keyboard.createCursorKeys();

        // Setup bananas
        this.bananas = this.physics.add.group();

        // Make bananas collide
        this.physics.add.collider(this.bananas, this.player, this.loadScoreScene, null, this);

        // Spawn bananas every 300ms
        this.time.addEvent({
            delay: 300,
            callback: this._spawnBanana,
            callbackScope: this,
            repeat: Infinity
        });

        this.playerSpeed = 1000;
        this.playerJump = 3500;
        this.pop = this.sound.add(pop, {loop: false});
        this.jump = this.sound.add(jump, {loop: false});
    }

    _spawnBanana() {
        this.score += 10;
        this.scoreText.setText(`Score: ${this.score}`);
        this.bananas.add(new Banana(this));
        this.pop.play();
    }

    update() {

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(this.playerSpeed * -1);
            this.player.setFlipX(false);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(this.playerSpeed);
            this.player.setFlipX(true);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown && this.player.body.velocity.y === 0) {
            this.player.setVelocityY(this.playerJump*-1);
            this.jump.play();
        }
    }

    loadScoreScene() {
        this.scene.start('score-scene', {score: this.score});
    }

}
