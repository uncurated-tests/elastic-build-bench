'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2760<T> = T extends (infer U)[]
  ? DeepReadonlyArray2760<U>
  : T extends object
  ? DeepReadonlyObject2760<T>
  : T;

interface DeepReadonlyArray2760<T> extends ReadonlyArray<DeepReadonly2760<T>> {}

type DeepReadonlyObject2760<T> = {
  readonly [P in keyof T]: DeepReadonly2760<T[P]>;
};

type UnionToIntersection2760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2760<T> = UnionToIntersection2760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2760<T extends unknown[], V> = [...T, V];

type TuplifyUnion2760<T, L = LastOf2760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2760<TuplifyUnion2760<Exclude<T, L>>, L>;

type DeepPartial2760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2760<T[P]> }
  : T;

type Paths2760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2760<K, Paths2760<T[K], Prev2760[D]>> : never }[keyof T]
  : never;

type Prev2760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2760 {
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

type ConfigPaths2760 = Paths2760<NestedConfig2760>;

interface HeavyProps2760 {
  config: DeepPartial2760<NestedConfig2760>;
  path?: ConfigPaths2760;
}

const HeavyComponent2760 = memo(function HeavyComponent2760({ config }: HeavyProps2760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2760.displayName = 'HeavyComponent2760';
export default HeavyComponent2760;
