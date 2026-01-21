'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2650<T> = T extends (infer U)[]
  ? DeepReadonlyArray2650<U>
  : T extends object
  ? DeepReadonlyObject2650<T>
  : T;

interface DeepReadonlyArray2650<T> extends ReadonlyArray<DeepReadonly2650<T>> {}

type DeepReadonlyObject2650<T> = {
  readonly [P in keyof T]: DeepReadonly2650<T[P]>;
};

type UnionToIntersection2650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2650<T> = UnionToIntersection2650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2650<T extends unknown[], V> = [...T, V];

type TuplifyUnion2650<T, L = LastOf2650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2650<TuplifyUnion2650<Exclude<T, L>>, L>;

type DeepPartial2650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2650<T[P]> }
  : T;

type Paths2650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2650<K, Paths2650<T[K], Prev2650[D]>> : never }[keyof T]
  : never;

type Prev2650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2650 {
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

type ConfigPaths2650 = Paths2650<NestedConfig2650>;

interface HeavyProps2650 {
  config: DeepPartial2650<NestedConfig2650>;
  path?: ConfigPaths2650;
}

const HeavyComponent2650 = memo(function HeavyComponent2650({ config }: HeavyProps2650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2650.displayName = 'HeavyComponent2650';
export default HeavyComponent2650;
