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

      <TypographyH4>
        Scientific Name:
      </TypographyH4>
      <TypographyP>
        {species.scientific_name}
      </TypographyP>

      <TypographyH4>
        Common Name:
      </TypographyH4>
      <TypographyP>
        {species.common_name}
      </TypographyP>

      <TypographyH4>
        Total Population:
      </TypographyH4>
      <TypographyP>
        {species.total_population}
      </TypographyP>

      <TypographyH4>
        Kingdom:
      </TypographyH4>
      <TypographyP>
        {species.kingdom}
      </TypographyP>

      <TypographyH4>
        Description:
      </TypographyH4>
      <TypographyP>
        {species.description}
      </TypographyP>

      </DialogContent>
    </Dialog>
  );

}
