'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2728<T> = T extends (infer U)[]
  ? DeepReadonlyArray2728<U>
  : T extends object
  ? DeepReadonlyObject2728<T>
  : T;

interface DeepReadonlyArray2728<T> extends ReadonlyArray<DeepReadonly2728<T>> {}

type DeepReadonlyObject2728<T> = {
  readonly [P in keyof T]: DeepReadonly2728<T[P]>;
};

type UnionToIntersection2728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2728<T> = UnionToIntersection2728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2728<T extends unknown[], V> = [...T, V];

type TuplifyUnion2728<T, L = LastOf2728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2728<TuplifyUnion2728<Exclude<T, L>>, L>;

type DeepPartial2728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2728<T[P]> }
  : T;

type Paths2728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2728<K, Paths2728<T[K], Prev2728[D]>> : never }[keyof T]
  : never;

type Prev2728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2728 {
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

type ConfigPaths2728 = Paths2728<NestedConfig2728>;

interface HeavyProps2728 {
  config: DeepPartial2728<NestedConfig2728>;
  path?: ConfigPaths2728;
}

const HeavyComponent2728 = memo(function HeavyComponent2728({ config }: HeavyProps2728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2728.displayName = 'HeavyComponent2728';
export default HeavyComponent2728;
