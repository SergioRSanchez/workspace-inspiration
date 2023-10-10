'use client'

import { useState } from 'react'
import * as Yup from 'yup';
import Image from 'next/image'

import { ChevronRight } from 'lucide-react'

import bg from '@/assets/bg.png'
import rocket from '@/assets/rocket.svg'
import lightning from '@/assets/lightning.svg'
import tools from '@/assets/tools.svg'
import gift from '@/assets/gift.svg'


export default function Home() {
  const [email, setEmail] = useState<string>('')

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um endereço de e-mail válido')
      .required('O campo de e-mail é obrigatório'),
  });

  function handleSubmit(e: any) {
    e.preventDefault()

    if (!validationSchema.isValidSync({ email })) {
      alert('Entre com um e-mail válido')
      return
    }

    alert(`Obrigado por se inscrever! Receba nossa newsletter em ${email}`)
    setEmail('')
  }


  return (
    <div className='bg-[#09090A] min-h-screen relative flex flex-col overflow-x-hidden'>
      <Image 
        alt='picture of some workspaces'
        src={bg}
        className='absolute h-[52rem] w-[52rem] -right-[4rem] opacity-50 lg:opacity-100'
      />
       
      <div className='py-10 sm:pt-40 sm:pb-20 sm:px-28 px-3 z-10 flex flex-col gap-40'>
        {/* CONTENT */}
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <h2 className='uppercase font-medium leading-6 tracking-widest'>Newsletter exclusiva</h2>
            <h1 className='text-5xl font-bold leading-[3rem] text-white'>Workspace inspiration</h1>
          </div>

          
          <p className='text-[#C4C4CC] sm:w-[27.8125rem] text-xl leading-7'>Assine nossa newsletter e transforme seu espaço de trabalho em um oásis de produtividade!</p>
          
          <form 
            className='flex gap-2'
            onSubmit={handleSubmit}
          >
            <input 
              type="text" 
              placeholder='Digite seu e-mail'
              className='px-2 sm:px-3 py-3 sm:py-4 bg-[#202024] rounded-md sm:w-[18.1875rem] text-white placeholder:text-[#C4C4CC] active:ring-[1px] active:ring-[#996DFF] border-none focus:ring-[1px] focus:ring-[#996DFF] outline-0 transition-all duration-300'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              className='uppercase text-black p-3 sm:p-4 font-bold text-sm bg-gradient-to-r from-[#996DFF] to-[#C7AFFF] flex gap-2 self-stretch items-center text-center rounded hover:brightness-110 transition-all duration-300 hover:shadow-[0_5px_60px_-15px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:opacity-50 disabled:hover:brightness-100'
              disabled={!email}
            >
              Quero receber
              <ChevronRight className='h-5 w-5 text-black'/>
            </button>
          </form>
        </div>

        {/* CARDS */}
        <div className='flex flex-col sm:flex-row gap-10 justify-between'>

         {/* CARD */}
         <div className='sm:w-[17.125rem] flex flex-col gap-2'>
          <div className='flex flex-col gap-4'>
            <Image 
              src={rocket}
              alt='rocket'
              className=''
            />

            <h3 className='text-lg text-white font-bold leading-7'>As últimas inovações</h3>
          </div>

          <p className='text-[#C4C4CC] text-sm leading-5'>Mantenha-se atualizado com as mais recentes tecnologias e acessórios que vão revolucionar a forma como você trabalha.</p>
         </div>
         
         <div className='sm:w-[17.125rem] flex flex-col gap-2'>
          <div className='flex flex-col gap-4'>
            <Image 
              src={lightning}
              alt='lightning'
              className=''
            />

            <h3 className='text-lg text-white font-bold leading-7'>Reviews detalhadas</h3>
          </div>

          <p className='text-[#C4C4CC] text-sm leading-5'>Analisamos os produtos mais populares do mercado para que você possa fazer as escolhas certas.</p>
         </div>
         
         <div className='sm:w-[17.125rem] flex flex-col gap-2'>
          <div className='flex flex-col gap-4'>
            <Image 
              src={tools}
              alt='tools'
              className=''
            />

            <h3 className='text-lg text-white font-bold leading-7'>Dicas de organização</h3>
          </div>

          <p className='text-[#C4C4CC] text-sm leading-5'>Aumente sua eficiência e proteja sua saúde com conselhos especializados sobre ergonomia e organização.</p>
         </div>
         
         <div className='sm:w-[17.125rem] flex flex-col gap-2'>
          <div className='flex flex-col gap-4'>
            <Image 
              src={gift}
              alt='gift'
              className=''
            />

            <h3 className='text-lg text-white font-bold leading-7'>Ofertas exclusivas</h3>
          </div>

          <p className='text-[#C4C4CC] text-sm leading-5'>Como membro da nossa comunidade, você terá acesso a descontos e promoções especiais em produtos selecionados.</p>
         </div>

        </div>
      </div>
    </div>
  )
}
