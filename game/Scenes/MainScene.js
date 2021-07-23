import Phaser from 'phaser';

// Textures
import lion from '../assets/lion.png';
import banana from '../assets/banana.png';
import bg from '../assets/bg.jpg';
import meat from '../assets/meat.png';
import lionAteMeat from '../assets/lion_ate_meat.png';
import cloud from '../assets/cloud.png';
import monkey from '../assets/monkey.png';

// Objects
import Player from '../Objects/Player';
import Banana from '../Objects/Banana';
import Meat from '../Objects/Meat';
import Cloud from '../Objects/Cloud';
import Monkey from '../Objects/Monkey';

// Audio
import pop from '../assets/audio/pop.mp3';
import jump from '../assets/audio/jump.mp3';
import roar from '../assets/audio/roar.mp3';
import monkeyLaugh from '../assets/audio/monkey-laugh.mp3';
import monkeyChest from '../assets/audio/monkey-chest.mp3';

// Music
import jungleDrumMusic from '../assets/audio/jungle-drum-music.mp3';

/**
 *
 */
export default class MainScene extends Phaser.Scene {

    /**
     *
     */
    constructor() {
        super('main');
    }

    /**
     *
     */
    preload() {

        this.load.image(bg, bg);
        this.load.image(lion, lion);
        this.load.image(banana, banana);
        this.load.image(meat, meat);
        this.load.image(lionAteMeat, lionAteMeat);
        this.load.image(cloud, cloud);
        this.load.image(monkey, monkey);

        this.load.audio(pop, pop);
        this.load.audio(jump, jump);
        this.load.audio(roar, roar);
        this.load.audio(jungleDrumMusic, jungleDrumMusic);
        this.load.audio(monkeyLaugh, monkeyLaugh);
        this.load.audio(monkeyChest, monkeyChest);
    }

    /**
     *
     */
    create() {
        this.game.sound.stopAll();

        this.bg = this.add.image(0, 0, bg);
        this.bg.setOrigin(0, 0);
        this.bg.displayWidth = this.sys.canvas.width;

        this.bg.displayHeight = this.sys.canvas.height;

        this._setupClouds();

        this.physics.world.setFPS(144);

        // Setup score
        this.scoreText = this.add.text(16, 16, 'Score: 0', {fontSize: '62px', fontFamily: 'Arial', fontStyle: 'bold', fill: 'white'});
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
        this.physics.add.collider(this.bananas, this.player.getSprite(), this.bananaHit, null, this);

        // Make meat collide
        this.physics.add.collider(this.meats, this.player.getSprite(), this.powerUpMeat, null, this);

        // Spawn monkey
        this.monkey = new Monkey(this);

        // Spawn bananas every 300ms
        this.time.addEvent({
            delay: 300,
            callback: this._spawnBanana,
            callbackScope: this,
            repeat: -1
        });

        // Spawn meat every 10s
        this.time.addEvent({
            delay: 10000,
            callback: this._spawnMeat,
            callbackScope: this,
            repeat: -1
        });

        // Show monkey every 8s
        this.time.addEvent({
            delay: 8000,
            callback: this._showMonkey,
            callbackScope: this,
            repeat: 0
        });

        this.pop = this.sound.add(pop, {loop: false});
        this.jump = this.sound.add(jump, {loop: false, volume: .3});
        this.roar = this.sound.add(roar, {loop: false});
        this.jungleDrumMusic = this.sound.add(jungleDrumMusic, {loop: true}).play();
        this.monkeyChest = this.sound.add(monkeyChest, {loop: false, volume: 2});

    }

    /**
     *
     * @private
     */
    _setupClouds() {

        let center = this.sys.game.canvas.width / 2;

        new Cloud(this, center - 350, 420);
        new Cloud(this, center + 400, 520);
    }

    /**
     *
     * @private
     */
    _spawnBanana() {
        this.score += 10;
        this.scoreText.setText(`Score: ${this.score}`);
        this.bananas.add(new Banana(this));
    }

    /**
     *
     * @private
     */
    _spawnBigBanana() {
        this.bananas.add(new Banana(this, true));
    }

    /**
     *
     * @private
     */
    _spawnMeat() {
        this.meats.add(new Meat(this));
    }

    /**
     *
     * @private
     */
    _showMonkey() {

        this.monkey.show();

        setTimeout(() => {
            this._spawnBigBanana();
        }, 1500);

        // Show monkey every 8s
        this.time.addEvent({
            delay: Phaser.Math.Between(5000, 10000),
            callback: this._showMonkey,
            callbackScope: this,
            repeat: 0
        });
    }

    /**
     *
     * @param time
     * @param delta
     */
    update(time, delta) {

        if (this.cursors.shift.isDown) {
            this.player.setSpeedSprint();
        } else {
            this.player.setSpeedWalk();
        }

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

    /**
     *
     * @param player
     * @param banana
     */
    bananaHit(player, banana) {

        if (!this.player.isPoweredUpByMeat()) {
            this.scene.start('score', {score: this.score});
            return;
        }

        this.score += banana._isBig ? 1000 : 100;

        banana.destroy();
    }

    /**
     *
     * @param player
     * @param meat
     */
    powerUpMeat(player, meat) {
        this.player.powerUpMeat();
        meat.destroy();
    }

}
