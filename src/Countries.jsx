function Countries(props) {
    return(
        <div className="Countries">
            <p>Country name: {props.CountryName}</p>
            <p>Capital: {props.CountryCapital}</p>
        </div>
    );
}

export default Countries;