'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2140<T> = T extends (infer U)[]
  ? DeepReadonlyArray2140<U>
  : T extends object
  ? DeepReadonlyObject2140<T>
  : T;

interface DeepReadonlyArray2140<T> extends ReadonlyArray<DeepReadonly2140<T>> {}

type DeepReadonlyObject2140<T> = {
  readonly [P in keyof T]: DeepReadonly2140<T[P]>;
};

type UnionToIntersection2140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2140<T> = UnionToIntersection2140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2140<T extends unknown[], V> = [...T, V];

type TuplifyUnion2140<T, L = LastOf2140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2140<TuplifyUnion2140<Exclude<T, L>>, L>;

type DeepPartial2140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2140<T[P]> }
  : T;

type Paths2140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2140<K, Paths2140<T[K], Prev2140[D]>> : never }[keyof T]
  : never;

type Prev2140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2140 {
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

type ConfigPaths2140 = Paths2140<NestedConfig2140>;

interface HeavyProps2140 {
  config: DeepPartial2140<NestedConfig2140>;
  path?: ConfigPaths2140;
}

const HeavyComponent2140 = memo(function HeavyComponent2140({ config }: HeavyProps2140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2140.displayName = 'HeavyComponent2140';
export default HeavyComponent2140;
