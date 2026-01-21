'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2638<T> = T extends (infer U)[]
  ? DeepReadonlyArray2638<U>
  : T extends object
  ? DeepReadonlyObject2638<T>
  : T;

interface DeepReadonlyArray2638<T> extends ReadonlyArray<DeepReadonly2638<T>> {}

type DeepReadonlyObject2638<T> = {
  readonly [P in keyof T]: DeepReadonly2638<T[P]>;
};

type UnionToIntersection2638<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2638<T> = UnionToIntersection2638<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2638<T extends unknown[], V> = [...T, V];

type TuplifyUnion2638<T, L = LastOf2638<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2638<TuplifyUnion2638<Exclude<T, L>>, L>;

type DeepPartial2638<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2638<T[P]> }
  : T;

type Paths2638<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2638<K, Paths2638<T[K], Prev2638[D]>> : never }[keyof T]
  : never;

type Prev2638 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2638<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2638 {
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

type ConfigPaths2638 = Paths2638<NestedConfig2638>;

interface HeavyProps2638 {
  config: DeepPartial2638<NestedConfig2638>;
  path?: ConfigPaths2638;
}

const HeavyComponent2638 = memo(function HeavyComponent2638({ config }: HeavyProps2638) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2638) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2638 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2638: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2638.displayName = 'HeavyComponent2638';
export default HeavyComponent2638;
