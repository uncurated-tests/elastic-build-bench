'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4837<T> = T extends (infer U)[]
  ? DeepReadonlyArray4837<U>
  : T extends object
  ? DeepReadonlyObject4837<T>
  : T;

interface DeepReadonlyArray4837<T> extends ReadonlyArray<DeepReadonly4837<T>> {}

type DeepReadonlyObject4837<T> = {
  readonly [P in keyof T]: DeepReadonly4837<T[P]>;
};

type UnionToIntersection4837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4837<T> = UnionToIntersection4837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4837<T extends unknown[], V> = [...T, V];

type TuplifyUnion4837<T, L = LastOf4837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4837<TuplifyUnion4837<Exclude<T, L>>, L>;

type DeepPartial4837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4837<T[P]> }
  : T;

type Paths4837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4837<K, Paths4837<T[K], Prev4837[D]>> : never }[keyof T]
  : never;

type Prev4837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4837 {
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

type ConfigPaths4837 = Paths4837<NestedConfig4837>;

interface HeavyProps4837 {
  config: DeepPartial4837<NestedConfig4837>;
  path?: ConfigPaths4837;
}

const HeavyComponent4837 = memo(function HeavyComponent4837({ config }: HeavyProps4837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4837.displayName = 'HeavyComponent4837';
export default HeavyComponent4837;
