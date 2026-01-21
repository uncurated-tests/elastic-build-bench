'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2890<T> = T extends (infer U)[]
  ? DeepReadonlyArray2890<U>
  : T extends object
  ? DeepReadonlyObject2890<T>
  : T;

interface DeepReadonlyArray2890<T> extends ReadonlyArray<DeepReadonly2890<T>> {}

type DeepReadonlyObject2890<T> = {
  readonly [P in keyof T]: DeepReadonly2890<T[P]>;
};

type UnionToIntersection2890<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2890<T> = UnionToIntersection2890<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2890<T extends unknown[], V> = [...T, V];

type TuplifyUnion2890<T, L = LastOf2890<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2890<TuplifyUnion2890<Exclude<T, L>>, L>;

type DeepPartial2890<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2890<T[P]> }
  : T;

type Paths2890<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2890<K, Paths2890<T[K], Prev2890[D]>> : never }[keyof T]
  : never;

type Prev2890 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2890<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2890 {
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

type ConfigPaths2890 = Paths2890<NestedConfig2890>;

interface HeavyProps2890 {
  config: DeepPartial2890<NestedConfig2890>;
  path?: ConfigPaths2890;
}

const HeavyComponent2890 = memo(function HeavyComponent2890({ config }: HeavyProps2890) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2890) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2890 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2890: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2890.displayName = 'HeavyComponent2890';
export default HeavyComponent2890;
