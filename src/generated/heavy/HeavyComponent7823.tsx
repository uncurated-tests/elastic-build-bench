'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7823<T> = T extends (infer U)[]
  ? DeepReadonlyArray7823<U>
  : T extends object
  ? DeepReadonlyObject7823<T>
  : T;

interface DeepReadonlyArray7823<T> extends ReadonlyArray<DeepReadonly7823<T>> {}

type DeepReadonlyObject7823<T> = {
  readonly [P in keyof T]: DeepReadonly7823<T[P]>;
};

type UnionToIntersection7823<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7823<T> = UnionToIntersection7823<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7823<T extends unknown[], V> = [...T, V];

type TuplifyUnion7823<T, L = LastOf7823<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7823<TuplifyUnion7823<Exclude<T, L>>, L>;

type DeepPartial7823<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7823<T[P]> }
  : T;

type Paths7823<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7823<K, Paths7823<T[K], Prev7823[D]>> : never }[keyof T]
  : never;

type Prev7823 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7823<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7823 {
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

type ConfigPaths7823 = Paths7823<NestedConfig7823>;

interface HeavyProps7823 {
  config: DeepPartial7823<NestedConfig7823>;
  path?: ConfigPaths7823;
}

const HeavyComponent7823 = memo(function HeavyComponent7823({ config }: HeavyProps7823) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7823) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7823 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7823: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7823.displayName = 'HeavyComponent7823';
export default HeavyComponent7823;
