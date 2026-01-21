'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3054<T> = T extends (infer U)[]
  ? DeepReadonlyArray3054<U>
  : T extends object
  ? DeepReadonlyObject3054<T>
  : T;

interface DeepReadonlyArray3054<T> extends ReadonlyArray<DeepReadonly3054<T>> {}

type DeepReadonlyObject3054<T> = {
  readonly [P in keyof T]: DeepReadonly3054<T[P]>;
};

type UnionToIntersection3054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3054<T> = UnionToIntersection3054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3054<T extends unknown[], V> = [...T, V];

type TuplifyUnion3054<T, L = LastOf3054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3054<TuplifyUnion3054<Exclude<T, L>>, L>;

type DeepPartial3054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3054<T[P]> }
  : T;

type Paths3054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3054<K, Paths3054<T[K], Prev3054[D]>> : never }[keyof T]
  : never;

type Prev3054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3054 {
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

type ConfigPaths3054 = Paths3054<NestedConfig3054>;

interface HeavyProps3054 {
  config: DeepPartial3054<NestedConfig3054>;
  path?: ConfigPaths3054;
}

const HeavyComponent3054 = memo(function HeavyComponent3054({ config }: HeavyProps3054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3054.displayName = 'HeavyComponent3054';
export default HeavyComponent3054;
