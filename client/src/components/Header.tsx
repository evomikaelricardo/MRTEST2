import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navigationItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Solutions',
      href: '#',
      dropdown: [
        { label: 'Smart Retail', href: '/smart-retail' },
        { label: 'Smart Warehouse', href: '/smart-warehouse' },
        { label: 'Smart Home', href: '/smart-home' },
        { label: 'Custom Solutions', href: '/custom-solutions' },
      ]
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ];

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href === '#contact') {
      scrollToContact();
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`
        fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-[#001765]/95 backdrop-blur-md shadow-lg border-b border-[#00BCD4]/20' 
          : 'bg-[#001765] shadow-md'
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/logo-evo.png" 
              alt="EVO Logo" 
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <div>
                    <Button
                      variant="ghost"
                      className="
                        text-white hover:text-[#00BCD4] hover:bg-[#00BCD4]/10
                        font-medium px-4 py-2 rounded-lg transition-all duration-200
                        flex items-center gap-1
                      "
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                    
                    {/* Desktop Dropdown */}
                    <div 
                      className={`
                        absolute top-full left-0 mt-2 w-56 bg-[#001765] border border-[#00BCD4]/20
                        rounded-lg shadow-xl z-50 transition-all duration-200 origin-top
                        ${openDropdown === item.label 
                          ? 'opacity-100 scale-100 translate-y-0' 
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                        }
                      `}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="
                            block px-4 py-3 text-white hover:bg-[#00BCD4] hover:text-white
                            transition-all duration-200 first:rounded-t-lg last:rounded-b-lg
                            border-b border-[#00BCD4]/10 last:border-b-0
                          "
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className="
                      text-white hover:text-[#00BCD4] hover:bg-[#00BCD4]/10
                      font-medium px-4 py-2 rounded-lg transition-all duration-200
                    "
                  >
                    {item.href === '#contact' ? (
                      <button onClick={scrollToContact}>
                        {item.label}
                      </button>
                    ) : (
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    )}
                  </Button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="
                  lg:hidden p-2 text-white hover:text-[#00BCD4] hover:bg-[#00BCD4]/10
                  rounded-lg transition-all duration-200
                "
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent 
              side="right" 
              className="
                w-80 bg-[#001765] border-l border-[#00BCD4]/20 p-0
                overflow-y-auto
              "
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#00BCD4]/20">
                  <img 
                    src="/logo-evo.png" 
                    alt="EVO Logo" 
                    className="h-8 w-auto"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-6 py-4">
                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <div key={item.label}>
                        {item.dropdown ? (
                          <div>
                            <Button
                              variant="ghost"
                              onClick={() => setOpenDropdown(
                                openDropdown === item.label ? null : item.label
                              )}
                              className="
                                w-full justify-between text-left text-white hover:text-[#00BCD4]
                                hover:bg-[#00BCD4]/10 font-medium py-3 px-4 rounded-lg
                                transition-all duration-200
                              "
                            >
                              {item.label}
                              <ChevronDown 
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  openDropdown === item.label ? 'rotate-180' : ''
                                }`}
                              />
                            </Button>
                            
                            {/* Mobile Dropdown */}
                            <div 
                              className={`
                                overflow-hidden transition-all duration-300 ease-in-out
                                ${openDropdown === item.label 
                                  ? 'max-h-96 opacity-100 mt-2' 
                                  : 'max-h-0 opacity-0'
                                }
                              `}
                            >
                              <div className="ml-4 space-y-1 border-l-2 border-[#00BCD4]/30 pl-4">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.href}
                                    href={dropdownItem.href}
                                    onClick={() => handleNavClick(dropdownItem.href)}
                                    className="
                                      block py-2 px-3 text-white/80 hover:text-[#00BCD4]
                                      hover:bg-[#00BCD4]/10 rounded-md transition-all duration-200
                                    "
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Button
                            variant="ghost"
                            asChild
                            className="
                              w-full justify-start text-left text-white hover:text-[#00BCD4]
                              hover:bg-[#00BCD4]/10 font-medium py-3 px-4 rounded-lg
                              transition-all duration-200
                            "
                          >
                            {item.href === '#contact' ? (
                              <button onClick={scrollToContact}>
                                {item.label}
                              </button>
                            ) : (
                              <Link href={item.href} onClick={() => handleNavClick(item.href)}>
                                {item.label}
                              </Link>
                            )}
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-[#00BCD4]/20">
                  <p className="text-white/60 text-sm text-center">
                    EVO - IoT & AI Solutions
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}