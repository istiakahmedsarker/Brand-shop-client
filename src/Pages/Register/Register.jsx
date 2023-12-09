import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [img, setImg] = useState("");

    const { googleSignIn, createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        if (!/^(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{6,}$/.test(formPassword)) {
            toast.error("Password must be greater than 6 characters and contain one uppercase,and a special character");
            return;
        }

        createUser(formEmail, formPassword)
            .then((response) => {
                return updateProfile(response.user, {
                    displayName: fullName,
                    photoURL: img,
                }).then(() => {
                    toast.success("Successfully Registered");
                    console.log(response.user)
                    return response;
                });
            })
            .catch((error) => {
                toast.error("Error during user registration");
                console.log(error)
            });
    }

    const handleGoogle = () => {
        googleSignIn()
            .then((response) => {
                console.log(response.user);
                toast.success("Successfully Signed up");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="hero min-h-screen">
            <div>
                <Toaster />
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                onChange={(e) => setFullName(e.target.value)}
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Picture</span>
                            </label>
                            <input
                                onChange={(e) => setImg(e.target.value)}
                                type="text"
                                placeholder="Img URL"
                                name="img"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onChange={(e) => setFormEmail(e.target.value)}
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
                                onChange={(e) => setFormPassword(e.target.value)}
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
                                onClick={handleGoogle}
                                className="block mb-2 w-full select-none rounded-lg bg-gradient-to-tr py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-600  shadow-md shadow-pink-500/20 transition-all hover:shadow-lg  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bottom-1 border border-pink-600"
                                type="button"
                                data-ripple-light="true"
                            >
                                Google
                            </button>
                            <button
                                className="block  w-full select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                onClick={handleRegister}
                                data-ripple-light="true"
                            >
                                Register
                            </button>
                            <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                                Already have an account?{" "}
                                <Link
                                    className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                                    to="/login"
                                >
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;
