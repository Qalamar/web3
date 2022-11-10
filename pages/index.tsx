import tw, { styled } from 'twin.macro'
import {
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
  CircleStackIcon,
  CreditCardIcon,
} from '@heroicons/react/20/solid'
import * as UI from 'components'
import { BigNumber } from 'ethers'
import { useState } from 'react'
import {
  useAccount,
  useBalance,
  useDisconnect,
  useEnsName,
  useNetwork,
  usePrepareSendTransaction,
  useSendTransaction,
} from 'wagmi'
import Head from 'next/head'

const App = () => {
  const [open, setOpen] = useState<boolean>(true)
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { chain } = useNetwork()
  const [result, setResult] = useState('0')
  const {
    data: balance,
    isError: isBalanceError,
    isLoading: isBalanceLoading,
  } = useBalance({
    address: address,
  })
  const { config } = usePrepareSendTransaction({
    request: { to: address!, value: BigNumber.from('10000000000000000') },
  })
  const { sendTransaction } = useSendTransaction(config)

  // Event handlers
  const handleDisconnect = () => {
    disconnect()
  }

  const handleBalance = () => {
    if (isBalanceLoading) setResult('...')
    if (isBalanceError) setResult('Error')
    setResult(`${balance?.formatted.substring(0, 5)} ${balance?.symbol}`)
  }

  const handleChainID = () => {
    chain && setResult(chain.id.toString())
  }

  const handleTransaction = () => {
    sendTransaction?.()
  }

  return (
    <div tw="bg-gray-100">
      <Head>
        <title>Biconomy Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isConnected ? (
        <>
          <UI.Header />
          <UI.Section>
            <div tw="relative">
              <UI.CardBackground />
              <UI.CardContainer>
                <UI.Card>
                  <UI.CardContent>
                    <div>
                      <UI.TitleContainer>
                        <UI.Title>Operations</UI.Title>
                        <UI.TitleDivider />
                      </UI.TitleContainer>

                      <UI.ButtonList>
                        <UI.Button onClick={handleChainID}>
                          ChainID
                          <CircleStackIcon
                            tw="ml-2 -mr-0.5 h-4 w-4"
                            aria-hidden="true"
                          />
                        </UI.Button>
                        <UI.Button onClick={handleBalance}>
                          Balance
                          <BanknotesIcon
                            tw="ml-2 -mr-0.5 h-4 w-4"
                            aria-hidden="true"
                          />
                        </UI.Button>
                        <UI.Button onClick={handleTransaction}>
                          Send Transaction
                          <CreditCardIcon
                            tw="ml-2 -mr-0.5 h-4 w-4"
                            aria-hidden="true"
                          />
                        </UI.Button>
                        <UI.Button onClick={handleDisconnect}>
                          Logout
                          <ArrowRightOnRectangleIcon
                            tw="ml-2 -mr-0.5 h-4 w-4"
                            aria-hidden="true"
                          />
                        </UI.Button>
                      </UI.ButtonList>
                    </div>
                  </UI.CardContent>
                  <UI.ResultContainer>
                    <UI.Result>
                      <span>{result}</span>
                    </UI.Result>
                  </UI.ResultContainer>
                </UI.Card>
              </UI.CardContainer>
            </div>
            <UI.WalletDetails>
              Connected to {ensName ?? address}
            </UI.WalletDetails>
          </UI.Section>
        </>
      ) : (
        <UI.Modal open={open} setOpen={setOpen} />
      )}
    </div>
  )
}

export default App
