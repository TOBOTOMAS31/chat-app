import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        avatar = "https://randomuser.me/api/portraits/men/95.jpg"
        name = "Paul"
        online
      />
      <Contact
        avatar = "https://randomuser.me/api/portraits/women/68.jpg"
        name = "Julie"
      />
      <Contact
        avatar = "https://randomuser.me/api/portraits/men/43.jpg"
        name = "Marc"
        online
      />

    </div>
  );
}

export default App;
