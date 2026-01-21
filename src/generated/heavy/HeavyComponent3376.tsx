'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3376<T> = T extends (infer U)[]
  ? DeepReadonlyArray3376<U>
  : T extends object
  ? DeepReadonlyObject3376<T>
  : T;

interface DeepReadonlyArray3376<T> extends ReadonlyArray<DeepReadonly3376<T>> {}

type DeepReadonlyObject3376<T> = {
  readonly [P in keyof T]: DeepReadonly3376<T[P]>;
};

type UnionToIntersection3376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3376<T> = UnionToIntersection3376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3376<T extends unknown[], V> = [...T, V];

type TuplifyUnion3376<T, L = LastOf3376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3376<TuplifyUnion3376<Exclude<T, L>>, L>;

type DeepPartial3376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3376<T[P]> }
  : T;

type Paths3376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3376<K, Paths3376<T[K], Prev3376[D]>> : never }[keyof T]
  : never;

type Prev3376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3376 {
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

type ConfigPaths3376 = Paths3376<NestedConfig3376>;

interface HeavyProps3376 {
  config: DeepPartial3376<NestedConfig3376>;
  path?: ConfigPaths3376;
}

const HeavyComponent3376 = memo(function HeavyComponent3376({ config }: HeavyProps3376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3376.displayName = 'HeavyComponent3376';
export default HeavyComponent3376;
