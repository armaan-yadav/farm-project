import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FarmData } from "@/types";
import ListFarmWrapper from "../ListFarmWrapper";

interface LocationRelatedFormProps {
  location: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  landmarks?: string;
  duration: string;
  updateField: (fields: Partial<FarmData>) => void;
}

const LocationRelatedForm = ({
  address,
  city,
  duration,
  location,
  pinCode,
  state,
  landmarks,
  updateField,
}: LocationRelatedFormProps) => {
  return (
    <ListFarmWrapper title="Location Related Details">
      <Label>
        Location
        <Input
          value={location}
          onChange={(e) => updateField({ location: e.target.value })}
        />
      </Label>
      <Label>
        Address
        <Input
          value={address}
          onChange={(e) => updateField({ address: e.target.value })}
        />
      </Label>
      <Label>
        City
        <Input
          value={city}
          onChange={(e) => updateField({ city: e.target.value })}
        />
      </Label>
      <Label>
        State
        <Input
          value={state}
          onChange={(e) => updateField({ state: e.target.value })}
        />
      </Label>
      <Label>
        Pin Code
        <Input
          value={pinCode}
          onChange={(e) => updateField({ pinCode: e.target.value })}
        />
      </Label>
      <Label>
        Landmarks
        <Input
          value={landmarks}
          onChange={(e) => updateField({ landmarks: e.target.value })}
        />
      </Label>
      <Label>
        Duration
        <Input
          value={duration}
          onChange={(e) => updateField({ duration: e.target.value })}
        />
      </Label>
    </ListFarmWrapper>
  );
};

export default LocationRelatedForm;
