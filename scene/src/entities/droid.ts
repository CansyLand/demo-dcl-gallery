@Component("droidGroup")
export class DroidGroup { }

export class Droid extends Entity {
    constructor(
       
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position: new Vector3(8,7,11),
        scale: new Vector3(1,1,1)
      }))



      // Droid
      const droid = new Entity()
      droid.addComponent(new GLTFShape("models/gltf/Droid_01.gltf"))
      // droid.addComponent(new Billboard())
      droid.addComponent(new Transform({
        position: new Vector3(3,0,0),
        rotation: new Quaternion().setEuler(40,-90,0)
      }))
      droid.setParent(this)

      this.addComponent(new DroidGroup())
      engine.addSystem(new DroidSystem())

    } 
   }


const movableEntities = engine.getComponentGroup(DroidGroup)

export class DroidSystem implements ISystem {
  update(dt: number) {
    // Iterate over component group
    for (let entity of movableEntities.entities) {
      let transform = entity.getComponent(Transform)
      transform.rotate(Vector3.Down(), 0.5)
    }
  }
}



