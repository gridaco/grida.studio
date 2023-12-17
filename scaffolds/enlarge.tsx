'use client';
import React, { createContext, useContext, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';


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
        <Dialog.Overlay className="fixed inset-0 z-50 bg-white dark:bg-black" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-20">
          <div className="relative max-w-full max-h-full w-full h-full">
            <Image
              className="w-full h-full object-contain"
              width={1920} height={1080}
              src={picture}
              alt=''
            />
            <Dialog.Close
              className="fixed top-0 right-0 m-4 text-black dark:text-white"
            >
              <Cross2Icon width={32} height={32} />
            </Dialog.Close>
            {!mono && (
              <>
                <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 m-4 text-white">Left</button>
                <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 m-4 text-white">Right</button>
              </>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export const useEnlarge = () => useContext(EnlargeContext);
