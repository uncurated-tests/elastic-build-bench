'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13860<T> = T extends (infer U)[]
  ? DeepReadonlyArray13860<U>
  : T extends object
  ? DeepReadonlyObject13860<T>
  : T;

interface DeepReadonlyArray13860<T> extends ReadonlyArray<DeepReadonly13860<T>> {}

type DeepReadonlyObject13860<T> = {
  readonly [P in keyof T]: DeepReadonly13860<T[P]>;
};

type UnionToIntersection13860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13860<T> = UnionToIntersection13860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13860<T extends unknown[], V> = [...T, V];

type TuplifyUnion13860<T, L = LastOf13860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13860<TuplifyUnion13860<Exclude<T, L>>, L>;

type DeepPartial13860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13860<T[P]> }
  : T;

type Paths13860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13860<K, Paths13860<T[K], Prev13860[D]>> : never }[keyof T]
  : never;

type Prev13860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13860 {
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

type ConfigPaths13860 = Paths13860<NestedConfig13860>;

interface HeavyProps13860 {
  config: DeepPartial13860<NestedConfig13860>;
  path?: ConfigPaths13860;
}

const HeavyComponent13860 = memo(function HeavyComponent13860({ config }: HeavyProps13860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13860.displayName = 'HeavyComponent13860';
export default HeavyComponent13860;
