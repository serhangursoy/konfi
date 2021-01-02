import React from 'react'

/**
 * Summary. Super simple button component
 *
 * Description. Simple button component to remove ugly looking default ones. Check hacky App.css for css details
 *  
 */
export default class Button extends React.Component {
    determineStyle() {
        let styleClass = "btn"
        if (this.props.secondary) {
            styleClass += " bg-indigo"
        }
        if (this.props.size) {
            if (this.props.size === "big") {
                styleClass += " btn-lg"
            } else if (this.props.size === "medium") {
                styleClass += " btn-md"
            } else if (this.props.size === "small") {
                styleClass += " btn-sm"
            }
        }
        return styleClass
    }

    render() {
        let componentStyle = this.determineStyle();
        return <div className={componentStyle} onClick={this.props.onClick}>{this.props.text}</div>
    }
}