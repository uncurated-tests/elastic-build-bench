'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7403<T> = T extends (infer U)[]
  ? DeepReadonlyArray7403<U>
  : T extends object
  ? DeepReadonlyObject7403<T>
  : T;

interface DeepReadonlyArray7403<T> extends ReadonlyArray<DeepReadonly7403<T>> {}

type DeepReadonlyObject7403<T> = {
  readonly [P in keyof T]: DeepReadonly7403<T[P]>;
};

type UnionToIntersection7403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7403<T> = UnionToIntersection7403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7403<T extends unknown[], V> = [...T, V];

type TuplifyUnion7403<T, L = LastOf7403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7403<TuplifyUnion7403<Exclude<T, L>>, L>;

type DeepPartial7403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7403<T[P]> }
  : T;

type Paths7403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7403<K, Paths7403<T[K], Prev7403[D]>> : never }[keyof T]
  : never;

type Prev7403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7403 {
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

type ConfigPaths7403 = Paths7403<NestedConfig7403>;

interface HeavyProps7403 {
  config: DeepPartial7403<NestedConfig7403>;
  path?: ConfigPaths7403;
}

const HeavyComponent7403 = memo(function HeavyComponent7403({ config }: HeavyProps7403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7403.displayName = 'HeavyComponent7403';
export default HeavyComponent7403;
