'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2276<T> = T extends (infer U)[]
  ? DeepReadonlyArray2276<U>
  : T extends object
  ? DeepReadonlyObject2276<T>
  : T;

interface DeepReadonlyArray2276<T> extends ReadonlyArray<DeepReadonly2276<T>> {}

type DeepReadonlyObject2276<T> = {
  readonly [P in keyof T]: DeepReadonly2276<T[P]>;
};

type UnionToIntersection2276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2276<T> = UnionToIntersection2276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2276<T extends unknown[], V> = [...T, V];

type TuplifyUnion2276<T, L = LastOf2276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2276<TuplifyUnion2276<Exclude<T, L>>, L>;

type DeepPartial2276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2276<T[P]> }
  : T;

type Paths2276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2276<K, Paths2276<T[K], Prev2276[D]>> : never }[keyof T]
  : never;

type Prev2276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2276 {
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

type ConfigPaths2276 = Paths2276<NestedConfig2276>;

interface HeavyProps2276 {
  config: DeepPartial2276<NestedConfig2276>;
  path?: ConfigPaths2276;
}

const HeavyComponent2276 = memo(function HeavyComponent2276({ config }: HeavyProps2276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2276.displayName = 'HeavyComponent2276';
export default HeavyComponent2276;
