'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13941<T> = T extends (infer U)[]
  ? DeepReadonlyArray13941<U>
  : T extends object
  ? DeepReadonlyObject13941<T>
  : T;

interface DeepReadonlyArray13941<T> extends ReadonlyArray<DeepReadonly13941<T>> {}

type DeepReadonlyObject13941<T> = {
  readonly [P in keyof T]: DeepReadonly13941<T[P]>;
};

type UnionToIntersection13941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13941<T> = UnionToIntersection13941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13941<T extends unknown[], V> = [...T, V];

type TuplifyUnion13941<T, L = LastOf13941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13941<TuplifyUnion13941<Exclude<T, L>>, L>;

type DeepPartial13941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13941<T[P]> }
  : T;

type Paths13941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13941<K, Paths13941<T[K], Prev13941[D]>> : never }[keyof T]
  : never;

type Prev13941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13941 {
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

type ConfigPaths13941 = Paths13941<NestedConfig13941>;

interface HeavyProps13941 {
  config: DeepPartial13941<NestedConfig13941>;
  path?: ConfigPaths13941;
}

const HeavyComponent13941 = memo(function HeavyComponent13941({ config }: HeavyProps13941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13941.displayName = 'HeavyComponent13941';
export default HeavyComponent13941;
