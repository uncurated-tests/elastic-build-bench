'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2246<T> = T extends (infer U)[]
  ? DeepReadonlyArray2246<U>
  : T extends object
  ? DeepReadonlyObject2246<T>
  : T;

interface DeepReadonlyArray2246<T> extends ReadonlyArray<DeepReadonly2246<T>> {}

type DeepReadonlyObject2246<T> = {
  readonly [P in keyof T]: DeepReadonly2246<T[P]>;
};

type UnionToIntersection2246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2246<T> = UnionToIntersection2246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2246<T extends unknown[], V> = [...T, V];

type TuplifyUnion2246<T, L = LastOf2246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2246<TuplifyUnion2246<Exclude<T, L>>, L>;

type DeepPartial2246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2246<T[P]> }
  : T;

type Paths2246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2246<K, Paths2246<T[K], Prev2246[D]>> : never }[keyof T]
  : never;

type Prev2246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2246 {
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

type ConfigPaths2246 = Paths2246<NestedConfig2246>;

interface HeavyProps2246 {
  config: DeepPartial2246<NestedConfig2246>;
  path?: ConfigPaths2246;
}

const HeavyComponent2246 = memo(function HeavyComponent2246({ config }: HeavyProps2246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2246.displayName = 'HeavyComponent2246';
export default HeavyComponent2246;
