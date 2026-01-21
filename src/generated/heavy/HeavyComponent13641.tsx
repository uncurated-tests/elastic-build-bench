'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13641<T> = T extends (infer U)[]
  ? DeepReadonlyArray13641<U>
  : T extends object
  ? DeepReadonlyObject13641<T>
  : T;

interface DeepReadonlyArray13641<T> extends ReadonlyArray<DeepReadonly13641<T>> {}

type DeepReadonlyObject13641<T> = {
  readonly [P in keyof T]: DeepReadonly13641<T[P]>;
};

type UnionToIntersection13641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13641<T> = UnionToIntersection13641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13641<T extends unknown[], V> = [...T, V];

type TuplifyUnion13641<T, L = LastOf13641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13641<TuplifyUnion13641<Exclude<T, L>>, L>;

type DeepPartial13641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13641<T[P]> }
  : T;

type Paths13641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13641<K, Paths13641<T[K], Prev13641[D]>> : never }[keyof T]
  : never;

type Prev13641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13641 {
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

type ConfigPaths13641 = Paths13641<NestedConfig13641>;

interface HeavyProps13641 {
  config: DeepPartial13641<NestedConfig13641>;
  path?: ConfigPaths13641;
}

const HeavyComponent13641 = memo(function HeavyComponent13641({ config }: HeavyProps13641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13641.displayName = 'HeavyComponent13641';
export default HeavyComponent13641;
