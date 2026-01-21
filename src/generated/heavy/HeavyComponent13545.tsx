'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13545<T> = T extends (infer U)[]
  ? DeepReadonlyArray13545<U>
  : T extends object
  ? DeepReadonlyObject13545<T>
  : T;

interface DeepReadonlyArray13545<T> extends ReadonlyArray<DeepReadonly13545<T>> {}

type DeepReadonlyObject13545<T> = {
  readonly [P in keyof T]: DeepReadonly13545<T[P]>;
};

type UnionToIntersection13545<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13545<T> = UnionToIntersection13545<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13545<T extends unknown[], V> = [...T, V];

type TuplifyUnion13545<T, L = LastOf13545<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13545<TuplifyUnion13545<Exclude<T, L>>, L>;

type DeepPartial13545<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13545<T[P]> }
  : T;

type Paths13545<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13545<K, Paths13545<T[K], Prev13545[D]>> : never }[keyof T]
  : never;

type Prev13545 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13545<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13545 {
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

type ConfigPaths13545 = Paths13545<NestedConfig13545>;

interface HeavyProps13545 {
  config: DeepPartial13545<NestedConfig13545>;
  path?: ConfigPaths13545;
}

const HeavyComponent13545 = memo(function HeavyComponent13545({ config }: HeavyProps13545) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13545) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13545 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13545: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13545.displayName = 'HeavyComponent13545';
export default HeavyComponent13545;
