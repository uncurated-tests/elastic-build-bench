'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13138<T> = T extends (infer U)[]
  ? DeepReadonlyArray13138<U>
  : T extends object
  ? DeepReadonlyObject13138<T>
  : T;

interface DeepReadonlyArray13138<T> extends ReadonlyArray<DeepReadonly13138<T>> {}

type DeepReadonlyObject13138<T> = {
  readonly [P in keyof T]: DeepReadonly13138<T[P]>;
};

type UnionToIntersection13138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13138<T> = UnionToIntersection13138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13138<T extends unknown[], V> = [...T, V];

type TuplifyUnion13138<T, L = LastOf13138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13138<TuplifyUnion13138<Exclude<T, L>>, L>;

type DeepPartial13138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13138<T[P]> }
  : T;

type Paths13138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13138<K, Paths13138<T[K], Prev13138[D]>> : never }[keyof T]
  : never;

type Prev13138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13138 {
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

type ConfigPaths13138 = Paths13138<NestedConfig13138>;

interface HeavyProps13138 {
  config: DeepPartial13138<NestedConfig13138>;
  path?: ConfigPaths13138;
}

const HeavyComponent13138 = memo(function HeavyComponent13138({ config }: HeavyProps13138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13138.displayName = 'HeavyComponent13138';
export default HeavyComponent13138;
