import Image from "next/image"; // Import the Image component

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] z-0 md:w-[1160px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <Image
          src="/images/dashboard-preview.png"
          alt="Dashboard preview"
          width={1160}
          height={700}
          className="w-[1160px] h-[650px] object-cover object-top rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
