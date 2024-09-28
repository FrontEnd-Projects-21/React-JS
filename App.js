// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, "This is a h1 tag")
//   )
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "This is a h1 tag"),
    React.createElement("h2", { id: "heading" }, "This is a h2 tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React JS"
// );
const rootRef = ReactDOM.createRoot(document.getElementById("root"));
rootRef.render(parent);
