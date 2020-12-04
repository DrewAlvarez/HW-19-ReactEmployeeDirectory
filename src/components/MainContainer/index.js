import React, { Component } from "react";
import Header from "../Header";
import NameCard from "../Namecard";
import EmployeeCard from "../EmployeeCard"
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
        for(var i =0; i<employee.length; i++){
            if(employee[i].name === value){
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
                                    <Name empName={emp.name} class="btn btn-secondary" handleSingleEmployee={this.handleSingleEmployee}/>
                                ))}
                                <Name empName="View All" class="btn btn-primary" handleSingleEmployee={this.handleViewAll}/>
                                <Name empName="Sort by Pay" class="btn btn-primary" handleSingleEmployee={this.handleSortPay}/>
                                <Name empName="View Dev Team" class="btn btn-primary" handleSingleEmployee={this.handleDevTeam}/>
                            </div>
                        </NameCard>
                        <EmployeeCard results={this.state.results} />
                    </div>
                </main>
            </div>
        )
    }
}

export default MainContainer;