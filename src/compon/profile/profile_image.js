import React from "react";
import PropTypes from "prop-types";
import "./profile_image.css";

export default class ProfileImage extends React.Component {
  static propTypes = {
    imageSrc: PropTypes.string,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-profile_image"
    ];
    console.log(this.props.imageSrc)
    return (
      <div className={className.join(" ").trim()} onClick={this.handleClick}>
          <img className="profile-image" src={this.props.imageSrc} />
      </div>
    );
  }
}