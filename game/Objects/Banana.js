import Phaser from 'phaser';
import banana from '../assets/banana.png';

/**
 * @returns Phaser.GameObjects.GameObject
 */
export default class {

    constructor(scene) {

        const x = Phaser.Math.Between(0, scene.sys.game.canvas.width);
        const bananaSprite = scene.physics.add.sprite(x, 0, banana);

        let scale = Phaser.Math.FloatBetween(0.15, 0.25);
        let flip = Phaser.Math.Between(0, 1);

        bananaSprite.setFlipX(!!flip);
        bananaSprite.setScale(scale);
        bananaSprite.setBounce(0);
        bananaSprite.setCollideWorldBounds(true);
        bananaSprite.setGravityY(15000);

        return bananaSprite;
    }

}
