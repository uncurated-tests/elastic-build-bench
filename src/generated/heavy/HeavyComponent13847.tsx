'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13847<T> = T extends (infer U)[]
  ? DeepReadonlyArray13847<U>
  : T extends object
  ? DeepReadonlyObject13847<T>
  : T;

interface DeepReadonlyArray13847<T> extends ReadonlyArray<DeepReadonly13847<T>> {}

type DeepReadonlyObject13847<T> = {
  readonly [P in keyof T]: DeepReadonly13847<T[P]>;
};

type UnionToIntersection13847<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13847<T> = UnionToIntersection13847<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13847<T extends unknown[], V> = [...T, V];

type TuplifyUnion13847<T, L = LastOf13847<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13847<TuplifyUnion13847<Exclude<T, L>>, L>;

type DeepPartial13847<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13847<T[P]> }
  : T;

type Paths13847<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13847<K, Paths13847<T[K], Prev13847[D]>> : never }[keyof T]
  : never;

type Prev13847 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13847<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13847 {
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

type ConfigPaths13847 = Paths13847<NestedConfig13847>;

interface HeavyProps13847 {
  config: DeepPartial13847<NestedConfig13847>;
  path?: ConfigPaths13847;
}

const HeavyComponent13847 = memo(function HeavyComponent13847({ config }: HeavyProps13847) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13847) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13847 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13847: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13847.displayName = 'HeavyComponent13847';
export default HeavyComponent13847;
