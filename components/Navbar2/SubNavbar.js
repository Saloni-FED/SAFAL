import React from 'react';

const SubNavbar = ({ selectedMainNav, onSelectSubNav, selectedSubNav }) => {
  console.log(selectedSubNav, "For class active")
  const subNavItems = {
    'life-goal': ['Retirement', 'Education', 'Child'],
    'financial': ["Growth", "Need", "Delay Cost"],
    'quick-tools': ['Single Amount', 'Irregular Cash Flow', 'Weighted Avg. Returns'],
  };

  return (
    <div className="sub-navbar">
      {subNavItems[selectedMainNav]?.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelectSubNav(item)}
          className={item === selectedSubNav ? "red" : ""}
        >
          {item}{}
        </button>
      ))}
    </div>
  );
};

export default SubNavbar;
