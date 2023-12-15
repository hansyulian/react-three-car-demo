import { Model3D } from "../models/Model3D";

export const availableModels: Record<string, Model3D> = {
  mercedez: {
    modelName: "mercedes-benz.glb",
    metadata: {
      components: {
        leftDoor: {
          animation: {
            rotation: {
              x: 0,
              y: 0,
              z: 0.3,
              duration: 2,
            }
          },
        },
        rightDoor: {
          animation: {
            rotation: {
              x: 0,
              y: 0,
              z: -0.3,
              duration: 2,
            }
          }
        },
        engineCap: {
          animation: {
            rotation: {
              x: -0.3,
              y: 0,
              z: 0,
              duration: 2,
            }
          }
        },
        trunk: {
          animation: {
            rotation: {
              x: 0.3,
              y: 0,
              z: 0,
              duration: 2,
            }
          }
        }
      }
    }
  },
  mclaren: {
    modelName: "mclaren.glb",
    metadata: {
      components: {
        leftDoor: {
          animation: {
            rotation: {
              x: 0.18,
              y: 0,
              z: 0.6,
              duration: 2,
            }
          },
        },
        rightDoor: {
          animation: {
            rotation: {
              x: 0.18,
              y: 0,
              z: -0.6,
              duration: 2,
            }
          }
        },
        engineCap: {
          animation: {
            rotation: {
              x: -0.3,
              y: 0,
              z: 0,
              duration: 2,
            }
          }
        }
      }
    }
  }
} as const;
