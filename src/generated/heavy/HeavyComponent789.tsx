'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly789<T> = T extends (infer U)[]
  ? DeepReadonlyArray789<U>
  : T extends object
  ? DeepReadonlyObject789<T>
  : T;

interface DeepReadonlyArray789<T> extends ReadonlyArray<DeepReadonly789<T>> {}

type DeepReadonlyObject789<T> = {
  readonly [P in keyof T]: DeepReadonly789<T[P]>;
};

type UnionToIntersection789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf789<T> = UnionToIntersection789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push789<T extends unknown[], V> = [...T, V];

type TuplifyUnion789<T, L = LastOf789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push789<TuplifyUnion789<Exclude<T, L>>, L>;

type DeepPartial789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial789<T[P]> }
  : T;

type Paths789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join789<K, Paths789<T[K], Prev789[D]>> : never }[keyof T]
  : never;

type Prev789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig789 {
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

type ConfigPaths789 = Paths789<NestedConfig789>;

interface HeavyProps789 {
  config: DeepPartial789<NestedConfig789>;
  path?: ConfigPaths789;
}

const HeavyComponent789 = memo(function HeavyComponent789({ config }: HeavyProps789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent789.displayName = 'HeavyComponent789';
export default HeavyComponent789;
