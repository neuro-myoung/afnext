"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PriceTable = () => {
  const [isToggled, setIsToggled] = useState(false);

  const coloredPencils = <div className="w-full h-full">
      <Table className="w-full h-full border-1">
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg text-white font-bold border-1 border-black bg-[#e93e68]">Size</TableHead>
            <TableHead className="text-lg text-white font-bold border-1 border-black bg-[#e93e68]">Pets</TableHead>
            <TableHead className="text-lg text-white font-bold border-1 border-black bg-[#e93e68]">People</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">5x7</TableCell>
            <TableCell className="text-md border-1 border-black">$210</TableCell>
            <TableCell className="text-md border-1 border-black">$230</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">8x10</TableCell>
            <TableCell className="text-md border-1 border-black">$400</TableCell>
            <TableCell className="text-md border-1 border-black">$430</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">9x12</TableCell>
            <TableCell className="text-md border-1 border-black">$470</TableCell>
            <TableCell className="text-md border-1 border-black">$510</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">11x14</TableCell>
            <TableCell className="text-md border-1 border-black">$570</TableCell>
            <TableCell className="text-md border-1 border-black">$630</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">12x16</TableCell>
            <TableCell className="text-md border-1 border-black">$720</TableCell>
            <TableCell className="text-md border-1 border-black">$790</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">16x20</TableCell>
            <TableCell className="text-md border-1 border-black">$940</TableCell>
            <TableCell className="text-md border-1 border-black">$1020</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">18x24</TableCell>
            <TableCell className="text-md border-1 border-black">$1200</TableCell>
            <TableCell className="text-md border-1 border-black">$1340</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>

const graphite = <div className="w-full h-full">
      <Table className="w-full h-full border-1">
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg text-white font-bold border-1 border-black bg-[#4e4e4e]">Size</TableHead>
            <TableHead className="text-lg text-white font-bold border-1 border-black bg-[#4e4e4e]">Pets</TableHead>
            <TableHead className="text-lg text-white font-bold border-1 border-black bg-[#4e4e4e]">People</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">5x7</TableCell>
            <TableCell className="text-md border-1 border-black">$170</TableCell>
            <TableCell className="text-md border-1 border-black">$190</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">8x10</TableCell>
            <TableCell className="text-md border-1 border-black">$330</TableCell>
            <TableCell className="text-md border-1 border-black">$360</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">9x12</TableCell>
            <TableCell className="text-md border-1 border-black">$410</TableCell>
            <TableCell className="text-md border-1 border-black">$440</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">11x14</TableCell>
            <TableCell className="text-md border-1 border-black">$510</TableCell>
            <TableCell className="text-md border-1 border-black">$560</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">12x16</TableCell>
            <TableCell className="text-md border-1 border-black">$640</TableCell>
            <TableCell className="text-md border-1 border-black">$700</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">16x20</TableCell>
            <TableCell className="text-md border-1 border-black">$890</TableCell>
            <TableCell className="text-md border-1 border-black">$920</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg border-1 border-black">18x24</TableCell>
            <TableCell className="text-md border-1 border-black">$1090</TableCell>
            <TableCell className="text-md border-1 border-black">$1190</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-6 max-w-[500px]">
      <div className="flex gap-6">
        <span>
          <h2 className="text-[1.2rem]"> Colored Pencil </h2>
        </span>
        <Switch id="content-switch" className="h-6 w-20"
          checked={isToggled}
          onCheckedChange={(checked) => {
            setIsToggled(checked);
          }}>
        </Switch>
        <span>
          <h2 className="text-[1.2rem]"> Graphite </h2>
        </span>
      </div>
      {isToggled ?  graphite : coloredPencils}
      
    </div>
  );
};

export default PriceTable;
