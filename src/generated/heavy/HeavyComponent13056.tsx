'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13056<T> = T extends (infer U)[]
  ? DeepReadonlyArray13056<U>
  : T extends object
  ? DeepReadonlyObject13056<T>
  : T;

interface DeepReadonlyArray13056<T> extends ReadonlyArray<DeepReadonly13056<T>> {}

type DeepReadonlyObject13056<T> = {
  readonly [P in keyof T]: DeepReadonly13056<T[P]>;
};

type UnionToIntersection13056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13056<T> = UnionToIntersection13056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13056<T extends unknown[], V> = [...T, V];

type TuplifyUnion13056<T, L = LastOf13056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13056<TuplifyUnion13056<Exclude<T, L>>, L>;

type DeepPartial13056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13056<T[P]> }
  : T;

type Paths13056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13056<K, Paths13056<T[K], Prev13056[D]>> : never }[keyof T]
  : never;

type Prev13056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13056 {
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

type ConfigPaths13056 = Paths13056<NestedConfig13056>;

interface HeavyProps13056 {
  config: DeepPartial13056<NestedConfig13056>;
  path?: ConfigPaths13056;
}

const HeavyComponent13056 = memo(function HeavyComponent13056({ config }: HeavyProps13056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13056.displayName = 'HeavyComponent13056';
export default HeavyComponent13056;
