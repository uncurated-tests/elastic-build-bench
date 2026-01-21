'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13060<T> = T extends (infer U)[]
  ? DeepReadonlyArray13060<U>
  : T extends object
  ? DeepReadonlyObject13060<T>
  : T;

interface DeepReadonlyArray13060<T> extends ReadonlyArray<DeepReadonly13060<T>> {}

type DeepReadonlyObject13060<T> = {
  readonly [P in keyof T]: DeepReadonly13060<T[P]>;
};

type UnionToIntersection13060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13060<T> = UnionToIntersection13060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13060<T extends unknown[], V> = [...T, V];

type TuplifyUnion13060<T, L = LastOf13060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13060<TuplifyUnion13060<Exclude<T, L>>, L>;

type DeepPartial13060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13060<T[P]> }
  : T;

type Paths13060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13060<K, Paths13060<T[K], Prev13060[D]>> : never }[keyof T]
  : never;

type Prev13060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13060 {
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

type ConfigPaths13060 = Paths13060<NestedConfig13060>;

interface HeavyProps13060 {
  config: DeepPartial13060<NestedConfig13060>;
  path?: ConfigPaths13060;
}

const HeavyComponent13060 = memo(function HeavyComponent13060({ config }: HeavyProps13060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13060.displayName = 'HeavyComponent13060';
export default HeavyComponent13060;
