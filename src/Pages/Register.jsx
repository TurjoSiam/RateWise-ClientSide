import Lottie from "lottie-react";
import registerLottie from '../../src/assets/register.json'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Slide, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";




const Register = () => {

    document.title = "RateWise | Register"

    const { createUser, userUpdateWhenSignin, signOutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                //saving user data in database
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                    .then(() => {
                        //update user data in firebase
                        userUpdateWhenSignin({
                            displayName: data.name,
                            photoURL: data.photo
                        })
                            .then(result => {
                                toast.success('Registration Successful', {
                                    position: 'bottom-right',
                                    transition: Slide
                                });
                                signOutUser()
                                    .then(() => {
                                        navigate("/signin")
                                    });
                            })
                    })
            })
            .catch(error => {
                console.log('ERROR', error.message);
                toast.error('Something went wrong', {
                    position: 'bottom-right',
                    transition: Slide
                })
            })
    }



    return (
        <div className="mx-auto my-10 lg:w-10/12">
            <div className="flex items-center flex-col-reverse lg:flex-row">
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/3 mx-8 bg-cyan-50 p-16 rounded-3xl border border-cyan-200">
                    <h1 className="mx-auto text-center text-[30px] font-bold mb-6">Create Your Account</h1>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" {...register('name')} name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register('email')} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register('photo')} type="url" name="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register('password', { required: 'Email is required', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, message: "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long" } })} type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        {
                            errors.password && (
                                <p className="text-red-500 text-xs italic">{errors.password.message}</p>
                            )
                        }
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <input type="text" {...register('role')} defaultValue="user" hidden />
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    <h2 className=" text-sm mt-6">Already have an account? <Link className="text-blue-600 hover:underline" to="/signin">Sign In</Link></h2>
                </form>
                <div className="w-1/3">
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
            </div>

        </div>
    );
};

export default Register;