"use client";

import { useMemo, useState } from "react";

type Option = {
  label: string;
  value: string;
};

type VehicleFiltersBarProps = {
  total: number;
  brands?: Option[];
  models?: Option[];
  fuels?: Option[];
  transmissions?: Option[];
};

function formatNumber(value: number) {
  return value.toLocaleString("pt-PT");
}

function DualRange({
  label,
  min,
  max,
  step = 1,
  valueMin,
  valueMax,
  onChangeMin,
  onChangeMax,
}: {
  label: string;
  min: number;
  max: number;
  step?: number;
  valueMin: number;
  valueMax: number;
  onChangeMin: (value: number) => void;
  onChangeMax: (value: number) => void;
}) {
  const minPercent = ((valueMin - min) / (max - min)) * 100;
  const maxPercent = ((valueMax - min) / (max - min)) * 100;

  const trackStyle = useMemo(
    () => ({
      background: `linear-gradient(to right,
        rgba(255,255,255,0.22) 0%,
        rgba(255,255,255,0.22) ${minPercent}%,
        white ${minPercent}%,
        white ${maxPercent}%,
        rgba(255,255,255,0.22) ${maxPercent}%,
        rgba(255,255,255,0.22) 100%)`,
    }),
    [minPercent, maxPercent]
  );

  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center justify-between text-sm text-white/90">
        <span>{formatNumber(valueMin)}</span>
        <span className="font-semibold">{label}</span>
        <span>{formatNumber(valueMax)}</span>
      </div>

      <div className="relative h-10">
        <div
          className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full"
          style={trackStyle}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={valueMin}
          onChange={(e) =>
            onChangeMin(Math.min(Number(e.target.value), valueMax - step))
          }
          className="pointer-events-none absolute h-10 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-white"
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={valueMax}
          onChange={(e) =>
            onChangeMax(Math.max(Number(e.target.value), valueMin + step))
          }
          className="pointer-events-none absolute h-10 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-white"
        />
      </div>
    </div>
  );
}

export function VehicleFiltersBar({
  total,
  brands = [],
  models = [],
  fuels = [],
  transmissions = [],
}: VehicleFiltersBarProps) {
  const [priceMin, setPriceMin] = useState(4500);
  const [priceMax, setPriceMax] = useState(48000);

  const [yearMin, setYearMin] = useState(2008);
  const [yearMax, setYearMax] = useState(2024);

  const [kmMin, setKmMin] = useState(0);
  const [kmMax, setKmMax] = useState(565500);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900/70 p-4 shadow-2xl backdrop-blur md:p-6">
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr_1fr_220px_160px]">
        <DualRange
          label="Preço"
          min={4500}
          max={48000}
          step={500}
          valueMin={priceMin}
          valueMax={priceMax}
          onChangeMin={setPriceMin}
          onChangeMax={setPriceMax}
        />

        <DualRange
          label="Ano"
          min={2008}
          max={2024}
          step={1}
          valueMin={yearMin}
          valueMax={yearMax}
          onChangeMin={setYearMin}
          onChangeMax={setYearMax}
        />

        <DualRange
          label="Kms"
          min={0}
          max={565500}
          step={1000}
          valueMin={kmMin}
          valueMax={kmMax}
          onChangeMin={setKmMin}
          onChangeMax={setKmMax}
        />

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Ordenar
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-12 w-full rounded-full border border-white/15 bg-white px-4 text-sm text-zinc-900 outline-none"
          >
            <option value="">-- ORDER --</option>
            <option value="price-asc">Preço ascendente</option>
            <option value="price-desc">Preço descendente</option>
            <option value="year-desc">Ano mais recente</option>
            <option value="km-asc">Menos kms</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            className="h-12 w-full rounded-full bg-black px-5 text-sm font-semibold text-white"
          >
            {total} Viaturas
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Marca
          </label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="h-11 w-full rounded-xl border border-white/15 bg-white px-4 text-sm text-zinc-900 outline-none"
          >
            <option value="">Marca</option>
            {brands.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Modelo
          </label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="h-11 w-full rounded-xl border border-white/15 bg-white px-4 text-sm text-zinc-900 outline-none"
          >
            <option value="">Modelo</option>
            {models.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Combustível
          </label>
          <select
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            className="h-11 w-full rounded-xl border border-white/15 bg-white px-4 text-sm text-zinc-900 outline-none"
          >
            <option value="">Combustível</option>
            {fuels.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Transmissão
          </label>
          <select
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className="h-11 w-full rounded-xl border border-white/15 bg-white px-4 text-sm text-zinc-900 outline-none"
          >
            <option value="">Transmissão</option>
            {transmissions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Texto a pesquisar
          </label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Texto"
            className="h-11 w-full rounded-full border border-white/15 bg-white px-4 text-sm text-zinc-900 outline-none"
          />
        </div>
      </div>
    </section>
  );
}