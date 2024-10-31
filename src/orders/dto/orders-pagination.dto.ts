import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';
import { PaginationDto } from 'src/common';

export class OrdersPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Order status must be one of ${OrderStatusList}`,
  })
  status: OrderStatus;
}
