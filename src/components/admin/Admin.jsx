import React from "react";

import Sidebar from "./sidebar/Sidebar";
import Burger from "./burger/Burger";
import PhotoForm from "./photo-form/PhotoForm";

class Admin extends React.Component {
  componentDidMount() {
    const { $ } = window;
    const inputs = document.querySelectorAll(".input-file");

    Array.prototype.forEach.call(inputs, function(input) {
      const label = input.nextElementSibling;
      const labelVal = label.innerHTML;

      input.addEventListener("change", function(e) {
        var fileName = "";
        if (this.files && this.files.length > 1)
          fileName = (this.getAttribute("data-multiple-caption") || "").replace(
            "{count}",
            this.files.length
          );
        else fileName = e.target.value.split("\\").pop();

        if (fileName) label.querySelector("span").innerHTML = fileName;
        else label.innerHTML = labelVal;
      });
    });

    const burger = $(".burger-js");
    const catalog = $(".catalog-js");
    const close = $(".close-js");

    burger.on("click", () => {
      catalog.addClass("catalog--show");
    });
    close.on("click", () => {
      catalog.removeClass("catalog--show");
    });
  }

  render() {
    return (
      <div>
        <Burger />
        <Sidebar />
        <PhotoForm />
      </div>
    );
  }
}

export default Admin;
