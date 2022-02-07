import React from "react";
import { ReactComponent as LoudIcon } from "../assets/loud.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
function Footer() {
  return (
    <div className="w-full h-36 border-t-8 grid mt-16 border-blue-400  bg-gray-900 shadow">
      <div className="w-full place-content-center grid grid-flow-col-dense gap-4 place-items-center mt-8">
        <a href="">
          <LinkedinIcon className="w-8 h-8 text-blue-400 fill-current" />
        </a>
        <a href="">
          <GithubIcon className="w-8 h-8 text-blue-400 fill-current" />
        </a>
        <a href="">
          <TwitterIcon className="w-8 h-8 text-blue-400 fill-current" />
        </a>
      </div>
      <div className="w-1/2 p-4 text-yellow-400 font-bold m-auto text-center bg-inherit">
        Collegium
      </div>
      <div className="bg-black h-12 w-full text-center sm:text-xs text-sm flex place-items-center place-content-center text-gray-700 place-self-end">
        @2020, All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
