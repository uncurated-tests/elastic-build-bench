'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13357<T> = T extends (infer U)[]
  ? DeepReadonlyArray13357<U>
  : T extends object
  ? DeepReadonlyObject13357<T>
  : T;

interface DeepReadonlyArray13357<T> extends ReadonlyArray<DeepReadonly13357<T>> {}

type DeepReadonlyObject13357<T> = {
  readonly [P in keyof T]: DeepReadonly13357<T[P]>;
};

type UnionToIntersection13357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13357<T> = UnionToIntersection13357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13357<T extends unknown[], V> = [...T, V];

type TuplifyUnion13357<T, L = LastOf13357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13357<TuplifyUnion13357<Exclude<T, L>>, L>;

type DeepPartial13357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13357<T[P]> }
  : T;

type Paths13357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13357<K, Paths13357<T[K], Prev13357[D]>> : never }[keyof T]
  : never;

type Prev13357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13357 {
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

type ConfigPaths13357 = Paths13357<NestedConfig13357>;

interface HeavyProps13357 {
  config: DeepPartial13357<NestedConfig13357>;
  path?: ConfigPaths13357;
}

const HeavyComponent13357 = memo(function HeavyComponent13357({ config }: HeavyProps13357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13357.displayName = 'HeavyComponent13357';
export default HeavyComponent13357;
