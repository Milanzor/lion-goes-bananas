import Phaser from 'phaser';
import meat from '../assets/meat.png';

/**
 * @returns Phaser.GameObjects.GameObject
 */
export default class {

    constructor(scene) {

        const x = Phaser.Math.Between(0, scene.sys.game.canvas.width);
        const meatSprite = scene.physics.add.sprite(x, -200, meat);

        let scale = Phaser.Math.FloatBetween(0.5, 0.8);
        let flip = Phaser.Math.Between(0, 1);

        meatSprite.setFlipX(!!flip);
        meatSprite.setScale(scale);
        meatSprite.setBounce(0);
        meatSprite.setCollideWorldBounds(true);
        meatSprite.setGravityY(35000);

        return meatSprite;
    }

}
