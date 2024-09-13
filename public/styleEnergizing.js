if (document.getElementById("relaxingElement")) {
    document.getElementById("relaxingElement").remove()
}
if (document.getElementById("energizingElement")) {
    document.getElementById("energizingElement").remove()
} else {
    const footerElement = document.getElementsByClassName("global-footer-compact")[0]
    
    const energizingElement = document.createElement("STYLE");
    energizingElement.setAttribute("id", "energizingElement")
    // let energizingStyle = document.createTextNode(`
    //     body {background-color: #FF6F61 !important;}
    //     .scaffold-layout__list {margin-right: 50px;}
    //     .scaffold-layout__main {background-color: #FF6F61 ; grid-column-end: aside;}
    //     .scaffold-layout__list-container {background-color: #f2ffff;}
    //     .scaffold-layout__detail {background-color: #f2ffff;}
    //     .jobs-search-results-list__header--blue {background-color: #d3e6ff !important;}
    //     .scaffold-layout__aside {display: none;}
    // `);

    let energizingStyle = document.createTextNode(
        `body {background-color: #FF6F61  !important;}
        .scaffold-layout__list {margin-right: 50px;}
        .scaffold-layout__list * {background-color: #FFF3E0; color: black !important}
        .scaffold-layout__main {background-color: #FF6F61; grid-column-end: aside;}
        .scaffold-layout__list-container {background-color: #FFF2E0;}
        .scaffold-layout__detail {background-color: #FFF2E0;}
        .scaffold-layout__aside {display: none;}
        section.scaffold-layout-toolbar {display: none;}
        .jobs-search-results-list__header--blue * {color: black !important;}
        .artdeco-button--primary {background-color: #FF6F61;}
        .artdeco-button--secondary {color: #FF6F61; box-shadow: inset 0 0 0 1px #FF6F61; background-color: #FFFFFF;}
        .artdeco-button--secondary * {color: #FF6F61; background-color: #FFFFFF;}
        a.artdeco-button--secondary {color: #FF6F61; box-shadow: inset 0 0 0 1px #FF6F61; background-color: #FFFFFF;}
        a.artdeco-button--secondary * {color: #FF6F61; background-color: #FFFFFF;}
        .scaffold-finite-scroll__content * {background-color: #FFF3E0;}
        input {background-color: #FFF3E0 !important;}
        input * {background-color: #FFF3E0 !important;}
        .artdeco-card {background-color: #FFF3E0 !important;}
        .coach-mark-list__container {display: none;}
    `);

    energizingElement.appendChild(energizingStyle);
    document.head.appendChild(energizingElement);
}
