'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13617<T> = T extends (infer U)[]
  ? DeepReadonlyArray13617<U>
  : T extends object
  ? DeepReadonlyObject13617<T>
  : T;

interface DeepReadonlyArray13617<T> extends ReadonlyArray<DeepReadonly13617<T>> {}

type DeepReadonlyObject13617<T> = {
  readonly [P in keyof T]: DeepReadonly13617<T[P]>;
};

type UnionToIntersection13617<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13617<T> = UnionToIntersection13617<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13617<T extends unknown[], V> = [...T, V];

type TuplifyUnion13617<T, L = LastOf13617<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13617<TuplifyUnion13617<Exclude<T, L>>, L>;

type DeepPartial13617<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13617<T[P]> }
  : T;

type Paths13617<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13617<K, Paths13617<T[K], Prev13617[D]>> : never }[keyof T]
  : never;

type Prev13617 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13617<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13617 {
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

type ConfigPaths13617 = Paths13617<NestedConfig13617>;

interface HeavyProps13617 {
  config: DeepPartial13617<NestedConfig13617>;
  path?: ConfigPaths13617;
}

const HeavyComponent13617 = memo(function HeavyComponent13617({ config }: HeavyProps13617) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13617) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13617 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13617: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13617.displayName = 'HeavyComponent13617';
export default HeavyComponent13617;
