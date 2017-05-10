/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import React, { PureComponent, PropTypes, } from 'react'
import classNames from 'classnames'
import './Todo.pcss'

class Todo extends PureComponent {

    static defaultProps = {
        complete: false,
        id: 0,
        title: '',
    }

    static propTypes = {
        complete: PropTypes.bool,
        id: PropTypes.number,
        title: PropTypes.string,
    }

    constructor(props) {
        super(props)
        const {
            complete,
            id,
            title,
        } = props

        this.state = {
            complete,
            id,
            title,
        }
    }

    render() {
        const { complete, id, title, } = this.state
        const statusClassName = classNames('status', complete ? 'complete' : '')

        return (
            <div className="todo">
                <span className="label">标题：{title}</span>
                <span className="id">id: {id}</span>
                <span className={statusClassName}>{complete ? '已完成' : '未完成'}</span>
            </div>
        )
    }
}

export default Todo
