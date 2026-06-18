import { createContext, useContext } from 'react'

const CoreEngineLayoutContext = createContext(1)

export function useCoreEngineLayoutScale() {
  return useContext(CoreEngineLayoutContext)
}

export { CoreEngineLayoutContext }
