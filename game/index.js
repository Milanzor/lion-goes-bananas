import '../frontend/src/style/index.scss';

import Phaser from 'phaser';

import LobbyScene from './scenes/LobbyScene';

const config = {

    type: Phaser.AUTO,

    width: 1200,
    height: 1200,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [LobbyScene],
    parent: 'thicc-wack-toe',
    autoCenter: true,
    backgroundColor: '#704a00'
};

export default new Phaser.Game(config);
