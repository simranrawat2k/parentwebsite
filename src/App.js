import React, { useState } from "react";

const ParentApp = () => {
  const [userName, setUserName] = useState("Simran");
  const [userId, setUserId] = useState("123456789");

  const childWebsiteURL = "https://childwebsite.vercel.app/"; // Replace with actual URL

  // Generate token and set initial iframeSrc
  const token = `${userName}@${userId}`;
  const [iframeSrc, setIframeSrc] = useState(`${childWebsiteURL}?token=${encodeURIComponent(token)}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToken = `${userName}@${userId}`;
    setIframeSrc(`${childWebsiteURL}?token=${encodeURIComponent(newToken)}`);
  };

  return (
    <div>
      <h1>Parent Website</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <br />
        <label>
          User ID:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Show the iframe immediately on first load */}
      <iframe
        src={iframeSrc}
        style={{ width: "100%", height: "50vh", border: "1px solid black" }}
        title="Child Website"
      />
    </div>
  );
};

export default ParentApp;
