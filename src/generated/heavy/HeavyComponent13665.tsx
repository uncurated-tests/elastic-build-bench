'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13665<T> = T extends (infer U)[]
  ? DeepReadonlyArray13665<U>
  : T extends object
  ? DeepReadonlyObject13665<T>
  : T;

interface DeepReadonlyArray13665<T> extends ReadonlyArray<DeepReadonly13665<T>> {}

type DeepReadonlyObject13665<T> = {
  readonly [P in keyof T]: DeepReadonly13665<T[P]>;
};

type UnionToIntersection13665<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13665<T> = UnionToIntersection13665<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13665<T extends unknown[], V> = [...T, V];

type TuplifyUnion13665<T, L = LastOf13665<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13665<TuplifyUnion13665<Exclude<T, L>>, L>;

type DeepPartial13665<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13665<T[P]> }
  : T;

type Paths13665<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13665<K, Paths13665<T[K], Prev13665[D]>> : never }[keyof T]
  : never;

type Prev13665 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13665<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13665 {
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

type ConfigPaths13665 = Paths13665<NestedConfig13665>;

interface HeavyProps13665 {
  config: DeepPartial13665<NestedConfig13665>;
  path?: ConfigPaths13665;
}

const HeavyComponent13665 = memo(function HeavyComponent13665({ config }: HeavyProps13665) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13665) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13665 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13665: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13665.displayName = 'HeavyComponent13665';
export default HeavyComponent13665;
