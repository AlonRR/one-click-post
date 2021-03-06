import React, { Component } from 'react';
import PostList from './PostList';
import PopUp from './popup/PopUp';
import Comments from './postsComments/Comments'
import '../css/postpage.css';
import CurrentPost from './CurrentPost'
import SocialNetInfo from './socialNetsContainer/SocialNetInfo'
import CurrentPostText from './CurrentPostText'
import { inject, observer } from 'mobx-react'
import './../css/postpage.css'

@inject(`MainPostPageStore`, `PostStore`)
@observer
class MainPostPage extends Component {
    render() {
        return (
            <div className="PostPage-container">
            <div> <PostList /> </div>
            <div className="main-social"> 
            <div><CurrentPost /></div>
           <SocialNetInfo /> 
             </div> 
           </div>
        )
    }
}

export default MainPostPage;