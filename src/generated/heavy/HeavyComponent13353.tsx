'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13353<T> = T extends (infer U)[]
  ? DeepReadonlyArray13353<U>
  : T extends object
  ? DeepReadonlyObject13353<T>
  : T;

interface DeepReadonlyArray13353<T> extends ReadonlyArray<DeepReadonly13353<T>> {}

type DeepReadonlyObject13353<T> = {
  readonly [P in keyof T]: DeepReadonly13353<T[P]>;
};

type UnionToIntersection13353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13353<T> = UnionToIntersection13353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13353<T extends unknown[], V> = [...T, V];

type TuplifyUnion13353<T, L = LastOf13353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13353<TuplifyUnion13353<Exclude<T, L>>, L>;

type DeepPartial13353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13353<T[P]> }
  : T;

type Paths13353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13353<K, Paths13353<T[K], Prev13353[D]>> : never }[keyof T]
  : never;

type Prev13353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13353 {
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

type ConfigPaths13353 = Paths13353<NestedConfig13353>;

interface HeavyProps13353 {
  config: DeepPartial13353<NestedConfig13353>;
  path?: ConfigPaths13353;
}

const HeavyComponent13353 = memo(function HeavyComponent13353({ config }: HeavyProps13353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13353.displayName = 'HeavyComponent13353';
export default HeavyComponent13353;
