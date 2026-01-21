'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13780<T> = T extends (infer U)[]
  ? DeepReadonlyArray13780<U>
  : T extends object
  ? DeepReadonlyObject13780<T>
  : T;

interface DeepReadonlyArray13780<T> extends ReadonlyArray<DeepReadonly13780<T>> {}

type DeepReadonlyObject13780<T> = {
  readonly [P in keyof T]: DeepReadonly13780<T[P]>;
};

type UnionToIntersection13780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13780<T> = UnionToIntersection13780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13780<T extends unknown[], V> = [...T, V];

type TuplifyUnion13780<T, L = LastOf13780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13780<TuplifyUnion13780<Exclude<T, L>>, L>;

type DeepPartial13780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13780<T[P]> }
  : T;

type Paths13780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13780<K, Paths13780<T[K], Prev13780[D]>> : never }[keyof T]
  : never;

type Prev13780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13780 {
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

type ConfigPaths13780 = Paths13780<NestedConfig13780>;

interface HeavyProps13780 {
  config: DeepPartial13780<NestedConfig13780>;
  path?: ConfigPaths13780;
}

const HeavyComponent13780 = memo(function HeavyComponent13780({ config }: HeavyProps13780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13780.displayName = 'HeavyComponent13780';
export default HeavyComponent13780;
