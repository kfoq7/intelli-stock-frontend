'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Select from 'react-select'

interface Props {
  open: boolean
  onClose: () => void
}

export function RegisterOrderModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed inset-0 flex w-screen items-center justify-center overflow-y-hidden bg-gray-600/20 p-4">
        <DialogPanel className="w-full max-w-7xl rounded-lg bg-white p-6 backdrop-blur-2xl">
          <DialogTitle className="text-2xl font-semibold tracking-tighter">
            Registra un nuevo pedido
          </DialogTitle>

          <div className="mt-4">
            <Select placeholder="asdf" />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
