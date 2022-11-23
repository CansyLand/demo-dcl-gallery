@Component("elevatorGroup")
export class ElevatorGroup { }


export class Elevator extends Entity {
    floor:number = 0
    active:boolean = false
    buttonElevator:Entity

    constructor(
    ) {
      super()
      engine.addEntity(this)

    // Elevator
    const elevator = new Entity()
    elevator.addComponent(new GLTFShape('models/gltf/Elevator.gltf'))
    elevator.addComponent(new Transform({
        position: new Vector3(2.85,0,4.86),
      }))
    elevator.setParent(this)
    elevator.addComponent(new ElevatorGroup())
    engine.addSystem(new ElevatorSystem())

    // Button in elevator
    this.buttonElevator = new Entity()
    this.buttonElevator.addComponent(new GLTFShape('models/gltf/HAL9000_02.gltf'))
    this.buttonElevator.addComponent(new Transform({
        position: new Vector3(-1.45,1,-0.5),
        rotation: new Quaternion().setEuler(0,90,0)
      }))
    this.buttonElevator.setParent(elevator)
    this.buttonElevator.addComponent(
      new OnPointerDown((e) => {
        this.active = true
      },
      {
        button: ActionButton.POINTER,
        showFeedback: true,
        hoverText: 'Go Up',
      })
    )
    

    // Button downstairs
    const buttonDownstairs = new Entity()
    buttonDownstairs.addComponent(new GLTFShape('models/gltf/ButtonPanel_01.gltf'))
    buttonDownstairs.addComponent(new Transform({
        position: new Vector3(4,0,4),
        rotation: new Quaternion().setEuler(0,180,0)
      }))
    buttonDownstairs.setParent(this)
    buttonDownstairs.addComponent(
      new OnPointerDown((e) => {
        if (this.floor != 0)
          this.active = true
      },
      {
        button: ActionButton.POINTER,
        showFeedback: true,
        hoverText: 'Call Elevator',
      })
    )

    // Button upstairs
    const buttonUpstairs = new Entity()
    buttonUpstairs.addComponent(new GLTFShape('models/gltf/ButtonPanel_01.gltf'))
    buttonUpstairs.addComponent(new Transform({
        position: new Vector3(2,3.5,6.2),
        rotation: new Quaternion().setEuler(0,20,0)
      }))
    buttonUpstairs.setParent(this)
    buttonUpstairs.addComponent(
      new OnPointerDown((e) => {
        if (this.floor != 1)
          this.active = true
      },
      {
        button: ActionButton.POINTER,
        showFeedback: true,
        hoverText: 'Call Elevator',
      })
    )

    } 

   }
  


const movableEntities = engine.getComponentGroup(ElevatorGroup)

export class ElevatorSystem implements ISystem {
  update(dt: number) {
    // Iterate over component group
    for (let entity of movableEntities.entities) {
      if (!elevator.active)
        return
      log('elevator active')
      const transform = entity.getComponent(Transform)
      if (elevator.floor == 0 && transform.position.y < 3.5) {
        transform.translate(new Vector3(0,0.1,0))
      } else if (elevator.floor == 0) {
        elevator.floor = 1
        elevator.active = false
        elevator.buttonElevator.getComponent(OnPointerDown).hoverText = "Go Down"
      }

      if (elevator.floor == 1 && transform.position.y > 0) {
        transform.translate(new Vector3(0,-0.1,0))
      } else if (elevator.floor == 1) {
        elevator.floor = 0
        elevator.active = false
        elevator.buttonElevator.getComponent(OnPointerDown).hoverText = "Go Up"
      }

    }
  }
}

export let elevator =  new Elevator()