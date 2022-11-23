export class Tree extends Entity {
    constructor(
      position:Vector3 =  new Vector3(0,0,0),
      rotation: Quaternion = new Quaternion(0,0,0,0),
      scale: Vector3 = new Vector3(1,1,1)
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position: position, 
        rotation: rotation,
        scale: scale
      }))
      this.addComponent(new GLTFShape("models/gltf/Tree.gltf"))
    } 
   }

