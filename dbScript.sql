DROP DATABASE projeto_19_test;
CREATE DATABASE projeto_19_test;
\c projeto_19_test;

drop table "provas" cascade;
drop table "categorie" cascade;
drop table "discipline" cascade;
drop table "teacher" cascade;
drop table "period" cascade;
drop table "discipline_period" cascade;
drop table "discipline_teacher" cascade;

CREATE TABLE "provas" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"id_categorie" integer NOT NULL,
	"id_discipline_teacher" integer NOT NULL,
	"pdf_link" TEXT NOT NULL UNIQUE,
	CONSTRAINT "provas_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categorie" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "categorie_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "discipline" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "discipline_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teacher" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "teacher_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "period" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "period_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "discipline_period" (
	"id" serial NOT NULL,
	"id_discipline" integer NOT NULL,
	"id_period" integer NOT NULL,
	CONSTRAINT "discipline_period_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "discipline_teacher" (
	"id" serial NOT NULL,
	"id_discipline" integer NOT NULL,
	"id_teacher" integer NOT NULL,
	CONSTRAINT "discipline_teacher_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "provas" ADD CONSTRAINT "provas_fk0" FOREIGN KEY ("id_categorie") REFERENCES "categorie"("id");
ALTER TABLE "provas" ADD CONSTRAINT "provas_fk1" FOREIGN KEY ("id_discipline_teacher") REFERENCES "discipline_teacher"("id");

ALTER TABLE "discipline_period" ADD CONSTRAINT "discipline_period_fk0" FOREIGN KEY ("id_discipline") REFERENCES "discipline"("id");
ALTER TABLE "discipline_period" ADD CONSTRAINT "discipline_period_fk1" FOREIGN KEY ("id_period") REFERENCES "period"("id");

ALTER TABLE "discipline_teacher" ADD CONSTRAINT "discipline_teacher_fk0" FOREIGN KEY ("id_discipline") REFERENCES "discipline"("id");
ALTER TABLE "discipline_teacher" ADD CONSTRAINT "discipline_teacher_fk1" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id");


INSERT INTO "teacher" ("name") VALUES ('Professor Pardal'),('Professor Girafales'),('Seu Madruga'),('Professor Charles Xavier'),('Sr. Miyagi'),('Professor Raimundo');
INSERT INTO "categorie" ("name") VALUES ('P1'),('P2'),('P3'),('2ch'),('Outras');
INSERT INTO "period" ("name") VALUES ('1'),('2'),('3');
INSERT INTO "discipline" ("name") VALUES ('Matemática'),('Finanças'),('Lidando com suas mutações'),('Educação Física'),('Conhecimentos Gerais');
INSERT INTO "discipline_period" ("id_discipline","id_period") VALUES ('1','1'),('2','1'),('3','2'),('4','2'),('5','3');
INSERT INTO "discipline_teacher" ("id_discipline","id_teacher") VALUES ('1','1'),('2','3'),('3','4'),('4','5'),('5','2'),('5','6'),('5','3');
