'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13554<T> = T extends (infer U)[]
  ? DeepReadonlyArray13554<U>
  : T extends object
  ? DeepReadonlyObject13554<T>
  : T;

interface DeepReadonlyArray13554<T> extends ReadonlyArray<DeepReadonly13554<T>> {}

type DeepReadonlyObject13554<T> = {
  readonly [P in keyof T]: DeepReadonly13554<T[P]>;
};

type UnionToIntersection13554<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13554<T> = UnionToIntersection13554<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13554<T extends unknown[], V> = [...T, V];

type TuplifyUnion13554<T, L = LastOf13554<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13554<TuplifyUnion13554<Exclude<T, L>>, L>;

type DeepPartial13554<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13554<T[P]> }
  : T;

type Paths13554<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13554<K, Paths13554<T[K], Prev13554[D]>> : never }[keyof T]
  : never;

type Prev13554 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13554<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13554 {
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

type ConfigPaths13554 = Paths13554<NestedConfig13554>;

interface HeavyProps13554 {
  config: DeepPartial13554<NestedConfig13554>;
  path?: ConfigPaths13554;
}

const HeavyComponent13554 = memo(function HeavyComponent13554({ config }: HeavyProps13554) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13554) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13554 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13554: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13554.displayName = 'HeavyComponent13554';
export default HeavyComponent13554;
