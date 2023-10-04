import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    
    const {createUser, signInGoogle} = useContext(AuthContext);


    const handleRegister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        // create user
        createUser(email, password)
        .then(res => {
            const user = res.user;
            console.log('created user', user);
            alert('User created successfully.');
            // verify user email
            
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

     const handleGoogleLogin =()=>{
      signInGoogle()
      .then(res =>{
        const user = res.user;
        console.log('google user', user);
        alert('Google User Login')
      })
      .catch(error =>{
        console.log(error.message)
      })
     }


    return (
        <section>
        <div className="hero min-h-[80vh] bg-base-200 rounded">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Please Register now !!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">Register</button>
              </div>
              <div>
                <p>Already have account? please <Link className="font-bold text-purple-700" to='/login'>Login</Link></p>
              </div>
              <div className="text-center">
              <button onClick={handleGoogleLogin} className="btn btn-sm btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Google
            </button>
              </div>
            </form>
            
          </div>
         
        </div>
      </div> 
        </section>
    );
};

export default Register;