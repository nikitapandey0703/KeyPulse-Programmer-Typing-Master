import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button';

const TypingTest = () => {
  return (
    <div className=" w-full h-[500px] flex items-center justify-center font-extrabold leading-1 text-2xl">
      <div className="flex justify-evenly w-1/2">
        <NavLink to="/with-timer">
          <Button
            name="Programmer"
            className="w-70 h-24 rounded-2xl flex justify-center content-center hover:scale-105 duration-300 items-center"
          />
        </NavLink>
        <NavLink to="/without-timer">
          <Button
            name="Beginner"
            className="w-70 h-24 rounded-2xl hover:scale-105 duration-300 flex justify-center content-center items-center"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default TypingTest