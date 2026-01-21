'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13100<T> = T extends (infer U)[]
  ? DeepReadonlyArray13100<U>
  : T extends object
  ? DeepReadonlyObject13100<T>
  : T;

interface DeepReadonlyArray13100<T> extends ReadonlyArray<DeepReadonly13100<T>> {}

type DeepReadonlyObject13100<T> = {
  readonly [P in keyof T]: DeepReadonly13100<T[P]>;
};

type UnionToIntersection13100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13100<T> = UnionToIntersection13100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13100<T extends unknown[], V> = [...T, V];

type TuplifyUnion13100<T, L = LastOf13100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13100<TuplifyUnion13100<Exclude<T, L>>, L>;

type DeepPartial13100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13100<T[P]> }
  : T;

type Paths13100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13100<K, Paths13100<T[K], Prev13100[D]>> : never }[keyof T]
  : never;

type Prev13100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13100 {
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

type ConfigPaths13100 = Paths13100<NestedConfig13100>;

interface HeavyProps13100 {
  config: DeepPartial13100<NestedConfig13100>;
  path?: ConfigPaths13100;
}

const HeavyComponent13100 = memo(function HeavyComponent13100({ config }: HeavyProps13100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13100.displayName = 'HeavyComponent13100';
export default HeavyComponent13100;
