'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13517<T> = T extends (infer U)[]
  ? DeepReadonlyArray13517<U>
  : T extends object
  ? DeepReadonlyObject13517<T>
  : T;

interface DeepReadonlyArray13517<T> extends ReadonlyArray<DeepReadonly13517<T>> {}

type DeepReadonlyObject13517<T> = {
  readonly [P in keyof T]: DeepReadonly13517<T[P]>;
};

type UnionToIntersection13517<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13517<T> = UnionToIntersection13517<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13517<T extends unknown[], V> = [...T, V];

type TuplifyUnion13517<T, L = LastOf13517<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13517<TuplifyUnion13517<Exclude<T, L>>, L>;

type DeepPartial13517<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13517<T[P]> }
  : T;

type Paths13517<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13517<K, Paths13517<T[K], Prev13517[D]>> : never }[keyof T]
  : never;

type Prev13517 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13517<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13517 {
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

type ConfigPaths13517 = Paths13517<NestedConfig13517>;

interface HeavyProps13517 {
  config: DeepPartial13517<NestedConfig13517>;
  path?: ConfigPaths13517;
}

const HeavyComponent13517 = memo(function HeavyComponent13517({ config }: HeavyProps13517) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13517) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13517 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13517: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13517.displayName = 'HeavyComponent13517';
export default HeavyComponent13517;
