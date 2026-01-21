'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2963<T> = T extends (infer U)[]
  ? DeepReadonlyArray2963<U>
  : T extends object
  ? DeepReadonlyObject2963<T>
  : T;

interface DeepReadonlyArray2963<T> extends ReadonlyArray<DeepReadonly2963<T>> {}

type DeepReadonlyObject2963<T> = {
  readonly [P in keyof T]: DeepReadonly2963<T[P]>;
};

type UnionToIntersection2963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2963<T> = UnionToIntersection2963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2963<T extends unknown[], V> = [...T, V];

type TuplifyUnion2963<T, L = LastOf2963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2963<TuplifyUnion2963<Exclude<T, L>>, L>;

type DeepPartial2963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2963<T[P]> }
  : T;

type Paths2963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2963<K, Paths2963<T[K], Prev2963[D]>> : never }[keyof T]
  : never;

type Prev2963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2963 {
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

type ConfigPaths2963 = Paths2963<NestedConfig2963>;

interface HeavyProps2963 {
  config: DeepPartial2963<NestedConfig2963>;
  path?: ConfigPaths2963;
}

const HeavyComponent2963 = memo(function HeavyComponent2963({ config }: HeavyProps2963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2963.displayName = 'HeavyComponent2963';
export default HeavyComponent2963;
