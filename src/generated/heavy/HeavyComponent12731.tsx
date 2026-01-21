'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12731<T> = T extends (infer U)[]
  ? DeepReadonlyArray12731<U>
  : T extends object
  ? DeepReadonlyObject12731<T>
  : T;

interface DeepReadonlyArray12731<T> extends ReadonlyArray<DeepReadonly12731<T>> {}

type DeepReadonlyObject12731<T> = {
  readonly [P in keyof T]: DeepReadonly12731<T[P]>;
};

type UnionToIntersection12731<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12731<T> = UnionToIntersection12731<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12731<T extends unknown[], V> = [...T, V];

type TuplifyUnion12731<T, L = LastOf12731<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12731<TuplifyUnion12731<Exclude<T, L>>, L>;

type DeepPartial12731<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12731<T[P]> }
  : T;

type Paths12731<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12731<K, Paths12731<T[K], Prev12731[D]>> : never }[keyof T]
  : never;

type Prev12731 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12731<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12731 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths12731 = Paths12731<NestedConfig12731>;

interface HeavyProps12731 {
  config: DeepPartial12731<NestedConfig12731>;
  path?: ConfigPaths12731;
}

const HeavyComponent12731 = memo(function HeavyComponent12731({ config }: HeavyProps12731) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12731) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12731 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12731: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12731.displayName = 'HeavyComponent12731';
export default HeavyComponent12731;
