import { Loader } from "lucide-react";

export default function Pending() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[30vh]">
        <div className="min-w-[760px] rounded-lg overflow-hidden shadow-lg bg-white p-4 animate-pulse">
          <div className="w-full h-48 bg-gray-200 rounded-lg"></div>

          <div className="mt-4 space-y-3">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>

            <div className="flex justify-center mt-3 gap-1">
              <span>en attente...</span>{" "}
              <Loader className="animate animate-spin" />
            </div>

            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>

            <div className="h-5 bg-gray-200 rounded w-1/4"></div>
          </div>

          <div className="mt-6 h-10 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </>
  );
}
