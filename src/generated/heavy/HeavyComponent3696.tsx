'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3696<T> = T extends (infer U)[]
  ? DeepReadonlyArray3696<U>
  : T extends object
  ? DeepReadonlyObject3696<T>
  : T;

interface DeepReadonlyArray3696<T> extends ReadonlyArray<DeepReadonly3696<T>> {}

type DeepReadonlyObject3696<T> = {
  readonly [P in keyof T]: DeepReadonly3696<T[P]>;
};

type UnionToIntersection3696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3696<T> = UnionToIntersection3696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3696<T extends unknown[], V> = [...T, V];

type TuplifyUnion3696<T, L = LastOf3696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3696<TuplifyUnion3696<Exclude<T, L>>, L>;

type DeepPartial3696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3696<T[P]> }
  : T;

type Paths3696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3696<K, Paths3696<T[K], Prev3696[D]>> : never }[keyof T]
  : never;

type Prev3696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3696 {
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

type ConfigPaths3696 = Paths3696<NestedConfig3696>;

interface HeavyProps3696 {
  config: DeepPartial3696<NestedConfig3696>;
  path?: ConfigPaths3696;
}

const HeavyComponent3696 = memo(function HeavyComponent3696({ config }: HeavyProps3696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3696.displayName = 'HeavyComponent3696';
export default HeavyComponent3696;
