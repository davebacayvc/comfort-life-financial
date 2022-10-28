import classNames from "classnames";
import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import "../../styles/base.scss";

interface IPageWrapper {
  showNavbar?: boolean;
  showFooter?: boolean;
  component: JSX.Element;
}
const PageWrapper: React.FC<IPageWrapper> = (props) => {
  const wrapperClassname = classNames({
    "has-margin-top": false,
  });

  if (props.showNavbar && props.showFooter && props.component) {
    return (
      <div className={wrapperClassname}>
        <Navbar />
        {props.component}
        <Footer />
      </div>
    );
  } else if (props.showFooter && props.component) {
    return (
      <div className={wrapperClassname}>
        {props.component}
        <Footer />
      </div>
    );
  } else if (props.showNavbar && props.component) {
    return (
      <div className={wrapperClassname}>
        <Navbar />
        {props.component}
      </div>
    );
  }

  return props.component;
};

PageWrapper.defaultProps = {
  showNavbar: true,
  showFooter: true,
};
export default PageWrapper;
