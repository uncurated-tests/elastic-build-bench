'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7011<T> = T extends (infer U)[]
  ? DeepReadonlyArray7011<U>
  : T extends object
  ? DeepReadonlyObject7011<T>
  : T;

interface DeepReadonlyArray7011<T> extends ReadonlyArray<DeepReadonly7011<T>> {}

type DeepReadonlyObject7011<T> = {
  readonly [P in keyof T]: DeepReadonly7011<T[P]>;
};

type UnionToIntersection7011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7011<T> = UnionToIntersection7011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7011<T extends unknown[], V> = [...T, V];

type TuplifyUnion7011<T, L = LastOf7011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7011<TuplifyUnion7011<Exclude<T, L>>, L>;

type DeepPartial7011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7011<T[P]> }
  : T;

type Paths7011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7011<K, Paths7011<T[K], Prev7011[D]>> : never }[keyof T]
  : never;

type Prev7011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7011 {
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

type ConfigPaths7011 = Paths7011<NestedConfig7011>;

interface HeavyProps7011 {
  config: DeepPartial7011<NestedConfig7011>;
  path?: ConfigPaths7011;
}

const HeavyComponent7011 = memo(function HeavyComponent7011({ config }: HeavyProps7011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7011.displayName = 'HeavyComponent7011';
export default HeavyComponent7011;
