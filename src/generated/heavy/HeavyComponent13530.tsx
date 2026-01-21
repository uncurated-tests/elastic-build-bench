'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13530<T> = T extends (infer U)[]
  ? DeepReadonlyArray13530<U>
  : T extends object
  ? DeepReadonlyObject13530<T>
  : T;

interface DeepReadonlyArray13530<T> extends ReadonlyArray<DeepReadonly13530<T>> {}

type DeepReadonlyObject13530<T> = {
  readonly [P in keyof T]: DeepReadonly13530<T[P]>;
};

type UnionToIntersection13530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13530<T> = UnionToIntersection13530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13530<T extends unknown[], V> = [...T, V];

type TuplifyUnion13530<T, L = LastOf13530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13530<TuplifyUnion13530<Exclude<T, L>>, L>;

type DeepPartial13530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13530<T[P]> }
  : T;

type Paths13530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13530<K, Paths13530<T[K], Prev13530[D]>> : never }[keyof T]
  : never;

type Prev13530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13530 {
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

type ConfigPaths13530 = Paths13530<NestedConfig13530>;

interface HeavyProps13530 {
  config: DeepPartial13530<NestedConfig13530>;
  path?: ConfigPaths13530;
}

const HeavyComponent13530 = memo(function HeavyComponent13530({ config }: HeavyProps13530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13530.displayName = 'HeavyComponent13530';
export default HeavyComponent13530;
