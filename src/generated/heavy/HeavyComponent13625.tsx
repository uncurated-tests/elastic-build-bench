'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13625<T> = T extends (infer U)[]
  ? DeepReadonlyArray13625<U>
  : T extends object
  ? DeepReadonlyObject13625<T>
  : T;

interface DeepReadonlyArray13625<T> extends ReadonlyArray<DeepReadonly13625<T>> {}

type DeepReadonlyObject13625<T> = {
  readonly [P in keyof T]: DeepReadonly13625<T[P]>;
};

type UnionToIntersection13625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13625<T> = UnionToIntersection13625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13625<T extends unknown[], V> = [...T, V];

type TuplifyUnion13625<T, L = LastOf13625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13625<TuplifyUnion13625<Exclude<T, L>>, L>;

type DeepPartial13625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13625<T[P]> }
  : T;

type Paths13625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13625<K, Paths13625<T[K], Prev13625[D]>> : never }[keyof T]
  : never;

type Prev13625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13625 {
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

type ConfigPaths13625 = Paths13625<NestedConfig13625>;

interface HeavyProps13625 {
  config: DeepPartial13625<NestedConfig13625>;
  path?: ConfigPaths13625;
}

const HeavyComponent13625 = memo(function HeavyComponent13625({ config }: HeavyProps13625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13625.displayName = 'HeavyComponent13625';
export default HeavyComponent13625;
