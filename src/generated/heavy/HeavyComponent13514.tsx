'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13514<T> = T extends (infer U)[]
  ? DeepReadonlyArray13514<U>
  : T extends object
  ? DeepReadonlyObject13514<T>
  : T;

interface DeepReadonlyArray13514<T> extends ReadonlyArray<DeepReadonly13514<T>> {}

type DeepReadonlyObject13514<T> = {
  readonly [P in keyof T]: DeepReadonly13514<T[P]>;
};

type UnionToIntersection13514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13514<T> = UnionToIntersection13514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13514<T extends unknown[], V> = [...T, V];

type TuplifyUnion13514<T, L = LastOf13514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13514<TuplifyUnion13514<Exclude<T, L>>, L>;

type DeepPartial13514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13514<T[P]> }
  : T;

type Paths13514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13514<K, Paths13514<T[K], Prev13514[D]>> : never }[keyof T]
  : never;

type Prev13514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13514 {
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

type ConfigPaths13514 = Paths13514<NestedConfig13514>;

interface HeavyProps13514 {
  config: DeepPartial13514<NestedConfig13514>;
  path?: ConfigPaths13514;
}

const HeavyComponent13514 = memo(function HeavyComponent13514({ config }: HeavyProps13514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13514.displayName = 'HeavyComponent13514';
export default HeavyComponent13514;
