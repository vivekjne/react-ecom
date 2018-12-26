import React,{Component} from 'react'
import Input from '../Common/Forms/Input'
import Button from '../Common/Forms/Button'

import './Login.css'
export default class Login extends Component{
    state={
        email:'',
        password:''
    }

    onChange=(name,e)=>{
        console.log(name,e.target.value)
        let state = {}
        state[name] = e.target.value
        this.setState(state)
    }

    onSubmit=(e)=>{
        
        e.preventDefault()
    }
    render(){
        const  {email,password} = this.state
        return(
            <div className="container">
            <form className="form"
            onSubmit={(e)=>this.onSubmit(e)}
            >
            
               <Input 
               type="email"

               name="email"
               placeholder="Enter email address"
               onChange={(e)=>this.onChange('email',e)}
               value={email}
               />
           

            
               <Input 
               type="password"
               name="password"
               placeholder="Enter Password"
               onChange={(e)=>this.onChange('password',e)}
               value={password}
               />

               <Button name="submit" value="LOGIN" />
       
            </form>
               
            </div>
        )
    }
}