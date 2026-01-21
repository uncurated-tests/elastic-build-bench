'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13238<T> = T extends (infer U)[]
  ? DeepReadonlyArray13238<U>
  : T extends object
  ? DeepReadonlyObject13238<T>
  : T;

interface DeepReadonlyArray13238<T> extends ReadonlyArray<DeepReadonly13238<T>> {}

type DeepReadonlyObject13238<T> = {
  readonly [P in keyof T]: DeepReadonly13238<T[P]>;
};

type UnionToIntersection13238<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13238<T> = UnionToIntersection13238<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13238<T extends unknown[], V> = [...T, V];

type TuplifyUnion13238<T, L = LastOf13238<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13238<TuplifyUnion13238<Exclude<T, L>>, L>;

type DeepPartial13238<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13238<T[P]> }
  : T;

type Paths13238<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13238<K, Paths13238<T[K], Prev13238[D]>> : never }[keyof T]
  : never;

type Prev13238 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13238<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13238 {
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

type ConfigPaths13238 = Paths13238<NestedConfig13238>;

interface HeavyProps13238 {
  config: DeepPartial13238<NestedConfig13238>;
  path?: ConfigPaths13238;
}

const HeavyComponent13238 = memo(function HeavyComponent13238({ config }: HeavyProps13238) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13238) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13238 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13238: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13238.displayName = 'HeavyComponent13238';
export default HeavyComponent13238;
