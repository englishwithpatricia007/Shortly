import { FiLink } from "react-icons/fi";
import "./home.css"
import Menu from '../../components/Menu'
import { useState } from "react";
import LinkItem from "../../components/LinkItem";
import api from '../../services/api.js'
import { saveLink } from '../../services/storeLinks.js'


export default function Home() {

  const [link, setLink] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState({})



  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', { long_url: link })
      setData(response.data)
      setShowModal(true)
      setLink('')
      saveLink('@encurtaLink', response.data)
    } catch {
      alert("Parece que algo deu errado!")
      setLink('')
    }
  }

  return (
    <div className="container-home">

      <div className="logo">
        <img src="logo.png" alt="Logo do projeto" />
        <h1>Code & Ride</h1>
        <span> Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            value={link}
            onChange={e => setLink(e.target.value)}
            placeholder="Cole seu link aqui... " />
        </div>

        <button
          onClick={handleShortLink}>Encurtar link</button>
      </div>

      <Menu />


      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  )
}