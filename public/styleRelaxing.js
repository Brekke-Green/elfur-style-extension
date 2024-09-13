if (document.getElementById("energizingElement")) {
    document.getElementById("energizingElement").remove()
}
if (document.getElementById("relaxingElement")) {
    document.getElementById("relaxingElement").remove()
} else {
    const footerElement = document.getElementsByClassName("global-footer-compact")[0]

    const relaxingElement = document.createElement("STYLE");
    relaxingElement.setAttribute("id", "relaxingElement")
    let relaxingStyle = document.createTextNode(`
        body {background-color: #FFFFFF  !important;}
        .scaffold-layout__list {margin-right: 50px;}
        .scaffold-layout__list * {background-color: #F2FFFF; color: #413124 !important;}
        .scaffold-layout__main {background-color: #FFFFFF; grid-column-end: aside;}
        .scaffold-layout__list-container {background-color: #f2ffff;}
        .scaffold-layout__detail {background-color: #f2ffff;}
        .scaffold-layout__aside {display: none;}
        section.scaffold-layout-toolbar {display: none;}
        .jobs-search-results-list__header--blue * {color: #413124 !important;}
        .artdeco-button--primary {background-color: #413124;}
        .artdeco-button--secondary {color: #413124; box-shadow: inset 0 0 0 1px #413124}
        .artdeco-button--secondary * {color: #413124;}
        a.artdeco-button--secondary {color: #413124; box-shadow: inset 0 0 0 1px #413124}
        a.artdeco-button--secondary * {color: #413124;}
        .scaffold-finite-scroll__content * {background-color: #F2FFFF;}
        .artdeco-card {background-color: #F2FFFF !important;}
        .coach-mark-list__container {display: none;}
    `);
    relaxingElement.appendChild(relaxingStyle);
    document.head.appendChild(relaxingElement);
}
