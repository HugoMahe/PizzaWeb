CREATE TABLE "utilisateur_util" (
	"util_id"	INTEGER NOT NULL UNIQUE,
	"util_mail"	TEXT NOT NULL UNIQUE,
	"util_mdp"	TEXT NOT NULL,
	"util_nom"	TEXT NOT NULL,
	"util_prenom"	TEXT NOT NULL,
	"util_adresseFacturation"	TEXT NOT NULL,
	"util_adresseLivraison"	TEXT NOT NULL DEFAULT 'SAME',
	"util_telephone"	TEXT NOT NULL,
	PRIMARY KEY("util_id" AUTOINCREMENT)
);


CREATE TABLE "commande_cmd" (
	"cmd_id"	INTEGER NOT NULL UNIQUE,
	"cmd_date"	TEXT NOT NULL,
	"cmd_status"	TEXT NOT NULL,
	"util_id"	INTEGER NOT NULL,
	PRIMARY KEY("cmd_id" AUTOINCREMENT),
	CONSTRAINT "fk_util_id" FOREIGN KEY("util_id") REFERENCES utilisateur_util ("util_id")
);


CREATE TABLE "carteBancaire_cb" (
	"cb_id"	INTEGER NOT NULL UNIQUE,
	"cb_numero"	TEXT NOT NULL,
	"cb_date"	TEXT NOT NULL,
	"cb_code"	TEXT NOT NULL,
	"util_id"	TEXT NOT NULL,
	PRIMARY KEY("cb_id" AUTOINCREMENT),
	CONSTRAINT "fk_util_id" FOREIGN KEY("util_id") REFERENCES utilisateur_util ("util_id")
);


CREATE TABLE "pizza_piz" (
	"piz_id"	INTEGER NOT NULL UNIQUE,
	"piz_nom"	TEXT NOT NULL,
	"piz_prix"	NUMERIC NOT NULL CHECK("piz_prix" > 0.0),
	PRIMARY KEY("piz_id" AUTOINCREMENT)
);


CREATE TABLE "ingredient_igd" (
	"igd_id"	INTEGER NOT NULL UNIQUE,
	"igd_nom"	TEXT NOT NULL,
	"igd_prix"	NUMERIC NOT NULL CHECK("igd_prix" > 0.0),
	PRIMARY KEY("igd_id" AUTOINCREMENT)
);


CREATE TABLE "ingredientPizza_igdpiz" (
	"igd_id"	INTEGER NOT NULL,
	"piz_id"	INTEGER NOT NULL,
	PRIMARY KEY("igd_id","piz_id"),
	CONSTRAINT "fk_igd_id" FOREIGN KEY("igd_id") REFERENCES ingredient_igd ("igd_id"),
	CONSTRAINT "fk_piz_id" FOREIGN KEY("piz_id") REFERENCES pizza_piz ("piz_id")
);


CREATE TABLE "pizzaCommande_pizcmd" (
	"piz_id"	INTEGER NOT NULL,
	"cmd_id"	INTEGER NOT NULL,
	PRIMARY KEY("piz_id","cmd_id"),
	CONSTRAINT "fk_piz_id" FOREIGN KEY("piz_id") REFERENCES pizza_piz ("piz_id"),
	CONSTRAINT "fk_cmd_id" FOREIGN KEY("cmd_id") REFERENCES commande_cmd ("cmd_id")
);


CREATE TABLE "allergeneIngredient_alligd" (
	"all_id"	INTEGER NOT NULL,
	"igd_id"	INTEGER NOT NULL,
	PRIMARY KEY("all_id","igd_id"),
	CONSTRAINT "fk_all_id" FOREIGN KEY("all_id") REFERENCES allergene_all ("all_id"),
	CONSTRAINT "fk_igd_id" FOREIGN KEY("igd_id") REFERENCES ingredient_igd ("igd_id")
);