import tw, { styled } from 'twin.macro'

export const ButtonList = styled.div`
  ${tw`flex flex-col space-y-1.5 mt-4`}
`
export const Button = styled.button`
  ${tw`inline-flex items-center transition duration-200 justify-between rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
`

// Layout

export const Header = styled.div`
  ${tw`pt-12 sm:pt-16 lg:pt-20`}
`

export const TitleContainer = styled.div`
  ${tw`flex items-center`}
`

export const Title = styled.h4`
  ${tw`flex-shrink-0 pr-4 text-base font-semibold text-indigo-600 bg-white`}
`

export const TitleDivider = styled.div`
  ${tw`flex-1 border-t-2 border-gray-200`}
`

export const Card = styled.div`
  ${tw`max-w-md mx-auto overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none`}
`

export const CardContainer = styled.div`
  ${tw`relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8`}
`

export const CardContent = styled.div`
  ${tw`flex-1 px-6 py-8 bg-white lg:p-12`}
`

export const CardBackground = styled.div`
  ${tw`absolute inset-0 bg-gray-100 h-1/2`}
`

export const Section = styled.div`
  ${tw`pb-16 mt-8 bg-white sm:mt-12 sm:pb-20 lg:pb-28`}
`

export const ResultContainer = styled.div`
  ${tw`w-48 px-6 py-8 text-center bg-gray-50 lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12`}
`

export const Result = styled.div`
  ${tw`flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900`}
`
