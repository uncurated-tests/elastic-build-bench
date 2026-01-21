'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly125<T> = T extends (infer U)[]
  ? DeepReadonlyArray125<U>
  : T extends object
  ? DeepReadonlyObject125<T>
  : T;

interface DeepReadonlyArray125<T> extends ReadonlyArray<DeepReadonly125<T>> {}

type DeepReadonlyObject125<T> = {
  readonly [P in keyof T]: DeepReadonly125<T[P]>;
};

type UnionToIntersection125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf125<T> = UnionToIntersection125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push125<T extends unknown[], V> = [...T, V];

type TuplifyUnion125<T, L = LastOf125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push125<TuplifyUnion125<Exclude<T, L>>, L>;

type DeepPartial125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial125<T[P]> }
  : T;

type Paths125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join125<K, Paths125<T[K], Prev125[D]>> : never }[keyof T]
  : never;

type Prev125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig125 {
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

type ConfigPaths125 = Paths125<NestedConfig125>;

interface HeavyProps125 {
  config: DeepPartial125<NestedConfig125>;
  path?: ConfigPaths125;
}

const HeavyComponent125 = memo(function HeavyComponent125({ config }: HeavyProps125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent125.displayName = 'HeavyComponent125';
export default HeavyComponent125;
