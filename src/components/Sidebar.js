import React from 'react';
import '../styles/Sidebar.css'; // Import the corresponding CSS file

function Sidebar() {
    return (
      <aside className="sidebar">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">Item 1</a>
          <a href="#" className="list-group-item list-group-item-action">Item 2</a>
          {/* Add more sidebar items */}
        </div>
      </aside>
    );
  }
  
  export default Sidebar;
 