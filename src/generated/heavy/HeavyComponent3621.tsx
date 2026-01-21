'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3621<T> = T extends (infer U)[]
  ? DeepReadonlyArray3621<U>
  : T extends object
  ? DeepReadonlyObject3621<T>
  : T;

interface DeepReadonlyArray3621<T> extends ReadonlyArray<DeepReadonly3621<T>> {}

type DeepReadonlyObject3621<T> = {
  readonly [P in keyof T]: DeepReadonly3621<T[P]>;
};

type UnionToIntersection3621<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3621<T> = UnionToIntersection3621<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3621<T extends unknown[], V> = [...T, V];

type TuplifyUnion3621<T, L = LastOf3621<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3621<TuplifyUnion3621<Exclude<T, L>>, L>;

type DeepPartial3621<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3621<T[P]> }
  : T;

type Paths3621<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3621<K, Paths3621<T[K], Prev3621[D]>> : never }[keyof T]
  : never;

type Prev3621 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3621<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3621 {
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

type ConfigPaths3621 = Paths3621<NestedConfig3621>;

interface HeavyProps3621 {
  config: DeepPartial3621<NestedConfig3621>;
  path?: ConfigPaths3621;
}

const HeavyComponent3621 = memo(function HeavyComponent3621({ config }: HeavyProps3621) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3621) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3621 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3621: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3621.displayName = 'HeavyComponent3621';
export default HeavyComponent3621;
