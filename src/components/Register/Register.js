import React,{Component} from 'react';
import 'tachyons';

const  Register =({ChangeRoute})=>{
	return(
	<article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
		<main className="pa4 black-80 ">
			<div className="measure tc">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			    <legend className="f4 fw6 ph0 mh0">Register</legend>
			    <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" type="text" name="username"  id="username" />
			    </div>
			    <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" type="email" name="email-address"  id="email-address" />
			    </div>
			    <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" type="password" name="password"  id="password" />
			    </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3" 
			      type="submit" value="Register" 
			      onClick={(() => ChangeRoute('home'))}
			      />
			    </div>

			</div>
		</main>
	</article>
	);
}
export default Register;