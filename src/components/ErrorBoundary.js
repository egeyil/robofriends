import { render } from "@testing-library/react";
import react from "react";

class ErrorBoundary extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render () {
        if (this.state.hasError) {
            return <h1>Ooops. That is not good.</h1>
        } else {
            return this.props.children
        }
    }    
}

export default ErrorBoundary;