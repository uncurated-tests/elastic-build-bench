'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13098<T> = T extends (infer U)[]
  ? DeepReadonlyArray13098<U>
  : T extends object
  ? DeepReadonlyObject13098<T>
  : T;

interface DeepReadonlyArray13098<T> extends ReadonlyArray<DeepReadonly13098<T>> {}

type DeepReadonlyObject13098<T> = {
  readonly [P in keyof T]: DeepReadonly13098<T[P]>;
};

type UnionToIntersection13098<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13098<T> = UnionToIntersection13098<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13098<T extends unknown[], V> = [...T, V];

type TuplifyUnion13098<T, L = LastOf13098<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13098<TuplifyUnion13098<Exclude<T, L>>, L>;

type DeepPartial13098<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13098<T[P]> }
  : T;

type Paths13098<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13098<K, Paths13098<T[K], Prev13098[D]>> : never }[keyof T]
  : never;

type Prev13098 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13098<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13098 {
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

type ConfigPaths13098 = Paths13098<NestedConfig13098>;

interface HeavyProps13098 {
  config: DeepPartial13098<NestedConfig13098>;
  path?: ConfigPaths13098;
}

const HeavyComponent13098 = memo(function HeavyComponent13098({ config }: HeavyProps13098) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13098) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13098 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13098: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13098.displayName = 'HeavyComponent13098';
export default HeavyComponent13098;
