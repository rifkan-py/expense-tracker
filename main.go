package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rifkan-py/expense-tracker/controllers"
	"github.com/rifkan-py/expense-tracker/database"
	"gorm.io/gorm"
)

var DB *gorm.DB

func main() {

	LoadAppConfig()

	database.Connect(AppConfig.ConnectionString)
	database.Migrate()

	router := mux.NewRouter().StrictSlash(true)

	// registered routes
	RegisterIncomeRoutes(router)

	// start the servers
	log.Printf(fmt.Sprintf("Starting the server on port %s", AppConfig.Port))
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", AppConfig.Port), router))
}

func RegisterIncomeRoutes(router *mux.Router) {
	router.HandleFunc("/api/incomes", controllers.GetIncomes).Methods("GET")
	router.HandleFunc("/api/incomes", controllers.CreateIncome).Methods("POST")
}
