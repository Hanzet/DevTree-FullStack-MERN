type ErrorMessageProps = {
  children: React.ReactNode;
}

export function ErrorMessage({ children } : ErrorMessageProps) {
  return (
    <p className="text-red-600 bg-red-50 uppercase text-sm font-bold text-center">{children}</p>
  )
}
