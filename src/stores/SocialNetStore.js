import { action, observable, computed } from 'mobx';

class SocialNetStore {
    @observable networks = {
        facebook: false,
        twitter: false,
        instagram: false,
        linkedin: false
    }
    @action checkboxHandler = (name) => {
        this.networks[name] = !this.networks[name]
    }
    @computed get networksUsed() {
        let networkArray = []
        Object.keys(this.networks).map(network => {
            if (this.networks[network]) {
                networkArray.push(network)
            }
        })
        return networkArray
    }
}

export default new SocialNetStore()