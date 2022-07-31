import React from "react";
class YasamDongusu extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {date : new Date(), cnt:11};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date : new Date(),
            cnt : this.state.cnt -1
        });
        if(this.state.cnt ===0)
        {
            this.componentWillUnmount();
        }
    }
    render() {
        return(
            <div>
                <h1> Bir bileşinin yaşam döngüsü</h1>
                <h2>Saat : {this.state.date.toLocaleTimeString()}</h2>
                <h3>Geri Sayım : {this.state.cnt}</h3>
            </div>
        )
    }
}
export default YasamDongusu;