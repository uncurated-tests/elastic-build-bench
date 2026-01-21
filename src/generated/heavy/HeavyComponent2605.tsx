'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2605<T> = T extends (infer U)[]
  ? DeepReadonlyArray2605<U>
  : T extends object
  ? DeepReadonlyObject2605<T>
  : T;

interface DeepReadonlyArray2605<T> extends ReadonlyArray<DeepReadonly2605<T>> {}

type DeepReadonlyObject2605<T> = {
  readonly [P in keyof T]: DeepReadonly2605<T[P]>;
};

type UnionToIntersection2605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2605<T> = UnionToIntersection2605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2605<T extends unknown[], V> = [...T, V];

type TuplifyUnion2605<T, L = LastOf2605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2605<TuplifyUnion2605<Exclude<T, L>>, L>;

type DeepPartial2605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2605<T[P]> }
  : T;

type Paths2605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2605<K, Paths2605<T[K], Prev2605[D]>> : never }[keyof T]
  : never;

type Prev2605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2605 {
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

type ConfigPaths2605 = Paths2605<NestedConfig2605>;

interface HeavyProps2605 {
  config: DeepPartial2605<NestedConfig2605>;
  path?: ConfigPaths2605;
}

const HeavyComponent2605 = memo(function HeavyComponent2605({ config }: HeavyProps2605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2605.displayName = 'HeavyComponent2605';
export default HeavyComponent2605;
