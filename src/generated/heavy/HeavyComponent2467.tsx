'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2467<T> = T extends (infer U)[]
  ? DeepReadonlyArray2467<U>
  : T extends object
  ? DeepReadonlyObject2467<T>
  : T;

interface DeepReadonlyArray2467<T> extends ReadonlyArray<DeepReadonly2467<T>> {}

type DeepReadonlyObject2467<T> = {
  readonly [P in keyof T]: DeepReadonly2467<T[P]>;
};

type UnionToIntersection2467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2467<T> = UnionToIntersection2467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2467<T extends unknown[], V> = [...T, V];

type TuplifyUnion2467<T, L = LastOf2467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2467<TuplifyUnion2467<Exclude<T, L>>, L>;

type DeepPartial2467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2467<T[P]> }
  : T;

type Paths2467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2467<K, Paths2467<T[K], Prev2467[D]>> : never }[keyof T]
  : never;

type Prev2467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2467 {
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

type ConfigPaths2467 = Paths2467<NestedConfig2467>;

interface HeavyProps2467 {
  config: DeepPartial2467<NestedConfig2467>;
  path?: ConfigPaths2467;
}

const HeavyComponent2467 = memo(function HeavyComponent2467({ config }: HeavyProps2467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2467.displayName = 'HeavyComponent2467';
export default HeavyComponent2467;
