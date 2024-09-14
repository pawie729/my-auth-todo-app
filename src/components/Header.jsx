import React from "react";

const Header =() => {
    return(
        <header className=" container mx-auto p-4 bg-gray-900 ">
            <nav className=" flex justify-between text-cyan-500 text-xs uppercase font-semibold">
              <ul className=" space-x-6">
                <li className=" inline"><a href="/home">Home</a></li>
                <li className=" inline"><a href="/add-todo">Add Todo</a></li>
              </ul>

              <ul>
                <li className=" inline underline"><a href="/login">Logout</a></li>
              </ul>
            </nav>
          </header>
    )
}

export default Header;