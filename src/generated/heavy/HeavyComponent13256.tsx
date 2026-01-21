'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13256<T> = T extends (infer U)[]
  ? DeepReadonlyArray13256<U>
  : T extends object
  ? DeepReadonlyObject13256<T>
  : T;

interface DeepReadonlyArray13256<T> extends ReadonlyArray<DeepReadonly13256<T>> {}

type DeepReadonlyObject13256<T> = {
  readonly [P in keyof T]: DeepReadonly13256<T[P]>;
};

type UnionToIntersection13256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13256<T> = UnionToIntersection13256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13256<T extends unknown[], V> = [...T, V];

type TuplifyUnion13256<T, L = LastOf13256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13256<TuplifyUnion13256<Exclude<T, L>>, L>;

type DeepPartial13256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13256<T[P]> }
  : T;

type Paths13256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13256<K, Paths13256<T[K], Prev13256[D]>> : never }[keyof T]
  : never;

type Prev13256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13256 {
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

type ConfigPaths13256 = Paths13256<NestedConfig13256>;

interface HeavyProps13256 {
  config: DeepPartial13256<NestedConfig13256>;
  path?: ConfigPaths13256;
}

const HeavyComponent13256 = memo(function HeavyComponent13256({ config }: HeavyProps13256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13256.displayName = 'HeavyComponent13256';
export default HeavyComponent13256;
