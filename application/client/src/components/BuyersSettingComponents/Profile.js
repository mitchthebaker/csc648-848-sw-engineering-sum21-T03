import React, {useState, Component} from 'react';


    
class Profile extends Component {

    constructor(props) {
        super(props) 
        this.state = {ratePick: null}

        this.handleClick_one = this.handleClick_one.bind(this)
        this.handleClick_two = this.handleClick_two.bind(this)
        this.handleClick_three = this.handleClick_three.bind(this)
        this.handleClick_four = this.handleClick_four.bind(this)
        this.handleClick_five = this.handleClick_five.bind(this)
        this.handleClick_six = this.handleClick_six.bind(this)
        this.handleClick_seven = this.handleClick_seven.bind(this)
        this.handleClick_eight = this.handleClick_eight.bind(this)
        this.handleClick_nine = this.handleClick_nine.bind(this)
        this.handleClick_ten = this.handleClick_ten.bind(this)
    }


    handleClick_one() {
        this.setState({ ratePick: '1'}); 
    }

    handleClick_two() {
        this.setState({ ratePick: '2'}); 
    }

    handleClick_three() {
        this.setState({ ratePick: '3'}); 
    }

    handleClick_four() {
        this.setState({ ratePick: '4'}); 
    }

    handleClick_five() {
        this.setState({ ratePick: '5'}); 
    }

    handleClick_six() {
        this.setState({ ratePick: '6'}); 
    }

    handleClick_seven() {
        this.setState({ ratePick: '7'}); 
    }

    handleClick_eight() {
        this.setState({ ratePick: '8'}); 
    }

    handleClick_nine() {
        this.setState({ ratePick: '9'}); 
    }

    handleClick_ten() {
        this.setState({ ratePick: '10'}); 
    }




    render() {
    return (
        <div className="buyerProfileSettings-wrapper">
            <h3>Profile</h3>
            <div className="buyerProfileSettings-firstContainer">
                <div className="containerProfileAvatarSettings">
                    <img className="ProfileAvatarSettings" src="https://i.redd.it/jgvvyif33u541.jpg"/>
                    <div className="ProfileAvatarSettingsMiddle">
                        <a href="url">Link</a>
                    </div>
                </div>
                <input placeholder="Bio Description" className="buyerInput-Settings" type="text"/>
                <input placeholder="Review" className="buyerInput-Settings" type="text"/>
                <input placeholder="Social Media" className="buyerInput-Settings" type="text"/>
            </div>

            <div class="buyerProfileSettings-secondContainer">
                <div class="buyerProfileSettings-row">
                    <div class="buyerProfileSettings-col-xs-12">
                        <p>One a scale of 1-10 of liking this app?</p>
                        <p>Scale: {this.state.ratePick}</p>
                        <div class="buyerProfileSettings-chart-scale">
                            <button class="btn btn-scale btn-scale-asc-1" id="rate1" onClick={this.handleClick_one}>1</button>
                            <button class="btn btn-scale btn-scale-asc-2" id="rate2" onClick={this.handleClick_two}>2</button>
                            <button class="btn btn-scale btn-scale-asc-3" id="rate3" onClick={this.handleClick_three}>3</button>
                            <button class="btn btn-scale btn-scale-asc-4" id="rate4" onClick={this.handleClick_four}>4</button>
                            <button class="btn btn-scale btn-scale-asc-5" id="rate5" onClick={this.handleClick_five}>5</button>
                            <button class="btn btn-scale btn-scale-asc-6" id="rate6" onClick={this.handleClick_six}>6</button>
                            <button class="btn btn-scale btn-scale-asc-7" id="rate7" onClick={this.handleClick_seven}>7</button>
                            <button class="btn btn-scale btn-scale-asc-8" id="rate8" onClick={this.handleClick_eight}>8</button>
                            <button class="btn btn-scale btn-scale-asc-9" id="rate9" onClick={this.handleClick_nine}>9</button>
                            <button class="btn btn-scale btn-scale-asc-10" id="rate10" onClick={this.handleClick_ten}>10</button>
                        </div>
                    </div>
                </div>

                <div className="buyerProfileSettings-thirdContainer">
                    <p>Show buys <input type="checkbox"/></p>
                    <p>Show buys Reviews <input type="checkbox"/></p>
                </div>
                <div>
                    <button className="buyerSettingsButtons"> Update Profile </button>
                </div>
            </div>
        </div>
    );
    };
}



export default Profile;