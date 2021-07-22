import Phaser from 'phaser';

import splashLogo from '../assets/splash_logo.png';
// import splashBurst from '../assets/splash_burst.png';
// Music
import jungleDrumMusic from '../assets/audio/jungle-drum-music.mp3';

export default class LaunchScene extends Phaser.Scene {

    constructor(config) {
        super('launch');
    }

    preload() {

        // this.load.image(splashBurst, splashBurst);
        this.load.image(splashLogo, splashLogo);
        this.load.audio(jungleDrumMusic, jungleDrumMusic);
    }

    create() {
        let splashLogo = this.add.image(0, 0, splashLogo);
        splashLogo.setOrigin(0, 0);
        splashLogo.displayWidth = this.sys.canvas.width;
        splashLogo.displayHeight = this.sys.canvas.height;

        let continueText = this.add.text(0, 0, `Press Space to start`, {fontSize: '42px', fontStyle: 'bold', fill: 'white'});
        continueText.setShadow(2, 2, 'rgba(0,0,0,0.8)', 2);

        continueText.setPosition(this.sys.canvas.width / 2, (this.sys.canvas.height / 2) + 70);
        continueText.setOrigin(0.5);

        this.input.keyboard.on('keydown-SPACE', function() {
            this.scene.start('main');
        }, this);

        this.jungleDrumMusic = this.sound.add(jungleDrumMusic, {loop: true}).play();

    }

}
