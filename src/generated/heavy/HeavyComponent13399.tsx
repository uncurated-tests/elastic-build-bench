'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13399<T> = T extends (infer U)[]
  ? DeepReadonlyArray13399<U>
  : T extends object
  ? DeepReadonlyObject13399<T>
  : T;

interface DeepReadonlyArray13399<T> extends ReadonlyArray<DeepReadonly13399<T>> {}

type DeepReadonlyObject13399<T> = {
  readonly [P in keyof T]: DeepReadonly13399<T[P]>;
};

type UnionToIntersection13399<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13399<T> = UnionToIntersection13399<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13399<T extends unknown[], V> = [...T, V];

type TuplifyUnion13399<T, L = LastOf13399<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13399<TuplifyUnion13399<Exclude<T, L>>, L>;

type DeepPartial13399<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13399<T[P]> }
  : T;

type Paths13399<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13399<K, Paths13399<T[K], Prev13399[D]>> : never }[keyof T]
  : never;

type Prev13399 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13399<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13399 {
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

type ConfigPaths13399 = Paths13399<NestedConfig13399>;

interface HeavyProps13399 {
  config: DeepPartial13399<NestedConfig13399>;
  path?: ConfigPaths13399;
}

const HeavyComponent13399 = memo(function HeavyComponent13399({ config }: HeavyProps13399) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13399) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13399 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13399: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13399.displayName = 'HeavyComponent13399';
export default HeavyComponent13399;
