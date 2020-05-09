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

const sequelize = new Sequelize('hive_db', 'hive-db-user', 'hive-db-pass', {
  dialect: 'postgres',
  host: 'database',
});

// To check connection
(async () => {
  const err = await sequelize.authenticate().then(console.log);
  if (err) {
    return console.log(err);
  }

  const users = await sequelize.query('SELECT * FROM users');

  console.log("Users: ", users);
})();