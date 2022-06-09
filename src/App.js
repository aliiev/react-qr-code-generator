import { useState } from 'react'
import QRCode from 'react-qr-code'
import './App.sass'

const App = () => {
  const [state, setState] = useState('https://github.com/aliiev/react-qr-code-generator')

  return (
    <div className="container">
      <div className="row min-vh-100 justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 rounded-4">
            <div className="card-body">
              <div className="qr-code-wrapper bg-primary rounded-4 mb-3">
                <QRCode
                  className="qr-code"
                  value={ state }
                  fgColor="transparent" />
              </div>
              <h2 className="text-center mb-3">QR Code Generator</h2>
              <textarea
                className="form-control bg-white mb-3"
                value={ state }
                onChange={ e => setState(e.target.value) }>
              </textarea>
              <p className="text-secondary text-center">Enter your website or text. Your QR Code will be generated automatically</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
