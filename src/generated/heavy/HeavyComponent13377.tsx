'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13377<T> = T extends (infer U)[]
  ? DeepReadonlyArray13377<U>
  : T extends object
  ? DeepReadonlyObject13377<T>
  : T;

interface DeepReadonlyArray13377<T> extends ReadonlyArray<DeepReadonly13377<T>> {}

type DeepReadonlyObject13377<T> = {
  readonly [P in keyof T]: DeepReadonly13377<T[P]>;
};

type UnionToIntersection13377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13377<T> = UnionToIntersection13377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13377<T extends unknown[], V> = [...T, V];

type TuplifyUnion13377<T, L = LastOf13377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13377<TuplifyUnion13377<Exclude<T, L>>, L>;

type DeepPartial13377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13377<T[P]> }
  : T;

type Paths13377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13377<K, Paths13377<T[K], Prev13377[D]>> : never }[keyof T]
  : never;

type Prev13377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13377 {
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

type ConfigPaths13377 = Paths13377<NestedConfig13377>;

interface HeavyProps13377 {
  config: DeepPartial13377<NestedConfig13377>;
  path?: ConfigPaths13377;
}

const HeavyComponent13377 = memo(function HeavyComponent13377({ config }: HeavyProps13377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13377.displayName = 'HeavyComponent13377';
export default HeavyComponent13377;
