import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const location = useLocation()

    const { user, signIn } = useContext(AuthContext);

    const handleLogIn = (event) => {
        event.preventDefault();

        if (user && user.email === email) {
            signIn(email, password)
                .then((response) => {
                    console.log(response.user);
                    navigate(location?.state ? location.state : '/');
                    toast.success("Successfully logged in");
                })
                .catch((error) => {
                    console.error(error);
                    toast.error("Incorrect password");
                });
        } else {
            toast.error("Email does not match our records");
        }
    };


    return (
        <div className="">
            <div className="hero min-h-screen">
                <div>
                    <Toaster />
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    className="block  w-full select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="submit"
                                    onClick={handleLogIn}
                                    data-ripple-light="true"
                                >
                                    Log In
                                </button>
                                <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                                    Don't have an account?{" "}
                                    <Link
                                        className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                                        to="/register"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;