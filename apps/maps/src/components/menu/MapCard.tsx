"use client";
import Image from "next/image";
export default function MapCard({
  lng,
  title,
  description,
  href,
  inProgress,
}: {
  lng: string;
  title: string;
  description: string;
  href: string;
  inProgress?: boolean;
}) {
  return (
    <div className="relative rounded-md shadow-md bg-white dark:bg-dark hover:border-accent hover:border-opacity-100 hover:scale-105 border border-zinc-100 dark:border-opacity-20 cursor-pointer flex flex-col h-full group">
      {/* {inProgress && (
        <div className="absolute top-0 right-0 bg-white font-bold dark:bg-dark p-2 r-0 rounded-md border-accent border m-3 opacity-80 text-sm"> 🚧 </div>
      )} */}
      <Image
        src={href}
        alt={`${title} image`}
        className="w-full h-full rounded-t-md"
        width={640}
        height={75}
        priority
      />
      <div className="px-6 py-4 text-black dark:text-light">
        <div className="font-bold text-lg mb-2 uppercase text-center group-hover:text-accent">
          {inProgress ? "🚧 " + title + " 🚧" : title}
        </div>
        <p className="text-sm text-center ">{description}</p>
      </div>
    </div>
  );
}
