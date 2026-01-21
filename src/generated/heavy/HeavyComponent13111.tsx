'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13111<T> = T extends (infer U)[]
  ? DeepReadonlyArray13111<U>
  : T extends object
  ? DeepReadonlyObject13111<T>
  : T;

interface DeepReadonlyArray13111<T> extends ReadonlyArray<DeepReadonly13111<T>> {}

type DeepReadonlyObject13111<T> = {
  readonly [P in keyof T]: DeepReadonly13111<T[P]>;
};

type UnionToIntersection13111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13111<T> = UnionToIntersection13111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13111<T extends unknown[], V> = [...T, V];

type TuplifyUnion13111<T, L = LastOf13111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13111<TuplifyUnion13111<Exclude<T, L>>, L>;

type DeepPartial13111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13111<T[P]> }
  : T;

type Paths13111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13111<K, Paths13111<T[K], Prev13111[D]>> : never }[keyof T]
  : never;

type Prev13111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13111 {
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

type ConfigPaths13111 = Paths13111<NestedConfig13111>;

interface HeavyProps13111 {
  config: DeepPartial13111<NestedConfig13111>;
  path?: ConfigPaths13111;
}

const HeavyComponent13111 = memo(function HeavyComponent13111({ config }: HeavyProps13111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13111.displayName = 'HeavyComponent13111';
export default HeavyComponent13111;
