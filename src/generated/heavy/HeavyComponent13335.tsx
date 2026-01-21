'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13335<T> = T extends (infer U)[]
  ? DeepReadonlyArray13335<U>
  : T extends object
  ? DeepReadonlyObject13335<T>
  : T;

interface DeepReadonlyArray13335<T> extends ReadonlyArray<DeepReadonly13335<T>> {}

type DeepReadonlyObject13335<T> = {
  readonly [P in keyof T]: DeepReadonly13335<T[P]>;
};

type UnionToIntersection13335<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13335<T> = UnionToIntersection13335<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13335<T extends unknown[], V> = [...T, V];

type TuplifyUnion13335<T, L = LastOf13335<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13335<TuplifyUnion13335<Exclude<T, L>>, L>;

type DeepPartial13335<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13335<T[P]> }
  : T;

type Paths13335<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13335<K, Paths13335<T[K], Prev13335[D]>> : never }[keyof T]
  : never;

type Prev13335 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13335<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13335 {
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

type ConfigPaths13335 = Paths13335<NestedConfig13335>;

interface HeavyProps13335 {
  config: DeepPartial13335<NestedConfig13335>;
  path?: ConfigPaths13335;
}

const HeavyComponent13335 = memo(function HeavyComponent13335({ config }: HeavyProps13335) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13335) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13335 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13335: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13335.displayName = 'HeavyComponent13335';
export default HeavyComponent13335;
