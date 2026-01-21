'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13201<T> = T extends (infer U)[]
  ? DeepReadonlyArray13201<U>
  : T extends object
  ? DeepReadonlyObject13201<T>
  : T;

interface DeepReadonlyArray13201<T> extends ReadonlyArray<DeepReadonly13201<T>> {}

type DeepReadonlyObject13201<T> = {
  readonly [P in keyof T]: DeepReadonly13201<T[P]>;
};

type UnionToIntersection13201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13201<T> = UnionToIntersection13201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13201<T extends unknown[], V> = [...T, V];

type TuplifyUnion13201<T, L = LastOf13201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13201<TuplifyUnion13201<Exclude<T, L>>, L>;

type DeepPartial13201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13201<T[P]> }
  : T;

type Paths13201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13201<K, Paths13201<T[K], Prev13201[D]>> : never }[keyof T]
  : never;

type Prev13201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13201 {
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

type ConfigPaths13201 = Paths13201<NestedConfig13201>;

interface HeavyProps13201 {
  config: DeepPartial13201<NestedConfig13201>;
  path?: ConfigPaths13201;
}

const HeavyComponent13201 = memo(function HeavyComponent13201({ config }: HeavyProps13201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13201.displayName = 'HeavyComponent13201';
export default HeavyComponent13201;
