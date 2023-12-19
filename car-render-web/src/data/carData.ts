import { Model3D } from "../models/Model3D";

export const availableModels: Record<string, Model3D> = {
  mercedez: {
    modelName: "mercedes-benz.glb",
    metadata: {
      components: {
        leftDoor: {
          onClickActions: [{
            type: 'animation',
            name: 'leftDoorAction',
          }]
        },
        rightDoor: {
          onClickActions: [{
            type: 'animation',
            name: 'rightDoorAction',
          }]
        },
        engineCap: {
          onClickActions: [{
            type: 'animation',
            name: 'engineCapAction',
          }]
        },
        trunk: {
          onClickActions: [{
            type: 'animation',
            name: 'trunkAction'
          }]
        }
      }
    }
  },
  mclaren: {
    modelName: "mclaren.glb",
    metadata: {
      components: {
        leftDoor: {
          onClickActions: [{
            type: 'animation',
            name: 'leftDoorAction',
          }]
        },
        rightDoor: {
          onClickActions: [{
            type: 'animation',
            name: 'rightDoorAction',
          }]
        },
        engineCap: {
          onClickActions: [{
            type: 'animation',
            name: 'engineCapAction',
          }]
        }
      }
    }
  }
};
