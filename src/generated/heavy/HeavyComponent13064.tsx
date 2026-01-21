'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13064<T> = T extends (infer U)[]
  ? DeepReadonlyArray13064<U>
  : T extends object
  ? DeepReadonlyObject13064<T>
  : T;

interface DeepReadonlyArray13064<T> extends ReadonlyArray<DeepReadonly13064<T>> {}

type DeepReadonlyObject13064<T> = {
  readonly [P in keyof T]: DeepReadonly13064<T[P]>;
};

type UnionToIntersection13064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13064<T> = UnionToIntersection13064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13064<T extends unknown[], V> = [...T, V];

type TuplifyUnion13064<T, L = LastOf13064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13064<TuplifyUnion13064<Exclude<T, L>>, L>;

type DeepPartial13064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13064<T[P]> }
  : T;

type Paths13064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13064<K, Paths13064<T[K], Prev13064[D]>> : never }[keyof T]
  : never;

type Prev13064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13064 {
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

type ConfigPaths13064 = Paths13064<NestedConfig13064>;

interface HeavyProps13064 {
  config: DeepPartial13064<NestedConfig13064>;
  path?: ConfigPaths13064;
}

const HeavyComponent13064 = memo(function HeavyComponent13064({ config }: HeavyProps13064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13064.displayName = 'HeavyComponent13064';
export default HeavyComponent13064;
