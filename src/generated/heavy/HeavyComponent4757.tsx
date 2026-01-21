'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4757<T> = T extends (infer U)[]
  ? DeepReadonlyArray4757<U>
  : T extends object
  ? DeepReadonlyObject4757<T>
  : T;

interface DeepReadonlyArray4757<T> extends ReadonlyArray<DeepReadonly4757<T>> {}

type DeepReadonlyObject4757<T> = {
  readonly [P in keyof T]: DeepReadonly4757<T[P]>;
};

type UnionToIntersection4757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4757<T> = UnionToIntersection4757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4757<T extends unknown[], V> = [...T, V];

type TuplifyUnion4757<T, L = LastOf4757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4757<TuplifyUnion4757<Exclude<T, L>>, L>;

type DeepPartial4757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4757<T[P]> }
  : T;

type Paths4757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4757<K, Paths4757<T[K], Prev4757[D]>> : never }[keyof T]
  : never;

type Prev4757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4757 {
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

type ConfigPaths4757 = Paths4757<NestedConfig4757>;

interface HeavyProps4757 {
  config: DeepPartial4757<NestedConfig4757>;
  path?: ConfigPaths4757;
}

const HeavyComponent4757 = memo(function HeavyComponent4757({ config }: HeavyProps4757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4757.displayName = 'HeavyComponent4757';
export default HeavyComponent4757;
