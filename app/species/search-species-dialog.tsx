"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState, useEffect} from "react";



// We use zod (z) to define a schema for the "Add species" form.
// zod handles validation of the input values with methods like .string(), .nullable(). It also processes the form inputs with .transform() before the inputs are sent to the database.

// Define kingdom enum for use in Zod schema and displaying dropdown options in the form

// Default values for the form fields.
/* Because the react-hook-form (RHF) used here is a controlled form (not an uncontrolled form),
fields that are nullable/not required should explicitly be set to `null` by default.
Otherwise, they will be `undefined` by default, which will raise warnings because `undefined` conflicts with controlled components.
All form fields should be set to non-undefined default values.
Read more here: https://legacy.react-hook-form.com/api/useform/
*/


export default function SearchSpeciesDialog({ data }: { data: object }) {
  const [open, setOpen] = useState(false);

  /*const [searchTerm, setSearchTerm] = useState("");
  const [filteredSpecies, setFilteredSpecies] = useState<Species[]>(species);


    // Filter species based on search input
    useEffect(() => {
      const filtered = species.filter((specie) =>
        specie.scientific_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specie.common_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSpecies(filtered);
    }, [searchTerm, species]);
    */


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full">
          Search Species
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Search Species</DialogTitle>
        </DialogHeader>
            <input type="text" placeholder="Search species"/>
              <div className="flex">
                <DialogClose asChild>
                  <Button type="button" className="ml-1 mr-1 flex-auto" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </div>
      </DialogContent>
    </Dialog>
  );
}
