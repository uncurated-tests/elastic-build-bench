'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3125<T> = T extends (infer U)[]
  ? DeepReadonlyArray3125<U>
  : T extends object
  ? DeepReadonlyObject3125<T>
  : T;

interface DeepReadonlyArray3125<T> extends ReadonlyArray<DeepReadonly3125<T>> {}

type DeepReadonlyObject3125<T> = {
  readonly [P in keyof T]: DeepReadonly3125<T[P]>;
};

type UnionToIntersection3125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3125<T> = UnionToIntersection3125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3125<T extends unknown[], V> = [...T, V];

type TuplifyUnion3125<T, L = LastOf3125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3125<TuplifyUnion3125<Exclude<T, L>>, L>;

type DeepPartial3125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3125<T[P]> }
  : T;

type Paths3125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3125<K, Paths3125<T[K], Prev3125[D]>> : never }[keyof T]
  : never;

type Prev3125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3125 {
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

type ConfigPaths3125 = Paths3125<NestedConfig3125>;

interface HeavyProps3125 {
  config: DeepPartial3125<NestedConfig3125>;
  path?: ConfigPaths3125;
}

const HeavyComponent3125 = memo(function HeavyComponent3125({ config }: HeavyProps3125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3125.displayName = 'HeavyComponent3125';
export default HeavyComponent3125;
