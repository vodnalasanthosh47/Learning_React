function Message() {
    // JSX: javascipt XML
    const name = 'Santhosh';
    if (name) {
        return <h1>Hello {name}</h1>
    }
    else {
        return <h1>Hello World!</h1>
    }

    return <h1>Hello!</h1>
}

export default Message;