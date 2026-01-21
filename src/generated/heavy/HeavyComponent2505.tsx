'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2505<T> = T extends (infer U)[]
  ? DeepReadonlyArray2505<U>
  : T extends object
  ? DeepReadonlyObject2505<T>
  : T;

interface DeepReadonlyArray2505<T> extends ReadonlyArray<DeepReadonly2505<T>> {}

type DeepReadonlyObject2505<T> = {
  readonly [P in keyof T]: DeepReadonly2505<T[P]>;
};

type UnionToIntersection2505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2505<T> = UnionToIntersection2505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2505<T extends unknown[], V> = [...T, V];

type TuplifyUnion2505<T, L = LastOf2505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2505<TuplifyUnion2505<Exclude<T, L>>, L>;

type DeepPartial2505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2505<T[P]> }
  : T;

type Paths2505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2505<K, Paths2505<T[K], Prev2505[D]>> : never }[keyof T]
  : never;

type Prev2505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2505 {
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

type ConfigPaths2505 = Paths2505<NestedConfig2505>;

interface HeavyProps2505 {
  config: DeepPartial2505<NestedConfig2505>;
  path?: ConfigPaths2505;
}

const HeavyComponent2505 = memo(function HeavyComponent2505({ config }: HeavyProps2505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2505.displayName = 'HeavyComponent2505';
export default HeavyComponent2505;
