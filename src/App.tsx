
import './App.css';
import { Button } from './components/Ui/Button';
import { PlusIcon } from './icons/plusicon';
import { ShareIcon } from './icons/ShareIcon';
function App() {

  return (
    <>
      <Button
        variant={'primary'}
        starticon={<PlusIcon size={'lg'} />}
        endIcon={<ShareIcon size={'lg'} />}
        size='lg'
        title={"share"}
       ></Button>

       <Button
        variant={'secondary'}
        starticon={<PlusIcon size={'lg'} />}
        endIcon={<ShareIcon size={'lg'} />}
        size='lg'
        title={"share"}
       ></Button>

       <Button
        variant={'primary'}
        starticon={<PlusIcon size={'lg'} />}
        endIcon={<ShareIcon size={'lg'} />}
        size='md'
        title={"share"}
       ></Button>

       

       <Button
        variant={'secondary'}
        starticon={<PlusIcon size={'lg'} />}
        endIcon={<ShareIcon size={'lg'} />}
        size='md'
        title={"share"}
       ></Button>

       <Button
        variant={'primary'}
        starticon={<PlusIcon size={'md'} />}
        endIcon={<ShareIcon size={'md'} />}
        size='sm'
        title={"share"}
       ></Button>

       <Button
        variant={'secondary'}
        starticon={<PlusIcon size={'sm'} />}
        endIcon={<ShareIcon size={'sm'} />}
        size='sm'
        title={"share"}
       ></Button>


    </>
  )
}

export default App
