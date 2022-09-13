import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators }  from './store'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button, 
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'

class Header extends Component {

    getListArea(show) {
        if(show) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>文化</SearchInfoItem>
                        <SearchInfoItem>星座</SearchInfoItem>
                        <SearchInfoItem>财经</SearchInfoItem>
                        <SearchInfoItem>娱乐</SearchInfoItem>
                        <SearchInfoItem>军事</SearchInfoItem>
                        <SearchInfoItem>科技</SearchInfoItem>
                        <SearchInfoItem>体育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</span>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>
                        <span className="iconfont">&#xe600;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)