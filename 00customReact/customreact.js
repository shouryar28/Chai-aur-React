// Getting root from html

const mainContainer = document.querySelector("#root")

// Creating a element

const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank'
    },
    Children : "Click me to visit google"
}

// Rendering into the HTML 

function customRender(reactElement , container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target) 

    container.appendChild(domElement)
}

// Calling function

customRender(reactElement , mainContainer)