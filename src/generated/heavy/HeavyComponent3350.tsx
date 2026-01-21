'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3350<T> = T extends (infer U)[]
  ? DeepReadonlyArray3350<U>
  : T extends object
  ? DeepReadonlyObject3350<T>
  : T;

interface DeepReadonlyArray3350<T> extends ReadonlyArray<DeepReadonly3350<T>> {}

type DeepReadonlyObject3350<T> = {
  readonly [P in keyof T]: DeepReadonly3350<T[P]>;
};

type UnionToIntersection3350<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3350<T> = UnionToIntersection3350<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3350<T extends unknown[], V> = [...T, V];

type TuplifyUnion3350<T, L = LastOf3350<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3350<TuplifyUnion3350<Exclude<T, L>>, L>;

type DeepPartial3350<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3350<T[P]> }
  : T;

type Paths3350<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3350<K, Paths3350<T[K], Prev3350[D]>> : never }[keyof T]
  : never;

type Prev3350 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3350<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3350 {
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

type ConfigPaths3350 = Paths3350<NestedConfig3350>;

interface HeavyProps3350 {
  config: DeepPartial3350<NestedConfig3350>;
  path?: ConfigPaths3350;
}

const HeavyComponent3350 = memo(function HeavyComponent3350({ config }: HeavyProps3350) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3350) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3350 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3350: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3350.displayName = 'HeavyComponent3350';
export default HeavyComponent3350;
