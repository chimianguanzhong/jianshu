import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommand from './components/Recommand'
import Writer from './components/Writer'
import axios from 'axios'
import { connect } from 'react-redux'
import { 
    HomeWapper,
    HomeLeft,
    HomeRight,
} from './style'

class Home extends Component {
    render() {
        return (
            <HomeWapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner"></img>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommand />
                    <Writer />
                </HomeRight>
            </HomeWapper>
        )
    }

    componentDidMount() {
       this.props.changeHomeData()
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            dispatch(action)
        })
    }
})

export default connect(null, mapDispatch)(Home)