'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13171<T> = T extends (infer U)[]
  ? DeepReadonlyArray13171<U>
  : T extends object
  ? DeepReadonlyObject13171<T>
  : T;

interface DeepReadonlyArray13171<T> extends ReadonlyArray<DeepReadonly13171<T>> {}

type DeepReadonlyObject13171<T> = {
  readonly [P in keyof T]: DeepReadonly13171<T[P]>;
};

type UnionToIntersection13171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13171<T> = UnionToIntersection13171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13171<T extends unknown[], V> = [...T, V];

type TuplifyUnion13171<T, L = LastOf13171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13171<TuplifyUnion13171<Exclude<T, L>>, L>;

type DeepPartial13171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13171<T[P]> }
  : T;

type Paths13171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13171<K, Paths13171<T[K], Prev13171[D]>> : never }[keyof T]
  : never;

type Prev13171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13171 {
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

type ConfigPaths13171 = Paths13171<NestedConfig13171>;

interface HeavyProps13171 {
  config: DeepPartial13171<NestedConfig13171>;
  path?: ConfigPaths13171;
}

const HeavyComponent13171 = memo(function HeavyComponent13171({ config }: HeavyProps13171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13171.displayName = 'HeavyComponent13171';
export default HeavyComponent13171;
