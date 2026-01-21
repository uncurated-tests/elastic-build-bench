'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2651<T> = T extends (infer U)[]
  ? DeepReadonlyArray2651<U>
  : T extends object
  ? DeepReadonlyObject2651<T>
  : T;

interface DeepReadonlyArray2651<T> extends ReadonlyArray<DeepReadonly2651<T>> {}

type DeepReadonlyObject2651<T> = {
  readonly [P in keyof T]: DeepReadonly2651<T[P]>;
};

type UnionToIntersection2651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2651<T> = UnionToIntersection2651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2651<T extends unknown[], V> = [...T, V];

type TuplifyUnion2651<T, L = LastOf2651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2651<TuplifyUnion2651<Exclude<T, L>>, L>;

type DeepPartial2651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2651<T[P]> }
  : T;

type Paths2651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2651<K, Paths2651<T[K], Prev2651[D]>> : never }[keyof T]
  : never;

type Prev2651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2651 {
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

type ConfigPaths2651 = Paths2651<NestedConfig2651>;

interface HeavyProps2651 {
  config: DeepPartial2651<NestedConfig2651>;
  path?: ConfigPaths2651;
}

const HeavyComponent2651 = memo(function HeavyComponent2651({ config }: HeavyProps2651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2651.displayName = 'HeavyComponent2651';
export default HeavyComponent2651;
