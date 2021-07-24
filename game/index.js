import '../frontend/src/style/index.scss';

import Phaser from 'phaser';

import LaunchScene from './Scenes/LaunchScene';
import MainScene from './Scenes/MainScene';
import ScoreScene from './Scenes/ScoreScene';

const config = {

    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 2000}
        }
    },
    scale: {
        parent: 'lion',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 2560,
        height: 1440
    },
    scene: [LaunchScene, MainScene, ScoreScene]
};

export default new Phaser.Game(config);
