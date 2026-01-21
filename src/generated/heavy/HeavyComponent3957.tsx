'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3957<T> = T extends (infer U)[]
  ? DeepReadonlyArray3957<U>
  : T extends object
  ? DeepReadonlyObject3957<T>
  : T;

interface DeepReadonlyArray3957<T> extends ReadonlyArray<DeepReadonly3957<T>> {}

type DeepReadonlyObject3957<T> = {
  readonly [P in keyof T]: DeepReadonly3957<T[P]>;
};

type UnionToIntersection3957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3957<T> = UnionToIntersection3957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3957<T extends unknown[], V> = [...T, V];

type TuplifyUnion3957<T, L = LastOf3957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3957<TuplifyUnion3957<Exclude<T, L>>, L>;

type DeepPartial3957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3957<T[P]> }
  : T;

type Paths3957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3957<K, Paths3957<T[K], Prev3957[D]>> : never }[keyof T]
  : never;

type Prev3957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3957 {
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

type ConfigPaths3957 = Paths3957<NestedConfig3957>;

interface HeavyProps3957 {
  config: DeepPartial3957<NestedConfig3957>;
  path?: ConfigPaths3957;
}

const HeavyComponent3957 = memo(function HeavyComponent3957({ config }: HeavyProps3957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3957.displayName = 'HeavyComponent3957';
export default HeavyComponent3957;
