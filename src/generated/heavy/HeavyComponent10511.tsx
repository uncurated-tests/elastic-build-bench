'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10511<T> = T extends (infer U)[]
  ? DeepReadonlyArray10511<U>
  : T extends object
  ? DeepReadonlyObject10511<T>
  : T;

interface DeepReadonlyArray10511<T> extends ReadonlyArray<DeepReadonly10511<T>> {}

type DeepReadonlyObject10511<T> = {
  readonly [P in keyof T]: DeepReadonly10511<T[P]>;
};

type UnionToIntersection10511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10511<T> = UnionToIntersection10511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10511<T extends unknown[], V> = [...T, V];

type TuplifyUnion10511<T, L = LastOf10511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10511<TuplifyUnion10511<Exclude<T, L>>, L>;

type DeepPartial10511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10511<T[P]> }
  : T;

type Paths10511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10511<K, Paths10511<T[K], Prev10511[D]>> : never }[keyof T]
  : never;

type Prev10511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10511 {
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

type ConfigPaths10511 = Paths10511<NestedConfig10511>;

interface HeavyProps10511 {
  config: DeepPartial10511<NestedConfig10511>;
  path?: ConfigPaths10511;
}

const HeavyComponent10511 = memo(function HeavyComponent10511({ config }: HeavyProps10511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10511.displayName = 'HeavyComponent10511';
export default HeavyComponent10511;
