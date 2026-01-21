'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2944<T> = T extends (infer U)[]
  ? DeepReadonlyArray2944<U>
  : T extends object
  ? DeepReadonlyObject2944<T>
  : T;

interface DeepReadonlyArray2944<T> extends ReadonlyArray<DeepReadonly2944<T>> {}

type DeepReadonlyObject2944<T> = {
  readonly [P in keyof T]: DeepReadonly2944<T[P]>;
};

type UnionToIntersection2944<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2944<T> = UnionToIntersection2944<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2944<T extends unknown[], V> = [...T, V];

type TuplifyUnion2944<T, L = LastOf2944<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2944<TuplifyUnion2944<Exclude<T, L>>, L>;

type DeepPartial2944<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2944<T[P]> }
  : T;

type Paths2944<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2944<K, Paths2944<T[K], Prev2944[D]>> : never }[keyof T]
  : never;

type Prev2944 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2944<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2944 {
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

type ConfigPaths2944 = Paths2944<NestedConfig2944>;

interface HeavyProps2944 {
  config: DeepPartial2944<NestedConfig2944>;
  path?: ConfigPaths2944;
}

const HeavyComponent2944 = memo(function HeavyComponent2944({ config }: HeavyProps2944) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2944) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2944 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2944: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2944.displayName = 'HeavyComponent2944';
export default HeavyComponent2944;
