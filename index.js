import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'

const popupStyle = {
  position: 'absolute',
  top: 20,
  background: 'rgb(159, 214, 214)',
  padding: 10,
  borderRadius: 5,
  fontSize: 20,
}

const popupContainerStyle = {
  position: 'relative',
}

const shownTextStyle = {
  fontSize: 30,
}
class PopupText extends Component {
  constructor() {
    super()
    this.state = {popupIndex: null}
  }

  render() {
    return (
      <div className="text-center">
        {this.props.textPairs.map(({shownText, popupText}, i) =>
          <span key={i} style={popupContainerStyle}>
            {this.state.popupIndex === i ?
              <span style={popupStyle}>{popupText}</span> : null}
            <span
              style={{
                ...shownTextStyle,
                ...(this.state.popupIndex === i ? {background: 'cyan'} : {})
              }}
              onMouseOver={() => popupText && this.setState({popupIndex: i})}
              onMouseOut={() => this.state.popupIndex === i && this.setState({popupIndex: null})}>
              {shownText}
            </span>
          </span>
        )}
      </div>
    )
  }
}
PopupText.propTypes = {
  textPairs: PropTypes.arrayOf(PropTypes.shape({
    shownText: PropTypes.string.isRequired,
    popupText: PropTypes.string, // Maybe String
  })).isRequired,
}

const textPairs = [
  {shownText: '你好', popupText: '[ni3hao3]: Hello'},
  {shownText: '，'},
  {shownText: '我', popupText: '[wo3]: I, me'},
  {shownText: '不错', popupText: '[bu4cuo4]: Not bad'},
]

render(<PopupText textPairs={textPairs} />, document.querySelector('#root'))
