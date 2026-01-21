'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly491<T> = T extends (infer U)[]
  ? DeepReadonlyArray491<U>
  : T extends object
  ? DeepReadonlyObject491<T>
  : T;

interface DeepReadonlyArray491<T> extends ReadonlyArray<DeepReadonly491<T>> {}

type DeepReadonlyObject491<T> = {
  readonly [P in keyof T]: DeepReadonly491<T[P]>;
};

type UnionToIntersection491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf491<T> = UnionToIntersection491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push491<T extends unknown[], V> = [...T, V];

type TuplifyUnion491<T, L = LastOf491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push491<TuplifyUnion491<Exclude<T, L>>, L>;

type DeepPartial491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial491<T[P]> }
  : T;

type Paths491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join491<K, Paths491<T[K], Prev491[D]>> : never }[keyof T]
  : never;

type Prev491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig491 {
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

type ConfigPaths491 = Paths491<NestedConfig491>;

interface HeavyProps491 {
  config: DeepPartial491<NestedConfig491>;
  path?: ConfigPaths491;
}

const HeavyComponent491 = memo(function HeavyComponent491({ config }: HeavyProps491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent491.displayName = 'HeavyComponent491';
export default HeavyComponent491;
