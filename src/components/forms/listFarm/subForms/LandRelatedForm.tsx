import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FarmData, FarmType } from "@/types";
import ListFarmWrapper from "../ListFarmWrapper";

interface LandRelatedFormProps {
  farmType: FarmType;
  suitableCrops: string[];
  soilType: string;
  updateField: (fields: Partial<FarmData>) => void;
}

const LandRelatedForm = ({
  farmType,
  soilType,
  suitableCrops,
  updateField,
}: LandRelatedFormProps) => {
  return (
    <ListFarmWrapper title="Land Related Details">
      <Label>
        Farm Type
        <Input
          value={farmType}
          //TODO change it into organic non organic
          onChange={(e) => updateField({ farmType: "Organic" })}
        />
      </Label>
      <Label>
        Suitable Crops
        <Input
          value={suitableCrops}
          //TODO GIVE OPTION TO ADD CROPS
          onChange={(e) => updateField({ suitableCrops: [] })}
        />
      </Label>
      <Label>
        Soil Type
        <Input
          value={soilType}
          onChange={(e) => updateField({ soilType: e.target.value })}
        />
      </Label>
    </ListFarmWrapper>
  );
};

export default LandRelatedForm;
