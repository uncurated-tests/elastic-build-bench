'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3973<T> = T extends (infer U)[]
  ? DeepReadonlyArray3973<U>
  : T extends object
  ? DeepReadonlyObject3973<T>
  : T;

interface DeepReadonlyArray3973<T> extends ReadonlyArray<DeepReadonly3973<T>> {}

type DeepReadonlyObject3973<T> = {
  readonly [P in keyof T]: DeepReadonly3973<T[P]>;
};

type UnionToIntersection3973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3973<T> = UnionToIntersection3973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3973<T extends unknown[], V> = [...T, V];

type TuplifyUnion3973<T, L = LastOf3973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3973<TuplifyUnion3973<Exclude<T, L>>, L>;

type DeepPartial3973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3973<T[P]> }
  : T;

type Paths3973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3973<K, Paths3973<T[K], Prev3973[D]>> : never }[keyof T]
  : never;

type Prev3973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3973 {
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

type ConfigPaths3973 = Paths3973<NestedConfig3973>;

interface HeavyProps3973 {
  config: DeepPartial3973<NestedConfig3973>;
  path?: ConfigPaths3973;
}

const HeavyComponent3973 = memo(function HeavyComponent3973({ config }: HeavyProps3973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3973.displayName = 'HeavyComponent3973';
export default HeavyComponent3973;
