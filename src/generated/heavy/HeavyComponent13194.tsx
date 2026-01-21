'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13194<T> = T extends (infer U)[]
  ? DeepReadonlyArray13194<U>
  : T extends object
  ? DeepReadonlyObject13194<T>
  : T;

interface DeepReadonlyArray13194<T> extends ReadonlyArray<DeepReadonly13194<T>> {}

type DeepReadonlyObject13194<T> = {
  readonly [P in keyof T]: DeepReadonly13194<T[P]>;
};

type UnionToIntersection13194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13194<T> = UnionToIntersection13194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13194<T extends unknown[], V> = [...T, V];

type TuplifyUnion13194<T, L = LastOf13194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13194<TuplifyUnion13194<Exclude<T, L>>, L>;

type DeepPartial13194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13194<T[P]> }
  : T;

type Paths13194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13194<K, Paths13194<T[K], Prev13194[D]>> : never }[keyof T]
  : never;

type Prev13194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13194 {
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

type ConfigPaths13194 = Paths13194<NestedConfig13194>;

interface HeavyProps13194 {
  config: DeepPartial13194<NestedConfig13194>;
  path?: ConfigPaths13194;
}

const HeavyComponent13194 = memo(function HeavyComponent13194({ config }: HeavyProps13194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13194.displayName = 'HeavyComponent13194';
export default HeavyComponent13194;
