'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7628<T> = T extends (infer U)[]
  ? DeepReadonlyArray7628<U>
  : T extends object
  ? DeepReadonlyObject7628<T>
  : T;

interface DeepReadonlyArray7628<T> extends ReadonlyArray<DeepReadonly7628<T>> {}

type DeepReadonlyObject7628<T> = {
  readonly [P in keyof T]: DeepReadonly7628<T[P]>;
};

type UnionToIntersection7628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7628<T> = UnionToIntersection7628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7628<T extends unknown[], V> = [...T, V];

type TuplifyUnion7628<T, L = LastOf7628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7628<TuplifyUnion7628<Exclude<T, L>>, L>;

type DeepPartial7628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7628<T[P]> }
  : T;

type Paths7628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7628<K, Paths7628<T[K], Prev7628[D]>> : never }[keyof T]
  : never;

type Prev7628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7628 {
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

type ConfigPaths7628 = Paths7628<NestedConfig7628>;

interface HeavyProps7628 {
  config: DeepPartial7628<NestedConfig7628>;
  path?: ConfigPaths7628;
}

const HeavyComponent7628 = memo(function HeavyComponent7628({ config }: HeavyProps7628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7628.displayName = 'HeavyComponent7628';
export default HeavyComponent7628;
