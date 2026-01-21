'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2777<T> = T extends (infer U)[]
  ? DeepReadonlyArray2777<U>
  : T extends object
  ? DeepReadonlyObject2777<T>
  : T;

interface DeepReadonlyArray2777<T> extends ReadonlyArray<DeepReadonly2777<T>> {}

type DeepReadonlyObject2777<T> = {
  readonly [P in keyof T]: DeepReadonly2777<T[P]>;
};

type UnionToIntersection2777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2777<T> = UnionToIntersection2777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2777<T extends unknown[], V> = [...T, V];

type TuplifyUnion2777<T, L = LastOf2777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2777<TuplifyUnion2777<Exclude<T, L>>, L>;

type DeepPartial2777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2777<T[P]> }
  : T;

type Paths2777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2777<K, Paths2777<T[K], Prev2777[D]>> : never }[keyof T]
  : never;

type Prev2777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2777 {
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

type ConfigPaths2777 = Paths2777<NestedConfig2777>;

interface HeavyProps2777 {
  config: DeepPartial2777<NestedConfig2777>;
  path?: ConfigPaths2777;
}

const HeavyComponent2777 = memo(function HeavyComponent2777({ config }: HeavyProps2777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2777.displayName = 'HeavyComponent2777';
export default HeavyComponent2777;
