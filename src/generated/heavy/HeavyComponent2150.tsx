'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2150<T> = T extends (infer U)[]
  ? DeepReadonlyArray2150<U>
  : T extends object
  ? DeepReadonlyObject2150<T>
  : T;

interface DeepReadonlyArray2150<T> extends ReadonlyArray<DeepReadonly2150<T>> {}

type DeepReadonlyObject2150<T> = {
  readonly [P in keyof T]: DeepReadonly2150<T[P]>;
};

type UnionToIntersection2150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2150<T> = UnionToIntersection2150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2150<T extends unknown[], V> = [...T, V];

type TuplifyUnion2150<T, L = LastOf2150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2150<TuplifyUnion2150<Exclude<T, L>>, L>;

type DeepPartial2150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2150<T[P]> }
  : T;

type Paths2150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2150<K, Paths2150<T[K], Prev2150[D]>> : never }[keyof T]
  : never;

type Prev2150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2150 {
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

type ConfigPaths2150 = Paths2150<NestedConfig2150>;

interface HeavyProps2150 {
  config: DeepPartial2150<NestedConfig2150>;
  path?: ConfigPaths2150;
}

const HeavyComponent2150 = memo(function HeavyComponent2150({ config }: HeavyProps2150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2150.displayName = 'HeavyComponent2150';
export default HeavyComponent2150;
