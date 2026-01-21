'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13252<T> = T extends (infer U)[]
  ? DeepReadonlyArray13252<U>
  : T extends object
  ? DeepReadonlyObject13252<T>
  : T;

interface DeepReadonlyArray13252<T> extends ReadonlyArray<DeepReadonly13252<T>> {}

type DeepReadonlyObject13252<T> = {
  readonly [P in keyof T]: DeepReadonly13252<T[P]>;
};

type UnionToIntersection13252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13252<T> = UnionToIntersection13252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13252<T extends unknown[], V> = [...T, V];

type TuplifyUnion13252<T, L = LastOf13252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13252<TuplifyUnion13252<Exclude<T, L>>, L>;

type DeepPartial13252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13252<T[P]> }
  : T;

type Paths13252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13252<K, Paths13252<T[K], Prev13252[D]>> : never }[keyof T]
  : never;

type Prev13252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13252 {
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

type ConfigPaths13252 = Paths13252<NestedConfig13252>;

interface HeavyProps13252 {
  config: DeepPartial13252<NestedConfig13252>;
  path?: ConfigPaths13252;
}

const HeavyComponent13252 = memo(function HeavyComponent13252({ config }: HeavyProps13252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13252.displayName = 'HeavyComponent13252';
export default HeavyComponent13252;
