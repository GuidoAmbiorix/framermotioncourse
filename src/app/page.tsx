import Image from "next/image";
import Box1 from "./components/Box1/box1";
import Box2 from "./components/Box2/box2";
import Box3 from "./components/Box3/box3";
import Box4 from "./components/Box4/box4";

export default function Home() {
  return (
    <div className="p-10">
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </div>
  );
}
