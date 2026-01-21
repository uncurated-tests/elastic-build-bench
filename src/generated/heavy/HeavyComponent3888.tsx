'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3888<T> = T extends (infer U)[]
  ? DeepReadonlyArray3888<U>
  : T extends object
  ? DeepReadonlyObject3888<T>
  : T;

interface DeepReadonlyArray3888<T> extends ReadonlyArray<DeepReadonly3888<T>> {}

type DeepReadonlyObject3888<T> = {
  readonly [P in keyof T]: DeepReadonly3888<T[P]>;
};

type UnionToIntersection3888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3888<T> = UnionToIntersection3888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3888<T extends unknown[], V> = [...T, V];

type TuplifyUnion3888<T, L = LastOf3888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3888<TuplifyUnion3888<Exclude<T, L>>, L>;

type DeepPartial3888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3888<T[P]> }
  : T;

type Paths3888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3888<K, Paths3888<T[K], Prev3888[D]>> : never }[keyof T]
  : never;

type Prev3888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3888 {
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

type ConfigPaths3888 = Paths3888<NestedConfig3888>;

interface HeavyProps3888 {
  config: DeepPartial3888<NestedConfig3888>;
  path?: ConfigPaths3888;
}

const HeavyComponent3888 = memo(function HeavyComponent3888({ config }: HeavyProps3888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3888.displayName = 'HeavyComponent3888';
export default HeavyComponent3888;
