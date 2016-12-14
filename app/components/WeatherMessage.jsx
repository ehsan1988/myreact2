var React=require('react');
var WeatherMessage=React.createClass({
    render:function () {
        var {location, temp}=this.props;
        return(
                <h2>Weather in {location} is {temp}</h2>
        )
    }
})
module.exports=WeatherMessage;