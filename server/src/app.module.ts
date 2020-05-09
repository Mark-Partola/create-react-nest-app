import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Sequelize } from 'sequelize';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'postgres',
    host: 'database',
  },
);

// To check connection
(async () => {
  const err = await sequelize.authenticate();
  if (err) {
    return console.log(err);
  }

  console.log('Connection established successfully');

  const users = await sequelize.query('SELECT * FROM users');

  console.log('Users: ', users);
})();
