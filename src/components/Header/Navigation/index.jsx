import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";
import { FaCaretDown } from "react-icons/fa";


const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = React.useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(!isOpenCatPanel);
  };

  return (
    <>
      <nav className="bg-white">
        <div className="container flex items-center justify-end gap-1">

          <div className="col_1 w-[20%] flex items-center justify-between">
            <Button
              className="!text-black gap-2"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill />
              Shop By Categories
              <FaAngleDown />
            </Button>
          </div>

          <div className="col_2 w-[55%]">
            <ul className="flex items-center nav">

              <li className="list-none">
                <Link to="/" className="link">
                  <Button className="!text-black hover:!text-[#ff5252] !capitalize hover:!bg-transparent">
                    Home
                  </Button>
                </Link>
              </li>

              {/* FASHION */}
              <li className="list-none relative group">
                <Link to="/" className="link">
                  <Button className="!text-black hover:!text-[#ff5252] !capitalize hover:!bg-transparent">
                    Fashion
                  </Button>
                </Link>

                {/* SUBMENU */}
                <div
                  className="
                    submenu absolute top-full left-[-100%] mt-[0.5px] min-w-[200px]
                    bg-white shadow-md z-50
                    opacity-0 invisible translate-y-2
                    transition-all duration-300 ease-out
                    pointer-events-none
                    group-hover:opacity-100 group-hover:visible
                    group-hover:translate-y-0
                    group-hover:pointer-events-auto
                    rounded
                  "
                >
                  <ul>
                    <li className="list-none w-full relative group/men">
                      <Link to="/" className="link">
                        <Button className="!rounded-none !w-full !justify-center !capitalize !text-gray-500 hover:!bg-gray-100">
                          Men
                        </Button>
                      </Link>

                      {/* SECOND LEVEL SUBMENU */}
                      <div
                      className="
                        absolute top-0 left-full min-w-[200px]
                        bg-white shadow-md z-50 rounded
                        opacity-0 invisible translate-x-2
                        transition-all duration-300 ease-out
                        pointer-events-none

                        group-hover/men:opacity-100
                        group-hover/men:visible
                        group-hover/men:translate-x-0
                        group-hover/men:pointer-events-auto
                      "
                    >
                        <ul>
                          <li className="list-none">
                            <Link to="/" className="link">
                              <Button className="!rounded-none !w-full !justify-start !capitalize !text-gray-500 hover:!bg-gray-100">
                                Sub Men 1
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none">
                            <Link to="/" className="link">
                              <Button className="!rounded-none !w-full !justify-start !capitalize !text-gray-500 hover:!bg-gray-100">
                                Sub Men 2
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="link">
                        <Button className="!rounded-none !w-full !justify-center !capitalize !text-gray-500 hover:!bg-gray-100">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="link">
                        <Button className="!rounded-none !w-full !justify-center !capitalize !text-gray-500 hover:!bg-gray-100">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="link">
                        <Button className="!rounded-none !w-full !justify-center !capitalize !text-gray-500 hover:!bg-gray-100">
                          Girls
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* REST — OLD STRUCTURE */}
              <li className="list-none">
                <Link to="/" className="link">
                  <Button className="!text-black hover:!text-[#ff5252] !capitalize hover:!bg-transparent">
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link">
                  <Button className="!text-black hover:!text-[#ff5252] !capitalize hover:!bg-transparent">
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link">
                  <Button className="!text-black hover:!text-[#ff5252] !capitalize hover:!bg-transparent">
                    Footwear
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link">
                  <Button className="!text-black hover:!text-[#ff5252] !capitalize hover:!bg-transparent">
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link">
                  <Button className="!text-black hover:!text-[#ff5252] !capitalize hover:!bg-transparent">
                    Beauty
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link">
                  <Button className="!text-black hover:!text-[#ff5252] !capitalize hover:!bg-transparent">
                    Wellness
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link">
                  <Button className="!text-black hover:!text-[#ff5252] !capitalize hover:!bg-transparent">
                    Jewelry
                  </Button>
                </Link>
              </li>

            </ul>
          </div>

          <div className="col_3 w-[25%] flex justify-end items-center">
            <Button className="!text-black gap-2">
              <IoRocketOutline className="text-[18px]" />
              <span className="text-[14px] font-medium">
                Free International Delivery
              </span>
            </Button>
          </div>
        </div>
      </nav>

      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
