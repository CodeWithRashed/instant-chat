"use client";
import { IoIosCall } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";

const ChatBox = () => {
  return (
    <div className="z-[999]">
      <div className="bg-[url('https://i.ibb.co/NyZkx2Q/e86c13b0-4e16-4c56-b5b5-1a90acbea77c-naruwhatsappwallpaperdark.webp')] overflow-y-auto  relative h-screen w-full">
        <div className="bg-[#121C22] pl- border-b z-[999] border-slate-700 text-[#a0bcd3] shadow- p-2 flex gap-x-3 justify-between items-center sticky top-0 ">
          <div className="flex items-center gap-3">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ne7oVV6Lx9uAnmJDUZrrLcGy8yzo1sXdpQ&usqp=CAU"
              alt=""
            />
            <h1 className="text-xl text-white font-semibold">Polash Ahmed</h1>
          </div>

          <div className="flex cursor-pointer gap-3 items-center">
            <div className="h-[40px] w-[40px] rounded-full shadow-lg border-blue-50 bg-slate-800">
              <IoIosCall className="text-white  mx-auto mt-2 text-2xl" />
            </div>
            <div className="h-[40px] w-[40px] rounded-full shadow-lg border-blue-50 bg-slate-800">
              <IoVideocam className="text-white mx-auto mt-[10px] text-xl" />
            </div>
            <div className="h-[40px] w-[40px] rounded-full shadow-lg border-blue-50 bg-slate-800">
              <IoMdInformationCircleOutline className="text-white mx-auto mt-[10px] text-xl" />
            </div>
          </div>
        </div>

        <div className="overflow-y-auto px-5 py-3 text-slate-700">
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="Hello John How Are Doing"
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="Hey,Im doing well.. what about you..?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="What are you doing..Jon?"
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="Im watching TV, And You?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="Im laying on the bed."
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="okay talk you later?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="Hello John How Are Doing"
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="Hey,Im doing well.. what about you..?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="What are you doing.?"
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="Im watching TV, And You?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="Im laying on the bed."
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="okay talk you later?"
          />
        </div>

        <form className="fixed  bottom-0 p-3 w-full bg-[#121C22] shadow-lg flex flex-row gap-2 items-center">
          <div className="flex w-full items-center gap-2">
            <div>
              <label
                className="h-[42px] w-[42px] bg-[#0B1114]  mx-auto rounded-sm"
                htmlFor="attachment"
              >
                <FaRegImage className="mt-2 text-white text-xl " />
              </label>
              <input
                className="hidden"
                type="file"
                name="attachment"
                id="attachment"
              />
            </div>

            {/* content */}

            <div className="">
              <input
                type="text"
                name="textField"
                placeholder="write message"
                className="text-sm rounded-lg outline-none block w-[67vw] py-2.5 px-3 bg-[#0B1114] placeholder-gray-400 text-white border border-[#0B1114] focus:outline-0 focus:border-[#3B82F6]"
              />
            </div>

            <div>
              <button
                className="text-white bg-[#0B1114] px-4 py-2.5"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;