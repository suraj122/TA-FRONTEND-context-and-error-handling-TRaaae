import React from "react";

class ErrorBoundary2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>An error occured!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary2;
