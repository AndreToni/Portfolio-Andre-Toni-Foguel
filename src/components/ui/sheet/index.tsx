'use client'

/**
 * Minimal Sheet implementation using Radix UI Dialog primitives.
 * Built with CSS Modules — no Tailwind required.
 *
 * Drop-in compatible with the shadcn Sheet API used in Navigation.tsx:
 *   <Sheet open={open} onOpenChange={setOpen}>
 *     <SheetTrigger asChild>…</SheetTrigger>
 *     <SheetContent side="right" className={…}>…</SheetContent>
 *   </Sheet>
 */

import * as Dialog from '@radix-ui/react-dialog'
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'
import styles from './sheet.module.css'

/* ─── Re-export primitives that don't need extra styling ─── */
export const Sheet         = Dialog.Root
export const SheetTrigger  = Dialog.Trigger
export const SheetClose    = Dialog.Close
export const SheetPortal   = Dialog.Portal
export const SheetTitle    = Dialog.Title
export const SheetDescription = Dialog.Description

/* ─── Overlay ─── */
export const SheetOverlay = forwardRef<
  ElementRef<typeof Dialog.Overlay>,
  ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={[styles.Sheet__Overlay, className].filter(Boolean).join(' ')}
    {...props}
  />
))
SheetOverlay.displayName = 'SheetOverlay'

/* ─── Content ─── */
interface SheetContentProps extends ComponentPropsWithoutRef<typeof Dialog.Content> {
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export const SheetContent = forwardRef<
  ElementRef<typeof Dialog.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <Dialog.Content
      ref={ref}
      className={[
        styles.Sheet__Content,
        styles[`Sheet__Content--${side}`],
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Dialog.Content>
  </SheetPortal>
))
SheetContent.displayName = 'SheetContent'
