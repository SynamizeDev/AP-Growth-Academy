import logo from '../../../logo.svg'

export default function Brand() {
  return (
    <a className="inline-flex shrink-0 items-center" href="#top" aria-label="AP Growth Academy home">
      <img
        src={logo}
        alt="AP Growth Academy"
        className="h-10 w-auto sm:h-11"
        width="994"
        height="282"
      />
    </a>
  )
}
