'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2748<T> = T extends (infer U)[]
  ? DeepReadonlyArray2748<U>
  : T extends object
  ? DeepReadonlyObject2748<T>
  : T;

interface DeepReadonlyArray2748<T> extends ReadonlyArray<DeepReadonly2748<T>> {}

type DeepReadonlyObject2748<T> = {
  readonly [P in keyof T]: DeepReadonly2748<T[P]>;
};

type UnionToIntersection2748<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2748<T> = UnionToIntersection2748<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2748<T extends unknown[], V> = [...T, V];

type TuplifyUnion2748<T, L = LastOf2748<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2748<TuplifyUnion2748<Exclude<T, L>>, L>;

type DeepPartial2748<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2748<T[P]> }
  : T;

type Paths2748<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2748<K, Paths2748<T[K], Prev2748[D]>> : never }[keyof T]
  : never;

type Prev2748 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2748<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2748 {
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

type ConfigPaths2748 = Paths2748<NestedConfig2748>;

interface HeavyProps2748 {
  config: DeepPartial2748<NestedConfig2748>;
  path?: ConfigPaths2748;
}

const HeavyComponent2748 = memo(function HeavyComponent2748({ config }: HeavyProps2748) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2748) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2748 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2748: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2748.displayName = 'HeavyComponent2748';
export default HeavyComponent2748;
