'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3871<T> = T extends (infer U)[]
  ? DeepReadonlyArray3871<U>
  : T extends object
  ? DeepReadonlyObject3871<T>
  : T;

interface DeepReadonlyArray3871<T> extends ReadonlyArray<DeepReadonly3871<T>> {}

type DeepReadonlyObject3871<T> = {
  readonly [P in keyof T]: DeepReadonly3871<T[P]>;
};

type UnionToIntersection3871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3871<T> = UnionToIntersection3871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3871<T extends unknown[], V> = [...T, V];

type TuplifyUnion3871<T, L = LastOf3871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3871<TuplifyUnion3871<Exclude<T, L>>, L>;

type DeepPartial3871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3871<T[P]> }
  : T;

type Paths3871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3871<K, Paths3871<T[K], Prev3871[D]>> : never }[keyof T]
  : never;

type Prev3871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3871 {
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

type ConfigPaths3871 = Paths3871<NestedConfig3871>;

interface HeavyProps3871 {
  config: DeepPartial3871<NestedConfig3871>;
  path?: ConfigPaths3871;
}

const HeavyComponent3871 = memo(function HeavyComponent3871({ config }: HeavyProps3871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3871.displayName = 'HeavyComponent3871';
export default HeavyComponent3871;
