'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2051<T> = T extends (infer U)[]
  ? DeepReadonlyArray2051<U>
  : T extends object
  ? DeepReadonlyObject2051<T>
  : T;

interface DeepReadonlyArray2051<T> extends ReadonlyArray<DeepReadonly2051<T>> {}

type DeepReadonlyObject2051<T> = {
  readonly [P in keyof T]: DeepReadonly2051<T[P]>;
};

type UnionToIntersection2051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2051<T> = UnionToIntersection2051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2051<T extends unknown[], V> = [...T, V];

type TuplifyUnion2051<T, L = LastOf2051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2051<TuplifyUnion2051<Exclude<T, L>>, L>;

type DeepPartial2051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2051<T[P]> }
  : T;

type Paths2051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2051<K, Paths2051<T[K], Prev2051[D]>> : never }[keyof T]
  : never;

type Prev2051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2051 {
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

type ConfigPaths2051 = Paths2051<NestedConfig2051>;

interface HeavyProps2051 {
  config: DeepPartial2051<NestedConfig2051>;
  path?: ConfigPaths2051;
}

const HeavyComponent2051 = memo(function HeavyComponent2051({ config }: HeavyProps2051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2051.displayName = 'HeavyComponent2051';
export default HeavyComponent2051;
