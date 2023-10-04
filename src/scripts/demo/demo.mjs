import Constants from './constants.mjs'

/**
 * @class Demo
 * @description Demo script
 */
export default class Demo {
    /**
     * @constructor
     */
    constructor(container) {
        this.container = container
        this.init()
    }

    /**
     * @method init
     * @summary Initializes the script logic
     */
    init() {
        this.setElements()
        this._bindMethods()
        this._bindEvents()
    }

    /**
     * @method setElements
     * @summary Set some necessary elements to variables
     */
    setElements() {
        this.text = this.container.querySelector(Constants.SELECTORS.text)
        this.btn = this.container.querySelector(Constants.SELECTORS.btn)
    }

    /**
     * @method _bindMethods
     * @summary Binds methods to the instance
     */
    _bindMethods() {
        this.onBtnClick = this.onBtnClick.bind(this)
    }

    /**
     * @method _bindEvents
     * @summary Initializes event listeners
     */
    _bindEvents() {
        this.btn.addEventListener('click', this.onBtnClick)
    }

    /**
     * @method onBtnClick
     * @summary Handles the button click event logic
     */
    onBtnClick() {
        this.text.textContent = 'Added text!'
    }
}
