import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
          


   <div className="containerInfo">
      <div className="footerLogo">
        <img className='footerImg' src="/img/binalogo.png" alt="" />
      </div>

    <div className="info__footer">
     
      <div>
        <h4>MAIL</h4>
        <a className='footerLink' href="">binadeco@gmail.com</a>
      </div>
    </div>

    <div className="info__footer">
      
      <div>
        <h4>PHONE</h4>
        <a className='footerLink' href="">+54-115656652</a>
      </div>
    </div>

    <div className="info__footer">
      
      <div>
        <h4>ENVIOS</h4>
        <a className="footerLink" >100 YONGE ST TORONTO , CANADA</a>

      </div>
    </div>


    <div className="info__footer">
      
      <div>
        <h4>SUSCRIBITE AL NEWSLETTER</h4>
        <input className="inputFooter "  placeholder='email' type='email'  />
        <button className='cardLink2'>ENVIAR</button>

      </div>

    </div>
    


  </div>
      <div className='line'> </div>
  </footer>
  )
}

export default Footer
