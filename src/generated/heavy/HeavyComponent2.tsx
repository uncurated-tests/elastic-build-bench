'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2<T> = T extends (infer U)[]
  ? DeepReadonlyArray2<U>
  : T extends object
  ? DeepReadonlyObject2<T>
  : T;

interface DeepReadonlyArray2<T> extends ReadonlyArray<DeepReadonly2<T>> {}

type DeepReadonlyObject2<T> = {
  readonly [P in keyof T]: DeepReadonly2<T[P]>;
};

type UnionToIntersection2<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2<T> = UnionToIntersection2<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2<T extends unknown[], V> = [...T, V];

type TuplifyUnion2<T, L = LastOf2<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2<TuplifyUnion2<Exclude<T, L>>, L>;

type DeepPartial2<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2<T[P]> }
  : T;

type Paths2<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2<K, Paths2<T[K], Prev2[D]>> : never }[keyof T]
  : never;

type Prev2 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2 {
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

type ConfigPaths2 = Paths2<NestedConfig2>;

interface HeavyProps2 {
  config: DeepPartial2<NestedConfig2>;
  path?: ConfigPaths2;
}

const HeavyComponent2 = memo(function HeavyComponent2({ config }: HeavyProps2) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2.displayName = 'HeavyComponent2';
export default HeavyComponent2;
