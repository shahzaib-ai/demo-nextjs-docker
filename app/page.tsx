import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-dvh bg-[#EDFFBD]">
      <Image
        alt="Yurt mascot"
        src={"/yurt-mascot.png"}
        height={400}
        width={400}
      />
      <h1 className="text-lime-900 text-[clamp(24px,20vw,96px)] mr-10">Yurt</h1>
    </div>
  );
}
