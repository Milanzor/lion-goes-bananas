import Phaser from 'phaser';
import banana from '../assets/banana.png';

/**
 * @returns Phaser.GameObjects.GameObject
 */
export default class {

    constructor(scene, big) {

        let scale, x, y;

        if (big) {

            scale = Phaser.Math.FloatBetween(1, 2);

            let rngBool = Phaser.Math.Between(0, 1);

            x = (scene.sys.game.canvas.width / 2);

            let randomX = Phaser.Math.Between(350, 850);
            if (rngBool === 1) {
                x -= randomX;
            } else {
                x += randomX;
            }

            y = -900;
        } else {

            x = Phaser.Math.Between(0, scene.sys.game.canvas.width);

            scale = Phaser.Math.FloatBetween(0.15, 0.25);
            y = -200;
        }

        const bananaSprite = scene.physics.add.sprite(x, y, banana);

        bananaSprite.setBounce(0);
        bananaSprite.setCollideWorldBounds(true);
        bananaSprite.setGravityY(15000);
        bananaSprite.setFlipX(!!Phaser.Math.Between(0, 1));
        bananaSprite.setScale(scale);

        bananaSprite._isBig = big;

        return bananaSprite;
    }

}
