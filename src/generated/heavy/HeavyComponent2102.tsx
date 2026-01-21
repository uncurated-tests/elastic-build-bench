'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2102<T> = T extends (infer U)[]
  ? DeepReadonlyArray2102<U>
  : T extends object
  ? DeepReadonlyObject2102<T>
  : T;

interface DeepReadonlyArray2102<T> extends ReadonlyArray<DeepReadonly2102<T>> {}

type DeepReadonlyObject2102<T> = {
  readonly [P in keyof T]: DeepReadonly2102<T[P]>;
};

type UnionToIntersection2102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2102<T> = UnionToIntersection2102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2102<T extends unknown[], V> = [...T, V];

type TuplifyUnion2102<T, L = LastOf2102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2102<TuplifyUnion2102<Exclude<T, L>>, L>;

type DeepPartial2102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2102<T[P]> }
  : T;

type Paths2102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2102<K, Paths2102<T[K], Prev2102[D]>> : never }[keyof T]
  : never;

type Prev2102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2102 {
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

type ConfigPaths2102 = Paths2102<NestedConfig2102>;

interface HeavyProps2102 {
  config: DeepPartial2102<NestedConfig2102>;
  path?: ConfigPaths2102;
}

const HeavyComponent2102 = memo(function HeavyComponent2102({ config }: HeavyProps2102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2102.displayName = 'HeavyComponent2102';
export default HeavyComponent2102;
