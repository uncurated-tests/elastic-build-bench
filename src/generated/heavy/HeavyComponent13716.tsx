'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13716<T> = T extends (infer U)[]
  ? DeepReadonlyArray13716<U>
  : T extends object
  ? DeepReadonlyObject13716<T>
  : T;

interface DeepReadonlyArray13716<T> extends ReadonlyArray<DeepReadonly13716<T>> {}

type DeepReadonlyObject13716<T> = {
  readonly [P in keyof T]: DeepReadonly13716<T[P]>;
};

type UnionToIntersection13716<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13716<T> = UnionToIntersection13716<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13716<T extends unknown[], V> = [...T, V];

type TuplifyUnion13716<T, L = LastOf13716<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13716<TuplifyUnion13716<Exclude<T, L>>, L>;

type DeepPartial13716<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13716<T[P]> }
  : T;

type Paths13716<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13716<K, Paths13716<T[K], Prev13716[D]>> : never }[keyof T]
  : never;

type Prev13716 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13716<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13716 {
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

type ConfigPaths13716 = Paths13716<NestedConfig13716>;

interface HeavyProps13716 {
  config: DeepPartial13716<NestedConfig13716>;
  path?: ConfigPaths13716;
}

const HeavyComponent13716 = memo(function HeavyComponent13716({ config }: HeavyProps13716) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13716) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13716 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13716: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13716.displayName = 'HeavyComponent13716';
export default HeavyComponent13716;
