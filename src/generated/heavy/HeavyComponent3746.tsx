'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3746<T> = T extends (infer U)[]
  ? DeepReadonlyArray3746<U>
  : T extends object
  ? DeepReadonlyObject3746<T>
  : T;

interface DeepReadonlyArray3746<T> extends ReadonlyArray<DeepReadonly3746<T>> {}

type DeepReadonlyObject3746<T> = {
  readonly [P in keyof T]: DeepReadonly3746<T[P]>;
};

type UnionToIntersection3746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3746<T> = UnionToIntersection3746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3746<T extends unknown[], V> = [...T, V];

type TuplifyUnion3746<T, L = LastOf3746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3746<TuplifyUnion3746<Exclude<T, L>>, L>;

type DeepPartial3746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3746<T[P]> }
  : T;

type Paths3746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3746<K, Paths3746<T[K], Prev3746[D]>> : never }[keyof T]
  : never;

type Prev3746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3746 {
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

type ConfigPaths3746 = Paths3746<NestedConfig3746>;

interface HeavyProps3746 {
  config: DeepPartial3746<NestedConfig3746>;
  path?: ConfigPaths3746;
}

const HeavyComponent3746 = memo(function HeavyComponent3746({ config }: HeavyProps3746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3746.displayName = 'HeavyComponent3746';
export default HeavyComponent3746;
