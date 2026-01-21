'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13451<T> = T extends (infer U)[]
  ? DeepReadonlyArray13451<U>
  : T extends object
  ? DeepReadonlyObject13451<T>
  : T;

interface DeepReadonlyArray13451<T> extends ReadonlyArray<DeepReadonly13451<T>> {}

type DeepReadonlyObject13451<T> = {
  readonly [P in keyof T]: DeepReadonly13451<T[P]>;
};

type UnionToIntersection13451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13451<T> = UnionToIntersection13451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13451<T extends unknown[], V> = [...T, V];

type TuplifyUnion13451<T, L = LastOf13451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13451<TuplifyUnion13451<Exclude<T, L>>, L>;

type DeepPartial13451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13451<T[P]> }
  : T;

type Paths13451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13451<K, Paths13451<T[K], Prev13451[D]>> : never }[keyof T]
  : never;

type Prev13451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13451 {
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

type ConfigPaths13451 = Paths13451<NestedConfig13451>;

interface HeavyProps13451 {
  config: DeepPartial13451<NestedConfig13451>;
  path?: ConfigPaths13451;
}

const HeavyComponent13451 = memo(function HeavyComponent13451({ config }: HeavyProps13451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13451.displayName = 'HeavyComponent13451';
export default HeavyComponent13451;
