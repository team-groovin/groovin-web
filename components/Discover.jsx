import Image from "next/image";

export default function Discover() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2 py-8">
        <h2 className="font-extrabold text-4xl">Everything in one</h2>
        <h2 className="font-extrabold text-4xl">Platform</h2>
      </div>
      <Image
        src="/img/everything_on_place.svg"
        alt="Become visible"
        width={841}
        height={720}
      />
    </div>
  );
}
