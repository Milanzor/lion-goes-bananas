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

        // this.sound.add(jungleDrumMusic, {loop: true}).play();

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
            yoyo: true
        });

        this._logo();
        this._spaceToStartText();

        this.input.keyboard.on('keydown-SPACE', function() {
            this.scene.start('main');
        }, this);
        
        this.input.on('pointerup', function() {
            this.scene.start('main');
        }, this);

    }

    _spaceToStartText() {

        let spaceToStartText = this.add.text(0, 0, `Press Space to start`, {fontSize: '42px', fontFamily: 'Arial', fontStyle: 'bold', fill: 'white'});

        spaceToStartText.setPosition(this.sys.canvas.width / 2, (this.sys.canvas.height / 2) + 350);
        spaceToStartText.setOrigin(0.5);

        spaceToStartText.setShadow(7, 7, 'rgba(0,0,0,1)', 2);
        spaceToStartText.setResolution(2);
        spaceToStartText.setAlpha(0);

        this.tweens.add({
            targets: spaceToStartText,
            ease: 'Quad.easeInOut',
            duration: 1000,
            delay: 2000,
            alpha: .8,
            repeat: -1,
            yoyo: true
        });

    }

    _logo() {

        let logoImage = this.add.image(this.sys.canvas.width / 2, -500, logo);
        logoImage.setScale(1);
        logoImage.setOrigin(0.5);

        this.tweens.add({
            targets: logoImage,
            ease: 'Quad.easeInOut',
            duration: 500,
            repeat: -1,
            repeatDelay: 2000,
            delay: 2700,
            scale: '+=0.1',
            rotation: -0.05,
            yoyo: true
        });
        this.tweens.add({
            targets: logoImage,
            ease: 'Quad.easeInOut',
            duration: 500,
            repeat: 0,
            delay: 500,
            y: (this.sys.canvas.height / 2) + 170
        });

        this.tweens.add({
            targets: logoImage,
            ease: 'Quad.easeInOut',
            duration: 500,
            repeat: 0,
            delay: 1000,
            y: '-=100'
        });

    }

}
