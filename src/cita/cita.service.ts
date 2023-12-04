import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { Model } from 'mongoose'; // Importa Model desde mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Cita } from './entities/cita.entity';

@Injectable()
export class CitaService {
  private readonly logger = new Logger('CitaService');

  constructor(
    @InjectModel('citas')
    private readonly citaModel: Model<Cita>,
  ) {}

  async create(createCitaDto: CreateCitaDto) {
    try {
      const cita = new this.citaModel(createCitaDto);
      await cita.save();
      return cita;
    } catch (error) {
      console.log(error);
      if (error.code === 11000)
        throw new BadRequestException('Registro duplicado');
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    return this.citaModel.find({}).exec();
  }

  async findOne(id: string) {
    const cita = await this.citaModel.findById(id).exec();
    if (!cita) {
      throw new NotFoundException(`Cita ${id} no encontrado`);
    }
    return cita;
  }

  async update(id: string, updateCitaDto: UpdateCitaDto) {
    const cita = await this.citaModel
      .findByIdAndUpdate(id, updateCitaDto, { new: true })
      .exec();
    if (!cita) {
      throw new NotFoundException(`Cita ${id} no encontrado`);
    }
    return cita;
  }

  async remove(id: string) {
    const cita = await this.findOne(id);
    await cita.updateOne({ active: false });
    return cita;
  }

  async updateAllActive(){
    await this.citaModel.updateMany({active: true });
  }

  prueba(): string[] {
    return ['uno', 'dos', 'tres'];
  }
}
