'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13602<T> = T extends (infer U)[]
  ? DeepReadonlyArray13602<U>
  : T extends object
  ? DeepReadonlyObject13602<T>
  : T;

interface DeepReadonlyArray13602<T> extends ReadonlyArray<DeepReadonly13602<T>> {}

type DeepReadonlyObject13602<T> = {
  readonly [P in keyof T]: DeepReadonly13602<T[P]>;
};

type UnionToIntersection13602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13602<T> = UnionToIntersection13602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13602<T extends unknown[], V> = [...T, V];

type TuplifyUnion13602<T, L = LastOf13602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13602<TuplifyUnion13602<Exclude<T, L>>, L>;

type DeepPartial13602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13602<T[P]> }
  : T;

type Paths13602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13602<K, Paths13602<T[K], Prev13602[D]>> : never }[keyof T]
  : never;

type Prev13602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13602 {
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

type ConfigPaths13602 = Paths13602<NestedConfig13602>;

interface HeavyProps13602 {
  config: DeepPartial13602<NestedConfig13602>;
  path?: ConfigPaths13602;
}

const HeavyComponent13602 = memo(function HeavyComponent13602({ config }: HeavyProps13602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13602.displayName = 'HeavyComponent13602';
export default HeavyComponent13602;
