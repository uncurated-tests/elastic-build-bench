'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13945<T> = T extends (infer U)[]
  ? DeepReadonlyArray13945<U>
  : T extends object
  ? DeepReadonlyObject13945<T>
  : T;

interface DeepReadonlyArray13945<T> extends ReadonlyArray<DeepReadonly13945<T>> {}

type DeepReadonlyObject13945<T> = {
  readonly [P in keyof T]: DeepReadonly13945<T[P]>;
};

type UnionToIntersection13945<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13945<T> = UnionToIntersection13945<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13945<T extends unknown[], V> = [...T, V];

type TuplifyUnion13945<T, L = LastOf13945<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13945<TuplifyUnion13945<Exclude<T, L>>, L>;

type DeepPartial13945<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13945<T[P]> }
  : T;

type Paths13945<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13945<K, Paths13945<T[K], Prev13945[D]>> : never }[keyof T]
  : never;

type Prev13945 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13945<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13945 {
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

type ConfigPaths13945 = Paths13945<NestedConfig13945>;

interface HeavyProps13945 {
  config: DeepPartial13945<NestedConfig13945>;
  path?: ConfigPaths13945;
}

const HeavyComponent13945 = memo(function HeavyComponent13945({ config }: HeavyProps13945) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13945) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13945 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13945: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13945.displayName = 'HeavyComponent13945';
export default HeavyComponent13945;
