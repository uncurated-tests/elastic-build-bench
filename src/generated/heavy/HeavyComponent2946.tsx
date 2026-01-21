'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2946<T> = T extends (infer U)[]
  ? DeepReadonlyArray2946<U>
  : T extends object
  ? DeepReadonlyObject2946<T>
  : T;

interface DeepReadonlyArray2946<T> extends ReadonlyArray<DeepReadonly2946<T>> {}

type DeepReadonlyObject2946<T> = {
  readonly [P in keyof T]: DeepReadonly2946<T[P]>;
};

type UnionToIntersection2946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2946<T> = UnionToIntersection2946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2946<T extends unknown[], V> = [...T, V];

type TuplifyUnion2946<T, L = LastOf2946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2946<TuplifyUnion2946<Exclude<T, L>>, L>;

type DeepPartial2946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2946<T[P]> }
  : T;

type Paths2946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2946<K, Paths2946<T[K], Prev2946[D]>> : never }[keyof T]
  : never;

type Prev2946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2946 {
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

type ConfigPaths2946 = Paths2946<NestedConfig2946>;

interface HeavyProps2946 {
  config: DeepPartial2946<NestedConfig2946>;
  path?: ConfigPaths2946;
}

const HeavyComponent2946 = memo(function HeavyComponent2946({ config }: HeavyProps2946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2946.displayName = 'HeavyComponent2946';
export default HeavyComponent2946;
