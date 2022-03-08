function Register(props) {
    return (
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="d-flex card p-4">
                <div className="card-body">
                    <h2 className="card-title text-center">Register</h2>
                    <form className="text-center">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email address" ></input>
                            <input type="text" className="form-control" placeholder="Username"></input>
                            <input type="password" className="form-control" placeholder="Password"></input>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;