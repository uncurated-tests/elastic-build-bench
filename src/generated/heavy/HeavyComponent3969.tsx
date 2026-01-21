'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3969<T> = T extends (infer U)[]
  ? DeepReadonlyArray3969<U>
  : T extends object
  ? DeepReadonlyObject3969<T>
  : T;

interface DeepReadonlyArray3969<T> extends ReadonlyArray<DeepReadonly3969<T>> {}

type DeepReadonlyObject3969<T> = {
  readonly [P in keyof T]: DeepReadonly3969<T[P]>;
};

type UnionToIntersection3969<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3969<T> = UnionToIntersection3969<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3969<T extends unknown[], V> = [...T, V];

type TuplifyUnion3969<T, L = LastOf3969<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3969<TuplifyUnion3969<Exclude<T, L>>, L>;

type DeepPartial3969<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3969<T[P]> }
  : T;

type Paths3969<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3969<K, Paths3969<T[K], Prev3969[D]>> : never }[keyof T]
  : never;

type Prev3969 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3969<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3969 {
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

type ConfigPaths3969 = Paths3969<NestedConfig3969>;

interface HeavyProps3969 {
  config: DeepPartial3969<NestedConfig3969>;
  path?: ConfigPaths3969;
}

const HeavyComponent3969 = memo(function HeavyComponent3969({ config }: HeavyProps3969) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3969) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3969 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3969: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3969.displayName = 'HeavyComponent3969';
export default HeavyComponent3969;
