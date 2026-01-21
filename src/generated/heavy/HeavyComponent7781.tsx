'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7781<T> = T extends (infer U)[]
  ? DeepReadonlyArray7781<U>
  : T extends object
  ? DeepReadonlyObject7781<T>
  : T;

interface DeepReadonlyArray7781<T> extends ReadonlyArray<DeepReadonly7781<T>> {}

type DeepReadonlyObject7781<T> = {
  readonly [P in keyof T]: DeepReadonly7781<T[P]>;
};

type UnionToIntersection7781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7781<T> = UnionToIntersection7781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7781<T extends unknown[], V> = [...T, V];

type TuplifyUnion7781<T, L = LastOf7781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7781<TuplifyUnion7781<Exclude<T, L>>, L>;

type DeepPartial7781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7781<T[P]> }
  : T;

type Paths7781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7781<K, Paths7781<T[K], Prev7781[D]>> : never }[keyof T]
  : never;

type Prev7781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7781 {
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

type ConfigPaths7781 = Paths7781<NestedConfig7781>;

interface HeavyProps7781 {
  config: DeepPartial7781<NestedConfig7781>;
  path?: ConfigPaths7781;
}

const HeavyComponent7781 = memo(function HeavyComponent7781({ config }: HeavyProps7781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7781.displayName = 'HeavyComponent7781';
export default HeavyComponent7781;
