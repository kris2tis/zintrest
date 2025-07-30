import LinkPage from "@/ui/link";
import Search from "./Search";
import { CreatePost } from "app/(dashboard)/_component/PostalOprations";

export default function PostHeader() {
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-sm md:text-md lg:text-2xl text-secondary-900">
        لیست پست ها
      </h3>
      <Search />
      <CreatePost> 
        <LinkPage href="/profile/posts/create">
        ساخت پست
        </LinkPage>
      </CreatePost>
    </div>
  );
}
