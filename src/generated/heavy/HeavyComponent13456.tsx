'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13456<T> = T extends (infer U)[]
  ? DeepReadonlyArray13456<U>
  : T extends object
  ? DeepReadonlyObject13456<T>
  : T;

interface DeepReadonlyArray13456<T> extends ReadonlyArray<DeepReadonly13456<T>> {}

type DeepReadonlyObject13456<T> = {
  readonly [P in keyof T]: DeepReadonly13456<T[P]>;
};

type UnionToIntersection13456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13456<T> = UnionToIntersection13456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13456<T extends unknown[], V> = [...T, V];

type TuplifyUnion13456<T, L = LastOf13456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13456<TuplifyUnion13456<Exclude<T, L>>, L>;

type DeepPartial13456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13456<T[P]> }
  : T;

type Paths13456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13456<K, Paths13456<T[K], Prev13456[D]>> : never }[keyof T]
  : never;

type Prev13456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13456 {
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

type ConfigPaths13456 = Paths13456<NestedConfig13456>;

interface HeavyProps13456 {
  config: DeepPartial13456<NestedConfig13456>;
  path?: ConfigPaths13456;
}

const HeavyComponent13456 = memo(function HeavyComponent13456({ config }: HeavyProps13456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13456.displayName = 'HeavyComponent13456';
export default HeavyComponent13456;
