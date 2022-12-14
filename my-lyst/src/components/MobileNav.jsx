import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { HamButton, HamDiv, MobileNavDiv } from "./ResponsiveNav.styled";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MobileSecondaryNav from "./MobileSecondaryNav";
import SearchList from "./SearchList";
import { useDispatch } from "react-redux";
import { searchItem } from "../redux/action";

const MobileNav = () => {
  const [hamActive, setHamActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [SearchActive, setsearchActive] = useState(false);
  const [searchValue, setsearchValue] = useState("");

  const dispatch = useDispatch();

  const searchForItems = (e) => {
    let value = e.target.value;
    if (
      value === "jeans" ||
      value === "coats" ||
      value === "dresses" ||
      value === "jackets"
    ) {
      dispatch(searchItem(value));
      setsearchActive(true);
    } else {
      setsearchActive(false);
    }
  };
  return (
    <>
      <MobileNavDiv>
        <div className="flex ml-3">
          <HamButton
            onClick={() => {
              setHamActive(!hamActive);
              if (searchActive) {
                setSearchActive(!searchActive);
              }
            }}
          >
            <HamDiv
              style={
                hamActive
                  ? { transform: "rotate(-45deg) translate(-4px,4px)" }
                  : { transform: "rotate(0deg)" }
              }
            ></HamDiv>
            <HamDiv
              style={hamActive ? { opacity: "0" } : { opacity: "1" }}
            ></HamDiv>
            <HamDiv
              style={
                hamActive
                  ? { transform: "rotate(45deg) translate(-6px,-6px)" }
                  : { transform: "rotate(0deg)" }
              }
            ></HamDiv>
          </HamButton>
          <div>
            <SearchIcon
              onClick={() => {
                if (hamActive) {
                  setHamActive(!hamActive);
                }
                setSearchActive(!searchActive);
              }}
              style={{ fontSize: "1.8rem" }}
            />
          </div>
        </div>
        <Link to="/" style={{ width: "5.4rem" }}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1515.903 476.323"
          >
            <path d="M164.033 11.984H0v454.25h336.268V311.658H164.033V11.984zm403.756.002l-67.975 126.463-67.343-126.463H279.634l136.904 282.01v172.235h163.401V292.738L720.631 11.986H567.789zm496.761 203.78c-15.137-10.51-31.965-17.694-50.47-23.59a511.081 511.081 0 00-56.778-14.507q-41.641-7.577-64.356-13.567c-15.142-3.992-25.23-9.476-26.776-20.89-.615-4.519.026-15.222 6.364-21.377 8.417-8.178 19.364-10.753 32.399-11.122 21.447-.605 28.416 3.039 35.785 8.716 7.352 5.682 12.105 17.45 12.105 30.44v1.262h154v-1.894c-2.948-52.573-21.452-87.193-55.516-112.016Q1000.195.002 909.984 0 813.46 0 761.721 41.009q-51.738 41.015-51.733 111.037 0 35.96 12.617 60.25a108.707 108.707 0 0034.07 39.428 190.67 190.67 0 0049.213 23.977 476.516 476.516 0 0056.147 14.512q42.893 7.562 66.875 14.512c15.978 4.628 28.044 12.408 28.044 23.34 0 10.36-4.609 17.58-9.58 21.711-5.08 4.23-16.788 8.51-29.823 8.51-15.138 0-27.621-4.066-35.401-10.166-7.787-6.09-15.149-18.086-15.98-29.869l-.202-3.783h-162.29v1.263c1.263 35.332 8.302 61.228 21.133 85.832q19.24 36.906 63.412 55.84 22.707 9.455 52.99 14.193 30.29 4.728 68.77 4.728 103.46 0 153.309-41.318 49.828-41.32 49.839-115.77 0-37.226-13.25-62.461a115.457 115.457 0 00-35.331-41.01zm75.339-203.781V151.17h109.779v315.06h157.724V151.17h108.511V11.985h-376.014z"></path>
          </svg>
        </Link>
        <div style={{ minWidth: "100px", textAlign: "center" }}>
          <PersonOutlineOutlinedIcon style={{ fontSize: "2.2rem" }} />
        </div>

        <div
          className="absolute top-10 w-screen bg-white py-2 px-4 flex items-center"
          style={searchActive ? { display: "flex" } : { display: "none" }}
        >
          <div className="w-full flex  py-2 px-2 border border-blue-400">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="w-full border-0 px-2 outline-none"
              onChange={(e) => setsearchValue(e.target.value)}
              onInput={(e) => {
                searchForItems(e);
              }}
            />
          </div>
          <CloseIcon
            onClick={() => {
              setSearchActive(!searchActive);
              setsearchActive(false);
            }}
            style={{ fontSize: "2rem" }}
          />
          {SearchActive && (
            <SearchList value={searchValue} setsearchActive={setsearchActive} />
          )}
        </div>

        {hamActive && <MobileSecondaryNav setHamActive={setHamActive} />}
      </MobileNavDiv>
    </>
  );
};

export default MobileNav;
