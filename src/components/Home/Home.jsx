import React from "react";
import { Product } from "../Product/Product";

import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils";
import { useEffect } from "react";

export default function Home() {

  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      return navigate("/signin");
    }
  }, []);

  return (
    <>
      <Product />
    </>
  );
}
