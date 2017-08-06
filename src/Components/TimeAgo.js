import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import moment from 'moment'

export default class TimeAgo extends Component {
  static propTypes = {
    time: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.instanceOf(Date),
    ]).isRequired,
    interval: PropTypes.number,
    hideAgo: PropTypes.bool,
  }

  static defaultProps = {
    hideAgo: false,
    interval: 60000,
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, this.props.interval)
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer = () => {
    this.forceUpdate()
  }

  render() {
    const timestamp =
      this.props.time instanceof Date
        ? this.props.time
        : new Date(this.props.time)
    return (
      <Text {...this.props}>
        {moment(timestamp).fromNow(this.props.hideAgo)}
      </Text>
    )
  }
}
