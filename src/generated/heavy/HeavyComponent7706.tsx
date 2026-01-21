'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7706<T> = T extends (infer U)[]
  ? DeepReadonlyArray7706<U>
  : T extends object
  ? DeepReadonlyObject7706<T>
  : T;

interface DeepReadonlyArray7706<T> extends ReadonlyArray<DeepReadonly7706<T>> {}

type DeepReadonlyObject7706<T> = {
  readonly [P in keyof T]: DeepReadonly7706<T[P]>;
};

type UnionToIntersection7706<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7706<T> = UnionToIntersection7706<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7706<T extends unknown[], V> = [...T, V];

type TuplifyUnion7706<T, L = LastOf7706<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7706<TuplifyUnion7706<Exclude<T, L>>, L>;

type DeepPartial7706<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7706<T[P]> }
  : T;

type Paths7706<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7706<K, Paths7706<T[K], Prev7706[D]>> : never }[keyof T]
  : never;

type Prev7706 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7706<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7706 {
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

type ConfigPaths7706 = Paths7706<NestedConfig7706>;

interface HeavyProps7706 {
  config: DeepPartial7706<NestedConfig7706>;
  path?: ConfigPaths7706;
}

const HeavyComponent7706 = memo(function HeavyComponent7706({ config }: HeavyProps7706) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7706) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7706 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7706: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7706.displayName = 'HeavyComponent7706';
export default HeavyComponent7706;
