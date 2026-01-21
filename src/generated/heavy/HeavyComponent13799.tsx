'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13799<T> = T extends (infer U)[]
  ? DeepReadonlyArray13799<U>
  : T extends object
  ? DeepReadonlyObject13799<T>
  : T;

interface DeepReadonlyArray13799<T> extends ReadonlyArray<DeepReadonly13799<T>> {}

type DeepReadonlyObject13799<T> = {
  readonly [P in keyof T]: DeepReadonly13799<T[P]>;
};

type UnionToIntersection13799<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13799<T> = UnionToIntersection13799<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13799<T extends unknown[], V> = [...T, V];

type TuplifyUnion13799<T, L = LastOf13799<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13799<TuplifyUnion13799<Exclude<T, L>>, L>;

type DeepPartial13799<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13799<T[P]> }
  : T;

type Paths13799<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13799<K, Paths13799<T[K], Prev13799[D]>> : never }[keyof T]
  : never;

type Prev13799 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13799<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13799 {
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

type ConfigPaths13799 = Paths13799<NestedConfig13799>;

interface HeavyProps13799 {
  config: DeepPartial13799<NestedConfig13799>;
  path?: ConfigPaths13799;
}

const HeavyComponent13799 = memo(function HeavyComponent13799({ config }: HeavyProps13799) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13799) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13799 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13799: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13799.displayName = 'HeavyComponent13799';
export default HeavyComponent13799;
