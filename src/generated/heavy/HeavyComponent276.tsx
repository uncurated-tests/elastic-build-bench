'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly276<T> = T extends (infer U)[]
  ? DeepReadonlyArray276<U>
  : T extends object
  ? DeepReadonlyObject276<T>
  : T;

interface DeepReadonlyArray276<T> extends ReadonlyArray<DeepReadonly276<T>> {}

type DeepReadonlyObject276<T> = {
  readonly [P in keyof T]: DeepReadonly276<T[P]>;
};

type UnionToIntersection276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf276<T> = UnionToIntersection276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push276<T extends unknown[], V> = [...T, V];

type TuplifyUnion276<T, L = LastOf276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push276<TuplifyUnion276<Exclude<T, L>>, L>;

type DeepPartial276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial276<T[P]> }
  : T;

type Paths276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join276<K, Paths276<T[K], Prev276[D]>> : never }[keyof T]
  : never;

type Prev276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig276 {
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

type ConfigPaths276 = Paths276<NestedConfig276>;

interface HeavyProps276 {
  config: DeepPartial276<NestedConfig276>;
  path?: ConfigPaths276;
}

const HeavyComponent276 = memo(function HeavyComponent276({ config }: HeavyProps276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent276.displayName = 'HeavyComponent276';
export default HeavyComponent276;
