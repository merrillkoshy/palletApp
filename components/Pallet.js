import { Box } from "./Box";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

const Pallet = ({ palletSize, color }) => {
  const img = ["../assets/img/pallet.jpg"];
  const texture = useLoader(TextureLoader, ...img);

  return (
    <>
      <Box size={palletSize} position={[0, 0, 2]} texture={texture} />
    </>
  );
};
export default Pallet;
