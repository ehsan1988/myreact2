var React=require('react');
var {Link,IndexLink}=require('react-router');
var Nav=React.createClass({
    onSearch:function (e) {
      e.preventDefault();
      alert('Not Ready Yet')
    },
    render:function () {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            <h6>React Application</h6>
                        </li>
                        <li>
                            <IndexLink to='/'> Weather Page</IndexLink>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/example'>Example </Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="text" placeholder="Enter the City..."/>
                            </li>
                            <li>
                                <input type="submit" value='Send Data' className="button"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});
module.exports=Nav;