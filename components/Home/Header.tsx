import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'

import {
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const Header = async () => {
  await checkUser();

  return (
 
      <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>

        <nav className='px-4 h-16 flex items-center justify-between'>

          {/* Logo */}
          <Link href='/'>
            <Image src="/Logo.png" alt='Grindle logo' width={200} height={30} className='h-12 py-1 w-auto object-contain'/>
          </Link>

          <div className='flex items-center gap-2 md:gap-4'>

          <SignedIn>
                <Link href={'/dashboard'}>
                  <Button variant={'outline'}>
                  <LayoutDashboard className='h-4 w-4'/>
                   <span className='hidden md:block'>Industry Insights</span>
                 </Button>
                </Link>
        

                     <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                        <Button>
                       <StarsIcon className='h-4 w-4'/>
                        <span className='hidden md:block'>Growth tools</span>
                       <ChevronDown className='h-4 w-4'/>
                      </Button> 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>

            <DropdownMenuItem>Profile</DropdownMenuItem>

            <DropdownMenuItem>
            <Link href={'/resume'} className='flex items-center gap-2'>
              <FileText className='h-4 w-4'/>
              <span className='hidden md:block'>Build Resume</span>
            </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
            <Link href={'/cover-letter'} className='flex items-center gap-2'>
              <PenBox className='h-4 w-4'/>
              <span className='hidden md:block'>Cover Letter</span>
            </Link>
            </DropdownMenuItem>

            <DropdownMenuItem> <Link href={'/interview'} className='flex items-center gap-2'>
              <GraduationCap className='h-4 w-4'/>
              <span className='hidden md:block'>Interview Prep</span>
            </Link></DropdownMenuItem>
          </DropdownMenuContent>

          </DropdownMenu>

            <UserButton 
            appearance={{
              elements: {
                avatarBox: 'w-10 h-10',
                UserButtonPopoverCard: 'shadow-xl',
                userPreviewMainIdentifier: 'font-semibold'
              }
            }}
            afterSignOutUrl='/'
            />      


          </SignedIn>
          </div>
      
         <SignedOut>
            <SignInButton>
            <Button variant={'outline'}>
                Sign In
              </Button> 
            </SignInButton>
          </SignedOut>

         
     

          </nav>
      </header>
     
  )
}

export default Header