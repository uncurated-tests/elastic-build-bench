'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3402<T> = T extends (infer U)[]
  ? DeepReadonlyArray3402<U>
  : T extends object
  ? DeepReadonlyObject3402<T>
  : T;

interface DeepReadonlyArray3402<T> extends ReadonlyArray<DeepReadonly3402<T>> {}

type DeepReadonlyObject3402<T> = {
  readonly [P in keyof T]: DeepReadonly3402<T[P]>;
};

type UnionToIntersection3402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3402<T> = UnionToIntersection3402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3402<T extends unknown[], V> = [...T, V];

type TuplifyUnion3402<T, L = LastOf3402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3402<TuplifyUnion3402<Exclude<T, L>>, L>;

type DeepPartial3402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3402<T[P]> }
  : T;

type Paths3402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3402<K, Paths3402<T[K], Prev3402[D]>> : never }[keyof T]
  : never;

type Prev3402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3402 {
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

type ConfigPaths3402 = Paths3402<NestedConfig3402>;

interface HeavyProps3402 {
  config: DeepPartial3402<NestedConfig3402>;
  path?: ConfigPaths3402;
}

const HeavyComponent3402 = memo(function HeavyComponent3402({ config }: HeavyProps3402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3402.displayName = 'HeavyComponent3402';
export default HeavyComponent3402;
