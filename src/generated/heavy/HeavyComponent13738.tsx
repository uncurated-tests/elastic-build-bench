'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13738<T> = T extends (infer U)[]
  ? DeepReadonlyArray13738<U>
  : T extends object
  ? DeepReadonlyObject13738<T>
  : T;

interface DeepReadonlyArray13738<T> extends ReadonlyArray<DeepReadonly13738<T>> {}

type DeepReadonlyObject13738<T> = {
  readonly [P in keyof T]: DeepReadonly13738<T[P]>;
};

type UnionToIntersection13738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13738<T> = UnionToIntersection13738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13738<T extends unknown[], V> = [...T, V];

type TuplifyUnion13738<T, L = LastOf13738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13738<TuplifyUnion13738<Exclude<T, L>>, L>;

type DeepPartial13738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13738<T[P]> }
  : T;

type Paths13738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13738<K, Paths13738<T[K], Prev13738[D]>> : never }[keyof T]
  : never;

type Prev13738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13738 {
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

type ConfigPaths13738 = Paths13738<NestedConfig13738>;

interface HeavyProps13738 {
  config: DeepPartial13738<NestedConfig13738>;
  path?: ConfigPaths13738;
}

const HeavyComponent13738 = memo(function HeavyComponent13738({ config }: HeavyProps13738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13738.displayName = 'HeavyComponent13738';
export default HeavyComponent13738;
