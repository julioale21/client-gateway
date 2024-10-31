import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class ChangeOrderStatus {
  @IsUUID(4)
  id: string;

  @IsEnum(OrderStatusList, {
    message: `Order status must be one of ${OrderStatusList}`,
  })
  status: OrderStatus;
}
