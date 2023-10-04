import Demo from './demo.mjs'
import Constants from './constants.mjs'

const init = () => {
    const elements = document.querySelectorAll(Constants.SELECTORS.container)

    elements.forEach((element) => {
        if (!element.demo) {
            element.demo = new Demo(element)
        }
    })
}

init()
