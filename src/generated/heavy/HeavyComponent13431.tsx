'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13431<T> = T extends (infer U)[]
  ? DeepReadonlyArray13431<U>
  : T extends object
  ? DeepReadonlyObject13431<T>
  : T;

interface DeepReadonlyArray13431<T> extends ReadonlyArray<DeepReadonly13431<T>> {}

type DeepReadonlyObject13431<T> = {
  readonly [P in keyof T]: DeepReadonly13431<T[P]>;
};

type UnionToIntersection13431<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13431<T> = UnionToIntersection13431<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13431<T extends unknown[], V> = [...T, V];

type TuplifyUnion13431<T, L = LastOf13431<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13431<TuplifyUnion13431<Exclude<T, L>>, L>;

type DeepPartial13431<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13431<T[P]> }
  : T;

type Paths13431<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13431<K, Paths13431<T[K], Prev13431[D]>> : never }[keyof T]
  : never;

type Prev13431 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13431<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13431 {
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

type ConfigPaths13431 = Paths13431<NestedConfig13431>;

interface HeavyProps13431 {
  config: DeepPartial13431<NestedConfig13431>;
  path?: ConfigPaths13431;
}

const HeavyComponent13431 = memo(function HeavyComponent13431({ config }: HeavyProps13431) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13431) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13431 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13431: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13431.displayName = 'HeavyComponent13431';
export default HeavyComponent13431;
