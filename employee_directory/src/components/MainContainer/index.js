import React, { Component } from "react";
import Header from "../Header";
import NameCard from "../Namecard";
import EmployeeCard from "../EmployeeCard"
import employee from "../../employees.json";

class  MainContainer extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.setState({results: employee})
    }
    render() {
        return (
            <div>
                <Header />
                <main className="container" style={{paddingTop: "1rem"}}>
                    <div className="row">
                        <NameCard />
                        <EmployeeCard results={this.state.results} />
                    </div>
                </main>
            </div>
        )
    }
}

export default MainContainer;