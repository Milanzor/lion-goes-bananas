import Phaser from 'phaser';

import logo from '../assets/logo.png';
import sunburst from '../assets/sunburst.png';
// Music
import jungleDrumMusic from '../assets/audio/jungle-drum-music.mp3';

export default class LaunchScene extends Phaser.Scene {

    constructor() {
        super('launch');
    }

    preload() {

        this.load.image(logo, logo);
        this.load.image(sunburst, sunburst);
        this.load.audio(jungleDrumMusic, jungleDrumMusic);
    }

    create() {

        this.sound.add(jungleDrumMusic, {loop: true}).play();

        let bgGradient = this.add.graphics();

        bgGradient.fillGradientStyle(0x009e2e, 0x005619, 0x005619, 0x009e2e, 1);
        bgGradient.fillRect(0, 0, this.sys.canvas.width, this.sys.canvas.height);

        let sunburstImage = this.add.image(this.sys.canvas.width / 2, (this.sys.canvas.height / 2), sunburst);
        sunburstImage.displayWidth = this.sys.canvas.width;
        sunburstImage.displayHeight = this.sys.canvas.height;
        sunburstImage.setScale(5);

        this.tweens.add({
            targets: sunburstImage,
            ease: 'Quad.easeInOut',
            duration: 5600,
            repeat: -1,
            rotation: 3,
            yoyo: true,
        });

        let logoImage = this.add.image(this.sys.canvas.width / 2, (this.sys.canvas.height / 2) + 70, logo);
        logoImage.setScale(0.8);
        logoImage.setOrigin(0.5);

        this.tweens.add({
            targets: logoImage,
            ease: 'Quad.easeInOut',
            duration: 500,
            repeat: -1,
            repeatDelay: 2000,
            delay: 2700,
            scale: '+=0.2',
            rotation: -0.05,
            yoyo: true,
        });

        let spaceToStartText = this.add.text(0, 0, `Press Space to start`, {fontSize: '42px', fontFamily: 'Arial', fontStyle: 'bold', fill: 'white'});
        spaceToStartText.setShadow(2, 2, 'rgba(0,0,0,0.8)', 2);

        spaceToStartText.setPosition(this.sys.canvas.width / 2, (this.sys.canvas.height / 2) + 350);
        spaceToStartText.setOrigin(0.5);

        this.tweens.add({
            targets: spaceToStartText,
            ease: 'Quad.easeInOut',
            duration: 1000,
            alpha: 0.2,
            repeat: -1,
            yoyo: true,
        });

        this.input.keyboard.on('keydown-SPACE', function() {
            this.scene.start('main');
        }, this);

    }


}
