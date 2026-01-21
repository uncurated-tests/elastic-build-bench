'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3940<T> = T extends (infer U)[]
  ? DeepReadonlyArray3940<U>
  : T extends object
  ? DeepReadonlyObject3940<T>
  : T;

interface DeepReadonlyArray3940<T> extends ReadonlyArray<DeepReadonly3940<T>> {}

type DeepReadonlyObject3940<T> = {
  readonly [P in keyof T]: DeepReadonly3940<T[P]>;
};

type UnionToIntersection3940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3940<T> = UnionToIntersection3940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3940<T extends unknown[], V> = [...T, V];

type TuplifyUnion3940<T, L = LastOf3940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3940<TuplifyUnion3940<Exclude<T, L>>, L>;

type DeepPartial3940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3940<T[P]> }
  : T;

type Paths3940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3940<K, Paths3940<T[K], Prev3940[D]>> : never }[keyof T]
  : never;

type Prev3940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3940 {
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

type ConfigPaths3940 = Paths3940<NestedConfig3940>;

interface HeavyProps3940 {
  config: DeepPartial3940<NestedConfig3940>;
  path?: ConfigPaths3940;
}

const HeavyComponent3940 = memo(function HeavyComponent3940({ config }: HeavyProps3940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3940.displayName = 'HeavyComponent3940';
export default HeavyComponent3940;
