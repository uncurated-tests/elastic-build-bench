'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13564<T> = T extends (infer U)[]
  ? DeepReadonlyArray13564<U>
  : T extends object
  ? DeepReadonlyObject13564<T>
  : T;

interface DeepReadonlyArray13564<T> extends ReadonlyArray<DeepReadonly13564<T>> {}

type DeepReadonlyObject13564<T> = {
  readonly [P in keyof T]: DeepReadonly13564<T[P]>;
};

type UnionToIntersection13564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13564<T> = UnionToIntersection13564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13564<T extends unknown[], V> = [...T, V];

type TuplifyUnion13564<T, L = LastOf13564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13564<TuplifyUnion13564<Exclude<T, L>>, L>;

type DeepPartial13564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13564<T[P]> }
  : T;

type Paths13564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13564<K, Paths13564<T[K], Prev13564[D]>> : never }[keyof T]
  : never;

type Prev13564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13564 {
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

type ConfigPaths13564 = Paths13564<NestedConfig13564>;

interface HeavyProps13564 {
  config: DeepPartial13564<NestedConfig13564>;
  path?: ConfigPaths13564;
}

const HeavyComponent13564 = memo(function HeavyComponent13564({ config }: HeavyProps13564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13564.displayName = 'HeavyComponent13564';
export default HeavyComponent13564;
