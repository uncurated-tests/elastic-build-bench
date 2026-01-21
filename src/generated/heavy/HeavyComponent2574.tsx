'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2574<T> = T extends (infer U)[]
  ? DeepReadonlyArray2574<U>
  : T extends object
  ? DeepReadonlyObject2574<T>
  : T;

interface DeepReadonlyArray2574<T> extends ReadonlyArray<DeepReadonly2574<T>> {}

type DeepReadonlyObject2574<T> = {
  readonly [P in keyof T]: DeepReadonly2574<T[P]>;
};

type UnionToIntersection2574<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2574<T> = UnionToIntersection2574<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2574<T extends unknown[], V> = [...T, V];

type TuplifyUnion2574<T, L = LastOf2574<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2574<TuplifyUnion2574<Exclude<T, L>>, L>;

type DeepPartial2574<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2574<T[P]> }
  : T;

type Paths2574<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2574<K, Paths2574<T[K], Prev2574[D]>> : never }[keyof T]
  : never;

type Prev2574 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2574<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2574 {
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

type ConfigPaths2574 = Paths2574<NestedConfig2574>;

interface HeavyProps2574 {
  config: DeepPartial2574<NestedConfig2574>;
  path?: ConfigPaths2574;
}

const HeavyComponent2574 = memo(function HeavyComponent2574({ config }: HeavyProps2574) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2574) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2574 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2574: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2574.displayName = 'HeavyComponent2574';
export default HeavyComponent2574;
