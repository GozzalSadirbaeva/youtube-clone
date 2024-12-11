import React from "react";

function Sidebar({ setSidebar }) {
  let datas = [
    {
      id: 1,
      icon: <img src="/icon1.svg" alt="" />,
      name: "Главная",
    },
    {
      id: 2,
      icon: <img src="/icon2.svg" alt="" />,
      name: "Подписка",
    },
    {
      id: 3,
      icon: <img src="/icon3.svg" alt="" />,
      name: "Плейлисты",
    },
    {
      id: 4,
      icon: <img src="/icon4.svg" alt="" />,
      name: "История",
    },
    {
      id: 5,
      icon: <img src="/icon5.svg" alt="" />,
      name: "Ваши видео",
    },
    {
      id: 1,
      icon: <img src="/icon6.svg" alt="" />,
      name: "Смотреть позже",
    },
  ];
  return (
    <div className="sidebar">
      <div className="flex gap-6 pt-3 ">
        <button onClick={() => setSidebar(false)}>
          <img className="" src="/hamburgerbutton.svg" alt="" />
        </button>
        <img src="/Logo.svg" alt="" />
      </div>
      <div>
        {datas.map((data) => {
          return (
            <button
              className="flex gap-8 justify-left items-center pt-6 px-3"
              key={data.id}
            >
              {data.icon}
              <p className="text-white">{data.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
