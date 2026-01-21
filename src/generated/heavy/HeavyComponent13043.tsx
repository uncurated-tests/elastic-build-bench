'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13043<T> = T extends (infer U)[]
  ? DeepReadonlyArray13043<U>
  : T extends object
  ? DeepReadonlyObject13043<T>
  : T;

interface DeepReadonlyArray13043<T> extends ReadonlyArray<DeepReadonly13043<T>> {}

type DeepReadonlyObject13043<T> = {
  readonly [P in keyof T]: DeepReadonly13043<T[P]>;
};

type UnionToIntersection13043<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13043<T> = UnionToIntersection13043<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13043<T extends unknown[], V> = [...T, V];

type TuplifyUnion13043<T, L = LastOf13043<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13043<TuplifyUnion13043<Exclude<T, L>>, L>;

type DeepPartial13043<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13043<T[P]> }
  : T;

type Paths13043<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13043<K, Paths13043<T[K], Prev13043[D]>> : never }[keyof T]
  : never;

type Prev13043 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13043<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13043 {
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

type ConfigPaths13043 = Paths13043<NestedConfig13043>;

interface HeavyProps13043 {
  config: DeepPartial13043<NestedConfig13043>;
  path?: ConfigPaths13043;
}

const HeavyComponent13043 = memo(function HeavyComponent13043({ config }: HeavyProps13043) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13043) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13043 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13043: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13043.displayName = 'HeavyComponent13043';
export default HeavyComponent13043;
