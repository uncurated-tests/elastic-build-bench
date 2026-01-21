'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7980<T> = T extends (infer U)[]
  ? DeepReadonlyArray7980<U>
  : T extends object
  ? DeepReadonlyObject7980<T>
  : T;

interface DeepReadonlyArray7980<T> extends ReadonlyArray<DeepReadonly7980<T>> {}

type DeepReadonlyObject7980<T> = {
  readonly [P in keyof T]: DeepReadonly7980<T[P]>;
};

type UnionToIntersection7980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7980<T> = UnionToIntersection7980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7980<T extends unknown[], V> = [...T, V];

type TuplifyUnion7980<T, L = LastOf7980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7980<TuplifyUnion7980<Exclude<T, L>>, L>;

type DeepPartial7980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7980<T[P]> }
  : T;

type Paths7980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7980<K, Paths7980<T[K], Prev7980[D]>> : never }[keyof T]
  : never;

type Prev7980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7980 {
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

type ConfigPaths7980 = Paths7980<NestedConfig7980>;

interface HeavyProps7980 {
  config: DeepPartial7980<NestedConfig7980>;
  path?: ConfigPaths7980;
}

const HeavyComponent7980 = memo(function HeavyComponent7980({ config }: HeavyProps7980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7980.displayName = 'HeavyComponent7980';
export default HeavyComponent7980;
