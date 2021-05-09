import React from 'react'
import axios from 'axios'
import team from '../team.png'
class Inputstudent extends React.Component
{
    state = {
        name: '',
        task: '',
        date:''
    }
    handleChange = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = ()=>{
        if(this.state.name!='' && this.state.task!='',this.state.date!='')
        {
            axios.post('http://localhost:5000/students',this.state)
            .then(res=>{
                console.log('successfully posted');
                this.setState({name:'',task:'',date:''});
            });
            window.location = '/';
           
        }
    }
    render()
    {
        return(
            <div class="row text-center">
                <div class="col-md-4">
                    <form onSubmit={()=>this.handleSubmit()}>
                        <input required onChange={(e)=>this.handleChange(e)} name='name' value={this.state.name} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Name" class="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name='task' value={this.state.task} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Task" class="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name='date' value={this.state.date} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Date" class="form-control"/>
                        <button style={{borderRadius:'10px',fontSize:'19px',fontFamily:'Cursive,sans-serif,Gugi',outline:'none',color:'white',backgroundColor:'#000066',marginLeft:'50px',marginTop:'20px',width:'435px'}} class="btn">CREATE</button>
                    </form>
                </div>
                <div class="col-md-8">
                    <img src={team}/>
                </div>
            </div>
        );
    }
}
export default Inputstudent;