'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13206<T> = T extends (infer U)[]
  ? DeepReadonlyArray13206<U>
  : T extends object
  ? DeepReadonlyObject13206<T>
  : T;

interface DeepReadonlyArray13206<T> extends ReadonlyArray<DeepReadonly13206<T>> {}

type DeepReadonlyObject13206<T> = {
  readonly [P in keyof T]: DeepReadonly13206<T[P]>;
};

type UnionToIntersection13206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13206<T> = UnionToIntersection13206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13206<T extends unknown[], V> = [...T, V];

type TuplifyUnion13206<T, L = LastOf13206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13206<TuplifyUnion13206<Exclude<T, L>>, L>;

type DeepPartial13206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13206<T[P]> }
  : T;

type Paths13206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13206<K, Paths13206<T[K], Prev13206[D]>> : never }[keyof T]
  : never;

type Prev13206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13206 {
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

type ConfigPaths13206 = Paths13206<NestedConfig13206>;

interface HeavyProps13206 {
  config: DeepPartial13206<NestedConfig13206>;
  path?: ConfigPaths13206;
}

const HeavyComponent13206 = memo(function HeavyComponent13206({ config }: HeavyProps13206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13206.displayName = 'HeavyComponent13206';
export default HeavyComponent13206;
