'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13367<T> = T extends (infer U)[]
  ? DeepReadonlyArray13367<U>
  : T extends object
  ? DeepReadonlyObject13367<T>
  : T;

interface DeepReadonlyArray13367<T> extends ReadonlyArray<DeepReadonly13367<T>> {}

type DeepReadonlyObject13367<T> = {
  readonly [P in keyof T]: DeepReadonly13367<T[P]>;
};

type UnionToIntersection13367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13367<T> = UnionToIntersection13367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13367<T extends unknown[], V> = [...T, V];

type TuplifyUnion13367<T, L = LastOf13367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13367<TuplifyUnion13367<Exclude<T, L>>, L>;

type DeepPartial13367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13367<T[P]> }
  : T;

type Paths13367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13367<K, Paths13367<T[K], Prev13367[D]>> : never }[keyof T]
  : never;

type Prev13367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13367 {
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

type ConfigPaths13367 = Paths13367<NestedConfig13367>;

interface HeavyProps13367 {
  config: DeepPartial13367<NestedConfig13367>;
  path?: ConfigPaths13367;
}

const HeavyComponent13367 = memo(function HeavyComponent13367({ config }: HeavyProps13367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13367.displayName = 'HeavyComponent13367';
export default HeavyComponent13367;
