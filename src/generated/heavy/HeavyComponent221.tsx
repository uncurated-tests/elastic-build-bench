'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly221<T> = T extends (infer U)[]
  ? DeepReadonlyArray221<U>
  : T extends object
  ? DeepReadonlyObject221<T>
  : T;

interface DeepReadonlyArray221<T> extends ReadonlyArray<DeepReadonly221<T>> {}

type DeepReadonlyObject221<T> = {
  readonly [P in keyof T]: DeepReadonly221<T[P]>;
};

type UnionToIntersection221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf221<T> = UnionToIntersection221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push221<T extends unknown[], V> = [...T, V];

type TuplifyUnion221<T, L = LastOf221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push221<TuplifyUnion221<Exclude<T, L>>, L>;

type DeepPartial221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial221<T[P]> }
  : T;

type Paths221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join221<K, Paths221<T[K], Prev221[D]>> : never }[keyof T]
  : never;

type Prev221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig221 {
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

type ConfigPaths221 = Paths221<NestedConfig221>;

interface HeavyProps221 {
  config: DeepPartial221<NestedConfig221>;
  path?: ConfigPaths221;
}

const HeavyComponent221 = memo(function HeavyComponent221({ config }: HeavyProps221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent221.displayName = 'HeavyComponent221';
export default HeavyComponent221;
