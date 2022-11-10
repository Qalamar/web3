import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import GlobalStyles from './../styles/GlobalStyles'
import {
  WagmiConfig,
  createClient,
  configureChains,
  chain,
  defaultChains,
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [publicProvider()],
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

const App = ({ Component, pageProps }: AppProps) => (
  <WagmiConfig client={client}>
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  </WagmiConfig>
)

export default App
