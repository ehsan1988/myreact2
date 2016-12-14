var React=require('react');
var {Link,IndexLink}=require('react-router');
var Nav=(props)=>{
    return(
        <div>
            <IndexLink to='/'> Weather Page</IndexLink>
            <Link to='/about'>About</Link>
            <Link to='/example'>Example </Link>
        </div>
    )
};
module.exports=Nav;