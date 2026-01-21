'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13221<T> = T extends (infer U)[]
  ? DeepReadonlyArray13221<U>
  : T extends object
  ? DeepReadonlyObject13221<T>
  : T;

interface DeepReadonlyArray13221<T> extends ReadonlyArray<DeepReadonly13221<T>> {}

type DeepReadonlyObject13221<T> = {
  readonly [P in keyof T]: DeepReadonly13221<T[P]>;
};

type UnionToIntersection13221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13221<T> = UnionToIntersection13221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13221<T extends unknown[], V> = [...T, V];

type TuplifyUnion13221<T, L = LastOf13221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13221<TuplifyUnion13221<Exclude<T, L>>, L>;

type DeepPartial13221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13221<T[P]> }
  : T;

type Paths13221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13221<K, Paths13221<T[K], Prev13221[D]>> : never }[keyof T]
  : never;

type Prev13221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13221 {
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

type ConfigPaths13221 = Paths13221<NestedConfig13221>;

interface HeavyProps13221 {
  config: DeepPartial13221<NestedConfig13221>;
  path?: ConfigPaths13221;
}

const HeavyComponent13221 = memo(function HeavyComponent13221({ config }: HeavyProps13221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13221.displayName = 'HeavyComponent13221';
export default HeavyComponent13221;
