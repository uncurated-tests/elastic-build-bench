'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4221<T> = T extends (infer U)[]
  ? DeepReadonlyArray4221<U>
  : T extends object
  ? DeepReadonlyObject4221<T>
  : T;

interface DeepReadonlyArray4221<T> extends ReadonlyArray<DeepReadonly4221<T>> {}

type DeepReadonlyObject4221<T> = {
  readonly [P in keyof T]: DeepReadonly4221<T[P]>;
};

type UnionToIntersection4221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4221<T> = UnionToIntersection4221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4221<T extends unknown[], V> = [...T, V];

type TuplifyUnion4221<T, L = LastOf4221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4221<TuplifyUnion4221<Exclude<T, L>>, L>;

type DeepPartial4221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4221<T[P]> }
  : T;

type Paths4221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4221<K, Paths4221<T[K], Prev4221[D]>> : never }[keyof T]
  : never;

type Prev4221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4221 {
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

type ConfigPaths4221 = Paths4221<NestedConfig4221>;

interface HeavyProps4221 {
  config: DeepPartial4221<NestedConfig4221>;
  path?: ConfigPaths4221;
}

const HeavyComponent4221 = memo(function HeavyComponent4221({ config }: HeavyProps4221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4221.displayName = 'HeavyComponent4221';
export default HeavyComponent4221;
