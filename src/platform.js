const Phaser = require('phaser');

class Platform extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;
    this.plat = this.scene.add.image(0, 0, 'background');
    this.add(this.plat);
    this.scene.add.existing(this);
  }
}

export default Platform