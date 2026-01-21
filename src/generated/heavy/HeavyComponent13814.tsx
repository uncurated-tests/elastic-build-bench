'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13814<T> = T extends (infer U)[]
  ? DeepReadonlyArray13814<U>
  : T extends object
  ? DeepReadonlyObject13814<T>
  : T;

interface DeepReadonlyArray13814<T> extends ReadonlyArray<DeepReadonly13814<T>> {}

type DeepReadonlyObject13814<T> = {
  readonly [P in keyof T]: DeepReadonly13814<T[P]>;
};

type UnionToIntersection13814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13814<T> = UnionToIntersection13814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13814<T extends unknown[], V> = [...T, V];

type TuplifyUnion13814<T, L = LastOf13814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13814<TuplifyUnion13814<Exclude<T, L>>, L>;

type DeepPartial13814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13814<T[P]> }
  : T;

type Paths13814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13814<K, Paths13814<T[K], Prev13814[D]>> : never }[keyof T]
  : never;

type Prev13814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13814 {
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

type ConfigPaths13814 = Paths13814<NestedConfig13814>;

interface HeavyProps13814 {
  config: DeepPartial13814<NestedConfig13814>;
  path?: ConfigPaths13814;
}

const HeavyComponent13814 = memo(function HeavyComponent13814({ config }: HeavyProps13814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13814.displayName = 'HeavyComponent13814';
export default HeavyComponent13814;
