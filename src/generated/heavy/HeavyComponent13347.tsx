'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13347<T> = T extends (infer U)[]
  ? DeepReadonlyArray13347<U>
  : T extends object
  ? DeepReadonlyObject13347<T>
  : T;

interface DeepReadonlyArray13347<T> extends ReadonlyArray<DeepReadonly13347<T>> {}

type DeepReadonlyObject13347<T> = {
  readonly [P in keyof T]: DeepReadonly13347<T[P]>;
};

type UnionToIntersection13347<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13347<T> = UnionToIntersection13347<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13347<T extends unknown[], V> = [...T, V];

type TuplifyUnion13347<T, L = LastOf13347<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13347<TuplifyUnion13347<Exclude<T, L>>, L>;

type DeepPartial13347<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13347<T[P]> }
  : T;

type Paths13347<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13347<K, Paths13347<T[K], Prev13347[D]>> : never }[keyof T]
  : never;

type Prev13347 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13347<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13347 {
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

type ConfigPaths13347 = Paths13347<NestedConfig13347>;

interface HeavyProps13347 {
  config: DeepPartial13347<NestedConfig13347>;
  path?: ConfigPaths13347;
}

const HeavyComponent13347 = memo(function HeavyComponent13347({ config }: HeavyProps13347) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13347) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13347 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13347: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13347.displayName = 'HeavyComponent13347';
export default HeavyComponent13347;
