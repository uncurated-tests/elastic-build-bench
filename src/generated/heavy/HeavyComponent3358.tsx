'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3358<T> = T extends (infer U)[]
  ? DeepReadonlyArray3358<U>
  : T extends object
  ? DeepReadonlyObject3358<T>
  : T;

interface DeepReadonlyArray3358<T> extends ReadonlyArray<DeepReadonly3358<T>> {}

type DeepReadonlyObject3358<T> = {
  readonly [P in keyof T]: DeepReadonly3358<T[P]>;
};

type UnionToIntersection3358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3358<T> = UnionToIntersection3358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3358<T extends unknown[], V> = [...T, V];

type TuplifyUnion3358<T, L = LastOf3358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3358<TuplifyUnion3358<Exclude<T, L>>, L>;

type DeepPartial3358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3358<T[P]> }
  : T;

type Paths3358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3358<K, Paths3358<T[K], Prev3358[D]>> : never }[keyof T]
  : never;

type Prev3358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3358 {
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

type ConfigPaths3358 = Paths3358<NestedConfig3358>;

interface HeavyProps3358 {
  config: DeepPartial3358<NestedConfig3358>;
  path?: ConfigPaths3358;
}

const HeavyComponent3358 = memo(function HeavyComponent3358({ config }: HeavyProps3358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3358.displayName = 'HeavyComponent3358';
export default HeavyComponent3358;
