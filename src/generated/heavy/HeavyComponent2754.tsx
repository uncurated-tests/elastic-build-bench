'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2754<T> = T extends (infer U)[]
  ? DeepReadonlyArray2754<U>
  : T extends object
  ? DeepReadonlyObject2754<T>
  : T;

interface DeepReadonlyArray2754<T> extends ReadonlyArray<DeepReadonly2754<T>> {}

type DeepReadonlyObject2754<T> = {
  readonly [P in keyof T]: DeepReadonly2754<T[P]>;
};

type UnionToIntersection2754<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2754<T> = UnionToIntersection2754<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2754<T extends unknown[], V> = [...T, V];

type TuplifyUnion2754<T, L = LastOf2754<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2754<TuplifyUnion2754<Exclude<T, L>>, L>;

type DeepPartial2754<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2754<T[P]> }
  : T;

type Paths2754<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2754<K, Paths2754<T[K], Prev2754[D]>> : never }[keyof T]
  : never;

type Prev2754 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2754<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2754 {
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

type ConfigPaths2754 = Paths2754<NestedConfig2754>;

interface HeavyProps2754 {
  config: DeepPartial2754<NestedConfig2754>;
  path?: ConfigPaths2754;
}

const HeavyComponent2754 = memo(function HeavyComponent2754({ config }: HeavyProps2754) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2754) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2754 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2754: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2754.displayName = 'HeavyComponent2754';
export default HeavyComponent2754;
