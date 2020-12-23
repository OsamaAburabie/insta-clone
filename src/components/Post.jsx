import React from "react";
import "../style.css";
import "../button.css";
import {
  FaRegBookmark,
  FaRegPaperPlane,
  FaRegComment,
  FaRegHeart,
  FaEllipsisH,
  FaHeart,
} from "react-icons/fa";
class Post extends React.Component {
  constructor(props) {
    super();
    this.state = {
      numOflikes: 0,
      isRed: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.isRed === true) {
      this.setState((prevState) => {
        return {
          numOflikes: prevState.numOflikes - 1,
          isRed: false,
        };
      });
    } else
      this.setState((prevState) => {
        return {
          numOflikes: prevState.numOflikes + 1,
          isRed: true,
        };
      });
  }
  render() {
    return (
      <div>
        <div className="post__container">
          <div className="post__info">
            <div className="info">
              <img src={this.props.img} alt="" />
              <p>{this.props.name}</p>
            </div>
            <button>
              <i>
                <FaEllipsisH />
              </i>
            </button>
          </div>
          <div className="post__picture">
            <img src={this.props.imgp} alt="" />
          </div>
          <div className="interact__btns">
            <div className="L__btns">
              <button onClick={this.handleClick}>
                <i style={{ display: this.state.isRed ? "none" : "" }}>
                  <FaRegHeart />
                </i>
                <i
                  style={{
                    display: this.state.isRed ? "" : "none",
                    color: "red",
                  }}
                >
                  <FaHeart />
                </i>
              </button>
              <button>
                <i>
                  <FaRegComment />
                </i>
              </button>
              <button>
                <i>
                  <FaRegPaperPlane />
                </i>
              </button>
            </div>
            <button>
              <i>
                <FaRegBookmark />
              </i>
            </button>
          </div>
          <div className="post__comments">
            <p className="likes__number">{this.state.numOflikes} likes</p>
            <p className="comment">
              <span>{this.props.name}:</span>&nbsp;{this.props.punchline}
            </p>
            <button className="button__style">View all 30 comments</button>
            <p className="comment">
              <span>{this.props.cname}:</span>&nbsp;{this.props.cpline}
              <i>
                <FaRegHeart />
              </i>
            </p>
            <span className="span__style">3 HOURS AGO</span>
          </div>
          <div className="add__comment">
            <input
              type="search"
              autoComplete="off"
              placeholder="Add a comment...."
            />
            <button>Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
