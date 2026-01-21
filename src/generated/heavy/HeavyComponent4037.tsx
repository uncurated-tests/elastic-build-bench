'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4037<T> = T extends (infer U)[]
  ? DeepReadonlyArray4037<U>
  : T extends object
  ? DeepReadonlyObject4037<T>
  : T;

interface DeepReadonlyArray4037<T> extends ReadonlyArray<DeepReadonly4037<T>> {}

type DeepReadonlyObject4037<T> = {
  readonly [P in keyof T]: DeepReadonly4037<T[P]>;
};

type UnionToIntersection4037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4037<T> = UnionToIntersection4037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4037<T extends unknown[], V> = [...T, V];

type TuplifyUnion4037<T, L = LastOf4037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4037<TuplifyUnion4037<Exclude<T, L>>, L>;

type DeepPartial4037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4037<T[P]> }
  : T;

type Paths4037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4037<K, Paths4037<T[K], Prev4037[D]>> : never }[keyof T]
  : never;

type Prev4037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4037 {
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

type ConfigPaths4037 = Paths4037<NestedConfig4037>;

interface HeavyProps4037 {
  config: DeepPartial4037<NestedConfig4037>;
  path?: ConfigPaths4037;
}

const HeavyComponent4037 = memo(function HeavyComponent4037({ config }: HeavyProps4037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4037.displayName = 'HeavyComponent4037';
export default HeavyComponent4037;
