import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateItemDto } from './dto/createDto';
import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ItemSchema, Item } from './mongo/schema/schema';
import { UpdateItemDto } from './dto/updateDto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<Item>
  ){}
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = new this.itemModel(createItemDto);
    return newItem.save();
  }
  
  async findAll(@Res() res: Response): Promise<any> {
    const items = await this.itemModel.find().exec();
    return items;
  }

  async updateAndGetItems(updateItemDto: UpdateItemDto[]): Promise<Item[]> {
    const updatedItems: Item[] = [];

    for (const dto of updateItemDto['items']) {
      const { id, stackable, tiltable, ...updatedFields } = dto;

      // Convert 'on' to true, anything else to false
      const stackableBoolean = stackable === 'on';
      const tiltableBoolean = tiltable === 'on';

      const updatedItem = await this.itemModel.findByIdAndUpdate(id, { ...updatedFields, stackable: stackableBoolean, tiltable: tiltableBoolean }, { new: true });


      if (!updatedItem) {
        console.log(`Item with ID ${id} not found`);
      }

      updatedItems.push(updatedItem);
    }

    const allItems = await this.itemModel.find();
    return allItems;
  }
  
}
