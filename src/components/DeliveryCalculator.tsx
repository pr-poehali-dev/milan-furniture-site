import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface DeliveryData {
  address: string;
  width: string;
  height: string;
  depth: string;
  assembly: boolean;
}

interface DeliveryCalculatorProps {
  deliveryData: DeliveryData;
  setDeliveryData: (data: DeliveryData) => void;
  calculateDelivery: () => number;
}

const DeliveryCalculator = ({ deliveryData, setDeliveryData, calculateDelivery }: DeliveryCalculatorProps) => {
  return (
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
                placeholder="Сочи, Урожайная ул., 73Г"
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
            <h4 className="font-medium mb-2">Доставка по Сочи</h4>
            <p className="text-sm text-muted-foreground">В черте города — от 1 дня</p>
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
  );
};

export default DeliveryCalculator;
