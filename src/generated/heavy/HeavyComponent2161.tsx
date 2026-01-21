'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2161<T> = T extends (infer U)[]
  ? DeepReadonlyArray2161<U>
  : T extends object
  ? DeepReadonlyObject2161<T>
  : T;

interface DeepReadonlyArray2161<T> extends ReadonlyArray<DeepReadonly2161<T>> {}

type DeepReadonlyObject2161<T> = {
  readonly [P in keyof T]: DeepReadonly2161<T[P]>;
};

type UnionToIntersection2161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2161<T> = UnionToIntersection2161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2161<T extends unknown[], V> = [...T, V];

type TuplifyUnion2161<T, L = LastOf2161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2161<TuplifyUnion2161<Exclude<T, L>>, L>;

type DeepPartial2161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2161<T[P]> }
  : T;

type Paths2161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2161<K, Paths2161<T[K], Prev2161[D]>> : never }[keyof T]
  : never;

type Prev2161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2161 {
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

type ConfigPaths2161 = Paths2161<NestedConfig2161>;

interface HeavyProps2161 {
  config: DeepPartial2161<NestedConfig2161>;
  path?: ConfigPaths2161;
}

const HeavyComponent2161 = memo(function HeavyComponent2161({ config }: HeavyProps2161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2161.displayName = 'HeavyComponent2161';
export default HeavyComponent2161;
