'use client';
import React, { createContext, useContext, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';


const EnlargeContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  index: number;
  setPicture: (src: string) => void,
  setIndex: (index: number) => void,
  pictures: string[];
  picture: string;
}>({
  open: false,
  setOpen: (open: boolean) => { },
  index: 0,
  setPicture: (src: string) => { },
  picture: '',
  setIndex: (index: number) => { },
  pictures: []
});


export function EnlargeProvider({ pictures, children }: React.PropsWithChildren<{
  pictures: string[];
}>) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [picture, _setPicture] = useState('');

  const setPicture = (src: string) => {
    setOpen(true);
    _setPicture(src);
    setIndex(pictures.findIndex(p => p === src));
  }

  return (
    <EnlargeContext.Provider value={{ open, setOpen, index, setIndex, setPicture, picture, pictures }}>
      {children}
    </EnlargeContext.Provider>
  );
}


export function EnlargeModal() {
  const { open, setOpen, index, picture, setIndex, pictures } = useEnlarge();
  const mono = pictures.length <= 1;

  const handleNext = () => {
    setIndex((index + 1) % pictures.length);
  };

  const handlePrevious = () => {
    setIndex((index - 1 + pictures.length) % pictures.length);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          <img src={picture} className="max-w-full max-h-full" />
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-white">Close</button>
          </Dialog.Close>
          {
            !mono && (
              <>
                <button onClick={handlePrevious} className="absolute left-4 text-white">Left</button>
                <button onClick={handleNext} className="absolute right-4 text-white">Right</button>
              </>
            )
          }
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}


export const useEnlarge = () => useContext(EnlargeContext);
