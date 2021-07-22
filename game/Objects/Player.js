import lion from '../assets/lion.png';
import lionAteMeat from '../assets/lion_ate_meat.png';

export default class Player {

    constructor(scene) {

        this.scene = scene;

        this._playerSprite = this.scene.physics.add.sprite(scene.sys.game.canvas.width / 2, scene.sys.game.canvas.height, lion);

        this._playerSprite.setBounce(0);
        this._playerSprite.setCollideWorldBounds(true);
        this._playerSprite.isOnWorldBounds = true;

        this._meatTimeout = null;

        this.homeostasis();

        return this;
    }

    homeostasis() {

        this._ateMeat = false;
        this._playerSprite.setGravityY(5000);

        this.setSpeedWalk();

        this._playerSprite.setScale(1);
        this._playerSprite.setTexture(lion);

    }

    moveLeft() {
        this._playerSprite.setVelocityX(this.movementSpeed * -1);
        this._playerSprite.setFlipX(false);
    }

    moveRight() {
        this._playerSprite.setVelocityX(this.movementSpeed);
        this._playerSprite.setFlipX(true);
    }

    stationary() {
        this._playerSprite.setVelocityX(0);
    }

    jump() {
        this._playerSprite.setVelocityY(this.jumpSpeed * -1);
        this.scene.jump.play();
    }

    isNotJumpingOrFalling() {
        return this._playerSprite.body.velocity.y === 0;
    }

    getSprite() {
        return this._playerSprite;
    }

    setSpeedWalk() {
        this.movementSpeed = 1000;
        this.jumpSpeed = 2000;
    }

    setSpeedSprint() {
        this.movementSpeed = 1500;
        this.jumpSpeed = 3000;
    }

    powerUpMeat() {

        this._ateMeat = true;
        this.scene.roar.play();

        this.movementSpeed = 2000;

        this._playerSprite.setScale(1.5);

        this._playerSprite.setTexture(lionAteMeat);

        if (this._meatTimeout) {
            clearTimeout(this._meatTimeout);
        }

        this._meatTimeout = setTimeout(() => {
            this.homeostasis();
        }, 5000);
    }

    isPoweredUpByMeat() {
        return this._ateMeat;
    }
}
