'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13091<T> = T extends (infer U)[]
  ? DeepReadonlyArray13091<U>
  : T extends object
  ? DeepReadonlyObject13091<T>
  : T;

interface DeepReadonlyArray13091<T> extends ReadonlyArray<DeepReadonly13091<T>> {}

type DeepReadonlyObject13091<T> = {
  readonly [P in keyof T]: DeepReadonly13091<T[P]>;
};

type UnionToIntersection13091<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13091<T> = UnionToIntersection13091<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13091<T extends unknown[], V> = [...T, V];

type TuplifyUnion13091<T, L = LastOf13091<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13091<TuplifyUnion13091<Exclude<T, L>>, L>;

type DeepPartial13091<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13091<T[P]> }
  : T;

type Paths13091<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13091<K, Paths13091<T[K], Prev13091[D]>> : never }[keyof T]
  : never;

type Prev13091 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13091<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13091 {
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

type ConfigPaths13091 = Paths13091<NestedConfig13091>;

interface HeavyProps13091 {
  config: DeepPartial13091<NestedConfig13091>;
  path?: ConfigPaths13091;
}

const HeavyComponent13091 = memo(function HeavyComponent13091({ config }: HeavyProps13091) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13091) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13091 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13091: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13091.displayName = 'HeavyComponent13091';
export default HeavyComponent13091;
