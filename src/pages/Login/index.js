// header e footer
import Header from 'pages/Header';
import Footer from 'pages/Footer';


// images
import Logo from '../../svg/blog-logo2.svg'


const Login = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
          <div className="grid-4  disappear"></div>
          <div className="grid-4 ">
            <div className="flex-center">
              <img src={Logo} alt="logoLogin" className="icon-l" />
            </div>
            <h5 className="text-center">Olá, faça o login para continuar.</h5>

            <form>
              <input type="text" name="user" placeholder="Digite o seu usuário" className="mt-3" />
              <input
                type="password"
                name="password"
                placeholder="Digite sua senha"
                className="mt-1"
              />


             <div className="card-danger p-2 my-1">
                    <h6 className="h7 color-red">Olá, isso é uma mensagem de erro</h6>
                </div>

                <div className="card-success p-2 my-1">
                    <h6 className="h7 color-green">Olá, isso é uma mensagem de erro</h6>
                </div>

                <div className="card-warning p-2 my-1">
                    <h6 className="h7 color-yellow">Olá, isso é uma mensagem de erro</h6>
                </div>

                <div className="card-info p-2 my-1">
                    <h6 className="h7 color-primary">Olá, isso é uma mensagem de erro</h6>
                </div>


              <button className="btn w-100 mt-3">Entrar</button>
            </form>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
