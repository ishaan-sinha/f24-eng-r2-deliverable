"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, type BaseSyntheticEvent } from "react";
import { TypographyH4, TypographyP } from "@/components/ui/typography";


import type { Database } from "@/lib/schema";

type Species = Database["public"]["Tables"]["species"]["Row"];



export default function DetailedViewDialog
({ species }: { species: Species }) {


  const[open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-3 w-full">
          Learn More
        </Button>

      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>More Information!</DialogTitle>
        </DialogHeader>


      <h3>
      Scientific Name:  {species.scientific_name}
      </h3>
      <h3>
      Common Name:  {species.common_name}
      </h3>
      <h3>
      Description:  {species.description}
      </h3>
      <h3>
      Total Population:  {species.total_population}
      </h3>
      <h3>
      Endangered:  {species.endangered ? "Yes" : "No"}
      </h3>
      </DialogContent>
    </Dialog>
  );

}
