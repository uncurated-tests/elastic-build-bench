'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly50<T> = T extends (infer U)[]
  ? DeepReadonlyArray50<U>
  : T extends object
  ? DeepReadonlyObject50<T>
  : T;

interface DeepReadonlyArray50<T> extends ReadonlyArray<DeepReadonly50<T>> {}

type DeepReadonlyObject50<T> = {
  readonly [P in keyof T]: DeepReadonly50<T[P]>;
};

type UnionToIntersection50<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf50<T> = UnionToIntersection50<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push50<T extends unknown[], V> = [...T, V];

type TuplifyUnion50<T, L = LastOf50<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push50<TuplifyUnion50<Exclude<T, L>>, L>;

type DeepPartial50<T> = T extends object
  ? { [P in keyof T]?: DeepPartial50<T[P]> }
  : T;

type Paths50<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join50<K, Paths50<T[K], Prev50[D]>> : never }[keyof T]
  : never;

type Prev50 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join50<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig50 {
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

type ConfigPaths50 = Paths50<NestedConfig50>;

interface HeavyProps50 {
  config: DeepPartial50<NestedConfig50>;
  path?: ConfigPaths50;
}

const HeavyComponent50 = memo(function HeavyComponent50({ config }: HeavyProps50) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 50) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-50 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H50: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent50.displayName = 'HeavyComponent50';
export default HeavyComponent50;
