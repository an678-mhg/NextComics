import React, { FC } from "react";
import { NewChapterType, ReadChap } from "../../models/comics";
import { getImage } from "../../shared/constant";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { AiOutlineHome } from "react-icons/ai";
import ButtonChapter from "./ButtonChapter";
import { useRouter } from "next/router";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Link from "next/link";

interface PropsType {
  results: ReadChap[];
  showChapters: boolean;
  setShowChapters: () => void;
  chapters: NewChapterType[];
}

const ReadView: FC<PropsType> = ({
  results,
  setShowChapters,
  showChapters,
  chapters,
}) => {
  const router = useRouter();

  return (
    <div className="flex-1 h-screen overflow-y-scroll bg-primary-100 pt-[44px]">
      <div className="absolute top-0 left-0 right-0 py-2 px-4 bg-primary-300 flex items-center justify-between">
        <button
          onClick={setShowChapters}
          className="lg:hidden block bg-blue-500 p-1"
        >
          {showChapters ? (
            <XIcon className="w-6 h-6 text-text-color" />
          ) : (
            <MenuAlt1Icon className="w-6 h-6 text-text-color" />
          )}
        </button>
        <ButtonChapter chapters={chapters} />
        <div className="flex items-center h-full">
          <Tippy content="Trở về trang chủ">
            <button>
              <Link href="/">
                <a>
                  <AiOutlineHome className="w-6 h-6 text-blue-500" />
                </a>
              </Link>
            </button>
          </Tippy>
        </div>
      </div>

      {results.map((item) => (
        <div className="md:w-[70%] mx-auto w-[calc(100%-32px)]" key={item.alt}>
          <img
            className="border border-black"
            src={getImage(item.img)}
            alt={item.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default ReadView;
