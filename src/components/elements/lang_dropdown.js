import React, { Component } from "react";
import Downshift from "downshift";

export default class DownshiftThree extends Component {
  constructor(props) {
    super(props);
    this.books = [
      { name: "EN", image: "/img/en.png" },
      { name: "DK", image: "/img/dk.jpg" }
    ];

    this.state = {
      // currently selected dropdown item
      selectedBookName: "",
      selectedBookImage: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(selectedBook) {
    this.setState({
      selectedBookName: selectedBook.name,
      selectedBookImage: selectedBook.image
    });
  }

  render() {
    return (
      <Downshift
        onChange={this.onChange}
        selectedItem={this.state.selectedBook}
        itemToString={books => (books ? books.name : "")}
        className="lang_dropdown"
      >
        {({
          isOpen,
          getToggleButtonProps,
          getItemProps,
          highlightedIndex,
          selectedItem: dsSelectedItem,
          getLabelProps
        }) => (
          <div>
            <button className="dropdown-button" {...getToggleButtonProps()}>
              {this.state.selectedBookName !== "" ? (
                <div className="selected_items">
                  <img src={this.state.selectedBookImage} />
                  <span>{this.state.selectedBookName}</span>
                </div>
              ) : (
                <div className="selected_items">
                  <img src="/img/dk.jpg" />
                  <span>DK</span>
                </div>
              )}
            </button>
            <div style={{ position: "relative" }}>
              {isOpen ? (
                <div className="downshift-dropdown">
                  {// map through all the books and render them
                  this.books.map((item, index, i) => (
                    <div
                      key={i}
                      className="dropdown-item"
                      {...getItemProps({ key: index, index, item })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: dsSelectedItem === item ? "bold" : "normal"
                      }}
                      id={item.name}
                    >
                      <img src={item.image} />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <style jsx>{`
              .dropdown-button {
                background: transparent;
                border: none;
                width: 60px;
                line-height: 0;
                margin-bottom: 20px;
                outline: none;
                transition: all 0.3s ease;
                margin-top: 13px;
                text-align: left;
              }
              .selected_items span {
                color: #fff;
                font-family: Montserrat;
                float: left;
                margin-top: 10px;
              }
              .selected_items img {
                margin-bottom: 0;
                margin-right: 5px;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                margin-top: 3px;
                float: left;
              }

              .dropdown-item {
                background-color: transparent !important;
                width: 60px !important;
                margin-bottom: 0px;
              }

              .dropdown-item span {
                color: #fff;
                font-family: Montserrat;
              }
              .dropdown-item img {
                margin-bottom: 0;
                margin-right: 5px;
                width: 13px;
                height: 13px;
                border-radius: 50%;
              }

              @media (max-width: 1080px) {
                .selected_items {
                  transition: all 0.3s ease-out;
                }
                .selected_items span {
                  color: #333f52;
                }
                .selected_items:hover img {
                  -webkit-box-shadow: 1px 1px 6px -1px rgba(0, 0, 0, 0.5);
                  -moz-box-shadow: 1px 1px 6px -1px rgba(0, 0, 0, 0.5);
                  box-shadow: 1px 1px 6px -1px rgba(0, 0, 0, 0.5);
                }
                .dropdown-item span {
                  color: #333f52;
                }
                .dropdown-item:hover {
                  cursor: pointer;
                }
              }
            `}</style>
          </div>
        )}
      </Downshift>
    );
  }
}
