import React, { useState } from "react";

function Main() {
  const [send, setSend] = useState(false);
  const [save, setSave] = useState(false);
  return (
    <div>
      <div className="px-32">
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/gyORfdhInX8?si=5bZF-zdheAG-mxif"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="flex items-center gap-11 bg-[#3f3f3f] w-[760px] h-[50px]">
          <h3 className="font-medium text-lg text-white px-4">
            Islam Muratbaev - Bir janan (Ajiniyaz filminen)
          </h3>
          <div className="flex gap-3">
            <button onClick={() => setSend(true)}>
              <img src="/send.svg" alt="" />
            </button>
            <button onClick={() => setSave(true)}>
              <img src="/save.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      {send && (
        <div className="send">
          <button onClick={() => setSend(false)}>
            <img className="fixed right-0 top-1" src="/close.svg" alt="" />
          </button>
          <div className="px-5">
            <h3 className="text-white ">
              Siz bu yerda share qilishingiz mumkin
            </h3>
            <div className="flex justify-center items-center gap-7 pt-7">
              <button>
                <img src="/insta.svg" alt="" />
              </button>
              <button>
                <img src="/facebook.svg" alt="" />
              </button>
              <button>
                <img src="/telegram.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
      {save && (
        <div className="send">
          <button onClick={() => setSave(false)}>
            <img className="fixed right-0 top-1" src="/close.svg" alt="" />
          </button>
          <h3 className="text-white px-5 py-3">
            Siz bu yerda saqlab olishingiz mumkin
          </h3>
        </div>
      )}
    </div>
  );
}

export default Main;
