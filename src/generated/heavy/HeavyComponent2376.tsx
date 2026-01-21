'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2376<T> = T extends (infer U)[]
  ? DeepReadonlyArray2376<U>
  : T extends object
  ? DeepReadonlyObject2376<T>
  : T;

interface DeepReadonlyArray2376<T> extends ReadonlyArray<DeepReadonly2376<T>> {}

type DeepReadonlyObject2376<T> = {
  readonly [P in keyof T]: DeepReadonly2376<T[P]>;
};

type UnionToIntersection2376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2376<T> = UnionToIntersection2376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2376<T extends unknown[], V> = [...T, V];

type TuplifyUnion2376<T, L = LastOf2376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2376<TuplifyUnion2376<Exclude<T, L>>, L>;

type DeepPartial2376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2376<T[P]> }
  : T;

type Paths2376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2376<K, Paths2376<T[K], Prev2376[D]>> : never }[keyof T]
  : never;

type Prev2376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2376 {
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

type ConfigPaths2376 = Paths2376<NestedConfig2376>;

interface HeavyProps2376 {
  config: DeepPartial2376<NestedConfig2376>;
  path?: ConfigPaths2376;
}

const HeavyComponent2376 = memo(function HeavyComponent2376({ config }: HeavyProps2376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2376.displayName = 'HeavyComponent2376';
export default HeavyComponent2376;
