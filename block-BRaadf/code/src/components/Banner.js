import React, { useContext } from "react";

class Banner extends React.Component {
  static contextType = useContext;
  render() {
    // let { isDarkMode } = this.props;
    return (
      <div
        className={
          this.context.isDarkMode
            ? "message-dark message--banner message--success"
            : "message message--banner message--success"
        }
      >
        <h3 className="message-heading">This is a success banner!</h3>
        <p>It celebrates that you have successfully completed a major task.</p>
      </div>
    );
  }
}

export default Banner;
