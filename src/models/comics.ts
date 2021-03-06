export interface NewChapterType {
  name: string;
  href: string;
  time: string;
}

export interface ComicType {
  href: string;
  name: string;
  img: string;
  uid?: string;
  description?: string;
  newChapter?: NewChapterType;
  newChapters?: NewChapterType[];
}

export interface ReadChap {
  img: string;
  alt: string;
}
