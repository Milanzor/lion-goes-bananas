import Phaser from 'phaser';

import lion from '../assets/lion.png';
import banana from '../assets/banana.png';

import Player from '../Objects/Player';

export default class LobbyScene extends Phaser.Scene {

    constructor() {
        super('lobby-scene');
    }

    preload() {
        this.load.image(lion, lion);
        this.load.image(banana, banana);
    }

    create() {

        this.player = new Player(this);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.world.setFPS(144);
    }

    update() {

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-2000);
            this.player.setFlipX(false);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(2000);
            this.player.setFlipX(true);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown && this.player.body.velocity.y === 0) {
            this.player.setVelocityY(-2500);
        }
    }

}
