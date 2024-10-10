interface PropStructure{
text:string;
}
function Heading(props:PropSt){
    return(<div>
        <h1>{props.style}</h1>
    </div>)

}