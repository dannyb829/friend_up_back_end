import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);
}

function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.callback);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideAlerter;
