import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}
@Public()
  @Post('buatmember')
  async create(@Body() createMemberDto: CreateMemberDto) {
    return await this.memberService.create(createMemberDto);
  }
@Public()
  @Get('semuamember')
  async findAll() {
    return await this.memberService.findAll();
  }
@Public()
  @Get('satumember/:id')
  async findOne(@Param('id') id: string) {
    return await this.memberService.findOne(+id);
  }
@Public()
   @Patch('updatemember/:id')
  async update(@Param('id') id: string, @Body() UpdateMemberDto: UpdateMemberDto) {
    return await this.memberService.update(+id, UpdateMemberDto);
  }
@Public()
 @Delete('deletemember/:id')
  async remove(@Param('id') id: string) {
    return await this.memberService.remove(+id);
  }
}
