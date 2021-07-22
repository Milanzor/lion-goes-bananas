import '../frontend/src/style/index.scss';

import Phaser from 'phaser';

import LaunchScene from './Scenes/LaunchScene';
import MainScene from './Scenes/MainScene';
import ScoreScene from './Scenes/ScoreScene';

const config = {

    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 2000}
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [LaunchScene, MainScene, ScoreScene],
    autoCenter: true,
    backgroundColor: '#C9E9F6'
};

export default new Phaser.Game(config);
