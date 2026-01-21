'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13184<T> = T extends (infer U)[]
  ? DeepReadonlyArray13184<U>
  : T extends object
  ? DeepReadonlyObject13184<T>
  : T;

interface DeepReadonlyArray13184<T> extends ReadonlyArray<DeepReadonly13184<T>> {}

type DeepReadonlyObject13184<T> = {
  readonly [P in keyof T]: DeepReadonly13184<T[P]>;
};

type UnionToIntersection13184<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13184<T> = UnionToIntersection13184<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13184<T extends unknown[], V> = [...T, V];

type TuplifyUnion13184<T, L = LastOf13184<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13184<TuplifyUnion13184<Exclude<T, L>>, L>;

type DeepPartial13184<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13184<T[P]> }
  : T;

type Paths13184<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13184<K, Paths13184<T[K], Prev13184[D]>> : never }[keyof T]
  : never;

type Prev13184 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13184<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13184 {
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

type ConfigPaths13184 = Paths13184<NestedConfig13184>;

interface HeavyProps13184 {
  config: DeepPartial13184<NestedConfig13184>;
  path?: ConfigPaths13184;
}

const HeavyComponent13184 = memo(function HeavyComponent13184({ config }: HeavyProps13184) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13184) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13184 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13184: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13184.displayName = 'HeavyComponent13184';
export default HeavyComponent13184;
