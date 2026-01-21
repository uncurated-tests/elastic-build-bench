'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly803<T> = T extends (infer U)[]
  ? DeepReadonlyArray803<U>
  : T extends object
  ? DeepReadonlyObject803<T>
  : T;

interface DeepReadonlyArray803<T> extends ReadonlyArray<DeepReadonly803<T>> {}

type DeepReadonlyObject803<T> = {
  readonly [P in keyof T]: DeepReadonly803<T[P]>;
};

type UnionToIntersection803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf803<T> = UnionToIntersection803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push803<T extends unknown[], V> = [...T, V];

type TuplifyUnion803<T, L = LastOf803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push803<TuplifyUnion803<Exclude<T, L>>, L>;

type DeepPartial803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial803<T[P]> }
  : T;

type Paths803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join803<K, Paths803<T[K], Prev803[D]>> : never }[keyof T]
  : never;

type Prev803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig803 {
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

type ConfigPaths803 = Paths803<NestedConfig803>;

interface HeavyProps803 {
  config: DeepPartial803<NestedConfig803>;
  path?: ConfigPaths803;
}

const HeavyComponent803 = memo(function HeavyComponent803({ config }: HeavyProps803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent803.displayName = 'HeavyComponent803';
export default HeavyComponent803;
