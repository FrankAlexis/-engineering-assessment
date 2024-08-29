import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { FoodTruck } from '@/app/types/foodTruck';

export default async function handler(req: NextApiRequest, res: NextApiResponse<FoodTruck[]>) {
  const filePath = path.resolve(process.cwd(), 'public', 'food_trucks.csv');
  const results: FoodTruck[] = [];
  
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row: any) => results.push({
      id: row.id,
      name: row.name,
      address: row.address,
      latitude: parseFloat(row.latitude),
      longitude: parseFloat(row.longitude),
    }))
    .on('end', () => {
      res.status(200).json(results);
    });
}
