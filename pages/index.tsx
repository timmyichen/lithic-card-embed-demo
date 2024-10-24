import Lithic from "lithic";
import React from "react";

const LITHIC_API_KEY = "api_key_goes_here"
const CARD_TOKEN = "card_token_goes_here"

const lithic = new Lithic({
    apiKey: LITHIC_API_KEY,
    environment: "production",
})

export default function Home() {
  const [url, setUrl] = React.useState("");
  async function getEmbedUrl() {
      // simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      const res = lithic.cards.getEmbedURL({
          token: CARD_TOKEN,
      })
  
      setUrl(res)
  }

  React.useEffect(() => {
    getEmbedUrl();
  }, [])

  return (
    <div>
      {url && <iframe src={url}
        width={600}
        height={300}
        allow="clipboard-read;clipboard-write"
        ></iframe>}
    </div>
  );
}
