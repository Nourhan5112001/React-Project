import { Component } from "react";
import "./About.css";

export class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="mainclass d-f" >
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
            Exercitationem architecto quod, corporis mollitia fuga sed modi<br></br>
            quidem repudiandae rerum labore magni distinctio doloremque unde,<br></br>
            nesciunt, cupiditate repellat necessitatibus at. Unde?
          </p>
        </div>
      </>
    );
  }
}
