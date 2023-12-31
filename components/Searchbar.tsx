"use client"


import { connectToDB } from '@/lib/mongoose';
import { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') || 
      hostname.includes ('amazon.') || 
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if(!isValidLink) return alert('Please provide a valid Amazon link')

    try {
      setIsLoading(true);
      connectToDB()

      // Scrape the product page
    //   const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

    return (
        <form className='flex justify-center gap-4 mt-12 '
            onSubmit={handleSubmit}>
            <input type="text"
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder='Enter Product Link'
                className='flex-1 min-w-[200px]  w-full p-8 border border-gray-300 rounded-lg shadow-xs text-3xl text-gray-500 focus:outline-none' />
                
            <button
                type="submit"
                className="bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-3xl font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
                disabled={searchPrompt === ''}
            >{isLoading ? "Searching" : "Search"}
            </button>
        </form>
    )
}

export default Searchbar