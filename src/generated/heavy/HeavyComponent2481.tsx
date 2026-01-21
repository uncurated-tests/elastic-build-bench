'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2481<T> = T extends (infer U)[]
  ? DeepReadonlyArray2481<U>
  : T extends object
  ? DeepReadonlyObject2481<T>
  : T;

interface DeepReadonlyArray2481<T> extends ReadonlyArray<DeepReadonly2481<T>> {}

type DeepReadonlyObject2481<T> = {
  readonly [P in keyof T]: DeepReadonly2481<T[P]>;
};

type UnionToIntersection2481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2481<T> = UnionToIntersection2481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2481<T extends unknown[], V> = [...T, V];

type TuplifyUnion2481<T, L = LastOf2481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2481<TuplifyUnion2481<Exclude<T, L>>, L>;

type DeepPartial2481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2481<T[P]> }
  : T;

type Paths2481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2481<K, Paths2481<T[K], Prev2481[D]>> : never }[keyof T]
  : never;

type Prev2481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2481 {
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

type ConfigPaths2481 = Paths2481<NestedConfig2481>;

interface HeavyProps2481 {
  config: DeepPartial2481<NestedConfig2481>;
  path?: ConfigPaths2481;
}

const HeavyComponent2481 = memo(function HeavyComponent2481({ config }: HeavyProps2481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2481.displayName = 'HeavyComponent2481';
export default HeavyComponent2481;
