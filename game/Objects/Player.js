import Phaser from 'phaser';
import lion from '../assets/lion.png';

export default class Player {

    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene) {
        
        const player = scene.physics.add.sprite(scene.sys.game.canvas.width / 2, scene.sys.game.canvas.height, lion);

        player.setBounce(0);
        player.setCollideWorldBounds(true);
        player.isOnWorldBounds = true;

        player.setGravityY(10000);

        return player;
    }

}
