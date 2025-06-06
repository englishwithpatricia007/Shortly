import "./links.css"
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi"

import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

import { getLinksSaved, deleteLink } from '../../services/storeLinks'
import LinkItem from "../../components/LinkItem"



export default function Links() {

  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSaved('@encurtaLink')

      if (result.length === 0) {
        setEmptyList(true)
      }
      setMyLinks(result);
    }
    getLinks();
  }, [])

  function handleOpenLink(link) {
    setData(link)
    setShowModal(true)
  }

  async function handleDeleteLink(linkId) {
    const result = await deleteLink(myLinks, linkId)

    if (result.length === 0) {
      setEmptyList(true)
    }

    setMyLinks(result)
  }


  return (
    <div className="links-container">
      <div className="links-header">
        <Link to={"/"}>
          <FiArrowLeft size={38} color="#FFF" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className="links-item">
          <h2 className="empty-text">Sua lista está vazia...</h2>
        </div>
      )}

      {myLinks.map(link => (
        <div key={link.id} className="links-item">
          <button onClick={() => handleOpenLink(link)} className="link">
            <FiLink size={18} color="#FFF" />
            {link.long_url}
          </button>
          <button className="link-delete">
            <FiTrash onClick={() => handleDeleteLink(link.id)} size={22} color="FF5454" />
          </button>
        </div>
      ))}

      {showModal &&
        (
          <LinkItem
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )}

    </div>
  )
}