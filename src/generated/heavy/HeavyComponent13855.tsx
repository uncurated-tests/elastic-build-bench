'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13855<T> = T extends (infer U)[]
  ? DeepReadonlyArray13855<U>
  : T extends object
  ? DeepReadonlyObject13855<T>
  : T;

interface DeepReadonlyArray13855<T> extends ReadonlyArray<DeepReadonly13855<T>> {}

type DeepReadonlyObject13855<T> = {
  readonly [P in keyof T]: DeepReadonly13855<T[P]>;
};

type UnionToIntersection13855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13855<T> = UnionToIntersection13855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13855<T extends unknown[], V> = [...T, V];

type TuplifyUnion13855<T, L = LastOf13855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13855<TuplifyUnion13855<Exclude<T, L>>, L>;

type DeepPartial13855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13855<T[P]> }
  : T;

type Paths13855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13855<K, Paths13855<T[K], Prev13855[D]>> : never }[keyof T]
  : never;

type Prev13855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13855 {
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

type ConfigPaths13855 = Paths13855<NestedConfig13855>;

interface HeavyProps13855 {
  config: DeepPartial13855<NestedConfig13855>;
  path?: ConfigPaths13855;
}

const HeavyComponent13855 = memo(function HeavyComponent13855({ config }: HeavyProps13855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13855.displayName = 'HeavyComponent13855';
export default HeavyComponent13855;
