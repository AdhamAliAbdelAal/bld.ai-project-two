const renderStars=(rating,margin=0)=>{
    let counter=0;
    const stars=[];
    for(let i=0;i<Math.floor(rating);++i)
    {
        stars.push(<i className={`bi bi-star-fill mx-${margin}`} key={counter++}></i>);
    }
    if(Math.floor(rating)!==rating)
    {
        stars.push(<i className={`bi bi-star-half mx-${margin}`} key={counter++}></i>);
    }
    for(let i=0;i<5-Math.ceil(rating);++i)
    {
        stars.push(<i className={`bi bi-star mx-${margin}`} key={counter++}></i>)
    }
    return stars;
}
export default renderStars;