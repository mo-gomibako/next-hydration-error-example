import { ReloadButton } from './ReloadButton'

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <ReloadButton></ReloadButton>
      </div>
      {children}
    </div>
  )
}
