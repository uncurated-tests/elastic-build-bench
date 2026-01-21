'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13233<T> = T extends (infer U)[]
  ? DeepReadonlyArray13233<U>
  : T extends object
  ? DeepReadonlyObject13233<T>
  : T;

interface DeepReadonlyArray13233<T> extends ReadonlyArray<DeepReadonly13233<T>> {}

type DeepReadonlyObject13233<T> = {
  readonly [P in keyof T]: DeepReadonly13233<T[P]>;
};

type UnionToIntersection13233<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13233<T> = UnionToIntersection13233<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13233<T extends unknown[], V> = [...T, V];

type TuplifyUnion13233<T, L = LastOf13233<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13233<TuplifyUnion13233<Exclude<T, L>>, L>;

type DeepPartial13233<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13233<T[P]> }
  : T;

type Paths13233<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13233<K, Paths13233<T[K], Prev13233[D]>> : never }[keyof T]
  : never;

type Prev13233 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13233<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13233 {
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

type ConfigPaths13233 = Paths13233<NestedConfig13233>;

interface HeavyProps13233 {
  config: DeepPartial13233<NestedConfig13233>;
  path?: ConfigPaths13233;
}

const HeavyComponent13233 = memo(function HeavyComponent13233({ config }: HeavyProps13233) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13233) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13233 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13233: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13233.displayName = 'HeavyComponent13233';
export default HeavyComponent13233;
