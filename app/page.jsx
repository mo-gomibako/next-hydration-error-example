import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <div>
        <Link href="/effect">with useState (+useEffect)</Link>
      </div>
      <div>
        <Link href="/sync_external_store">with uSES</Link>
      </div>
    </div>
  )
}
