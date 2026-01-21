'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7411<T> = T extends (infer U)[]
  ? DeepReadonlyArray7411<U>
  : T extends object
  ? DeepReadonlyObject7411<T>
  : T;

interface DeepReadonlyArray7411<T> extends ReadonlyArray<DeepReadonly7411<T>> {}

type DeepReadonlyObject7411<T> = {
  readonly [P in keyof T]: DeepReadonly7411<T[P]>;
};

type UnionToIntersection7411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7411<T> = UnionToIntersection7411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7411<T extends unknown[], V> = [...T, V];

type TuplifyUnion7411<T, L = LastOf7411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7411<TuplifyUnion7411<Exclude<T, L>>, L>;

type DeepPartial7411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7411<T[P]> }
  : T;

type Paths7411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7411<K, Paths7411<T[K], Prev7411[D]>> : never }[keyof T]
  : never;

type Prev7411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7411 {
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

type ConfigPaths7411 = Paths7411<NestedConfig7411>;

interface HeavyProps7411 {
  config: DeepPartial7411<NestedConfig7411>;
  path?: ConfigPaths7411;
}

const HeavyComponent7411 = memo(function HeavyComponent7411({ config }: HeavyProps7411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7411.displayName = 'HeavyComponent7411';
export default HeavyComponent7411;
