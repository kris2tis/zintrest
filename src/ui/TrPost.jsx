"use client";

import Button from "./button";

export default function TrPost({
  title,
  category,
  author,
  createdAt,
  index,
}) {
  return (
    <>
      <td>{index}</td>
      <td>{title}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{createdAt}</td>

      <td>
        <Button className={"!bg-green-500"}>رایگان</Button>
      </td>
    </>
  );
}
