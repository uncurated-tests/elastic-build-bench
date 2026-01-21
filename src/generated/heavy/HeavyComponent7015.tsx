'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7015<T> = T extends (infer U)[]
  ? DeepReadonlyArray7015<U>
  : T extends object
  ? DeepReadonlyObject7015<T>
  : T;

interface DeepReadonlyArray7015<T> extends ReadonlyArray<DeepReadonly7015<T>> {}

type DeepReadonlyObject7015<T> = {
  readonly [P in keyof T]: DeepReadonly7015<T[P]>;
};

type UnionToIntersection7015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7015<T> = UnionToIntersection7015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7015<T extends unknown[], V> = [...T, V];

type TuplifyUnion7015<T, L = LastOf7015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7015<TuplifyUnion7015<Exclude<T, L>>, L>;

type DeepPartial7015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7015<T[P]> }
  : T;

type Paths7015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7015<K, Paths7015<T[K], Prev7015[D]>> : never }[keyof T]
  : never;

type Prev7015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7015 {
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

type ConfigPaths7015 = Paths7015<NestedConfig7015>;

interface HeavyProps7015 {
  config: DeepPartial7015<NestedConfig7015>;
  path?: ConfigPaths7015;
}

const HeavyComponent7015 = memo(function HeavyComponent7015({ config }: HeavyProps7015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7015.displayName = 'HeavyComponent7015';
export default HeavyComponent7015;
