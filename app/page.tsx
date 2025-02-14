"use client"

import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, mdaData } from "@/lib/mdaData";
import Link from "next/link";
import ScrollableCategories from "@/components/ScrollableCategories";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const agenciesPerPage = 6;

  const filteredMdaData = mdaData.filter((agency) => {
    const matchesSearch =
      agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || agency.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredMdaData.length / agenciesPerPage);
  const indexOfLastAgency = currentPage * agenciesPerPage;
  const indexOfFirstAgency = indexOfLastAgency - agenciesPerPage;
  const currentAgencies = filteredMdaData.slice(indexOfFirstAgency, indexOfLastAgency);

  // Reset to first page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Pagination controls
  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxPagesToShow; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 gradient-bg -z-10" />

      <main className="mx-auto max-w-7xl w-full px-4 py-4 md:py-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-[800px] text-center">
          <div className="relative mb-4 md:mb-6 inline-block">
            <Image
              src="logo.png"
              alt="Sierra Leone Coat of Arms"
              width={120}
              height={120}
              className="drop-shadow-2xl animate-float md:w-40 md:h-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-full blur-2xl -z-10" />
          </div>
          <h1 className="mb-3 md:mb-4 text-2xl md:text-5xl font-bold gradient-text">
            Sierra Leone Government Directory
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Your comprehensive resource for accessing information about Sierra Leone's Ministry Departmental Agencies
            (MDAs)
          </p>
        </div>

        {/* Search Section */}
        <div className="mx-auto mt-8 md:mt-12 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 md:top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for an agency..."
              className="pl-10 h-10 md:h-12 glass-effect shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Scrollable Categories */}
          <div className="mt-4 md:mt-6">
            <ScrollableCategories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>
        </div>

        {/* Results Section */}
        {filteredMdaData.length === 0 ? (
          <div className="mt-8 md:mt-12 text-center">
            <div className="glass-effect rounded-xl p-8 max-w-lg mx-auto">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 gradient-text">No agencies found</h3>
              <p className="text-muted-foreground">
                {searchTerm && selectedCategory !== "All" 
                  ? `No ${selectedCategory} agencies found matching "${searchTerm}"`
                  : searchTerm 
                    ? `No agencies found matching "${searchTerm}"`
                    : `No agencies found in category "${selectedCategory}"`}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Try adjusting your search terms or selecting a different category
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
              {currentAgencies.map((agency) => (
                <Link
                  key={agency.id}
                  href={`/agency/${agency.id}`}
                  className="block rounded-xl glass-effect p-4 md:p-6 card-hover border border-gray-200 dark:border-white/5 shadow-sm"
                >
                  <div className="inline-block rounded-md bg-primary/10 px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium text-primary">
                    {agency.category}
                  </div>
                  <h2 className="mt-2 md:mt-3 text-lg md:text-xl font-semibold line-clamp-2">{agency.name}</h2>
                  <p className="mt-1 md:mt-2 text-sm text-muted-foreground line-clamp-2">{agency.description}</p>
                  <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 text-xs md:text-sm border-t pt-3 md:pt-4 border-black/10 dark:border-white/10">
                    <p className="flex items-center gap-2">
                      <span className="text-muted-foreground">📞</span>
                      {agency.contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-muted-foreground">✉️</span>
                      {agency.contact.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-muted-foreground">📍</span>
                      {agency.contact.address}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="h-8 w-8"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {getPageNumbers().map((pageNumber) => (
                    <Button
                      key={pageNumber}
                      variant={currentPage === pageNumber ? "default" : "ghost"}
                      size="sm"
                      onClick={() => goToPage(pageNumber)}
                      className={`h-8 w-8 ${
                        currentPage === pageNumber 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-primary/10"
                      }`}
                    >
                      {pageNumber}
                    </Button>
                  ))}

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="h-8 w-8"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                
                <div className="text-sm text-muted-foreground">
                  Showing {indexOfFirstAgency + 1} to {Math.min(indexOfLastAgency, filteredMdaData.length)} of {filteredMdaData.length} MDAs
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}