"use client";

// ui
import Img from "ui/img";
import PostIntraction from "./PostIntraction";
import Divider from "ui/Divider";
import PostComment from "../comment/PostComment";

export default function PostDetails({
  coverImageUrl,
  likesCount,
  commentsCount,
  isLiked,
  isBookmarked,
  id,
  briefText,
  author,
  comments,
}) {
  const postIntraction = {
    likesCount: likesCount,
    commentsCount: commentsCount,
    isLiked: isLiked,
    isBookmarked: isBookmarked,
    id: id,
  };

  return (
    <div className="flex flex-col gap-y-5">
      {/* عکس و تعاملات پست */}
      <div className="flex flex-col gap-y-4 lg:flex-col-reverse ">
        {/* عکس */}
        <div className="w-full flex justify-center lg:block px-2">
          <div className="relative aspect-[2/2] lg:aspect-[5/6] max-w-[600px] h-[600px] lg:h-max w-full">
            <Img
              imageClassName="!rounded-lg lg:rounded-4xl !h-[600px] !lg:h-max"
              sourse={coverImageUrl}
            />
          </div>
        </div>
        {/* اطلاعات > اطلاعات کاربر */}
        <div className="container flex flex-col gap-y-20">
          {/* تعاملات کاربر */}
          <PostIntraction {...postIntraction} />
        </div>
      </div>
      {/*متن پست  و پروفایل نویسنده*/}
      <div className="flex items-center gap-x-2 py-2">
        {/* پروفایل */}
        <div>
          <Img
            sourse={author.avatarUrl}
            containerClassName={"w-4 h-4 lg:w-6 lg:h-6 "}
            imageClassName={"rounded-full"}
          />
        </div>
        {/* متن پست */}
        <div>
          <p className="text-xs lg:text-lg font-medium">{briefText}</p>
        </div>
      </div>
      <Divider />
      {/* کامنت ها */}
      <PostComment postComments={comments} postId={id} />
    </div>
  );
}
