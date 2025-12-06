import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Милана+</h1>
          
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'catalog', 'portfolio', 'testimonials', 'faq', 'delivery', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О компании'}
                {section === 'catalog' && 'Каталог'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'testimonials' && 'Отзывы'}
                {section === 'faq' && 'FAQ'}
                {section === 'delivery' && 'Доставка'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col gap-6 mt-8">
                {['home', 'about', 'catalog', 'portfolio', 'testimonials', 'faq', 'delivery', 'contacts'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {section === 'home' && 'Главная'}
                    {section === 'about' && 'О компании'}
                    {section === 'catalog' && 'Каталог'}
                    {section === 'portfolio' && 'Портфолио'}
                    {section === 'testimonials' && 'Отзывы'}
                    {section === 'faq' && 'FAQ'}
                    {section === 'delivery' && 'Доставка'}
                    {section === 'contacts' && 'Контакты'}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
