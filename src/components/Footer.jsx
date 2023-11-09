import React, { useEffect, useRef } from 'react';
import { footerLinks } from '../utils/data';
import SubLink from './SubLink';

const Footer = () => {
  const toTopRef = useRef(null);
  useEffect(() => {
    toTopRef.current.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  }, []);

  return (
    <div className='max-w-[2000px] mx-auto bg-gradient-to-r from-blue-800 to-purple-900 p-8 text-white py-12'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-[20%]'>
          <h2 className='font-bold text-4xl'>Ruubby</h2>
          <p className='text-xs font-thin leading-[1.3rem] my-5 text-blue-200'>
            Ruubby is a financial marketplace that allows users on our platform
            to build their credit score and earn rewards while they shop for
            their favourite items.<br></br>
            Businesses are provided with best business management tools.
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 '>
          {footerLinks.map(({ title, social, subLinks }, i) => {
            return (
              <div key={i}>
                <h2 className='font-medium text-sm mb:4 lg:mb-10 text-white'>
                  {title}
                </h2>
                {subLinks.map((item, i) => {
                  return <SubLink key={i} {...item} />;
                })}
                <div className='flex gap-2'>
                  {social?.map((item, i) => {
                    return (
                      <div key={i}>
                        <a href={item.url}>
                          <img
                            src={item.img}
                            className='w-5'
                            alt='socail-icon'
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex gap-5 my-10'>
        <a
          target={"__blank"}
          href='https://play.google.com/store/apps/details?id=com.ruubby&pli=1'
        >
          <img src="/Assets/google.png" className='w-32' alt='google' />
        </a>

        <img src="/Assets/app.png" className='w-32' alt='app' />
      </div>
      <hr className='border-gray-400 bg-gray-400 my-10' />
      <div className='flex justify-between text-xs'>
        <p>Copyright (c) {new Date().getFullYear()}. Redruubby Technologies</p>
        <span ref={toTopRef} className='cursor-pointer select-none'>
          Back to top
        </span>
      </div>
    </div>
  )
}

export default Footer