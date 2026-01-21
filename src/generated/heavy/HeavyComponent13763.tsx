'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13763<T> = T extends (infer U)[]
  ? DeepReadonlyArray13763<U>
  : T extends object
  ? DeepReadonlyObject13763<T>
  : T;

interface DeepReadonlyArray13763<T> extends ReadonlyArray<DeepReadonly13763<T>> {}

type DeepReadonlyObject13763<T> = {
  readonly [P in keyof T]: DeepReadonly13763<T[P]>;
};

type UnionToIntersection13763<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13763<T> = UnionToIntersection13763<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13763<T extends unknown[], V> = [...T, V];

type TuplifyUnion13763<T, L = LastOf13763<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13763<TuplifyUnion13763<Exclude<T, L>>, L>;

type DeepPartial13763<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13763<T[P]> }
  : T;

type Paths13763<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13763<K, Paths13763<T[K], Prev13763[D]>> : never }[keyof T]
  : never;

type Prev13763 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13763<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13763 {
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

type ConfigPaths13763 = Paths13763<NestedConfig13763>;

interface HeavyProps13763 {
  config: DeepPartial13763<NestedConfig13763>;
  path?: ConfigPaths13763;
}

const HeavyComponent13763 = memo(function HeavyComponent13763({ config }: HeavyProps13763) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13763) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13763 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13763: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13763.displayName = 'HeavyComponent13763';
export default HeavyComponent13763;
