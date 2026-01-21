'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3997<T> = T extends (infer U)[]
  ? DeepReadonlyArray3997<U>
  : T extends object
  ? DeepReadonlyObject3997<T>
  : T;

interface DeepReadonlyArray3997<T> extends ReadonlyArray<DeepReadonly3997<T>> {}

type DeepReadonlyObject3997<T> = {
  readonly [P in keyof T]: DeepReadonly3997<T[P]>;
};

type UnionToIntersection3997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3997<T> = UnionToIntersection3997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3997<T extends unknown[], V> = [...T, V];

type TuplifyUnion3997<T, L = LastOf3997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3997<TuplifyUnion3997<Exclude<T, L>>, L>;

type DeepPartial3997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3997<T[P]> }
  : T;

type Paths3997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3997<K, Paths3997<T[K], Prev3997[D]>> : never }[keyof T]
  : never;

type Prev3997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3997 {
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

type ConfigPaths3997 = Paths3997<NestedConfig3997>;

interface HeavyProps3997 {
  config: DeepPartial3997<NestedConfig3997>;
  path?: ConfigPaths3997;
}

const HeavyComponent3997 = memo(function HeavyComponent3997({ config }: HeavyProps3997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3997.displayName = 'HeavyComponent3997';
export default HeavyComponent3997;
