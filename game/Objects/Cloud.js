import Phaser from 'phaser';
import cloud from '../assets/cloud.png';

/**
 * @returns Phaser.GameObjects.GameObject
 */
export default class {

    constructor(scene, x, y) {

        const cloudSprite = scene.physics.add.sprite(x, y, cloud);

        let flip = Phaser.Math.Between(0, 1);
        let scale = Phaser.Math.FloatBetween(0.05, 0.15);

        cloudSprite.setFlipX(!!flip);
        cloudSprite.setScale(scale);
        cloudSprite.setBounce(0);
        cloudSprite.setCollideWorldBounds(true);

        cloudSprite.body.setAllowGravity(false);

        scene.tweens.add({
            targets: cloudSprite,
            ease: 'Quad.easeInOut',
            duration: Phaser.Math.Between(5000, 10000),
            repeat: -1,
            yoyo: true,
            x: '+=100'
        });

        return cloudSprite;
    }

}
