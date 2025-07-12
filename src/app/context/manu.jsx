'use client';
import React, { createContext, useState } from 'react';
export let contextManu = createContext();
export default function ManuProvider(props) {
  //open manu
  const [isOpenManu, setIsOpenManu] = useState(false);
  return (
    <>
      <contextManu.Provider value={{ isOpenManu, setIsOpenManu }}>
        {props.children}
      </contextManu.Provider>
    </>
  );
}
