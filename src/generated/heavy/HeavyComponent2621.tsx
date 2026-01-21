'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2621<T> = T extends (infer U)[]
  ? DeepReadonlyArray2621<U>
  : T extends object
  ? DeepReadonlyObject2621<T>
  : T;

interface DeepReadonlyArray2621<T> extends ReadonlyArray<DeepReadonly2621<T>> {}

type DeepReadonlyObject2621<T> = {
  readonly [P in keyof T]: DeepReadonly2621<T[P]>;
};

type UnionToIntersection2621<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2621<T> = UnionToIntersection2621<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2621<T extends unknown[], V> = [...T, V];

type TuplifyUnion2621<T, L = LastOf2621<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2621<TuplifyUnion2621<Exclude<T, L>>, L>;

type DeepPartial2621<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2621<T[P]> }
  : T;

type Paths2621<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2621<K, Paths2621<T[K], Prev2621[D]>> : never }[keyof T]
  : never;

type Prev2621 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2621<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2621 {
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

type ConfigPaths2621 = Paths2621<NestedConfig2621>;

interface HeavyProps2621 {
  config: DeepPartial2621<NestedConfig2621>;
  path?: ConfigPaths2621;
}

const HeavyComponent2621 = memo(function HeavyComponent2621({ config }: HeavyProps2621) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2621) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2621 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2621: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2621.displayName = 'HeavyComponent2621';
export default HeavyComponent2621;
