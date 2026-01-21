'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13220<T> = T extends (infer U)[]
  ? DeepReadonlyArray13220<U>
  : T extends object
  ? DeepReadonlyObject13220<T>
  : T;

interface DeepReadonlyArray13220<T> extends ReadonlyArray<DeepReadonly13220<T>> {}

type DeepReadonlyObject13220<T> = {
  readonly [P in keyof T]: DeepReadonly13220<T[P]>;
};

type UnionToIntersection13220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13220<T> = UnionToIntersection13220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13220<T extends unknown[], V> = [...T, V];

type TuplifyUnion13220<T, L = LastOf13220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13220<TuplifyUnion13220<Exclude<T, L>>, L>;

type DeepPartial13220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13220<T[P]> }
  : T;

type Paths13220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13220<K, Paths13220<T[K], Prev13220[D]>> : never }[keyof T]
  : never;

type Prev13220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13220 {
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

type ConfigPaths13220 = Paths13220<NestedConfig13220>;

interface HeavyProps13220 {
  config: DeepPartial13220<NestedConfig13220>;
  path?: ConfigPaths13220;
}

const HeavyComponent13220 = memo(function HeavyComponent13220({ config }: HeavyProps13220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13220.displayName = 'HeavyComponent13220';
export default HeavyComponent13220;
