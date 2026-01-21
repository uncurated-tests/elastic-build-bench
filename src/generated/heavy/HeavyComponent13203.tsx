'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13203<T> = T extends (infer U)[]
  ? DeepReadonlyArray13203<U>
  : T extends object
  ? DeepReadonlyObject13203<T>
  : T;

interface DeepReadonlyArray13203<T> extends ReadonlyArray<DeepReadonly13203<T>> {}

type DeepReadonlyObject13203<T> = {
  readonly [P in keyof T]: DeepReadonly13203<T[P]>;
};

type UnionToIntersection13203<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13203<T> = UnionToIntersection13203<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13203<T extends unknown[], V> = [...T, V];

type TuplifyUnion13203<T, L = LastOf13203<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13203<TuplifyUnion13203<Exclude<T, L>>, L>;

type DeepPartial13203<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13203<T[P]> }
  : T;

type Paths13203<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13203<K, Paths13203<T[K], Prev13203[D]>> : never }[keyof T]
  : never;

type Prev13203 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13203<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13203 {
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

type ConfigPaths13203 = Paths13203<NestedConfig13203>;

interface HeavyProps13203 {
  config: DeepPartial13203<NestedConfig13203>;
  path?: ConfigPaths13203;
}

const HeavyComponent13203 = memo(function HeavyComponent13203({ config }: HeavyProps13203) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13203) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13203 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13203: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13203.displayName = 'HeavyComponent13203';
export default HeavyComponent13203;
