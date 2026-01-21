'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3170<T> = T extends (infer U)[]
  ? DeepReadonlyArray3170<U>
  : T extends object
  ? DeepReadonlyObject3170<T>
  : T;

interface DeepReadonlyArray3170<T> extends ReadonlyArray<DeepReadonly3170<T>> {}

type DeepReadonlyObject3170<T> = {
  readonly [P in keyof T]: DeepReadonly3170<T[P]>;
};

type UnionToIntersection3170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3170<T> = UnionToIntersection3170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3170<T extends unknown[], V> = [...T, V];

type TuplifyUnion3170<T, L = LastOf3170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3170<TuplifyUnion3170<Exclude<T, L>>, L>;

type DeepPartial3170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3170<T[P]> }
  : T;

type Paths3170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3170<K, Paths3170<T[K], Prev3170[D]>> : never }[keyof T]
  : never;

type Prev3170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3170 {
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

type ConfigPaths3170 = Paths3170<NestedConfig3170>;

interface HeavyProps3170 {
  config: DeepPartial3170<NestedConfig3170>;
  path?: ConfigPaths3170;
}

const HeavyComponent3170 = memo(function HeavyComponent3170({ config }: HeavyProps3170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3170.displayName = 'HeavyComponent3170';
export default HeavyComponent3170;
