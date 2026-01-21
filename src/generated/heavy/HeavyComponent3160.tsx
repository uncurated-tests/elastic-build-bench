'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3160<T> = T extends (infer U)[]
  ? DeepReadonlyArray3160<U>
  : T extends object
  ? DeepReadonlyObject3160<T>
  : T;

interface DeepReadonlyArray3160<T> extends ReadonlyArray<DeepReadonly3160<T>> {}

type DeepReadonlyObject3160<T> = {
  readonly [P in keyof T]: DeepReadonly3160<T[P]>;
};

type UnionToIntersection3160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3160<T> = UnionToIntersection3160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3160<T extends unknown[], V> = [...T, V];

type TuplifyUnion3160<T, L = LastOf3160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3160<TuplifyUnion3160<Exclude<T, L>>, L>;

type DeepPartial3160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3160<T[P]> }
  : T;

type Paths3160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3160<K, Paths3160<T[K], Prev3160[D]>> : never }[keyof T]
  : never;

type Prev3160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3160 {
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

type ConfigPaths3160 = Paths3160<NestedConfig3160>;

interface HeavyProps3160 {
  config: DeepPartial3160<NestedConfig3160>;
  path?: ConfigPaths3160;
}

const HeavyComponent3160 = memo(function HeavyComponent3160({ config }: HeavyProps3160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3160.displayName = 'HeavyComponent3160';
export default HeavyComponent3160;
