import React, { useState } from "react";
import Sidebar from "../Sidebar";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [account, setAccount] = useState(false);
  let infos = [
    {
      id: 1,
      icon: <img src="/account.svg" alt="" />,
      name: "Аккаунт",
    },
    {
      id: 2,
      icon: <img src="/language.svg" alt="" />,
      name: "Language",
    },
    {
      id: 3,
      icon: <img src="/mode.svg" alt="" />,
      name: "Mode",
    },
    {
      id: 4,
      icon: <img src="/logout.svg" alt="" />,
      name: "Logout",
    },
    {
      id: 5,
      icon: <img src="/keyboard.svg" alt="" />,
      name: "Keyboard",
    },
    {
      id: 6,
      icon: <img src="/translate.svg" alt="" />,
      name: "Translate",
    },
  ];
  return (
    <div className="flex justify-between pt-3 pb-3">
      <div className="flex gap-6">
        <button onClick={() => setSidebar(!sidebar)}>
          <img src="/hamburgerbutton.svg" alt="" />
        </button>
        {sidebar && <Sidebar setSidebar={setSidebar} />}
        <img src="/Logo.svg" alt="" />
      </div>
      <div className="flex">
        <input
          className="bg-[#000000] w-[574px] text-white"
          type="text"
          placeholder="Ara"
        />
        <button className="px-5 py-1 flex justify-center items-center bg-[#FFFFFF33]">
          <img src="/search.svg" alt="" />
        </button>
      </div>
      <div className="flex gap-6">
        <button>
          <img src="/camera.svg" alt="" />
        </button>
        <button>
          <img src="/1.svg" alt="" />
        </button>
        <button>
          <img src="/bell.svg" alt="" />
        </button>
        <button onClick={() => setAccount(!account)}>
          <img src="/ava.png" alt="" />
        </button>
      </div>
      <div className={`account ${account ? "show" : ""}`}>
        {infos.map((info) => {
          return (
            <button className="flex gap-5 pt-3" key={info.id}>
              {info.icon}
              <p className="text-white">{info.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
