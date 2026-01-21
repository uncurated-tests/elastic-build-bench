'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13310<T> = T extends (infer U)[]
  ? DeepReadonlyArray13310<U>
  : T extends object
  ? DeepReadonlyObject13310<T>
  : T;

interface DeepReadonlyArray13310<T> extends ReadonlyArray<DeepReadonly13310<T>> {}

type DeepReadonlyObject13310<T> = {
  readonly [P in keyof T]: DeepReadonly13310<T[P]>;
};

type UnionToIntersection13310<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13310<T> = UnionToIntersection13310<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13310<T extends unknown[], V> = [...T, V];

type TuplifyUnion13310<T, L = LastOf13310<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13310<TuplifyUnion13310<Exclude<T, L>>, L>;

type DeepPartial13310<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13310<T[P]> }
  : T;

type Paths13310<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13310<K, Paths13310<T[K], Prev13310[D]>> : never }[keyof T]
  : never;

type Prev13310 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13310<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13310 {
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

type ConfigPaths13310 = Paths13310<NestedConfig13310>;

interface HeavyProps13310 {
  config: DeepPartial13310<NestedConfig13310>;
  path?: ConfigPaths13310;
}

const HeavyComponent13310 = memo(function HeavyComponent13310({ config }: HeavyProps13310) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13310) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13310 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13310: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13310.displayName = 'HeavyComponent13310';
export default HeavyComponent13310;
