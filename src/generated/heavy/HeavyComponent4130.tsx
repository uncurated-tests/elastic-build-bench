'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4130<T> = T extends (infer U)[]
  ? DeepReadonlyArray4130<U>
  : T extends object
  ? DeepReadonlyObject4130<T>
  : T;

interface DeepReadonlyArray4130<T> extends ReadonlyArray<DeepReadonly4130<T>> {}

type DeepReadonlyObject4130<T> = {
  readonly [P in keyof T]: DeepReadonly4130<T[P]>;
};

type UnionToIntersection4130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4130<T> = UnionToIntersection4130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4130<T extends unknown[], V> = [...T, V];

type TuplifyUnion4130<T, L = LastOf4130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4130<TuplifyUnion4130<Exclude<T, L>>, L>;

type DeepPartial4130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4130<T[P]> }
  : T;

type Paths4130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4130<K, Paths4130<T[K], Prev4130[D]>> : never }[keyof T]
  : never;

type Prev4130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4130 {
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

type ConfigPaths4130 = Paths4130<NestedConfig4130>;

interface HeavyProps4130 {
  config: DeepPartial4130<NestedConfig4130>;
  path?: ConfigPaths4130;
}

const HeavyComponent4130 = memo(function HeavyComponent4130({ config }: HeavyProps4130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4130.displayName = 'HeavyComponent4130';
export default HeavyComponent4130;
