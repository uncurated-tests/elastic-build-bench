'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly914<T> = T extends (infer U)[]
  ? DeepReadonlyArray914<U>
  : T extends object
  ? DeepReadonlyObject914<T>
  : T;

interface DeepReadonlyArray914<T> extends ReadonlyArray<DeepReadonly914<T>> {}

type DeepReadonlyObject914<T> = {
  readonly [P in keyof T]: DeepReadonly914<T[P]>;
};

type UnionToIntersection914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf914<T> = UnionToIntersection914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push914<T extends unknown[], V> = [...T, V];

type TuplifyUnion914<T, L = LastOf914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push914<TuplifyUnion914<Exclude<T, L>>, L>;

type DeepPartial914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial914<T[P]> }
  : T;

type Paths914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join914<K, Paths914<T[K], Prev914[D]>> : never }[keyof T]
  : never;

type Prev914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig914 {
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

type ConfigPaths914 = Paths914<NestedConfig914>;

interface HeavyProps914 {
  config: DeepPartial914<NestedConfig914>;
  path?: ConfigPaths914;
}

const HeavyComponent914 = memo(function HeavyComponent914({ config }: HeavyProps914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent914.displayName = 'HeavyComponent914';
export default HeavyComponent914;
