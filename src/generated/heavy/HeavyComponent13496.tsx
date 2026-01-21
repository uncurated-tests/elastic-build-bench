'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13496<T> = T extends (infer U)[]
  ? DeepReadonlyArray13496<U>
  : T extends object
  ? DeepReadonlyObject13496<T>
  : T;

interface DeepReadonlyArray13496<T> extends ReadonlyArray<DeepReadonly13496<T>> {}

type DeepReadonlyObject13496<T> = {
  readonly [P in keyof T]: DeepReadonly13496<T[P]>;
};

type UnionToIntersection13496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13496<T> = UnionToIntersection13496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13496<T extends unknown[], V> = [...T, V];

type TuplifyUnion13496<T, L = LastOf13496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13496<TuplifyUnion13496<Exclude<T, L>>, L>;

type DeepPartial13496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13496<T[P]> }
  : T;

type Paths13496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13496<K, Paths13496<T[K], Prev13496[D]>> : never }[keyof T]
  : never;

type Prev13496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13496 {
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

type ConfigPaths13496 = Paths13496<NestedConfig13496>;

interface HeavyProps13496 {
  config: DeepPartial13496<NestedConfig13496>;
  path?: ConfigPaths13496;
}

const HeavyComponent13496 = memo(function HeavyComponent13496({ config }: HeavyProps13496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13496.displayName = 'HeavyComponent13496';
export default HeavyComponent13496;
