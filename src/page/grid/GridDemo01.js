/**
 * BootStrap风格布局demo01
 */
import React, { Component } from 'react';

export default class GridDemo01 extends Component {
    /**
     * BootStrap风格系统工作原理：
     *  网格系统通过一系列包含内容的行和列来创建页面布局
     *  1.行必须放置在 .container 的 class 内，可以获得适当的对应和内边距
     *  2.用行 .row 来创建 列的水平组(col-md-n)
     *  3.内容应该放置在列内，且唯有列可以是行的直接子元素
     *  4.行和列的创建可以使用预定义的网格类，比如 .row 和 col-md-4 来创建网格布局。
     *  5.通过内边距来创建列和内容之间的间隙。内边距通过 .rows 上的外边距取负，表示第一列和最后一列的行偏移量.
     *  6.网格系统是通过指定想要横跨的12个可用的列来创建的。
     *      示例：使用 WebStormr 的 Emmet Everywhere 插件表达式来快捷创建html代码
     *      6.1 div.container>div.row>div.col-md-6*2 (创建一个基本网格布局，1列2列，各占50%宽度)
     */
    render() {
        return (
            /**
              * 1. 关于容器的宽度:占 100%
              * 2. .col-md  970px
              * 3. .col-xs- None (auto)
              * 4. .col-sm- 750px
              * 5. .col-lg- 1170px
             */
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{background:'#eee'}}>col-md-6</div>
                    <div className="col-md-6" style={{background:'#e6ecb3'}}>col-md-6</div>
                </div>
            </div>
        )
    }
}