'use client'
import { UserButton, useUser } from '@stackframe/stack';

export default function Page() {
  useUser({or: "redirect"})
  return (
    <div>
      <div className='justify-self-end'>
        <UserButton/>
        </div>

        <div className='justify-center items-center align-center flex mt-[40vh]'>
          <div className='w-full'>
            <div className='text-2xl justify-center items-center flex'>
              <div className=''>Moods</div>
              <div>
                <button className='bg-hooker-green-0 hover:bg-hooker-green-20 text-white p-4 rounded-lg'>Create</button>
              </div>
              
            </div>
          </div>
        </div>
      
    </div>
    
  )
}
