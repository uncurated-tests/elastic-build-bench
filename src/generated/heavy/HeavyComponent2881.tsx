'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2881<T> = T extends (infer U)[]
  ? DeepReadonlyArray2881<U>
  : T extends object
  ? DeepReadonlyObject2881<T>
  : T;

interface DeepReadonlyArray2881<T> extends ReadonlyArray<DeepReadonly2881<T>> {}

type DeepReadonlyObject2881<T> = {
  readonly [P in keyof T]: DeepReadonly2881<T[P]>;
};

type UnionToIntersection2881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2881<T> = UnionToIntersection2881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2881<T extends unknown[], V> = [...T, V];

type TuplifyUnion2881<T, L = LastOf2881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2881<TuplifyUnion2881<Exclude<T, L>>, L>;

type DeepPartial2881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2881<T[P]> }
  : T;

type Paths2881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2881<K, Paths2881<T[K], Prev2881[D]>> : never }[keyof T]
  : never;

type Prev2881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2881 {
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

type ConfigPaths2881 = Paths2881<NestedConfig2881>;

interface HeavyProps2881 {
  config: DeepPartial2881<NestedConfig2881>;
  path?: ConfigPaths2881;
}

const HeavyComponent2881 = memo(function HeavyComponent2881({ config }: HeavyProps2881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2881.displayName = 'HeavyComponent2881';
export default HeavyComponent2881;
