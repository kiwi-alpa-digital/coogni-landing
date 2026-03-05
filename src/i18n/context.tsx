import React, { createContext, useContext, useState, useCallback } from 'react'
import { type Locale } from './translations'

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (obj: Record<Locale, string>) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es')

  const t = useCallback(
    (obj: Record<Locale, string>) => obj[locale],
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
