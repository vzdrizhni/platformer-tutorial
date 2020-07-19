import Platform from './platform'
import background from './assets/images/background.png'

class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }

  // backgroundAsset = require('./assets/images/background.png')

  preload() {
    this.load.image("background", background);
    // this.load.image("spike", "assets/images/spike.png");
    // this.load.atlas(
    //   "player",
    //   "assets/images/kenney_player.png",
    //   "assets/images/kenney_player_atlas.json"
    // );
    // this.load.image("tiles", "assets/tilesets/platformPack_tilesheet.png");
    // this.load.tilemapTiledJSON("map", "assets/tilemaps/level1.json");
  }

  create() {
    this.platform = new Platform({scene: this});
    // const backgroundImage = this.add.image(0, 0, "background").setOrigin(0, 0);
    // backgroundImage.setScale(2, 0.8);
    // const map = this.make.tilemap({ key: 'map' });
    // const tileset = map.addTilesetImage('kenney_simple_platformer', 'tiles');
    // const platforms = map.createStaticLayer('Platforms', tileset, 0, 200);
  }
  update() {}
}

export default SceneMain
