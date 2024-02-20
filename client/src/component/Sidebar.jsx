"use client";
import { useEffect, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import profile from "../../public/profile.png";
import Image from "next/image";
import { useDataContext } from "@/context/DataContext";
import getFriends from "@/hooks/getFriends";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useConversation from "@/hooks/useConversation";


const Sidebar = () => {
  const [sidebarFriends, setSidebarFriends] = useState([]);
  const { loading, currentUser } = useDataContext();
  const { setSelectedConversation } = useConversation();
  console.log(currentUser);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const sidebarFriendsData = await getFriends();
      setSidebarFriends(sidebarFriendsData);
    };

    fetchCurrentUser();
  }, []);
  console.log(sidebarFriends);

  const handleLogOut = async (data) => {
    console.log(data);
    await fetch("http://localhost:4000/logout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("LogOut successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          location.reload();
        }
      });
  };

  return (
    <>
      {loading ? (
        <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-8 border-solid border-gray-200" />
        <div className="w-12 h-12 rounded-full animate-spin absolute  border-8 border-solid border-green-500 border-t-transparent"></div>
      </div>
      ) : (
        <div className="bg-darkBlue scrollStyle w-[388px] h-full fixed overflow-y-auto text-white">
          {/* headers */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
          

              <div className="flex cursor-pointer items-center gap-2">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src={
                    currentUser?.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ne7oVV6Lx9uAnmJDUZrrLcGy8yzo1sXdpQ&usqp=CAU"
                  }
                  alt="current user image"
                />
                <h1 className="text-xl font-semibold">{currentUser?.name}</h1>
              </div>
              

              <div className="flex items-center gap-2">
                <div className="h-[32px] w-[32px] rounded-md">
                  <div className="relative inline-block text-left">
                    <div className="group">
                      <div className="h-[32px] w-[32px] hover:bg-slate-700 rounded-md">
                        <HiOutlineDotsHorizontal className="text-[20px] mt-[6px]  font-bold " />
                      </div>

                      {/* Dropdown menu */}
                      <div className="absolute -left-5 w-24  origin-top-center bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                        <div className="py-1 ">
                          <button
                            onClick={handleLogOut}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            LogOut
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[32px] w-[32px] hover:bg-slate-700 rounded-md">
                  <FaRegEdit className="text-[19px] mx-auto mt-[6px]" />
                </div>
              </div>
            </div>

            {/* search input field */}
            <div className="my-1">
              <input
                className="w-full rounded-sm px-2 border-b focus:border-b-2 focus:border-green-500 py-[6px] bg-[#26343d] outline-none"
                type="text"
                placeholder="Search or start a new chat"
              />
            </div>
          </div>

          {/* User name box */}

          <div className="mt- px-2">
            <ul className="flex flex-col justify-start mb-5">
              {sidebarFriends.length ?
                sidebarFriends.map((item) => (
                  <button
                    key={item._id}
                    onClick={() => {
                      setSelectedConversation(item);
                    }}
                  >
                    <li className="hover:bg-slate-800 border-b border-slate-700 rounded-md duration-300 py-3 px-2">
                      <div className="flex cursor-pointer items-center gap-3">
                        <Image
                          width={50}
                          height={50}
                          className="rounded-full"
                          src={item.image}
                          alt="user image"
                        />

                        <div className="w-[550px]">
                          <h1 className="font-medium">{item.name}</h1>
                          <p className="text-[13px] text-slate-300">
                            Hello Dear, How Are You..?
                          </p>
                        </div>
                        <div className="ml-1">
                          <p className="mb-1 text-[14px]">12.55 </p>
                          <p className="h-[17px] text-[12px] mx-auto text-center w-[18px] rounded-full bg-blue-700 text-white">
                            1
                          </p>
                        </div>
                      </div>
                    </li>
                  </button>
                )):<div className="flex justify-center">
                <div>
                <div className="w-6 h-6 rounded-full absolute border-4 border-solid border-gray-200" />
                <div className="w-6 h-6 rounded-full animate-spin absolute  border-4 border-solid border-green-500 border-t-transparent"></div>
                </div>
              </div>
                
                }
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
