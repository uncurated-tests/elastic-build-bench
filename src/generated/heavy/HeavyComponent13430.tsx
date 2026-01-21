'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13430<T> = T extends (infer U)[]
  ? DeepReadonlyArray13430<U>
  : T extends object
  ? DeepReadonlyObject13430<T>
  : T;

interface DeepReadonlyArray13430<T> extends ReadonlyArray<DeepReadonly13430<T>> {}

type DeepReadonlyObject13430<T> = {
  readonly [P in keyof T]: DeepReadonly13430<T[P]>;
};

type UnionToIntersection13430<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13430<T> = UnionToIntersection13430<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13430<T extends unknown[], V> = [...T, V];

type TuplifyUnion13430<T, L = LastOf13430<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13430<TuplifyUnion13430<Exclude<T, L>>, L>;

type DeepPartial13430<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13430<T[P]> }
  : T;

type Paths13430<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13430<K, Paths13430<T[K], Prev13430[D]>> : never }[keyof T]
  : never;

type Prev13430 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13430<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13430 {
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

type ConfigPaths13430 = Paths13430<NestedConfig13430>;

interface HeavyProps13430 {
  config: DeepPartial13430<NestedConfig13430>;
  path?: ConfigPaths13430;
}

const HeavyComponent13430 = memo(function HeavyComponent13430({ config }: HeavyProps13430) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13430) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13430 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13430: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13430.displayName = 'HeavyComponent13430';
export default HeavyComponent13430;
