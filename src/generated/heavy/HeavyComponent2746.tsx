'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2746<T> = T extends (infer U)[]
  ? DeepReadonlyArray2746<U>
  : T extends object
  ? DeepReadonlyObject2746<T>
  : T;

interface DeepReadonlyArray2746<T> extends ReadonlyArray<DeepReadonly2746<T>> {}

type DeepReadonlyObject2746<T> = {
  readonly [P in keyof T]: DeepReadonly2746<T[P]>;
};

type UnionToIntersection2746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2746<T> = UnionToIntersection2746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2746<T extends unknown[], V> = [...T, V];

type TuplifyUnion2746<T, L = LastOf2746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2746<TuplifyUnion2746<Exclude<T, L>>, L>;

type DeepPartial2746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2746<T[P]> }
  : T;

type Paths2746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2746<K, Paths2746<T[K], Prev2746[D]>> : never }[keyof T]
  : never;

type Prev2746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2746 {
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

type ConfigPaths2746 = Paths2746<NestedConfig2746>;

interface HeavyProps2746 {
  config: DeepPartial2746<NestedConfig2746>;
  path?: ConfigPaths2746;
}

const HeavyComponent2746 = memo(function HeavyComponent2746({ config }: HeavyProps2746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2746.displayName = 'HeavyComponent2746';
export default HeavyComponent2746;
