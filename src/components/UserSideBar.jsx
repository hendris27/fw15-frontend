import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { BiLockOpen } from "react-icons/bi";
import { VscTasklist } from "react-icons/vsc";
import { IoIosAddCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import React from "react";
import { useSelector } from "react-redux";
import http from "../helpers/http";

const UserSideBar = () => {
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState({});

  React.useEffect(() => {
    async function getProfileData() {
      const { data } = await http(token).get("/profile");
      setProfile(data.results);
    }
    getProfileData();
  }, []);

  return (
    <>
      <aside className="hidden md:block md:w-full md:pr-5 flex flex-col">
        <div className="flex pl-16 gap-4 mb-14">
          <div className="flex justify-center items-center gap-4">
            <div className="w-[60px]">
              {profile?.picture && (
                <img
                  className="w-[65px] h-[55px] border-4 border-white rounded-full object-cover"
                  src={
                    profile.picture.startsWith("https")
                      ? profile.picture
                      : `http://localhost:8888/uploads/${profile.picture}`
                  }
                  alt={profile?.fullName}
                />
              )}
            </div>
            <div className="flex flex-col">
              <div>{profile?.fullName}</div>
              <div>{profile?.profession}</div>
              <div>{profile?.Nationality}</div>
            </div>
          </div>
        </div>

        <div className="flex pl-16 gap-4 mt-10 font-bold">
          <div>
            <FaUserCircle color="#00AFC1" size={25} />
          </div>
          <div>
            <Link to="/Profil" className="font-bold hover:text-[#0E8388] ">
              Profile
            </Link>
          </div>
        </div>
        <div className="flex pl-[100px] gap-4 mt-10 ">
          <div>
            <BsFillCreditCardFill color="#00AFC1" size={25} />
          </div>
          <div>Card</div>
        </div>

        <div className="flex pl-[100px] gap-4 mt-10">
          <div>
            <AiFillEdit color="#00AFC1" size={25} />
          </div>
          <div>
            <Link
              to="/Profil"
              className="hover:text-[#0E8388] hover:text-[17px]"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="flex pl-[100px] gap-4 mt-10">
          <div>
            <BiLockOpen color="#00AFC1" size={25} />
          </div>
          <div>
            <Link
              to="/ChangePassword"
              className="hover:text-[#0E8388] hover:text-[17px]"
            >
              Change Password
            </Link>
          </div>
        </div>
        <div className="flex pl-16 gap-4 mt-10">
          <div>
            <IoIosAddCircle color="#00AFC1" size={25} />
          </div>
          <Link
            to="/ManageEvent"
            className="hover:text-[#0E8388] hover:text-[17px]"
          >
            Create Event
          </Link>
        </div>
        <div className="flex pl-16 gap-4 mt-10">
          <div>
            <VscTasklist color="#00AFC1" size={25} />
          </div>
          <Link
            to="/MyBooking"
            className="hover:text-[#0E8388] hover:text-[17px]"
          >
            My Booking
          </Link>
        </div>
        <div className="flex pl-16 gap-4 mt-10">
          <div>
            <MdFavorite color="#00AFC1" size={25} />
          </div>
          <Link
            to="/MyWishlist"
            className="hover:text-[#0E8388] hover:text-[17px]"
          >
            My Wishlist
          </Link>
        </div>
        <div className="flex pl-16 gap-4 mt-10">
          <div>
            <AiFillSetting color="#00AFC1" size={25} />
          </div>
          <div>Settings</div>
        </div>
        <div className="flex pl-16 gap-4 mt-10">
          <div>
            <FiLogOut color="red" size={25} />
          </div>
          <div className="text-[#ff0000] font-bold">Logout</div>
        </div>
      </aside>
    </>
  );
};
export default UserSideBar;