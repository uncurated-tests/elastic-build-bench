'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3968<T> = T extends (infer U)[]
  ? DeepReadonlyArray3968<U>
  : T extends object
  ? DeepReadonlyObject3968<T>
  : T;

interface DeepReadonlyArray3968<T> extends ReadonlyArray<DeepReadonly3968<T>> {}

type DeepReadonlyObject3968<T> = {
  readonly [P in keyof T]: DeepReadonly3968<T[P]>;
};

type UnionToIntersection3968<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3968<T> = UnionToIntersection3968<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3968<T extends unknown[], V> = [...T, V];

type TuplifyUnion3968<T, L = LastOf3968<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3968<TuplifyUnion3968<Exclude<T, L>>, L>;

type DeepPartial3968<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3968<T[P]> }
  : T;

type Paths3968<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3968<K, Paths3968<T[K], Prev3968[D]>> : never }[keyof T]
  : never;

type Prev3968 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3968<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3968 {
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

type ConfigPaths3968 = Paths3968<NestedConfig3968>;

interface HeavyProps3968 {
  config: DeepPartial3968<NestedConfig3968>;
  path?: ConfigPaths3968;
}

const HeavyComponent3968 = memo(function HeavyComponent3968({ config }: HeavyProps3968) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3968) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3968 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3968: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3968.displayName = 'HeavyComponent3968';
export default HeavyComponent3968;
