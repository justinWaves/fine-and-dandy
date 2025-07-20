"use client"

import { useState } from "react"

interface ProductFilterProps {
  onFilterChange?: (filters: string[]) => void
}

export function ProductFilter({ onFilterChange }: ProductFilterProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["jewelry", "apparel", "accessories"])

  const handleFilterClick = (filter: string) => {
    let newFilters: string[]
    
    if (filter === "all") {
      newFilters = ["jewelry", "apparel", "accessories"]
    } else {
      // If clicking on a category when all are selected, select only that category
      if (selectedFilters.length === 3) {
        newFilters = [filter]
      } else {
        // Toggle the clicked category
        newFilters = selectedFilters.includes(filter)
          ? selectedFilters.filter(f => f !== filter)
          : [...selectedFilters, filter]
      }
    }
    
    setSelectedFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const categories = [
    { value: "all", label: "All" },
    { value: "jewelry", label: "Jewelry" },
    { value: "apparel", label: "Apparel" },
    { value: "accessories", label: "Accessories" }
  ]

  const allSelected = selectedFilters.length === 3

  return (
    <div className="text-center">
      <h2 className="text-lg font-disco-body text-medium-contrast mb-4">
       What are you shopping for? ✨
      </h2>
      
      {/* Horizontal Filter Bar */}
      <div className="inline-flex bg-black/20 backdrop-blur-md rounded-lg overflow-hidden shadow-sm">
        {categories.map((category, index) => {
          const isSelected = category.value === "all" ? allSelected : selectedFilters.includes(category.value)
          
          return (
            <button
              key={category.value}
              onClick={() => handleFilterClick(category.value)}
              className={`
                px-6 py-2 font-disco-heading text-sm transition-all duration-200
                ${isSelected 
                  ? 'bg-black/40 text-white font-bold' 
                  : 'bg-transparent text-white/80 hover:text-white hover:bg-black/20'
                }
              `}
            >
              {category.label}
            </button>
          )
        })}
      </div>
    </div>
  )
} 