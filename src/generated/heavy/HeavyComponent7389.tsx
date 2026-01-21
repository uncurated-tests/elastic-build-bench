'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7389<T> = T extends (infer U)[]
  ? DeepReadonlyArray7389<U>
  : T extends object
  ? DeepReadonlyObject7389<T>
  : T;

interface DeepReadonlyArray7389<T> extends ReadonlyArray<DeepReadonly7389<T>> {}

type DeepReadonlyObject7389<T> = {
  readonly [P in keyof T]: DeepReadonly7389<T[P]>;
};

type UnionToIntersection7389<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7389<T> = UnionToIntersection7389<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7389<T extends unknown[], V> = [...T, V];

type TuplifyUnion7389<T, L = LastOf7389<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7389<TuplifyUnion7389<Exclude<T, L>>, L>;

type DeepPartial7389<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7389<T[P]> }
  : T;

type Paths7389<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7389<K, Paths7389<T[K], Prev7389[D]>> : never }[keyof T]
  : never;

type Prev7389 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7389<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7389 {
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

type ConfigPaths7389 = Paths7389<NestedConfig7389>;

interface HeavyProps7389 {
  config: DeepPartial7389<NestedConfig7389>;
  path?: ConfigPaths7389;
}

const HeavyComponent7389 = memo(function HeavyComponent7389({ config }: HeavyProps7389) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7389) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7389 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7389: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7389.displayName = 'HeavyComponent7389';
export default HeavyComponent7389;
