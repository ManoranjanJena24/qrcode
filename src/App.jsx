import React from 'react'
import { QRCode } from 'antd'

const App = () => {
  return (
    <div className="bg-gray-100 h-screen py-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-12">QR Code Generator</h1>
      <div className="rounded-xl p-4 bg-white shadow-lg w-fit hover:scale-115 transition-transform duration-300  hover:shadow-2xl">
        <QRCode
          value="https://www.youtube.com/@Desi.Destinations"
          size={300}
          icon="https://api.dicebear.com/7.x/adventurer/svg?seed=pIY5p2B3jSP6w055c-1INOW"
        />
      </div>
    </div>
  );
}

export default App