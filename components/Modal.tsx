import tw from 'twin.macro'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid'
import { InjectedConnector } from '@wagmi/core'
import { Dispatch, Fragment, SetStateAction } from 'react'
import { useConnect } from 'wagmi'

interface ModalProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ open, setOpen }: ModalProps) => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  const handleConnect = () => {
    try {
      connect()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" tw="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div tw="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div tw="fixed inset-0 z-10 overflow-y-auto">
          <div tw="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel tw="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div tw="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full">
                    <ArrowRightOnRectangleIcon
                      tw="w-6 h-6 text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div tw="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      tw="text-lg font-medium leading-6 text-gray-900"
                    >
                      Please connect a wallet
                    </Dialog.Title>
                    <div tw="mt-2">
                      <p tw="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur amet labore.
                      </p>
                    </div>
                  </div>
                </div>
                <div tw="mt-5 sm:mt-6">
                  <button
                    type="button"
                    tw="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                    onClick={handleConnect}
                  >
                    Connect
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
