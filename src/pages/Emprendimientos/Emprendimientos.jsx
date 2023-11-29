import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { instagram } from '../../utils/instagram';

export const Emprendimientos = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-[#c0cfb9] w-full h-[100] absolute top-[8.5rem] lg:top-[6.5rem] left-0 flex flex-col items-center lg:items-start lg:px-20'>
        <h1 className='mt-10 font-titulo text-2xl text-[#50793D] '>Emprendimientos - Influencers</h1>
        <div>
          <div className="w-full min-h-screen pb-10 lg:flex lg:gap-10 lg:min-h-min lg:flex-wrap lg:justify-around">
            {Object.keys(instagram).map((key) => {
              const profile = instagram[key];
              return (
                <div key={key} className="max-w-screen-md px-10 py-6 mx-4 mt-10 pb-[5rem] bg-white rounded-lg md:mx-auto border-1 lg:w-[34rem] shadow-2xl">
                  <div className="flex flex-col items-start w-full m-auto sm:flex-row">
                    <div className="flex mx-auto sm:mr-10 sm:m-0">
                      <div className="items-center justify-center w-20 h-20 m-auto mr-4 sm:w-32 sm:h-32">
                        <img
                          alt="profil"
                          src={profile.img}
                          className="object-contain w-20 h-20 mx-auto rounded-full sm:w-32 sm:h-32 border-2 border-[#50793D]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col pt-4 mx-auto my-auto sm:pt-0 sm:mx-0">
                      <div className="flex flex-col mx-auto sm:flex-row sm:mx-0">
                        <h2 className="flex pr-4 text-xl font-subtitulo text-gray-900 sm:text-3xl"><a href={profile.url} target='_blank'>{profile.name}</a></h2>
                      </div>
                      <div className="flex items-center justify-between mt-3 space-x-2 font-texto">
                        <div className="flex">
                          <span className="mr-1 font-semibold">{profile.post}</span> Post
                        </div>
                        <div className="flex">
                          <span className="mr-1 font-semibold">{profile.followers}</span> Seguidores
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full pt-5 mt-4 border-t-2 border-[#afa8a8]">
                    <p className="text-sm text-gray-800 md:text-base font-texto">{profile.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
