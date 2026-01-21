'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly387<T> = T extends (infer U)[]
  ? DeepReadonlyArray387<U>
  : T extends object
  ? DeepReadonlyObject387<T>
  : T;

interface DeepReadonlyArray387<T> extends ReadonlyArray<DeepReadonly387<T>> {}

type DeepReadonlyObject387<T> = {
  readonly [P in keyof T]: DeepReadonly387<T[P]>;
};

type UnionToIntersection387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf387<T> = UnionToIntersection387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push387<T extends unknown[], V> = [...T, V];

type TuplifyUnion387<T, L = LastOf387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push387<TuplifyUnion387<Exclude<T, L>>, L>;

type DeepPartial387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial387<T[P]> }
  : T;

type Paths387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join387<K, Paths387<T[K], Prev387[D]>> : never }[keyof T]
  : never;

type Prev387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig387 {
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

type ConfigPaths387 = Paths387<NestedConfig387>;

interface HeavyProps387 {
  config: DeepPartial387<NestedConfig387>;
  path?: ConfigPaths387;
}

const HeavyComponent387 = memo(function HeavyComponent387({ config }: HeavyProps387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent387.displayName = 'HeavyComponent387';
export default HeavyComponent387;
