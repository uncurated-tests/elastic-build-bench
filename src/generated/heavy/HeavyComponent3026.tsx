'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3026<T> = T extends (infer U)[]
  ? DeepReadonlyArray3026<U>
  : T extends object
  ? DeepReadonlyObject3026<T>
  : T;

interface DeepReadonlyArray3026<T> extends ReadonlyArray<DeepReadonly3026<T>> {}

type DeepReadonlyObject3026<T> = {
  readonly [P in keyof T]: DeepReadonly3026<T[P]>;
};

type UnionToIntersection3026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3026<T> = UnionToIntersection3026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3026<T extends unknown[], V> = [...T, V];

type TuplifyUnion3026<T, L = LastOf3026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3026<TuplifyUnion3026<Exclude<T, L>>, L>;

type DeepPartial3026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3026<T[P]> }
  : T;

type Paths3026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3026<K, Paths3026<T[K], Prev3026[D]>> : never }[keyof T]
  : never;

type Prev3026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3026 {
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

type ConfigPaths3026 = Paths3026<NestedConfig3026>;

interface HeavyProps3026 {
  config: DeepPartial3026<NestedConfig3026>;
  path?: ConfigPaths3026;
}

const HeavyComponent3026 = memo(function HeavyComponent3026({ config }: HeavyProps3026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3026.displayName = 'HeavyComponent3026';
export default HeavyComponent3026;
