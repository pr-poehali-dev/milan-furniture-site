import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import CatalogSection from '@/components/CatalogSection';
import DeliveryCalculator from '@/components/DeliveryCalculator';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
  };

  const furnitureItems = [
    { 
      name: 'Кухня Scavolini', 
      category: 'Итальянские кухни', 
      price: '890 000 ₽',
      brand: 'Scavolini',
      description: 'Элегантная итальянская кухня с лаконичным дизайном. Фасады из натурального дерева, встроенная техника премиум-класса.',
      features: ['Массив дуба', 'Встроенная техника Miele', 'Мягкое закрывание', 'Гарантия 10 лет'],
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80'
    },
    { 
      name: 'Диван Natuzzi', 
      category: 'Итальянская мебель', 
      price: '325 000 ₽',
      brand: 'Natuzzi',
      description: 'Роскошный диван из натуральной кожи от легендарного итальянского бренда.',
      features: ['Натуральная кожа', 'Ручная работа', 'Механизм трансформации', 'Ортопедические подушки'],
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'
    },
    { 
      name: 'Кухня Alno', 
      category: 'Немецкие кухни', 
      price: '1 250 000 ₽',
      brand: 'Alno',
      description: 'Немецкое качество и функциональность. Инновационные решения для современной кухни.',
      features: ['Немецкое производство', 'Умная организация пространства', 'Экологичные материалы', 'Индивидуальный дизайн'],
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80'
    },
    { 
      name: 'Стол Calligaris', 
      category: 'Итальянская мебель', 
      price: '185 000 ₽',
      brand: 'Calligaris',
      description: 'Раскладной обеденный стол из массива ореха с керамической столешницей.',
      features: ['Массив ореха', 'Керамическая столешница', 'Механизм раскладывания', 'До 12 персон'],
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80'
    },
    { 
      name: 'Кухня Nobilia', 
      category: 'Немецкие кухни', 
      price: '680 000 ₽',
      brand: 'Nobilia',
      description: 'Практичная немецкая кухня с продуманной эргономикой и современным дизайном.',
      features: ['Влагостойкие материалы', 'Интегрированная подсветка', 'Антибактериальное покрытие', 'Бесшумные механизмы'],
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80'
    },
    { 
      name: 'Кресло Poltrona Frau', 
      category: 'Итальянская мебель', 
      price: '420 000 ₽',
      brand: 'Poltrona Frau',
      description: 'Легендарное кресло Chester из коллекции Poltrona Frau. Классика итальянского дизайна.',
      features: ['Эксклюзивная кожа Pelle Frau', 'Ручная прошивка', 'Реставрируемая конструкция', 'Пожизненная гарантия качества'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Заказывали кухню Scavolini. Качество просто потрясающее! Каждая деталь продумана. Консультанты помогли с выбором, учли все наши пожелания. Доставка и сборка прошли идеально.',
      rating: 5
    },
    {
      name: 'Михаил Соколов',
      text: 'Купили диван Natuzzi — это произведение искусства! Сидеть на нём — одно удовольствие. Кожа невероятно мягкая, качество сборки на высшем уровне. Спасибо команде Милана+ за профессионализм!',
      rating: 5
    },
    {
      name: 'Елена Виноградова',
      text: 'Мечтали о немецкой кухне и не ошиблись с выбором Alno. Функциональность на высоте, всё под рукой. Материалы премиальные. Сборщики работали аккуратно, всё установили за день.',
      rating: 5
    },
    {
      name: 'Дмитрий Новиков',
      text: 'Обставляли квартиру полностью через Милана+. Обеденный стол Calligaris стал центром нашей гостиной. Механизм раскладывания работает безупречно. Очень довольны покупкой!',
      rating: 5
    },
    {
      name: 'Ольга Морозова',
      text: 'Заказала кухню Nobilia для дачи. Отличное соотношение цены и качества. Всё продумано до мелочей, ящики выдвигаются плавно, покрытие легко моется. Рекомендую!',
      rating: 5
    },
    {
      name: 'Сергей Белов',
      text: 'Купил кресло Poltrona Frau для кабинета. Это невероятный уровень комфорта и стиля! Кожа с годами становится только лучше. Инвестиция на всю жизнь. Спасибо за отличный сервис!',
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: 'Какие бренды мебели вы представляете?',
      answer: 'Мы являемся официальными дилерами ведущих европейских производителей: итальянские бренды Scavolini, Natuzzi, Calligaris, Poltrona Frau, а также немецкие кухни Alno и Nobilia. Все изделия поставляются напрямую с фабрик.'
    },
    {
      question: 'Как долго ждать доставку?',
      answer: 'Срок поставки зависит от бренда и модели: кухни под заказ — 8-12 недель, готовая мебель из наличия — 3-7 дней. Мы контролируем весь процесс и держим вас в курсе на каждом этапе.'
    },
    {
      question: 'Предоставляете ли вы гарантию?',
      answer: 'Да, на всю мебель действует официальная гарантия производителя от 2 до 10 лет в зависимости от бренда. Мы также предоставляем собственную гарантию на сборку 3 года.'
    },
    {
      question: 'Можно ли заказать дизайн-проект кухни?',
      answer: 'Конечно! Наши дизайнеры создадут 3D-проект вашей кухни бесплатно. Мы учтём все особенности помещения, ваши пожелания по стилю и функционалу. Проект включает планировку, визуализацию и подбор техники.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Мы принимаем оплату наличными, картой, банковским переводом. Возможна рассрочка на 12 месяцев без процентов. При заказе кухни — предоплата 30%, остальное после доставки.'
    },
    {
      question: 'Вы работаете с дизайнерами и застройщиками?',
      answer: 'Да, у нас есть специальные условия для дизайнеров интерьера, архитекторов и застройщиков. Предоставляем торговые и проектные скидки, выделенного менеджера, приоритетные сроки.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                Мебель и кухни от мировых брендов
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Официальный дилер Scavolini, Natuzzi, Alno, Nobilia и других премиальных производителей
              </p>
              <Button onClick={() => scrollToSection('catalog')} size="lg" className="px-8">
                Смотреть каталог
              </Button>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80" 
                alt="Luxury kitchen interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-6">О компании</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Милана+ — официальный дилер премиальной мебели и кухонь от ведущих мировых производителей с 2010 года. 
            Мы предлагаем итальянский стиль Scavolini, Natuzzi, Calligaris, Poltrona Frau и немецкое качество Alno, Nobilia. 
            Каждое изделие — это сочетание дизайна, функциональности и долговечности.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">15+ лет опыта</h3>
              <p className="text-muted-foreground">Официальный дилер мировых брендов</p>
            </div>
            <div className="p-6">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">2000+ клиентов</h3>
              <p className="text-muted-foreground">Довольных обладателей премиальной мебели</p>
            </div>
            <div className="p-6">
              <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Гарантия до 10 лет</h3>
              <p className="text-muted-foreground">Официальная гарантия производителей</p>
            </div>
          </div>
        </div>
      </section>

      <CatalogSection furnitureItems={furnitureItems} />

      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-light mb-12 text-center">Портфолио</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-sm overflow-hidden hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80" 
                alt="Kitchen project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" 
                alt="Kitchen project 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80" 
                alt="Living room project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80" 
                alt="Modern kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-light mb-12 text-center">Отзывы клиентов</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-6 h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>
                    <div className="font-medium">{testimonial.name}</div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-light mb-12 text-center">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <DeliveryCalculator 
        deliveryData={deliveryData}
        setDeliveryData={setDeliveryData}
        calculateDelivery={calculateDelivery}
      />

      <section id="contacts" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-light mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium mb-1">Телефон</div>
                    <a href="tel:+78622505050" className="text-muted-foreground hover:text-foreground transition-colors">
                      +7 (862) 250-50-50
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a href="mailto:info@milanaplus-sochi.ru" className="text-muted-foreground hover:text-foreground transition-colors">
                      info@milanaplus-sochi.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium mb-1">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Сочи, Урожайная ул., 73Г
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
          
          <Card className="p-4 overflow-hidden">
            <div className="relative w-full h-[450px] rounded-sm overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.744152%2C43.596116&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzExODM1MRJa0KDQvtGB0YHQuNGPLCDQodC-0YfQuCwg0KPRgNC-0LbQsNC50L3QsNGPINGD0LvQuNGG0LAsIDczItCQIgoNMH1nQRVjyU1C&z=17"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
                className="rounded-sm"
              />
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2024 Милана+. Официальный дилер Scavolini, Natuzzi, Alno, Nobilia. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
