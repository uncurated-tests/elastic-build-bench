'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3075<T> = T extends (infer U)[]
  ? DeepReadonlyArray3075<U>
  : T extends object
  ? DeepReadonlyObject3075<T>
  : T;

interface DeepReadonlyArray3075<T> extends ReadonlyArray<DeepReadonly3075<T>> {}

type DeepReadonlyObject3075<T> = {
  readonly [P in keyof T]: DeepReadonly3075<T[P]>;
};

type UnionToIntersection3075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3075<T> = UnionToIntersection3075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3075<T extends unknown[], V> = [...T, V];

type TuplifyUnion3075<T, L = LastOf3075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3075<TuplifyUnion3075<Exclude<T, L>>, L>;

type DeepPartial3075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3075<T[P]> }
  : T;

type Paths3075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3075<K, Paths3075<T[K], Prev3075[D]>> : never }[keyof T]
  : never;

type Prev3075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3075 {
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

type ConfigPaths3075 = Paths3075<NestedConfig3075>;

interface HeavyProps3075 {
  config: DeepPartial3075<NestedConfig3075>;
  path?: ConfigPaths3075;
}

const HeavyComponent3075 = memo(function HeavyComponent3075({ config }: HeavyProps3075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3075.displayName = 'HeavyComponent3075';
export default HeavyComponent3075;
