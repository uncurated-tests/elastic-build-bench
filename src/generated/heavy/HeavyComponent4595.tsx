'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4595<T> = T extends (infer U)[]
  ? DeepReadonlyArray4595<U>
  : T extends object
  ? DeepReadonlyObject4595<T>
  : T;

interface DeepReadonlyArray4595<T> extends ReadonlyArray<DeepReadonly4595<T>> {}

type DeepReadonlyObject4595<T> = {
  readonly [P in keyof T]: DeepReadonly4595<T[P]>;
};

type UnionToIntersection4595<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4595<T> = UnionToIntersection4595<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4595<T extends unknown[], V> = [...T, V];

type TuplifyUnion4595<T, L = LastOf4595<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4595<TuplifyUnion4595<Exclude<T, L>>, L>;

type DeepPartial4595<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4595<T[P]> }
  : T;

type Paths4595<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4595<K, Paths4595<T[K], Prev4595[D]>> : never }[keyof T]
  : never;

type Prev4595 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4595<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4595 {
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

type ConfigPaths4595 = Paths4595<NestedConfig4595>;

interface HeavyProps4595 {
  config: DeepPartial4595<NestedConfig4595>;
  path?: ConfigPaths4595;
}

const HeavyComponent4595 = memo(function HeavyComponent4595({ config }: HeavyProps4595) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4595) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4595 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4595: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4595.displayName = 'HeavyComponent4595';
export default HeavyComponent4595;
