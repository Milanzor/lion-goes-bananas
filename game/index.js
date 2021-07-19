import '../frontend/src/style/index.scss';

import Phaser from 'phaser';

import LobbyScene from './Scenes/LobbyScene';

const config = {

    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'thicc-wack-toe',
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [LobbyScene],
    autoCenter: true,
    backgroundColor: '#704a00'
};

export default new Phaser.Game(config);
