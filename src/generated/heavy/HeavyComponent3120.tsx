'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3120<T> = T extends (infer U)[]
  ? DeepReadonlyArray3120<U>
  : T extends object
  ? DeepReadonlyObject3120<T>
  : T;

interface DeepReadonlyArray3120<T> extends ReadonlyArray<DeepReadonly3120<T>> {}

type DeepReadonlyObject3120<T> = {
  readonly [P in keyof T]: DeepReadonly3120<T[P]>;
};

type UnionToIntersection3120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3120<T> = UnionToIntersection3120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3120<T extends unknown[], V> = [...T, V];

type TuplifyUnion3120<T, L = LastOf3120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3120<TuplifyUnion3120<Exclude<T, L>>, L>;

type DeepPartial3120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3120<T[P]> }
  : T;

type Paths3120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3120<K, Paths3120<T[K], Prev3120[D]>> : never }[keyof T]
  : never;

type Prev3120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3120 {
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

type ConfigPaths3120 = Paths3120<NestedConfig3120>;

interface HeavyProps3120 {
  config: DeepPartial3120<NestedConfig3120>;
  path?: ConfigPaths3120;
}

const HeavyComponent3120 = memo(function HeavyComponent3120({ config }: HeavyProps3120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3120.displayName = 'HeavyComponent3120';
export default HeavyComponent3120;
