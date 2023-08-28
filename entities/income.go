package entities

import "gorm.io/gorm"

type Income struct {
	gorm.Model
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Amount      float64 `json:"amount"`
}
