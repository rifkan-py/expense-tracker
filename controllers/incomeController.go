package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/rifkan-py/expense-tracker/database"
	"github.com/rifkan-py/expense-tracker/entities"
)

func GetIncomes(w http.ResponseWriter, r *http.Request) {

	var incomes []entities.Income

	database.Instance.Find(&incomes)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(incomes)

}

func CreateIncome(w http.ResponseWriter, r *http.Request) {
}
