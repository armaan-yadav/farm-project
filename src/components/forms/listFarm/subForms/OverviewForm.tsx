import InputImageAndPreview from "@/components/shared/InputImageAndPreview";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FarmData } from "@/types";
import { useState } from "react";
import ListFarmWrapper from "../ListFarmWrapper";

interface OverviewFormProps {
  title: string;
  media: string[];
  area: string;
  areaUnit: string;
  ownership: string;
  description: string;
  price: number;
  updateField: (fields: Partial<FarmData>) => void;
}

const OverviewForm = ({
  title,
  media,
  area,
  areaUnit,
  ownership,
  description,
  price,
  updateField,
}: OverviewFormProps) => {
  const [images, setImages] = useState<string[]>([]);

  return (
    <ListFarmWrapper title="Overview">
      <Label>
        Title
        <Input
          minLength={3}
          required
          value={title}
          onChange={(e) => updateField({ title: e.target.value })}
        />
      </Label>
      <div>
        <Label>Media</Label>
        <InputImageAndPreview imageUrls={images} setImageUrls={setImages} />
      </div>
      <Label>
        Area
        <Input
          value={area}
          onChange={(e) => updateField({ area: e.target.value })}
        />
      </Label>
      <Label>
        Area Unit
        <Input
          value={areaUnit}
          onChange={(e) => updateField({ areaUnit: e.target.value })}
        />
      </Label>
      <Label>
        Ownership
        <Input
          value={ownership}
          onChange={(e) => updateField({ ownership: e.target.value })}
        />
      </Label>
      <Label>
        Price
        <Input
          value={price}
          type="number"
          onChange={(e) => updateField({ price: Number(e.target.value) })}
        />
      </Label>
      <Label>
        Description
        <Input
          value={description}
          onChange={(e) => updateField({ description: e.target.value })}
        />
      </Label>
    </ListFarmWrapper>
  );
};

export default OverviewForm;
