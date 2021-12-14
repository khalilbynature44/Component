import React from "react";
import ProfilePhoto from "./component/Profile/ProfilePhoto";
import FullNames  from "./component/Profile/FullName";
import Address from "./component/Profile/Address";
import "./Style.css"

const App = () => (
 <>
   <ProfilePhoto />
   <Address />
   <FullNames />
 </>
);
export default App;