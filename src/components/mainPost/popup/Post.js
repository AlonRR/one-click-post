import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TextInput from './TextInput'
import CheckInputs from './CheckInputs'
import Poster from './Poster';

@observer
class Post extends Component {
  render() {
    return (
      <div class="popup-content">
       <TextInput />
       <CheckInputs />
       <Poster />
     </div>
    )


  }
}

export default Post;