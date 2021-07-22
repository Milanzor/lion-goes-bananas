import monkey from '../assets/monkey.png';

/**
 * @returns Phaser.GameObjects.GameObject
 */
export default class {

    constructor(scene) {

        this.scene = scene;

        this._monkeySprite = this.scene.physics.add.sprite(-500, this.scene.sys.game.canvas.height, monkey);
        this._monkeySprite.setOrigin(0, 1);
        this._monkeySprite.setCollideWorldBounds(false);

        this._monkeySprite.body.setAllowGravity(false);

        return this;
    }

    show() {

        this.scene.monkeyChest.play();

        this.scene.tweens.add({
            targets: this._monkeySprite,
            ease: 'Linear',
            duration: 600,
            repeat: 0,
            yoyo: false,
            x: '+=500'
        });

        setTimeout(() => {

            this.scene.tweens.add({
                targets: this._monkeySprite,
                ease: 'Linear',
                duration: 600,
                repeat: 0,
                yoyo: false,
                x: '-=500'
            });

        }, 3000);
    }

}
