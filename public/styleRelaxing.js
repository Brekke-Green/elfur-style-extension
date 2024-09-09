if (document.getElementById("energizingElement")) {
    document.getElementById("energizingElement").remove()
}
if (document.getElementById("relaxingElement")) {
    document.getElementById("relaxingElement").remove()
} else {
    const footerElement = document.getElementsByClassName("global-footer-compact")[0]
    if (footerElement) {
        document.getElementsByClassName("scaffold-layout__sidebar")[0].appendChild(footerElement)
    }
    const relaxingElement = document.createElement("STYLE");
    relaxingElement.setAttribute("id", "relaxingElement")
    let relaxingStyle = document.createTextNode(`
        body {background-color: white !important;}
        .scaffold-layout__list {margin-right: 50px;}
        .scaffold-layout__main {background-color: white; grid-column-end: aside;}
        .scaffold-layout__list-container {background-color: #f2ffff;}
        .scaffold-layout__detail {background-color: #f2ffff;}
        .jobs-search-results-list__header--blue {background-color: #d3e6ff !important;}
        .scaffold-layout__aside {display: none;}
    `);
    relaxingElement.appendChild(relaxingStyle);
    document.head.appendChild(relaxingElement);
}
