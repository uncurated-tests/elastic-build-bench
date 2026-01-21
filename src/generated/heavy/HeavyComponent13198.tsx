'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13198<T> = T extends (infer U)[]
  ? DeepReadonlyArray13198<U>
  : T extends object
  ? DeepReadonlyObject13198<T>
  : T;

interface DeepReadonlyArray13198<T> extends ReadonlyArray<DeepReadonly13198<T>> {}

type DeepReadonlyObject13198<T> = {
  readonly [P in keyof T]: DeepReadonly13198<T[P]>;
};

type UnionToIntersection13198<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13198<T> = UnionToIntersection13198<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13198<T extends unknown[], V> = [...T, V];

type TuplifyUnion13198<T, L = LastOf13198<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13198<TuplifyUnion13198<Exclude<T, L>>, L>;

type DeepPartial13198<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13198<T[P]> }
  : T;

type Paths13198<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13198<K, Paths13198<T[K], Prev13198[D]>> : never }[keyof T]
  : never;

type Prev13198 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13198<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13198 {
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

type ConfigPaths13198 = Paths13198<NestedConfig13198>;

interface HeavyProps13198 {
  config: DeepPartial13198<NestedConfig13198>;
  path?: ConfigPaths13198;
}

const HeavyComponent13198 = memo(function HeavyComponent13198({ config }: HeavyProps13198) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13198) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13198 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13198: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13198.displayName = 'HeavyComponent13198';
export default HeavyComponent13198;
