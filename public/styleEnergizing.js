if (document.getElementById("relaxingElement")) {
    document.getElementById("relaxingElement").remove()
}
if (document.getElementById("energizingElement")) {
    document.getElementById("energizingElement").remove()
} else {
    const footerElement = document.getElementsByClassName("global-footer-compact")[0]
    // if (footerElement) {
    //     if (document.getElementsByClassName("global-footer-compact")) {
    //         document.getElementsByClassName("scaffold-layout__sidebar")[0].appendChild(footerElement)
    //     }
    // }
    const energizingElement = document.createElement("STYLE");
    energizingElement.setAttribute("id", "energizingElement")
    let energizingStyle = document.createTextNode(`
        body {background-color: #FF6F61 !important;}
        .scaffold-layout__list {margin-right: 50px;}
        .scaffold-layout__main {background-color: #FF6F61 ; grid-column-end: aside;}
        .scaffold-layout__list-container {background-color: #f2ffff;}
        .scaffold-layout__detail {background-color: #f2ffff;}
        .jobs-search-results-list__header--blue {background-color: #d3e6ff !important;}
        .scaffold-layout__aside {display: none;}
    `);
    energizingElement.appendChild(energizingStyle);
    document.head.appendChild(energizingElement);
}
