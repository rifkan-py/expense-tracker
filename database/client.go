package database

import (
	"log"

	"github.com/rifkan-py/expense-tracker/entities"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Instance *gorm.DB
var err error

func Connect(connectionString string) {
	Instance, err = gorm.Open(mysql.Open(connectionString), &gorm.Config{})

	if err != nil {
		log.Fatal(err)
		panic("Cannot connect to the database now")
	}

	log.Println("Connection established ...")
}

func Migrate() {
	Instance.AutoMigrate(&entities.Income{})

	log.Println("Database migration successful")
}
