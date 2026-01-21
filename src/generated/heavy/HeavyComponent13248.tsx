'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13248<T> = T extends (infer U)[]
  ? DeepReadonlyArray13248<U>
  : T extends object
  ? DeepReadonlyObject13248<T>
  : T;

interface DeepReadonlyArray13248<T> extends ReadonlyArray<DeepReadonly13248<T>> {}

type DeepReadonlyObject13248<T> = {
  readonly [P in keyof T]: DeepReadonly13248<T[P]>;
};

type UnionToIntersection13248<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13248<T> = UnionToIntersection13248<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13248<T extends unknown[], V> = [...T, V];

type TuplifyUnion13248<T, L = LastOf13248<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13248<TuplifyUnion13248<Exclude<T, L>>, L>;

type DeepPartial13248<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13248<T[P]> }
  : T;

type Paths13248<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13248<K, Paths13248<T[K], Prev13248[D]>> : never }[keyof T]
  : never;

type Prev13248 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13248<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13248 {
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

type ConfigPaths13248 = Paths13248<NestedConfig13248>;

interface HeavyProps13248 {
  config: DeepPartial13248<NestedConfig13248>;
  path?: ConfigPaths13248;
}

const HeavyComponent13248 = memo(function HeavyComponent13248({ config }: HeavyProps13248) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13248) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13248 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13248: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13248.displayName = 'HeavyComponent13248';
export default HeavyComponent13248;
