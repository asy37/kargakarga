import { FC, ReactNode } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

interface BaseModalProps {
  children: ReactNode;
  open: boolean;
}

export const Modal: FC<BaseModalProps> = ({ children, open}) => {
const onClose = () => {};
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[200]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={"h-fit transform divide-y  divide-mineShaft-100  rounded  bg-white  text-left  shadow-xl  transition-all" }
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};



