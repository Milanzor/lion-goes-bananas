import Phaser from 'phaser';

import bg from '../assets/bg.jpg';
import gameover from '../assets/audio/gameover.mp3';

export default class ScoreScene extends Phaser.Scene {

    constructor() {
        super('score-scene');
    }

    preload() {
        this.load.image(bg, bg);
        this.load.audio(gameover, gameover);
    }

    init(data) {
        this.score = data.score;
    }

    create() {

        this.bg = this.add.image(0, 0, bg);
        this.bg.setOrigin(0, 0);
        this.bg.displayWidth = this.sys.canvas.width;
        this.bg.displayHeight = this.sys.canvas.height;

        let scoreText = this.add.text(0, 0, `Final score: ${this.score}`, {fontSize: '92px', fontStyle: 'bold', fill: 'white'});
        scoreText.setShadow(3, 3, 'rgba(0,0,0,0.8)', 2);

        scoreText.setPosition(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
        scoreText.setOrigin(0.5);

        let continueText = this.add.text(0, 0, `Press Space to restart`, {fontSize: '42px', fontStyle: 'bold', fill: 'white'});
        continueText.setShadow(2, 2, 'rgba(0,0,0,0.8)', 2);

        continueText.setPosition(this.sys.canvas.width / 2, (this.sys.canvas.height / 2) + 70);
        continueText.setOrigin(0.5);

        this.input.keyboard.on('keydown-' + 'SPACE', function() {
            this.scene.start('main-scene');
        }, this);

        let gameoverSound = this.sound.add(gameover, {loop: false});
        gameoverSound.play();

    }

}
