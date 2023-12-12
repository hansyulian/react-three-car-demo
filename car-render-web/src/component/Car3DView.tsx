import { Canvas } from "@react-three/fiber"
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { WawaOffice } from "../models/WawaOffice";
import { CarModel, ModelMetadata } from "./CarModel";

type ModelStructure = {
  modelPath: string;
  metadata: ModelMetadata;
}

const availableModels: Record<string, ModelStructure> = {
  mercedez: {
    modelPath: "./models/mercedes-benz.glb",
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
    modelPath: "./models/mclaren.glb",
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
}

export const Car3DView = () => {
  const { metadata, modelPath } = availableModels.mercedez;

  return <Canvas
    camera={{
      fov: 100,
      position: [2.3, 1.5, 2.3],
    }}
  >
    <ambientLight intensity={1} />
    {/* <pointLight position={[0, 2, 3]} intensity={5} /> */}
    <OrbitControls enablePan={true} />
    {/* <ScrollControls pages={3} damping={0.25}>
      <WawaOffice />
    </ScrollControls> */}
    <CarModel gltfPath={modelPath} metadata={metadata} />
  </Canvas>
}