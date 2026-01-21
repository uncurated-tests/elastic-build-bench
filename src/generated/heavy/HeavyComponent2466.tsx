'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2466<T> = T extends (infer U)[]
  ? DeepReadonlyArray2466<U>
  : T extends object
  ? DeepReadonlyObject2466<T>
  : T;

interface DeepReadonlyArray2466<T> extends ReadonlyArray<DeepReadonly2466<T>> {}

type DeepReadonlyObject2466<T> = {
  readonly [P in keyof T]: DeepReadonly2466<T[P]>;
};

type UnionToIntersection2466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2466<T> = UnionToIntersection2466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2466<T extends unknown[], V> = [...T, V];

type TuplifyUnion2466<T, L = LastOf2466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2466<TuplifyUnion2466<Exclude<T, L>>, L>;

type DeepPartial2466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2466<T[P]> }
  : T;

type Paths2466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2466<K, Paths2466<T[K], Prev2466[D]>> : never }[keyof T]
  : never;

type Prev2466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2466 {
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

type ConfigPaths2466 = Paths2466<NestedConfig2466>;

interface HeavyProps2466 {
  config: DeepPartial2466<NestedConfig2466>;
  path?: ConfigPaths2466;
}

const HeavyComponent2466 = memo(function HeavyComponent2466({ config }: HeavyProps2466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2466.displayName = 'HeavyComponent2466';
export default HeavyComponent2466;
