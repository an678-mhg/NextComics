import Link from "next/link";
import React, { FC } from "react";
import { Details } from "../../models/details";
import SocialShare from "../SocialShare";
import Title from "../Title";

interface PropsType {
  data: Details;
  slug: string;
}

const InfoManga: FC<PropsType> = ({ data, slug }) => {
  return (
    <div className="pt-4 flex-1 mr-10">
      <div>
        <div className="mb-5 text-center">
          <h1 className="uppercase font-bold text-xl">{data.name}</h1>
          <p className="font-semibold text-gray-500">{data.updatedAt}</p>
        </div>
        <div className="flex">
          <div className="w-[190px]">
            <img src={data.img} alt={data.name} />
          </div>
          <div className="flex-1 ml-10">
            <div className="flex items-center justify-between">
              <SocialShare title={slug} />
              <button className="bg-blue-500 px-3 py-2 text-text-color rounded-sm">
                Theo dõi
              </button>
            </div>
            <ul>
              <li className="flex text-lg font-semibold my-2">
                <p className="w-[30%]">Tác giả:</p>
                <p className="ml-4">{data.author || "Đang cập nhật"}</p>
              </li>
              <li className="flex text-lg font-semibold my-2">
                <p className="w-[30%]">Trạng thái:</p>
                <p className="ml-4">{data.status}</p>
              </li>
              <li className="flex text-lg font-semibold my-2">
                <p className="w-[30%]">Thể loại:</p>
                <p className="ml-4 flex flex-wrap flex-1">
                  {data.categories.map((p) => (
                    <p key={p.category}>
                      {p.category} {"-"}
                    </p>
                  ))}
                </p>
              </li>
            </ul>
            <div className="flex items-center mt-4">
              <button className="bg-green-500 px-3 py-2 text-text-color rounded-md">
                <Link
                  href={`/read${data.chapters[data.chapters.length - 1].href}`}
                >
                  <a>Đọc từ đầu</a>
                </Link>
              </button>
              <button className="bg-green-500 px-3 py-2 text-text-color rounded-md ml-5">
                <Link href={`/read${data.chapters[0].href}`}>
                  <a>Chap mới nhất</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Title>Nội dung</Title>
        <hr className="border-b-2 border-blue-500 my-2" />
        <p className="font-semibold">{data.content}</p>
      </div>
    </div>
  );
};

export default InfoManga;
