'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly266<T> = T extends (infer U)[]
  ? DeepReadonlyArray266<U>
  : T extends object
  ? DeepReadonlyObject266<T>
  : T;

interface DeepReadonlyArray266<T> extends ReadonlyArray<DeepReadonly266<T>> {}

type DeepReadonlyObject266<T> = {
  readonly [P in keyof T]: DeepReadonly266<T[P]>;
};

type UnionToIntersection266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf266<T> = UnionToIntersection266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push266<T extends unknown[], V> = [...T, V];

type TuplifyUnion266<T, L = LastOf266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push266<TuplifyUnion266<Exclude<T, L>>, L>;

type DeepPartial266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial266<T[P]> }
  : T;

type Paths266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join266<K, Paths266<T[K], Prev266[D]>> : never }[keyof T]
  : never;

type Prev266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig266 {
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

type ConfigPaths266 = Paths266<NestedConfig266>;

interface HeavyProps266 {
  config: DeepPartial266<NestedConfig266>;
  path?: ConfigPaths266;
}

const HeavyComponent266 = memo(function HeavyComponent266({ config }: HeavyProps266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent266.displayName = 'HeavyComponent266';
export default HeavyComponent266;
