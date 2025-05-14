import PropTypes from 'prop-types'

function Avengers(props: any) {
    const styles = {
        border: "1px solid black",
        font: "Ariel, sans-serif",
        padding: "8px",
        fontSize: "1.2em"

    }
    
    return (
        <div className="attr-box" style={styles}>
            <p>Name: {props.name}</p>
            <p>Title: {props.title}</p>
            <p>Is an Avenger: {props.isAvenger ? "Yes" : "No"}</p>
        </div>
    )
}

// Avengers.propTypes = {
//     name: PropTypes.string,
//     title: PropTypes.string,
//     isAvenger: PropTypes.bool
// }
// Avengers.defaultProps = {
//     name: "Classified",
//     title: "Unknown",
//     isAvenger: false
// }

export default Avengers