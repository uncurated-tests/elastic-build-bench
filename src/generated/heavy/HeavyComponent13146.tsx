'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13146<T> = T extends (infer U)[]
  ? DeepReadonlyArray13146<U>
  : T extends object
  ? DeepReadonlyObject13146<T>
  : T;

interface DeepReadonlyArray13146<T> extends ReadonlyArray<DeepReadonly13146<T>> {}

type DeepReadonlyObject13146<T> = {
  readonly [P in keyof T]: DeepReadonly13146<T[P]>;
};

type UnionToIntersection13146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13146<T> = UnionToIntersection13146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13146<T extends unknown[], V> = [...T, V];

type TuplifyUnion13146<T, L = LastOf13146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13146<TuplifyUnion13146<Exclude<T, L>>, L>;

type DeepPartial13146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13146<T[P]> }
  : T;

type Paths13146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13146<K, Paths13146<T[K], Prev13146[D]>> : never }[keyof T]
  : never;

type Prev13146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13146 {
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

type ConfigPaths13146 = Paths13146<NestedConfig13146>;

interface HeavyProps13146 {
  config: DeepPartial13146<NestedConfig13146>;
  path?: ConfigPaths13146;
}

const HeavyComponent13146 = memo(function HeavyComponent13146({ config }: HeavyProps13146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13146.displayName = 'HeavyComponent13146';
export default HeavyComponent13146;
