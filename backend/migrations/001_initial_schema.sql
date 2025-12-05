CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS users (
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
name varchar(255) not null,
email varchar(255) unique not null,
mobile varchar(50),
role varchar(20) not null default 'sales',
"passwordHash" varchar(255) not null,
created_at timestamp default now()
);


CREATE TABLE IF NOT EXISTS hospitals (
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
name varchar(255) not null,
state varchar(255),
city varchar(255),
contactperson varchar(255),
contactphone varchar(100),
email varchar(255),
created_at timestamp default now()
);


CREATE TABLE IF NOT EXISTS equipment (
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
model varchar(255) not null,
description text,
unitcost numeric(12,2),
created_at timestamp default now()
);


CREATE TABLE IF NOT EXISTS quotations (
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
reference varchar(255),
status varchar(20) default 'draft',
total numeric(12,2) default 0,
"createdBy" uuid,
"HospitalId" uuid,
created_at timestamp default now()
);


CREATE TABLE IF NOT EXISTS quote_items (
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
quotationid uuid,
equipmentid uuid,
quantity int default 1,
unitprice numeric(12,2),
discount numeric(5,2) default 0
);
