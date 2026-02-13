import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoMallPlaza from '../assets/images/logo_mallplaza.png';

interface HeaderProps {
  onLogoClick?: () => void;
  onManualClick?: () => void;
}

export function Header({ onLogoClick, onManualClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
      return;
    }
    window.location.href = import.meta.env.BASE_URL;
  };

  const handleManualClick = () => {
    if (onManualClick) {
      onManualClick();
      return;
    }
    window.location.hash = 'manual';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              closeMobileMenu();
              handleLogoClick();
            }}
            className="flex items-center"
          >
            <img
              src={logoMallPlaza}
              alt="MallPlaza"
              className="h-8 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-[#E91E63] transition-colors">
              Corporativo
            </a>
            <a href="#" className="text-gray-600 hover:text-[#E91E63] transition-colors">
              Inversionistas
            </a>
            <a href="#" className="text-gray-600 hover:text-[#E91E63] transition-colors">
              Portal Arrendatarios
            </a>
            <button
              type="button"
              onClick={handleManualClick}
              className="bg-transparent border-0 p-0 cursor-pointer text-gray-600 hover:text-[#E91E63] transition-colors"
            >
              Manual de Usuario
            </button>
            <a href="#" className="text-gray-600 hover:text-[#E91E63] transition-colors">
              Contacto
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-[#E91E63] hover:bg-gray-100 transition-colors"
            aria-label={mobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 border-t border-gray-200 pt-3 flex flex-col">
            <a
              href="#"
              className="py-2 text-gray-700 hover:text-[#E91E63] transition-colors"
              onClick={closeMobileMenu}
            >
              Corporativo
            </a>
            <a
              href="#"
              className="py-2 text-gray-700 hover:text-[#E91E63] transition-colors"
              onClick={closeMobileMenu}
            >
              Inversionistas
            </a>
            <a
              href="#"
              className="py-2 text-gray-700 hover:text-[#E91E63] transition-colors"
              onClick={closeMobileMenu}
            >
              Portal Arrendatarios
            </a>
            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                handleManualClick();
              }}
              className="py-2 text-left bg-transparent border-0 p-0 cursor-pointer text-gray-700 hover:text-[#E91E63] transition-colors"
            >
              Manual de Usuario
            </button>
            <a
              href="#"
              className="py-2 text-gray-700 hover:text-[#E91E63] transition-colors"
              onClick={closeMobileMenu}
            >
              Contacto
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
