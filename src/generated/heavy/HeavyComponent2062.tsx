'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2062<T> = T extends (infer U)[]
  ? DeepReadonlyArray2062<U>
  : T extends object
  ? DeepReadonlyObject2062<T>
  : T;

interface DeepReadonlyArray2062<T> extends ReadonlyArray<DeepReadonly2062<T>> {}

type DeepReadonlyObject2062<T> = {
  readonly [P in keyof T]: DeepReadonly2062<T[P]>;
};

type UnionToIntersection2062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2062<T> = UnionToIntersection2062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2062<T extends unknown[], V> = [...T, V];

type TuplifyUnion2062<T, L = LastOf2062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2062<TuplifyUnion2062<Exclude<T, L>>, L>;

type DeepPartial2062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2062<T[P]> }
  : T;

type Paths2062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2062<K, Paths2062<T[K], Prev2062[D]>> : never }[keyof T]
  : never;

type Prev2062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2062 {
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

type ConfigPaths2062 = Paths2062<NestedConfig2062>;

interface HeavyProps2062 {
  config: DeepPartial2062<NestedConfig2062>;
  path?: ConfigPaths2062;
}

const HeavyComponent2062 = memo(function HeavyComponent2062({ config }: HeavyProps2062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2062.displayName = 'HeavyComponent2062';
export default HeavyComponent2062;
