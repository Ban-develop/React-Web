import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("api/test").then((response) => console.log(response));
  }, []);

  return <div>LangingPage</div>;
}

export default LandingPage;
