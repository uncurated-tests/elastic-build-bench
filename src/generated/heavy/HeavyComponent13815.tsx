'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13815<T> = T extends (infer U)[]
  ? DeepReadonlyArray13815<U>
  : T extends object
  ? DeepReadonlyObject13815<T>
  : T;

interface DeepReadonlyArray13815<T> extends ReadonlyArray<DeepReadonly13815<T>> {}

type DeepReadonlyObject13815<T> = {
  readonly [P in keyof T]: DeepReadonly13815<T[P]>;
};

type UnionToIntersection13815<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13815<T> = UnionToIntersection13815<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13815<T extends unknown[], V> = [...T, V];

type TuplifyUnion13815<T, L = LastOf13815<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13815<TuplifyUnion13815<Exclude<T, L>>, L>;

type DeepPartial13815<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13815<T[P]> }
  : T;

type Paths13815<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13815<K, Paths13815<T[K], Prev13815[D]>> : never }[keyof T]
  : never;

type Prev13815 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13815<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13815 {
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

type ConfigPaths13815 = Paths13815<NestedConfig13815>;

interface HeavyProps13815 {
  config: DeepPartial13815<NestedConfig13815>;
  path?: ConfigPaths13815;
}

const HeavyComponent13815 = memo(function HeavyComponent13815({ config }: HeavyProps13815) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13815) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13815 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13815: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13815.displayName = 'HeavyComponent13815';
export default HeavyComponent13815;
