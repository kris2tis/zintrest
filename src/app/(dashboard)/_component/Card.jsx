import {
  UsersIcon,
  ClipboardDocumentListIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";

const iconType ={
  users : UsersIcon,
  posts : ClipboardDocumentListIcon,
  comments:ChatBubbleBottomCenterIcon
}

export default function Count({ type, name, count }) {
    const Icon = iconType[type]
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-gray-900 p-4 rounded-md md:rounded-lg lg:rounded-2xl ">
      <div className="flex items-center gap-x-3 text-[#d0d0d0]">
        <Icon className="size-4" />
        <span>{name}</span>
      </div>
      <div className="flex-row rounded-sm md:rounded-md lg:rounded-lg bg-gray-600 p-6 mt-5">
        <h3 className="text-secondary-900 font-bold text-sm md:text-lg lg:text-2xl">{count}</h3>
      </div>
    </div>
  );
}
