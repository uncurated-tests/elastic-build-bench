'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2925<T> = T extends (infer U)[]
  ? DeepReadonlyArray2925<U>
  : T extends object
  ? DeepReadonlyObject2925<T>
  : T;

interface DeepReadonlyArray2925<T> extends ReadonlyArray<DeepReadonly2925<T>> {}

type DeepReadonlyObject2925<T> = {
  readonly [P in keyof T]: DeepReadonly2925<T[P]>;
};

type UnionToIntersection2925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2925<T> = UnionToIntersection2925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2925<T extends unknown[], V> = [...T, V];

type TuplifyUnion2925<T, L = LastOf2925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2925<TuplifyUnion2925<Exclude<T, L>>, L>;

type DeepPartial2925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2925<T[P]> }
  : T;

type Paths2925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2925<K, Paths2925<T[K], Prev2925[D]>> : never }[keyof T]
  : never;

type Prev2925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2925 {
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

type ConfigPaths2925 = Paths2925<NestedConfig2925>;

interface HeavyProps2925 {
  config: DeepPartial2925<NestedConfig2925>;
  path?: ConfigPaths2925;
}

const HeavyComponent2925 = memo(function HeavyComponent2925({ config }: HeavyProps2925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2925.displayName = 'HeavyComponent2925';
export default HeavyComponent2925;
