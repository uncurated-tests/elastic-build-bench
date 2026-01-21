'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12969<T> = T extends (infer U)[]
  ? DeepReadonlyArray12969<U>
  : T extends object
  ? DeepReadonlyObject12969<T>
  : T;

interface DeepReadonlyArray12969<T> extends ReadonlyArray<DeepReadonly12969<T>> {}

type DeepReadonlyObject12969<T> = {
  readonly [P in keyof T]: DeepReadonly12969<T[P]>;
};

type UnionToIntersection12969<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12969<T> = UnionToIntersection12969<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12969<T extends unknown[], V> = [...T, V];

type TuplifyUnion12969<T, L = LastOf12969<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12969<TuplifyUnion12969<Exclude<T, L>>, L>;

type DeepPartial12969<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12969<T[P]> }
  : T;

type Paths12969<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12969<K, Paths12969<T[K], Prev12969[D]>> : never }[keyof T]
  : never;

type Prev12969 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12969<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12969 {
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

type ConfigPaths12969 = Paths12969<NestedConfig12969>;

interface HeavyProps12969 {
  config: DeepPartial12969<NestedConfig12969>;
  path?: ConfigPaths12969;
}

const HeavyComponent12969 = memo(function HeavyComponent12969({ config }: HeavyProps12969) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12969) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12969 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12969: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12969.displayName = 'HeavyComponent12969';
export default HeavyComponent12969;
