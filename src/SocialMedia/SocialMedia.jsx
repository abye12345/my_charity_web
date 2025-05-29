import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <a
        target="_blank"
        href="https://web.facebook.com/?_rdc=1&_rdr#"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        <FaFacebook size={32} />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/"
        className="text-pink-600 hover:text-pink-800 transition-colors"
      >
        <FaInstagram size={32} />
      </a>
      <a
        target="_blank"
        href="https://www.twitter.com/"
        className="text-blue-400 hover:text-blue-600 transition-colors"
      >
        <FaTwitter size={32} />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/"
        className="text-red-600 hover:text-red-800 transition-colors"
      >
        <FaYoutube size={32} />
      </a>
    </div>
  );
};

export default SocialMedia;
