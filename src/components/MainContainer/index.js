import React, { Component } from "react";
import Header from "../Header";
import NameCard from "../Namecard";
import EmployeeTable from "../EmployeeCard"
import employee from "../../employees.json";
import Name from "../Name"

class  MainContainer extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.handleViewAll()
    };

    handleSingleEmployee = event => {
        event.preventDefault();
        const value = event.target.innerHTML;
        let singleEmp = [];
        console.log(value)
        for(var i =0; i<employee.length; i++){
            if(`${employee[i].firstName} ${employee[i].lastName}` === value){
                singleEmp.push(employee[i])
            }
        }
        this.setState({results: singleEmp})
    };

    handleViewAll = event => {
        this.setState({results: employee})
    };

    handleSortPay = event => {
        event.preventDefault();
        let tempSort = []
        for(var i = 0; i<employee.length; i++){
            tempSort.push(employee[i])
        }
        let paySort = tempSort.sort((a, b) => {
            return b.pay - a.pay;
        });
        this.setState({results: paySort})
    };

    handleAlpha = event => {
        event.preventDefault();
        let tempAlphaSort = []
        for(var i = 0; i<employee.length; i++){
            tempAlphaSort.push(employee[i])
        }

        let alphaSort = tempAlphaSort.sort((a, b) => {
            let nameA = a.lastName.toUpperCase();
            let nameB = b.lastName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        this.setState({results: alphaSort})
    };

    handleDevTeam = event => {
        event.preventDefault();
        let devTeam = [];
        for(var i =0; i<employee.length; i++){
            if(employee[i].department === "Development Team"){
                devTeam.push(employee[i])
            }
        }
        this.setState({results: devTeam})
    };

    render() {
        return (
            <div className="bg-light">
                <main className="container" style={{paddingTop: "1rem"}}>
                    <Header />
                    <div className="row">
                        <NameCard>
                            <div className="card-header" style={{textAlign: "center"}}>Click for View</div>
                            <div className="card-body" style={{textAlign: "center"}}>
                                {employee.map(emp => (
                                    <Name empName={`${emp.firstName} ${emp.lastName}`} class="btn btn-secondary" handleClick={this.handleSingleEmployee}/>
                                ))}
                                <Name empName="View All" class="btn btn-primary" handleClick={this.handleViewAll}/>
                                <Name empName="View Alphabetically" class="btn btn-primary" handleClick={this.handleAlpha}/>
                                <Name empName="Sort by Pay" class="btn btn-primary" handleClick={this.handleSortPay}/>
                                <Name empName="View Dev Team" class="btn btn-primary" handleClick={this.handleDevTeam}/>
                            </div>
                        </NameCard>
                            <EmployeeTable results={this.state.results} />
                        {/* <EmployeeCard results={this.state.results} /> */}
                    </div>
                </main>
            </div>
        )
    }
}

export default MainContainer;