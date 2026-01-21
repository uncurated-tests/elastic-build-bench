'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2902<T> = T extends (infer U)[]
  ? DeepReadonlyArray2902<U>
  : T extends object
  ? DeepReadonlyObject2902<T>
  : T;

interface DeepReadonlyArray2902<T> extends ReadonlyArray<DeepReadonly2902<T>> {}

type DeepReadonlyObject2902<T> = {
  readonly [P in keyof T]: DeepReadonly2902<T[P]>;
};

type UnionToIntersection2902<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2902<T> = UnionToIntersection2902<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2902<T extends unknown[], V> = [...T, V];

type TuplifyUnion2902<T, L = LastOf2902<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2902<TuplifyUnion2902<Exclude<T, L>>, L>;

type DeepPartial2902<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2902<T[P]> }
  : T;

type Paths2902<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2902<K, Paths2902<T[K], Prev2902[D]>> : never }[keyof T]
  : never;

type Prev2902 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2902<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2902 {
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

type ConfigPaths2902 = Paths2902<NestedConfig2902>;

interface HeavyProps2902 {
  config: DeepPartial2902<NestedConfig2902>;
  path?: ConfigPaths2902;
}

const HeavyComponent2902 = memo(function HeavyComponent2902({ config }: HeavyProps2902) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2902) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2902 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2902: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2902.displayName = 'HeavyComponent2902';
export default HeavyComponent2902;
