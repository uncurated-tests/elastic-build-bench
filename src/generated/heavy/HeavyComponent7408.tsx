'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7408<T> = T extends (infer U)[]
  ? DeepReadonlyArray7408<U>
  : T extends object
  ? DeepReadonlyObject7408<T>
  : T;

interface DeepReadonlyArray7408<T> extends ReadonlyArray<DeepReadonly7408<T>> {}

type DeepReadonlyObject7408<T> = {
  readonly [P in keyof T]: DeepReadonly7408<T[P]>;
};

type UnionToIntersection7408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7408<T> = UnionToIntersection7408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7408<T extends unknown[], V> = [...T, V];

type TuplifyUnion7408<T, L = LastOf7408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7408<TuplifyUnion7408<Exclude<T, L>>, L>;

type DeepPartial7408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7408<T[P]> }
  : T;

type Paths7408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7408<K, Paths7408<T[K], Prev7408[D]>> : never }[keyof T]
  : never;

type Prev7408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7408 {
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

type ConfigPaths7408 = Paths7408<NestedConfig7408>;

interface HeavyProps7408 {
  config: DeepPartial7408<NestedConfig7408>;
  path?: ConfigPaths7408;
}

const HeavyComponent7408 = memo(function HeavyComponent7408({ config }: HeavyProps7408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7408.displayName = 'HeavyComponent7408';
export default HeavyComponent7408;
