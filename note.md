<!-- instalize nest -->
nest new realtor-app

<!-- initialize prisma -->
npm install prisma
npx prisma init
npx prisma studio
npx prisma db push

<!-- file dir for auth -->
nest g module user
nest g controller auth user
nest g service auth user

nest g module prisma
nest g service prisma

<!-- file dir for home -->
nest g module home
nest g controller home
nest g service home

