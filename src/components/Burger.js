const Burger = props => {
    const eachBurger = props.burger.map((burger, idx) => 
    <li key={idx} style={{background:burger.color}}>{burger.name}</li>)
    return(
        <div className="burgerPane">
            <div class="container">
                <ul>
                    {eachBurger}
                </ul>
                <hr></hr>
                <span>Burger Stacking Area</span>
                <br/>
                <button type="reset" onClick={props.clear} >Clear</button>

            </div>
        </div>
    )
}

export default Burger;