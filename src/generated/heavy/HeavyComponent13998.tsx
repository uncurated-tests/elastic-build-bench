'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13998<T> = T extends (infer U)[]
  ? DeepReadonlyArray13998<U>
  : T extends object
  ? DeepReadonlyObject13998<T>
  : T;

interface DeepReadonlyArray13998<T> extends ReadonlyArray<DeepReadonly13998<T>> {}

type DeepReadonlyObject13998<T> = {
  readonly [P in keyof T]: DeepReadonly13998<T[P]>;
};

type UnionToIntersection13998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13998<T> = UnionToIntersection13998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13998<T extends unknown[], V> = [...T, V];

type TuplifyUnion13998<T, L = LastOf13998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13998<TuplifyUnion13998<Exclude<T, L>>, L>;

type DeepPartial13998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13998<T[P]> }
  : T;

type Paths13998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13998<K, Paths13998<T[K], Prev13998[D]>> : never }[keyof T]
  : never;

type Prev13998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13998 {
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

type ConfigPaths13998 = Paths13998<NestedConfig13998>;

interface HeavyProps13998 {
  config: DeepPartial13998<NestedConfig13998>;
  path?: ConfigPaths13998;
}

const HeavyComponent13998 = memo(function HeavyComponent13998({ config }: HeavyProps13998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13998.displayName = 'HeavyComponent13998';
export default HeavyComponent13998;
