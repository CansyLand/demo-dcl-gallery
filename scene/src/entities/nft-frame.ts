export class NftFrame extends Entity {
    constructor(
      contractAddress: string,
      itemID: string,
      showUI: boolean = false,
      position: Vector3,
      rotation: Quaternion = new Quaternion().setEuler(0,0,0),
      scale: Vector3 = new Vector3(1,1,1)
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position: position,
        rotation: rotation,
        scale: scale
      }))

      const nft = `ethereum://${contractAddress}/${itemID}`

      if (showUI)
        this.addComponent(
          new OnPointerDown((e) => {
            openNFTDialog(nft)
          })
        )

      const shapeComponent = new NFTShape(nft)
      this.addComponent(shapeComponent)

    } 
   }

