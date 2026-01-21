'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3495<T> = T extends (infer U)[]
  ? DeepReadonlyArray3495<U>
  : T extends object
  ? DeepReadonlyObject3495<T>
  : T;

interface DeepReadonlyArray3495<T> extends ReadonlyArray<DeepReadonly3495<T>> {}

type DeepReadonlyObject3495<T> = {
  readonly [P in keyof T]: DeepReadonly3495<T[P]>;
};

type UnionToIntersection3495<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3495<T> = UnionToIntersection3495<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3495<T extends unknown[], V> = [...T, V];

type TuplifyUnion3495<T, L = LastOf3495<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3495<TuplifyUnion3495<Exclude<T, L>>, L>;

type DeepPartial3495<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3495<T[P]> }
  : T;

type Paths3495<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3495<K, Paths3495<T[K], Prev3495[D]>> : never }[keyof T]
  : never;

type Prev3495 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3495<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3495 {
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

type ConfigPaths3495 = Paths3495<NestedConfig3495>;

interface HeavyProps3495 {
  config: DeepPartial3495<NestedConfig3495>;
  path?: ConfigPaths3495;
}

const HeavyComponent3495 = memo(function HeavyComponent3495({ config }: HeavyProps3495) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3495) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3495 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3495: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3495.displayName = 'HeavyComponent3495';
export default HeavyComponent3495;
