'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13844<T> = T extends (infer U)[]
  ? DeepReadonlyArray13844<U>
  : T extends object
  ? DeepReadonlyObject13844<T>
  : T;

interface DeepReadonlyArray13844<T> extends ReadonlyArray<DeepReadonly13844<T>> {}

type DeepReadonlyObject13844<T> = {
  readonly [P in keyof T]: DeepReadonly13844<T[P]>;
};

type UnionToIntersection13844<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13844<T> = UnionToIntersection13844<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13844<T extends unknown[], V> = [...T, V];

type TuplifyUnion13844<T, L = LastOf13844<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13844<TuplifyUnion13844<Exclude<T, L>>, L>;

type DeepPartial13844<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13844<T[P]> }
  : T;

type Paths13844<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13844<K, Paths13844<T[K], Prev13844[D]>> : never }[keyof T]
  : never;

type Prev13844 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13844<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13844 {
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

type ConfigPaths13844 = Paths13844<NestedConfig13844>;

interface HeavyProps13844 {
  config: DeepPartial13844<NestedConfig13844>;
  path?: ConfigPaths13844;
}

const HeavyComponent13844 = memo(function HeavyComponent13844({ config }: HeavyProps13844) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13844) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13844 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13844: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13844.displayName = 'HeavyComponent13844';
export default HeavyComponent13844;
