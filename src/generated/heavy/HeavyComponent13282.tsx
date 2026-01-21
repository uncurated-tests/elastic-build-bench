'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13282<T> = T extends (infer U)[]
  ? DeepReadonlyArray13282<U>
  : T extends object
  ? DeepReadonlyObject13282<T>
  : T;

interface DeepReadonlyArray13282<T> extends ReadonlyArray<DeepReadonly13282<T>> {}

type DeepReadonlyObject13282<T> = {
  readonly [P in keyof T]: DeepReadonly13282<T[P]>;
};

type UnionToIntersection13282<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13282<T> = UnionToIntersection13282<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13282<T extends unknown[], V> = [...T, V];

type TuplifyUnion13282<T, L = LastOf13282<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13282<TuplifyUnion13282<Exclude<T, L>>, L>;

type DeepPartial13282<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13282<T[P]> }
  : T;

type Paths13282<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13282<K, Paths13282<T[K], Prev13282[D]>> : never }[keyof T]
  : never;

type Prev13282 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13282<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13282 {
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

type ConfigPaths13282 = Paths13282<NestedConfig13282>;

interface HeavyProps13282 {
  config: DeepPartial13282<NestedConfig13282>;
  path?: ConfigPaths13282;
}

const HeavyComponent13282 = memo(function HeavyComponent13282({ config }: HeavyProps13282) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13282) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13282 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13282: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13282.displayName = 'HeavyComponent13282';
export default HeavyComponent13282;
