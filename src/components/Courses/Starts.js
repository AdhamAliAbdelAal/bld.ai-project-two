const renderStars=(rating)=>{
    let counter=0;
    const stars=[];
    for(let i=0;i<Math.floor(rating);++i)
    {
        stars.push(<i className="bi bi-star-fill" key={counter++}></i>);
    }
    if(Math.floor(rating)!==rating)
    {
        stars.push(<i className="bi bi-star-half" key={counter++}></i>);
    }
    for(let i=0;i<5-Math.ceil(rating);++i)
    {
        stars.push(<i className="bi bi-star" key={counter++}></i>)
    }
    return stars;
}
export default renderStars;