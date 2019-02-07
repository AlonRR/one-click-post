import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { inject, observer } from 'mobx-react';
import Post from './Post';
import './../../css/postpage.css'
@inject(`MainPostPageStore`, `PostStore`)
@observer
class PopUp extends Component {
    openModal = () => {
        this.props.MainPostPageStore.newPostPopUp.visible = true;
    }
    closeModal = () => {
        this.props.MainPostPageStore.newPostPopUp.visible = false;
    }
    render() {
        const popUpSettings = this.props.MainPostPageStore.newPostPopUp.visible
        return (
            <div className="add-post-popup" >
                <div  onClick={() => this.openModal()}>Create New Post</div>
                <Modal  visible={popUpSettings} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <Post />
                </Modal>
            </div>
      )
    }
}

export default PopUp
