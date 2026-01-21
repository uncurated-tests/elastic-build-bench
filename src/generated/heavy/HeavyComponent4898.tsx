'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4898<T> = T extends (infer U)[]
  ? DeepReadonlyArray4898<U>
  : T extends object
  ? DeepReadonlyObject4898<T>
  : T;

interface DeepReadonlyArray4898<T> extends ReadonlyArray<DeepReadonly4898<T>> {}

type DeepReadonlyObject4898<T> = {
  readonly [P in keyof T]: DeepReadonly4898<T[P]>;
};

type UnionToIntersection4898<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4898<T> = UnionToIntersection4898<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4898<T extends unknown[], V> = [...T, V];

type TuplifyUnion4898<T, L = LastOf4898<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4898<TuplifyUnion4898<Exclude<T, L>>, L>;

type DeepPartial4898<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4898<T[P]> }
  : T;

type Paths4898<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4898<K, Paths4898<T[K], Prev4898[D]>> : never }[keyof T]
  : never;

type Prev4898 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4898<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4898 {
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

type ConfigPaths4898 = Paths4898<NestedConfig4898>;

interface HeavyProps4898 {
  config: DeepPartial4898<NestedConfig4898>;
  path?: ConfigPaths4898;
}

const HeavyComponent4898 = memo(function HeavyComponent4898({ config }: HeavyProps4898) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4898) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4898 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4898: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4898.displayName = 'HeavyComponent4898';
export default HeavyComponent4898;
