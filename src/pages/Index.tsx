import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [deliveryData, setDeliveryData] = useState({
    address: '',
    width: '',
    height: '',
    depth: '',
    assembly: false
  });

  const calculateDelivery = () => {
    const basePrice = 1500;
    const volume = (Number(deliveryData.width) * Number(deliveryData.height) * Number(deliveryData.depth)) / 1000000;
    const volumePrice = volume * 300;
    const assemblyPrice = deliveryData.assembly ? 2500 : 0;
    return Math.round(basePrice + volumePrice + assemblyPrice);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const furnitureItems = [
    { name: 'Диван Oslo', category: 'Мягкая мебель', price: '89 000 ₽' },
    { name: 'Стол Nordic', category: 'Столы', price: '45 000 ₽' },
    { name: 'Кровать Luna', category: 'Спальня', price: '125 000 ₽' },
    { name: 'Шкаф Minimal', category: 'Хранение', price: '78 000 ₽' },
    { name: 'Кресло Comfort', category: 'Мягкая мебель', price: '42 000 ₽' },
    { name: 'Стеллаж Line', category: 'Хранение', price: '36 000 ₽' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">Милана+</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'catalog', 'portfolio', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О компании'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                Мебель, которая создаёт пространство
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Минималистичный дизайн и безупречное качество для вашего дома
              </p>
              <Button onClick={() => scrollToSection('catalog')} size="lg" className="px-8">
                Смотреть каталог
              </Button>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Home" size={120} className="text-muted-foreground/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-6">О компании</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Милана+ — это производство авторской мебели с 2010 года. Мы создаём пространства,
            в которых хочется жить. Каждое изделие продумано до мелочей: от выбора материалов
            до финальной сборки.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">15+ лет опыта</h3>
              <p className="text-muted-foreground">В производстве мебели премиум-класса</p>
            </div>
            <div className="p-6">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">2000+ клиентов</h3>
              <p className="text-muted-foreground">Доверились нашему качеству</p>
            </div>
            <div className="p-6">
              <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Гарантия 5 лет</h3>
              <p className="text-muted-foreground">На всю продукцию</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-light mb-12 text-center">Каталог</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {furnitureItems.map((item, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <Icon name="Armchair" size={80} className="text-muted-foreground/30" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{item.category}</div>
                  <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                  <div className="text-2xl font-light text-primary">{item.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-light mb-12 text-center">Портфолио</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative h-80 bg-muted rounded-sm overflow-hidden hover-lift">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Image" size={80} className="text-muted-foreground/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-light mb-12 text-center">Доставка и сборка</h2>
          <Card className="p-8">
            <h3 className="text-2xl font-medium mb-6">Калькулятор стоимости</h3>
            <div className="space-y-6">
              <div>
                <Label htmlFor="address">Адрес доставки</Label>
                <Input
                  id="address"
                  placeholder="Москва, ул. Примерная, д. 1"
                  value={deliveryData.address}
                  onChange={(e) => setDeliveryData({ ...deliveryData, address: e.target.value })}
                  className="mt-2"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="width">Ширина (см)</Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="200"
                    value={deliveryData.width}
                    onChange={(e) => setDeliveryData({ ...deliveryData, width: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="height">Высота (см)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="90"
                    value={deliveryData.height}
                    onChange={(e) => setDeliveryData({ ...deliveryData, height: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="depth">Глубина (см)</Label>
                  <Input
                    id="depth"
                    type="number"
                    placeholder="85"
                    value={deliveryData.depth}
                    onChange={(e) => setDeliveryData({ ...deliveryData, depth: e.target.value })}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="assembly"
                  checked={deliveryData.assembly}
                  onChange={(e) => setDeliveryData({ ...deliveryData, assembly: e.target.checked })}
                  className="w-4 h-4"
                />
                <Label htmlFor="assembly" className="cursor-pointer">
                  Требуется сборка (+2500 ₽)
                </Label>
              </div>

              {deliveryData.width && deliveryData.height && deliveryData.depth && (
                <div className="mt-6 p-6 bg-muted rounded-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Итоговая стоимость:</div>
                      <div className="text-3xl font-light">{calculateDelivery()} ₽</div>
                    </div>
                    <Icon name="Truck" size={48} className="text-primary" />
                  </div>
                  <Separator className="my-4" />
                  <div className="text-sm text-muted-foreground">
                    <div className="flex justify-between mb-2">
                      <span>Базовая доставка:</span>
                      <span>1 500 ₽</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>За объём:</span>
                      <span>{Math.round((Number(deliveryData.width) * Number(deliveryData.height) * Number(deliveryData.depth)) / 1000000 * 300)} ₽</span>
                    </div>
                    {deliveryData.assembly && (
                      <div className="flex justify-between">
                        <span>Сборка:</span>
                        <span>2 500 ₽</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon name="MapPin" size={40} className="mx-auto mb-3 text-primary" />
              <h4 className="font-medium mb-2">Доставка по Москве</h4>
              <p className="text-sm text-muted-foreground">В пределах МКАД — от 1 дня</p>
            </div>
            <div className="text-center">
              <Icon name="Clock" size={40} className="mx-auto mb-3 text-primary" />
              <h4 className="font-medium mb-2">Удобное время</h4>
              <p className="text-sm text-muted-foreground">Выберите подходящий интервал</p>
            </div>
            <div className="text-center">
              <Icon name="Wrench" size={40} className="mx-auto mb-3 text-primary" />
              <h4 className="font-medium mb-2">Профессиональная сборка</h4>
              <p className="text-sm text-muted-foreground">Опытные мастера</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-light mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium mb-1">Телефон</div>
                    <a href="tel:+74951234567" className="text-muted-foreground hover:text-foreground transition-colors">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a href="mailto:info@milanaplus.ru" className="text-muted-foreground hover:text-foreground transition-colors">
                      info@milanaplus.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium mb-1">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Мебельная, д. 10
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium mb-1">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Пт: 10:00 - 20:00<br />
                      Сб-Вс: 11:00 - 18:00
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-medium mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Ваш вопрос..."
                    className="w-full mt-2 px-3 py-2 border border-input rounded-sm bg-background resize-none"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2024 Милана+. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
