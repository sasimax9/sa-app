'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Settings, Users, HelpCircle, Car, Tv, Home as HomeIcon, DollarSign, Phone, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AppLayout() {
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Users, label: 'Users', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
    { icon: HelpCircle, label: 'Help', href: '#' },
    { icon: Phone, label: 'Contact', href: '/contact' },
  ]

  const services = [
    { icon: Car, title: 'Car Service', description: 'Professional car maintenance and repair', image: '/placeholder.svg?height=200&width=300' },
    { icon: Tv, title: 'AC Service', description: 'Expert air conditioning installation and repair', image: '/placeholder.svg?height=200&width=300' },
    // { icon: Washing, title: 'Washing Machine Service', description: 'Efficient washing machine repairs and maintenance', image: '/placeholder.svg?height=200&width=300' },
    // { icon: Spray, title: 'Cleaning Service', description: 'Thorough home and office cleaning solutions', image: '/placeholder.svg?height=200&width=300' },
    { icon: HomeIcon, title: 'Renting Service', description: 'Find your perfect rental property', image: '/placeholder.svg?height=200&width=300' },
    { icon: DollarSign, title: 'Lending Service', description: 'Flexible lending options for your needs', image: '/placeholder.svg?height=200&width=300' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          service2u
        </motion.h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Button variant="ghost" className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                {item.label}
              </Button>
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="mr-2"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Sheet open={isSideMenuOpen} onOpenChange={setIsSideMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>we are here to help you</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link href={item.href} className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent">
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] mb-12">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white p-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to My App</h2>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">Discover amazing services and boost your productivity!</p>
            <Button size="lg" variant="secondary">Get Started</Button>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <service.icon className="w-6 h-6" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <CardDescription>{service.description}</CardDescription>
                    <Button className="mt-4" variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>We provide top-notch services to make your life easier. From car maintenance to home cleaning, we've got you covered.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Service Street, City, Country</p>
            <p>Phone: +1 234 567 890</p>
            <p>Email: info@myapp.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}