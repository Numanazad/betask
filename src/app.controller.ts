import { Controller, Get, Res, Post, Put, Body } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { CreateItemDto } from './dto/createDto';
import { UpdateItemDto } from './dto/updateDto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get('')
  async create(@Res() res: Response): Promise<void> {
    res.render('form');
  }

  @Get('/all/view')
  async findAll(@Res() res: Response): Promise<any> {
    const items = await this.appService.findAll();
    res.render('index', {items});
  }

  @Post('/create')
  async createItem(@Body() createItemDto: CreateItemDto, @Res() res: Response) {
    await this.appService.create(createItemDto);
    res.redirect('/all/view');
  }

  @Post('items/update')
  async updateItems(@Body() updateItemsDto: UpdateItemDto[], @Res() res: Response) {
    try {
      const items = await this.appService.updateAndGetItems(updateItemsDto);
      res.redirect('/all/view');
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  }
}
