import {useState} from 'react'
import {Route} from 'react-router-dom'

const Share = () => {
  const [copySuccess, setCopySuccess] = useState('')

  const copyToClipboard = gifId => {
    const link = `https://interactly-images.s3.ap-south-1.amazonaws.com/temp/${gifId}.gif`
    const gif = <img src={link} alt={`Gif ${gifId}`} />
    navigator.clipboard.writeText(gif)
    navigator.clipboard.writeText(link)

    setCopySuccess(`Link copied to clipboard: ${link}`)
  }

  return (
    <div>
      <Route path="/share/1">
        <img
          src="https://interactly-images.s3.ap-south-1.amazonaws.com/temp/1.gif"
          alt="Gif 1"
        />
      </Route>
      <Route path="/share/2">
        <img
          src="https://interactly-images.s3.ap-south-1.amazonaws.com/temp/2.gif"
          alt="Gif 2"
        />
      </Route>
      <div className="container">
        <button
          type="button"
          className="button-element"
          onClick={() => copyToClipboard(1)}
        >
          Copy Linked Gif 1
        </button>

        <button type="button" onClick={() => copyToClipboard(2)}>
          Copy Linked Gif 2
        </button>
      </div>
      {copySuccess}
    </div>
  )
}

export default Share
