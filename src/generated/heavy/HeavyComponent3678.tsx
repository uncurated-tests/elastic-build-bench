'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3678<T> = T extends (infer U)[]
  ? DeepReadonlyArray3678<U>
  : T extends object
  ? DeepReadonlyObject3678<T>
  : T;

interface DeepReadonlyArray3678<T> extends ReadonlyArray<DeepReadonly3678<T>> {}

type DeepReadonlyObject3678<T> = {
  readonly [P in keyof T]: DeepReadonly3678<T[P]>;
};

type UnionToIntersection3678<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3678<T> = UnionToIntersection3678<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3678<T extends unknown[], V> = [...T, V];

type TuplifyUnion3678<T, L = LastOf3678<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3678<TuplifyUnion3678<Exclude<T, L>>, L>;

type DeepPartial3678<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3678<T[P]> }
  : T;

type Paths3678<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3678<K, Paths3678<T[K], Prev3678[D]>> : never }[keyof T]
  : never;

type Prev3678 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3678<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3678 {
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

type ConfigPaths3678 = Paths3678<NestedConfig3678>;

interface HeavyProps3678 {
  config: DeepPartial3678<NestedConfig3678>;
  path?: ConfigPaths3678;
}

const HeavyComponent3678 = memo(function HeavyComponent3678({ config }: HeavyProps3678) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3678) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3678 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3678: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3678.displayName = 'HeavyComponent3678';
export default HeavyComponent3678;
