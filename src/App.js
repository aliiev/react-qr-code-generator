import './App.sass'

const App = () => {
  return (
    <div className="container">
      <div className="row min-vh-100 justify-content-center align-items-center">
        <div className="col-12 col-md-4">
          <div className="card border-0 rounded-4">
            <div className="card-body">
              <div className="qr-code bg-primary rounded-4 mb-3"></div>
              <h2 className="text-center mb-3">QR Code Generator</h2>
              <textarea className="form-control mb-3 bg-white"></textarea>
              <p className="text-secondary text-center">Enter your website or text. Your QR Code will be generated automatically</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
