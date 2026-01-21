'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2648<T> = T extends (infer U)[]
  ? DeepReadonlyArray2648<U>
  : T extends object
  ? DeepReadonlyObject2648<T>
  : T;

interface DeepReadonlyArray2648<T> extends ReadonlyArray<DeepReadonly2648<T>> {}

type DeepReadonlyObject2648<T> = {
  readonly [P in keyof T]: DeepReadonly2648<T[P]>;
};

type UnionToIntersection2648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2648<T> = UnionToIntersection2648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2648<T extends unknown[], V> = [...T, V];

type TuplifyUnion2648<T, L = LastOf2648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2648<TuplifyUnion2648<Exclude<T, L>>, L>;

type DeepPartial2648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2648<T[P]> }
  : T;

type Paths2648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2648<K, Paths2648<T[K], Prev2648[D]>> : never }[keyof T]
  : never;

type Prev2648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2648 {
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

type ConfigPaths2648 = Paths2648<NestedConfig2648>;

interface HeavyProps2648 {
  config: DeepPartial2648<NestedConfig2648>;
  path?: ConfigPaths2648;
}

const HeavyComponent2648 = memo(function HeavyComponent2648({ config }: HeavyProps2648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2648.displayName = 'HeavyComponent2648';
export default HeavyComponent2648;
