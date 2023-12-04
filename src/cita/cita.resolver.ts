import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Cita } from './entities/cita.entity';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Resolver(() => Cita)
export class CitaResolver {
  constructor(private readonly citaService: CitaService) {}

  @Query(() => [Cita], { name: 'citas' })
  async getCitas(): Promise<Cita[]> {
    return this.citaService.findAll();
  }

  @Query(() => Cita, { name: 'cita' })
  async getCita(@Args('id', { type: () => ID }) id: string): Promise<Cita> {
    return this.citaService.findOne(id);
  }

  @Mutation(() => Cita)
  async createCita(
    @Args('createCitaDto') createCitaDto: CreateCitaDto,
  ): Promise<Cita> {
    return this.citaService.create(createCitaDto);
  }

  @Mutation(() => Cita)
  async updateCita(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateCitaDto') updateCitaDto: UpdateCitaDto,
  ): Promise<Cita> {
    return this.citaService.update(id, updateCitaDto);
  }

  @Mutation(() => Cita)
  async removeCita(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Cita> {
    return this.citaService.remove(id);
  }

  @Mutation(() => Cita)
  async updateAllActiveCita(): Promise<void> {
    return this.citaService.updateAllActive();
  }
}
