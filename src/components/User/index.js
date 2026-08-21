

const User = (props) => {
return (
<div>
  <h1>Meu username é: {props.username}</h1>
  <br />
  <button onClick={() => {props.alterarUsername('@pierce')}}>switch</button>
  <br/>
</div>
)
}

export default User;
