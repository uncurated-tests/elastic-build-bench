'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2985<T> = T extends (infer U)[]
  ? DeepReadonlyArray2985<U>
  : T extends object
  ? DeepReadonlyObject2985<T>
  : T;

interface DeepReadonlyArray2985<T> extends ReadonlyArray<DeepReadonly2985<T>> {}

type DeepReadonlyObject2985<T> = {
  readonly [P in keyof T]: DeepReadonly2985<T[P]>;
};

type UnionToIntersection2985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2985<T> = UnionToIntersection2985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2985<T extends unknown[], V> = [...T, V];

type TuplifyUnion2985<T, L = LastOf2985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2985<TuplifyUnion2985<Exclude<T, L>>, L>;

type DeepPartial2985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2985<T[P]> }
  : T;

type Paths2985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2985<K, Paths2985<T[K], Prev2985[D]>> : never }[keyof T]
  : never;

type Prev2985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2985 {
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

type ConfigPaths2985 = Paths2985<NestedConfig2985>;

interface HeavyProps2985 {
  config: DeepPartial2985<NestedConfig2985>;
  path?: ConfigPaths2985;
}

const HeavyComponent2985 = memo(function HeavyComponent2985({ config }: HeavyProps2985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2985.displayName = 'HeavyComponent2985';
export default HeavyComponent2985;
