import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface FurnitureItem {
  name: string;
  category: string;
  price: string;
  brand: string;
  description: string;
  features: string[];
  image: string;
}

interface CatalogSectionProps {
  furnitureItems: FurnitureItem[];
}

const CatalogSection = ({ furnitureItems }: CatalogSectionProps) => {
  return (
    <section id="catalog" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-light mb-12 text-center">Каталог</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {furnitureItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="hover-lift overflow-hidden cursor-pointer">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{item.category}</div>
                    <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                    <div className="text-2xl font-light text-primary">{item.price}</div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{item.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-80 object-cover rounded-sm"
                  />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">{item.brand}</span>
                      <span className="text-3xl font-light text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{item.description}</p>
                    <h4 className="font-medium mb-3">Особенности:</h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Check" size={20} className="text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" size="lg">
                      Заказать консультацию
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
