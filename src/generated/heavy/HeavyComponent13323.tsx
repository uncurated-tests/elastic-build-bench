'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13323<T> = T extends (infer U)[]
  ? DeepReadonlyArray13323<U>
  : T extends object
  ? DeepReadonlyObject13323<T>
  : T;

interface DeepReadonlyArray13323<T> extends ReadonlyArray<DeepReadonly13323<T>> {}

type DeepReadonlyObject13323<T> = {
  readonly [P in keyof T]: DeepReadonly13323<T[P]>;
};

type UnionToIntersection13323<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13323<T> = UnionToIntersection13323<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13323<T extends unknown[], V> = [...T, V];

type TuplifyUnion13323<T, L = LastOf13323<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13323<TuplifyUnion13323<Exclude<T, L>>, L>;

type DeepPartial13323<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13323<T[P]> }
  : T;

type Paths13323<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13323<K, Paths13323<T[K], Prev13323[D]>> : never }[keyof T]
  : never;

type Prev13323 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13323<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13323 {
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

type ConfigPaths13323 = Paths13323<NestedConfig13323>;

interface HeavyProps13323 {
  config: DeepPartial13323<NestedConfig13323>;
  path?: ConfigPaths13323;
}

const HeavyComponent13323 = memo(function HeavyComponent13323({ config }: HeavyProps13323) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13323) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13323 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13323: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13323.displayName = 'HeavyComponent13323';
export default HeavyComponent13323;
