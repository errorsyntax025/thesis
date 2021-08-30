import React from "react";
import Link from "./Link";

const MenuBasic = () => {
  return (
    <div className="ui fluid three item menu">
      <Link href="/extra" className="item">
        Πρόσθετες Πληροφορίες
      </Link>
      <Link href="/" className="item">
        Κεντρική
      </Link>
      <Link href="/qna" className="item">
        Πληροφορίες
      </Link>
    </div>
  );
};

export default MenuBasic;
