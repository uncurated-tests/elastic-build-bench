'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2521<T> = T extends (infer U)[]
  ? DeepReadonlyArray2521<U>
  : T extends object
  ? DeepReadonlyObject2521<T>
  : T;

interface DeepReadonlyArray2521<T> extends ReadonlyArray<DeepReadonly2521<T>> {}

type DeepReadonlyObject2521<T> = {
  readonly [P in keyof T]: DeepReadonly2521<T[P]>;
};

type UnionToIntersection2521<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2521<T> = UnionToIntersection2521<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2521<T extends unknown[], V> = [...T, V];

type TuplifyUnion2521<T, L = LastOf2521<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2521<TuplifyUnion2521<Exclude<T, L>>, L>;

type DeepPartial2521<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2521<T[P]> }
  : T;

type Paths2521<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2521<K, Paths2521<T[K], Prev2521[D]>> : never }[keyof T]
  : never;

type Prev2521 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2521<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2521 {
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

type ConfigPaths2521 = Paths2521<NestedConfig2521>;

interface HeavyProps2521 {
  config: DeepPartial2521<NestedConfig2521>;
  path?: ConfigPaths2521;
}

const HeavyComponent2521 = memo(function HeavyComponent2521({ config }: HeavyProps2521) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2521) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2521 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2521: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2521.displayName = 'HeavyComponent2521';
export default HeavyComponent2521;
