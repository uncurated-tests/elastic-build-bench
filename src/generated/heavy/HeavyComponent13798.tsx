'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13798<T> = T extends (infer U)[]
  ? DeepReadonlyArray13798<U>
  : T extends object
  ? DeepReadonlyObject13798<T>
  : T;

interface DeepReadonlyArray13798<T> extends ReadonlyArray<DeepReadonly13798<T>> {}

type DeepReadonlyObject13798<T> = {
  readonly [P in keyof T]: DeepReadonly13798<T[P]>;
};

type UnionToIntersection13798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13798<T> = UnionToIntersection13798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13798<T extends unknown[], V> = [...T, V];

type TuplifyUnion13798<T, L = LastOf13798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13798<TuplifyUnion13798<Exclude<T, L>>, L>;

type DeepPartial13798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13798<T[P]> }
  : T;

type Paths13798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13798<K, Paths13798<T[K], Prev13798[D]>> : never }[keyof T]
  : never;

type Prev13798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13798 {
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

type ConfigPaths13798 = Paths13798<NestedConfig13798>;

interface HeavyProps13798 {
  config: DeepPartial13798<NestedConfig13798>;
  path?: ConfigPaths13798;
}

const HeavyComponent13798 = memo(function HeavyComponent13798({ config }: HeavyProps13798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13798.displayName = 'HeavyComponent13798';
export default HeavyComponent13798;
