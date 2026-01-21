'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13364<T> = T extends (infer U)[]
  ? DeepReadonlyArray13364<U>
  : T extends object
  ? DeepReadonlyObject13364<T>
  : T;

interface DeepReadonlyArray13364<T> extends ReadonlyArray<DeepReadonly13364<T>> {}

type DeepReadonlyObject13364<T> = {
  readonly [P in keyof T]: DeepReadonly13364<T[P]>;
};

type UnionToIntersection13364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13364<T> = UnionToIntersection13364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13364<T extends unknown[], V> = [...T, V];

type TuplifyUnion13364<T, L = LastOf13364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13364<TuplifyUnion13364<Exclude<T, L>>, L>;

type DeepPartial13364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13364<T[P]> }
  : T;

type Paths13364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13364<K, Paths13364<T[K], Prev13364[D]>> : never }[keyof T]
  : never;

type Prev13364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13364 {
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

type ConfigPaths13364 = Paths13364<NestedConfig13364>;

interface HeavyProps13364 {
  config: DeepPartial13364<NestedConfig13364>;
  path?: ConfigPaths13364;
}

const HeavyComponent13364 = memo(function HeavyComponent13364({ config }: HeavyProps13364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13364.displayName = 'HeavyComponent13364';
export default HeavyComponent13364;
