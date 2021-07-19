import Phaser from 'phaser';

import lion from '../assets/lion.png';

export default class LobbyScene extends Phaser.Scene {

    constructor() {
        super('lobby-scene');
    }

    preload() {
        this.load.image(lion, lion);
    }

    create() {

        this.player = this._createPlayer();

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.world.setFPS(144);
    }

    update() {
        
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-2000);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(2000);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown && this.player.body.velocity.y === 0) {
            this.player.setVelocityY(-2500);
        }
    }

    _createPlayer() {

        const player = this.physics.add.sprite(this.sys.game.canvas.width / 2, this.sys.game.canvas.height, lion);

        player.setBounce(0);
        player.setCollideWorldBounds(true);
        player.isOnWorldBounds = true;

        player.setGravityY(10000);

        return player;
    }

}
