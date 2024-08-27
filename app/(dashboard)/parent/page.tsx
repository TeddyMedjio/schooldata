import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";

export default function ParentPage() {
  return (
    <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row">
      {/*LEFT*/}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (Teddy Medjio)</h1>
          <BigCalender />
        </div>
      </div>
      {/*RIGHT*/}
      <div className="w-full xl:w-1/2 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
}
