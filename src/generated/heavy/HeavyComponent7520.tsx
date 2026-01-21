'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7520<T> = T extends (infer U)[]
  ? DeepReadonlyArray7520<U>
  : T extends object
  ? DeepReadonlyObject7520<T>
  : T;

interface DeepReadonlyArray7520<T> extends ReadonlyArray<DeepReadonly7520<T>> {}

type DeepReadonlyObject7520<T> = {
  readonly [P in keyof T]: DeepReadonly7520<T[P]>;
};

type UnionToIntersection7520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7520<T> = UnionToIntersection7520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7520<T extends unknown[], V> = [...T, V];

type TuplifyUnion7520<T, L = LastOf7520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7520<TuplifyUnion7520<Exclude<T, L>>, L>;

type DeepPartial7520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7520<T[P]> }
  : T;

type Paths7520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7520<K, Paths7520<T[K], Prev7520[D]>> : never }[keyof T]
  : never;

type Prev7520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7520 {
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

type ConfigPaths7520 = Paths7520<NestedConfig7520>;

interface HeavyProps7520 {
  config: DeepPartial7520<NestedConfig7520>;
  path?: ConfigPaths7520;
}

const HeavyComponent7520 = memo(function HeavyComponent7520({ config }: HeavyProps7520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7520.displayName = 'HeavyComponent7520';
export default HeavyComponent7520;
