'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2898<T> = T extends (infer U)[]
  ? DeepReadonlyArray2898<U>
  : T extends object
  ? DeepReadonlyObject2898<T>
  : T;

interface DeepReadonlyArray2898<T> extends ReadonlyArray<DeepReadonly2898<T>> {}

type DeepReadonlyObject2898<T> = {
  readonly [P in keyof T]: DeepReadonly2898<T[P]>;
};

type UnionToIntersection2898<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2898<T> = UnionToIntersection2898<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2898<T extends unknown[], V> = [...T, V];

type TuplifyUnion2898<T, L = LastOf2898<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2898<TuplifyUnion2898<Exclude<T, L>>, L>;

type DeepPartial2898<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2898<T[P]> }
  : T;

type Paths2898<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2898<K, Paths2898<T[K], Prev2898[D]>> : never }[keyof T]
  : never;

type Prev2898 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2898<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2898 {
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

type ConfigPaths2898 = Paths2898<NestedConfig2898>;

interface HeavyProps2898 {
  config: DeepPartial2898<NestedConfig2898>;
  path?: ConfigPaths2898;
}

const HeavyComponent2898 = memo(function HeavyComponent2898({ config }: HeavyProps2898) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2898) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2898 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2898: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2898.displayName = 'HeavyComponent2898';
export default HeavyComponent2898;
