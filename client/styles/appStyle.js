
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#fafafa',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#212529',
    },
    main: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '500px',
        marginBottom: '1rem',
    },
    input: {
        width: '100%',
        padding: '1rem',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
    },
    button: {
        width: '100%',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: '#fff',
        color: '#000',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            backgroundColor: '#ccc',
            color: '#fff',
        }
  }
}
export default styles;