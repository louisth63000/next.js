"use client"
import { useEffect, useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MountainIcon, ArrowRightIcon } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

const existingNames = ['John Doe', 'Jane Smith', 'Alice Johnson']

export default function Component() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [nameError, setNameError] = useState('')
  const [isLoginFormValid, setIsLoginFormValid] = useState(false)
  const [isRegisterFormValid, setIsRegisterFormValid] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [registerError, setRegisterError] = useState('')

  const validateEmail = useCallback((email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
  }, [])

  const validatePassword = useCallback((password: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return re.test(password)
  }, [])

  const validateName = useCallback((name: string) => {
    return name.length > 0 && !existingNames.includes(name)
  }, [])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setEmailError(validateEmail(newEmail) ? '' : 'Please enter a valid email address')
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setPasswordError(validatePassword(newPassword) 
      ? '' 
      : 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character')
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setName(newName)
    setNameError(validateName(newName) ? '' : 'This name already exists or is invalid')
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulating a login error
    setLoginError('Invalid email or password. Please try again.')
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulating a registration error
    setRegisterError('An error occurred during registration. Please try again later.')
  }

  const handleGoogleLogin = () => {
    // Placeholder for Google login logic
    console.log('Google login initiated')
  }

  useEffect(() => {
    setIsLoginFormValid(email.length > 0 && password.length > 0)
    setIsRegisterFormValid(validateEmail(email) && validatePassword(password) && validateName(name))
  }, [email, password, name, validateEmail, validatePassword, validateName])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <MountainIcon className="h-12 w-12 text-indigo-600 mx-auto" />
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Acme Inc.</h1>
          <p className="mt-2 text-sm text-gray-600">Empowering teams to create at the moment of inspiration.</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-8">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-4" onSubmit={handleLogin}>
                {loginError && (
                  <Alert variant="destructive">
                    <AlertDescription>{loginError}</AlertDescription>
                  </Alert>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    placeholder="m@example.com" 
                    type="email" 
                    value={email}
                    onChange={handleEmailChange}
                    required 
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required 
                  />
                  {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                </div>
                <Button className="w-full" type="submit" disabled={!isLoginFormValid}>
                  Login
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleGoogleLogin}
                >
                  <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                  Continue with Google
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4" onSubmit={handleRegister}>
                {registerError && (
                  <Alert variant="destructive">
                    <AlertDescription>{registerError}</AlertDescription>
                  </Alert>
                )}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe"
                    value={name}
                    onChange={handleNameChange}
                    required 
                  />
                  {nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerEmail">Email</Label>
                  <Input 
                    id="registerEmail" 
                    placeholder="m@example.com" 
                    type="email" 
                    value={email}
                    onChange={handleEmailChange}
                    required 
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerPassword">Password</Label>
                  <Input 
                    id="registerPassword" 
                    type="password" 
                    value={password}
                    onChange={handlePasswordChange}
                    required 
                  />
                  {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                </div>
                <Button className="w-full" type="submit" disabled={!isRegisterFormValid}>
                  Register
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}