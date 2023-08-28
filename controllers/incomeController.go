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
	w.Header().Set("Content-Type", "application/json")

	var income entities.Income
	err := json.NewDecoder(r.Body).Decode(&income)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Validate required fields
	if income.Title == "" || income.Description == "" || income.Amount == 0 {
		http.Error(w, "Missing required fields", http.StatusBadRequest)
		return
	}

	result := database.Instance.Create(&income)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(income)
}
