import React, { Component } from 'react'

export default class Index extends Component {

    render() {
        return (
            <div className="absolute-middle txt-center" style={{ height: '300px' }}>
                <img alt="DTStack" src="img/logo@2x.png" />
                <h1>React Starter Kit.</h1>
                <h2>
                    <a target="_blank" rel="noopener noreferrer" href="http://git.dtstack.cn/ziv/dt-react-starter/blob/master/README.md">
                        脚手架说明文档
                    </a>
                </h2>
            </div>
        )
    }
}

