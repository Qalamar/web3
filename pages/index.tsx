import tw from 'twin.macro'
import {
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
  CircleStackIcon,
  CreditCardIcon,
} from '@heroicons/react/20/solid'
import * as UI from 'components'

const App = () => (
  <div tw="bg-gray-100">
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
                  <UI.Button>
                    ChainID
                    <CircleStackIcon
                      tw="ml-2 -mr-0.5 h-4 w-4"
                      aria-hidden="true"
                    />
                  </UI.Button>
                  <UI.Button>
                    Balance
                    <BanknotesIcon
                      tw="ml-2 -mr-0.5 h-4 w-4"
                      aria-hidden="true"
                    />
                  </UI.Button>
                  <UI.Button>
                    Send Transaction
                    <CreditCardIcon
                      tw="ml-2 -mr-0.5 h-4 w-4"
                      aria-hidden="true"
                    />
                  </UI.Button>
                  <UI.Button>
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
                <span>0</span>
              </UI.Result>
            </UI.ResultContainer>
          </UI.Card>
        </UI.CardContainer>
      </div>
    </UI.Section>
  </div>
)

export default App
