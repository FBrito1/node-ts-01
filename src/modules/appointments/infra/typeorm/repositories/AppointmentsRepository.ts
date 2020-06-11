import { getRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import iCreateAppointmentDto from '@modules/appointments/dtos/iCreateAppointmentDto';

import Appointment from '../entities/Appointment';
import ICreateAppointmentDto from '@modules/appointments/dtos/iCreateAppointmentDto';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;
  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointmentInSameDate = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointmentInSameDate || undefined;
  }

  public async create({
    date,
    provider_id,
  }: ICreateAppointmentDto): Promise<Appointment> {
    const appointment = this.ormRepository.create({ provider_id, date });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
