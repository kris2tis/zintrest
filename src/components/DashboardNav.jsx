import {
  DocumentMinusIcon,
  TableCellsIcon,
  ChatBubbleLeftIcon,
  UsersIcon,
  ArrowLeftEndOnRectangleIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import DashboardNavItem from "ui/DashboardNavItem";
const dashboardNavLinks = [
  {
    id: 1,
    slug: "/profile",
    name: "داشبورد",
    icon: <TableCellsIcon className="size-6" />,
  },
  {
    id: 2,
    slug: "/profile/posts",
    name: "پست ها",
    icon: <DocumentMinusIcon className="size-6" />,
  },
  {
    id: 3,
    slug: "/profile/comments/",
    name: "کامنت ها",
    icon: <ChatBubbleLeftIcon className="size-6" />,
  },
  {
    id: 4,
    slug: "/profile/users/",
    name: "کاربران",
    icon: <UsersIcon className="size-6" />,
  },
  {
    id: 5,
    slug: "/profile/exit-account/",
    name: "خروج از حساب",
    icon: <ArrowLeftEndOnRectangleIcon className="size-6" />,
  },
];
export default function DashboardNav() {
  
  return dashboardNavLinks.map((DNL) => (
    <DashboardNavItem key={DNL.id} {...DNL} />
  ));
}
