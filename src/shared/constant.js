import { toast } from "react-toastify";

export const BASE_URL = "https://next-comicszzz.vercel.app";
export const API_URL = "http://www.nettruyenco.com";
export const API_CLOUDINARY =
  "https://api.cloudinary.com/v1_1/annnn/image/upload";
export const UPLOAD_KEY = `${process.env.NEXT_PUBLIC_UPLOAD_KEY}`;

export const getImage = (img) => {
  return `${BASE_URL}/api/handler?url=${encodeURIComponent(img)}`;
};

export const api = "https://manga-api-production.up.railway.app";

export const calculateCreatedTime = (timeCreated) => {
  let periods = {
    year: 365 * 30 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
  };

  let diff = Date.now() - timeCreated;

  for (const key in periods) {
    if (diff >= Number(periods[key])) {
      let result = Math.floor(diff / Number(periods[key]));
      return `${result} ${result === 1 ? key : key + "s"} ago`;
    }
  }

  return "Just now";
};

export const providers = [
  {
    icon: "https://raw.githubusercontent.com/napthedev/blog/11f0a675a7d317cff3719be9ab2f7d94344a5eac/client/public/share-icon/facebook.svg",
    link: (url, title) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}&t=${title}`,
    name: "Facebook",
  },
  {
    icon: "https://raw.githubusercontent.com/napthedev/blog/11f0a675a7d317cff3719be9ab2f7d94344a5eac/client/public/share-icon/twitter.svg",
    link: (url, title) =>
      `http://twitter.com/share?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
    name: "Twitter",
  },
  {
    icon: "https://raw.githubusercontent.com/napthedev/blog/11f0a675a7d317cff3719be9ab2f7d94344a5eac/client/public/share-icon/reddit.svg",
    link: (url, title) =>
      `http://www.reddit.com/submit?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
    name: "Reddit",
  },
  {
    icon: "https://raw.githubusercontent.com/napthedev/blog/11f0a675a7d317cff3719be9ab2f7d94344a5eac/client/public/share-icon/email.svg",
    link: (url, title) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${url}`,
    name: "Email",
  },
];

export const copyToClipboard = (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
      return toast.success("Copy li??n k???t th??nh c??ng");
    } else {
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        document.execCommand("copy") ? res() : rej();
        textArea.remove();
        toast.success("Copy li??n k???t th??nh c??ng");
      });
    }
  } catch (error) {
    console.error(error);
    return toast.error("Copy li??n k???t th???t b???i");
  }
};
