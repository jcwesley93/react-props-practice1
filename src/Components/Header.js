import React from "react";

class Header extends React.Component {
  render(props) {
    return <h1>{this.props.header}</h1>;
  }
}

// function Header (props) {
//   return <h1>{props.header}</h1>;
// }

export default Header;
