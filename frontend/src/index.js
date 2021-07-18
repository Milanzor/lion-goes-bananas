import './style/index.scss';

const Phaser = require('phaser/dist/phaser-arcade-physics');

const game = new Phaser.Game({

    type: Phaser.AUTO,

    width: 1200,
    height: 1200,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scene: {
        preload: preload,
        create: create
    },
    parent: 'thicc-wack-toe',
    autoCenter: true,
    backgroundColor: '#bada55'
});

function preload() {
}

function create() {

}
