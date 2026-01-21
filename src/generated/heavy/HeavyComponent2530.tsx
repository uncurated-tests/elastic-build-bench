'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2530<T> = T extends (infer U)[]
  ? DeepReadonlyArray2530<U>
  : T extends object
  ? DeepReadonlyObject2530<T>
  : T;

interface DeepReadonlyArray2530<T> extends ReadonlyArray<DeepReadonly2530<T>> {}

type DeepReadonlyObject2530<T> = {
  readonly [P in keyof T]: DeepReadonly2530<T[P]>;
};

type UnionToIntersection2530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2530<T> = UnionToIntersection2530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2530<T extends unknown[], V> = [...T, V];

type TuplifyUnion2530<T, L = LastOf2530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2530<TuplifyUnion2530<Exclude<T, L>>, L>;

type DeepPartial2530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2530<T[P]> }
  : T;

type Paths2530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2530<K, Paths2530<T[K], Prev2530[D]>> : never }[keyof T]
  : never;

type Prev2530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2530 {
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

type ConfigPaths2530 = Paths2530<NestedConfig2530>;

interface HeavyProps2530 {
  config: DeepPartial2530<NestedConfig2530>;
  path?: ConfigPaths2530;
}

const HeavyComponent2530 = memo(function HeavyComponent2530({ config }: HeavyProps2530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2530.displayName = 'HeavyComponent2530';
export default HeavyComponent2530;
