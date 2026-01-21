'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13031<T> = T extends (infer U)[]
  ? DeepReadonlyArray13031<U>
  : T extends object
  ? DeepReadonlyObject13031<T>
  : T;

interface DeepReadonlyArray13031<T> extends ReadonlyArray<DeepReadonly13031<T>> {}

type DeepReadonlyObject13031<T> = {
  readonly [P in keyof T]: DeepReadonly13031<T[P]>;
};

type UnionToIntersection13031<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13031<T> = UnionToIntersection13031<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13031<T extends unknown[], V> = [...T, V];

type TuplifyUnion13031<T, L = LastOf13031<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13031<TuplifyUnion13031<Exclude<T, L>>, L>;

type DeepPartial13031<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13031<T[P]> }
  : T;

type Paths13031<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13031<K, Paths13031<T[K], Prev13031[D]>> : never }[keyof T]
  : never;

type Prev13031 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13031<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13031 {
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

type ConfigPaths13031 = Paths13031<NestedConfig13031>;

interface HeavyProps13031 {
  config: DeepPartial13031<NestedConfig13031>;
  path?: ConfigPaths13031;
}

const HeavyComponent13031 = memo(function HeavyComponent13031({ config }: HeavyProps13031) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13031) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13031 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13031: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13031.displayName = 'HeavyComponent13031';
export default HeavyComponent13031;
