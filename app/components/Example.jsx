var React=require('react');
var {Link}=require('react-router');
var Examples=()=>{
    return(
        <div>
            <h3 className="text-center">
                Examples
            </h3>
            <ol>
                <li>
                    <Link to='/?location=birjand'>Birjand</Link>
                </li>
                <li>
                    <Link to='/?location=mashhad'>Mashhad</Link>
                </li>
            </ol>
        </div>
    )
};
module.exports=Examples;