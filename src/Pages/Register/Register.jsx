import { useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { googleSignIn, createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((userCredential) => {
                toast.success("Successfully Signed up");
                console.log(userCredential)
            })
            .catch((error) => {
                toast.error("Registration failed");
                console.log(error)
                // ..
            });

    };

    const handleGoogle = () => {
        googleSignIn()
            .then((response) => {
                toast.success("Successfully Signed up");
                console.log(response.user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <div>
                <Toaster />
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Display Name</span>
                                </label>
                                <input type="text" placeholder="Display Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='img' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                            <div onClick={handleGoogle} className="form-control mt-6">
                                <button className="btn btn-primary">Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;