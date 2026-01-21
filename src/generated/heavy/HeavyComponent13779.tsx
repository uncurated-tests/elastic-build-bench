'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13779<T> = T extends (infer U)[]
  ? DeepReadonlyArray13779<U>
  : T extends object
  ? DeepReadonlyObject13779<T>
  : T;

interface DeepReadonlyArray13779<T> extends ReadonlyArray<DeepReadonly13779<T>> {}

type DeepReadonlyObject13779<T> = {
  readonly [P in keyof T]: DeepReadonly13779<T[P]>;
};

type UnionToIntersection13779<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13779<T> = UnionToIntersection13779<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13779<T extends unknown[], V> = [...T, V];

type TuplifyUnion13779<T, L = LastOf13779<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13779<TuplifyUnion13779<Exclude<T, L>>, L>;

type DeepPartial13779<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13779<T[P]> }
  : T;

type Paths13779<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13779<K, Paths13779<T[K], Prev13779[D]>> : never }[keyof T]
  : never;

type Prev13779 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13779<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13779 {
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

type ConfigPaths13779 = Paths13779<NestedConfig13779>;

interface HeavyProps13779 {
  config: DeepPartial13779<NestedConfig13779>;
  path?: ConfigPaths13779;
}

const HeavyComponent13779 = memo(function HeavyComponent13779({ config }: HeavyProps13779) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13779) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13779 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13779: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13779.displayName = 'HeavyComponent13779';
export default HeavyComponent13779;
