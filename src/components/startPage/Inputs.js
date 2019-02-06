import React,{ Component } from 'react'
import { inject, observer } from 'mobx-react'
import StartPageButton from './StartPageButton';


@inject(`StartPageStore`, `ProfileStore`)
@observer
class Inputs extends Component{
    createInputsArea = () => {
        const StartPageData = this.props.StartPageStore.StartPageData
        return Object.keys(StartPageData).map((inputProperty, index) => {
            return (
                <div className="login-div" key={index}>
                    <label>{inputProperty}:</label>
                    <input type={StartPageData[inputProperty].type}
                    name={inputProperty}
                    placeholder={StartPageData[inputProperty].placeholder}
                    onChange={this.handleChange}
                    >
                    </input>
                </div>
            )
        })
    }
    handleChange = (e) => {
        this.props.StartPageStore.changeStartPageData(e.target.name, e.target.value)
    }

    check = () => {
        let obj = { name: 'moshiko', job: 'fic'}
        Object.keys(obj)
    }

    render () {
        const idea = 'check'
        return (
        <div className="start-page-inputs">{this.createInputsArea()} <div class="myButton" ><StartPageButton /></div></div>
        )
        
    }
}


export default Inputs