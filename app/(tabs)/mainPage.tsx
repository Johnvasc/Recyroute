import {
    Avatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
  } from '@/components/ui/avatar';


import { GreatButton } from '@/components/GreatButton';  
import { AddIcon } from '@/components/ui/icon';
import { Dropdown } from '@/components/Dropdown';

const title1 = ['Coletas em aberto']
const title2 = ['Coletas finalizadas']
const contents = [ 'content 1', 'content 2', 'content 3']


function MainPage(){
    return(
        <main className='flex flex-col justify-center items-center' >
            <Avatar className='mt-16' size="lg" >
            <AvatarFallbackText>Jane Doe</AvatarFallbackText>
            <AvatarImage
            source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
            />
            <AvatarBadge />
            </Avatar>
            <GreatButton  className='m-8 w-52 h-11' icon={AddIcon} text='Add ordem de coleta'>

            </GreatButton>
            <Dropdown title={title1} content={contents}></Dropdown>
            <Dropdown title={title2} content={contents}></Dropdown>
        </main>
    )
}

export default MainPage