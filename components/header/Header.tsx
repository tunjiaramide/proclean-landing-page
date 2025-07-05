import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

export default function Header() {
  return (
    <nav className="px-8 md:px-24 mx-auto py-6 md:py-6">
      <div className="hidden md:block">
          <DesktopNav />
      </div>
      <div className="block md:hidden">
           <MobileNav />
      </div>
    </nav>
  )
}
