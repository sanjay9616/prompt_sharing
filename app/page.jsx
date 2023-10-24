"use client"

import { useState } from 'react'


const Home = () => {
  // const [toggleDropDdown, setToggleDropdown] = useState(false);
  // const handleClose = (reason) => {
  //   console.log('reaon', reason);
  //   setToggleDropdown(true)
  // }

    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
            </h1>
            <br className="max-md:hidden"/>
            <span className='orange_gradient text-center'>AI-Powred Prompts</span>
            <p className='desc text-center'>
                Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.
            </p>
            {/* <button type='button' onClick={handleClose}>sksksksk</button>
            {toggleDropDdown ? <><div>sanjay</div></> : <>anurag</>} */}
            {/* <Feed/> */}
        </section>
    )
}

export default Home