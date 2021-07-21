import Phaser from 'phaser';

import lion from '../assets/lion.png';
import banana from '../assets/banana.png';
import bg from '../assets/bg.jpg';
import meat from '../assets/meat.png';
import lionAteMeat from '../assets/lion_ate_meat.png';

import Player from '../Objects/Player';
import Banana from '../Objects/Banana';
import Meat from '../Objects/Meat';
import pop from '../assets/audio/pop.mp3';
import jump from '../assets/audio/jump.mp3';
import roar from '../assets/audio/roar.mp3';

export default class MainScene extends Phaser.Scene {

    constructor() {
        super('main-scene');
    }

    preload() {

        this.load.image(bg, bg);
        this.load.image(lion, lion);
        this.load.image(banana, banana);
        this.load.image(meat, meat);
        this.load.image(lionAteMeat, lionAteMeat);

        this.load.audio(pop, pop);
        this.load.audio(jump, jump);
        this.load.audio(roar, roar);
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

        // Setup meats
        this.meats = this.physics.add.group();

        // Make bananas collide
        this.physics.add.collider(this.bananas, this.player.getSprite(), this.loadScoreScene, null, this);

        // Make meat collide
        this.physics.add.collider(this.meats, this.player.getSprite(), this.powerUpMeat, null, this);

        // Spawn bananas every 300ms
        this.time.addEvent({
            delay: 300,
            callback: this._spawnBanana,
            callbackScope: this,
            repeat: Infinity
        });

        // Spawn meat every 10s
        this.time.addEvent({
            delay: 10000,
            callback: this._spawnMeat,
            callbackScope: this,
            repeat: Infinity
        });

        this.playerSpeed = 1000;
        this.playerJump = 3500;
        this.pop = this.sound.add(pop, {loop: false});
        this.jump = this.sound.add(jump, {loop: false});
        this.roar = this.sound.add(roar, {loop: false});
    }

    _spawnBanana() {
        this.score += 10;
        this.scoreText.setText(`Score: ${this.score}`);
        this.bananas.add(new Banana(this));
        this.pop.play();
    }

    _spawnMeat() {
        this.meats.add(new Meat(this));
    }

    update() {

        if (this.cursors.left.isDown) {
            this.player.moveLeft();
        } else if (this.cursors.right.isDown) {
            this.player.moveRight();
        } else {
            this.player.stationary();
        }

        if (this.cursors.up.isDown && this.player.isNotJumpingOrFalling()) {
            this.player.jump();
        }
    }

    loadScoreScene() {
        if (!this.player.isPoweredUpByMeat()) {
            this.scene.start('score-scene', {score: this.score});
        }
    }

    powerUpMeat(player, meat) {
        this.player.powerUpMeat();
        meat.destroy();
    }

}
