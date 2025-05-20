"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

type SidebarContextType = {
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
  defaultExpanded?: boolean
}

export function SidebarProvider({ children, defaultExpanded = true }: SidebarProviderProps) {
  const [expanded, setExpanded] = React.useState(defaultExpanded)
  const toggleSidebar = () => setExpanded((prev) => !prev)

  return <SidebarContext.Provider value={{ expanded, setExpanded, toggleSidebar }}>{children}</SidebarContext.Provider>
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Sidebar({ className, ...props }: SidebarProps) {
  const { expanded } = useSidebar()
  const isMobile = useMobile()

  return (
    <div
      className={cn(
        "bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300",
        expanded ? "w-64" : "w-16",
        isMobile && "fixed inset-y-0 left-0 z-50",
        !isMobile && "relative h-screen",
        className,
      )}
      {...props}
    />
  )
}

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return <div className={cn("flex h-16 items-center border-b border-sidebar-border px-4", className)} {...props} />
}

interface SidebarBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function SidebarBody({ className, ...props }: SidebarBodyProps) {
  return <div className={cn("flex-1 overflow-auto p-4", className)} {...props} />
}

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return <div className={cn("flex items-center border-t border-sidebar-border p-4", className)} {...props} />
}

interface SidebarToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function SidebarToggle({ className, ...props }: SidebarToggleProps) {
  const { expanded, toggleSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className={cn(
        "absolute -right-4 top-4 z-10 rounded-full bg-sidebar-accent text-sidebar-accent-foreground shadow-md",
        className,
      )}
      {...props}
    >
      {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  return <nav className={cn("flex flex-col gap-2", className)} {...props} />
}

interface SidebarNavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
  icon?: React.ReactNode
  active?: boolean
}

export function SidebarNavItem({ className, icon, children, active, ...props }: SidebarNavItemProps) {
  const { expanded } = useSidebar()

  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
        !expanded && "justify-center px-0",
        className,
      )}
      {...props}
    >
      {icon && <span className="h-5 w-5">{icon}</span>}
      {expanded && <span>{children}</span>}
    </Link>
  )
}

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  title?: string
}

export function SidebarSection({ className, title, children, ...props }: SidebarSectionProps) {
  const { expanded } = useSidebar()

  return (
    <div className={cn("mb-4", className)} {...props}>
      {title && expanded && (
        <h3 className="mb-2 px-3 text-xs font-medium uppercase text-sidebar-foreground/60">{title}</h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  )
}
