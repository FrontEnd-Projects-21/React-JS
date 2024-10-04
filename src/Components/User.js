import { useState } from "react";
const User = () => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Count2:{count2}</h1>
      <h1>Name:Chinna</h1>
      <h2>Location:Hyderabad</h2>
    </div>
  );
};

export default User;
