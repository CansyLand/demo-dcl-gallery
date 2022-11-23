export class PictureFrame extends Entity {
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
      this.addComponent(new GLTFShape("models/gltf/PictureFrame.gltf"))


      const myMaterial = new Material()
      myMaterial.albedoTexture = new Texture("images/MadeWithLove.jpg")
      myMaterial.emissiveTexture = new Texture("images/MadeWithLove.jpg")
      myMaterial.emissiveColor = new Color3(1,1,1)
      myMaterial.emissiveIntensity = 0.8

      const picture = new Entity()
      picture.addComponent(myMaterial)
      const plane = picture.addComponent(new PlaneShape())  
      picture.addComponent(new Transform({
        position: new Vector3(0,2,-0.1),
        scale: new Vector3(3,3,3),
        rotation: new Quaternion().setEuler(0,0,180)
      }))
      picture.setParent(this)
    } 
   }

