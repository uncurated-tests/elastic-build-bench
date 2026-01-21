'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2913<T> = T extends (infer U)[]
  ? DeepReadonlyArray2913<U>
  : T extends object
  ? DeepReadonlyObject2913<T>
  : T;

interface DeepReadonlyArray2913<T> extends ReadonlyArray<DeepReadonly2913<T>> {}

type DeepReadonlyObject2913<T> = {
  readonly [P in keyof T]: DeepReadonly2913<T[P]>;
};

type UnionToIntersection2913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2913<T> = UnionToIntersection2913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2913<T extends unknown[], V> = [...T, V];

type TuplifyUnion2913<T, L = LastOf2913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2913<TuplifyUnion2913<Exclude<T, L>>, L>;

type DeepPartial2913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2913<T[P]> }
  : T;

type Paths2913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2913<K, Paths2913<T[K], Prev2913[D]>> : never }[keyof T]
  : never;

type Prev2913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2913 {
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

type ConfigPaths2913 = Paths2913<NestedConfig2913>;

interface HeavyProps2913 {
  config: DeepPartial2913<NestedConfig2913>;
  path?: ConfigPaths2913;
}

const HeavyComponent2913 = memo(function HeavyComponent2913({ config }: HeavyProps2913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2913.displayName = 'HeavyComponent2913';
export default HeavyComponent2913;
