import React from "react";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useToken } from "@/utils/states/contexts/token-context";
import { toast } from "react-toastify";

function Navbar() {
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    toast.success("Successfully logout");
  }

  return (
    <>
      <div className="navbar bg-[#FFCF96]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <FaBookReader /> PIKU
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/books">Buku</Link>
            </li>
            <li>
              <Link to="/rent-books">Daftar Pinjam</Link>
            </li>
            <li>
              <Link to="/openai">Open AI</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {token === "" ? (
            <>
              <Link to="login" className="btn btn-outline rounded-full">
                Sign in
              </Link>
              <Link to="register" className="btn btn-ghost rounded-full ml-3">
                Sign up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => handleLogout()}
                className="btn btn-ghost rounded-full ml-3"
                label="Log out">
                Log out
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function NavbarIn() {
  return (
    <>
      <div className="navbar bg-[#FFCF96]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <FaBookReader /> PIKU
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/books">Buku</Link>
            </li>
            <li>
              <Link to="/rent-books">Daftar Pinjam</Link>
            </li>
            <li>
              <a>Open AI</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <h3>Halo, username!</h3>
          <Link
            to="/login"
            className="btn btn-ghost rounded-full ml-3"
            label="Log out">
            Log out
          </Link>
        </div>
      </div>
    </>
  );
}

export { Navbar, NavbarIn };
