'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4760<T> = T extends (infer U)[]
  ? DeepReadonlyArray4760<U>
  : T extends object
  ? DeepReadonlyObject4760<T>
  : T;

interface DeepReadonlyArray4760<T> extends ReadonlyArray<DeepReadonly4760<T>> {}

type DeepReadonlyObject4760<T> = {
  readonly [P in keyof T]: DeepReadonly4760<T[P]>;
};

type UnionToIntersection4760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4760<T> = UnionToIntersection4760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4760<T extends unknown[], V> = [...T, V];

type TuplifyUnion4760<T, L = LastOf4760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4760<TuplifyUnion4760<Exclude<T, L>>, L>;

type DeepPartial4760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4760<T[P]> }
  : T;

type Paths4760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4760<K, Paths4760<T[K], Prev4760[D]>> : never }[keyof T]
  : never;

type Prev4760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4760 {
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

type ConfigPaths4760 = Paths4760<NestedConfig4760>;

interface HeavyProps4760 {
  config: DeepPartial4760<NestedConfig4760>;
  path?: ConfigPaths4760;
}

const HeavyComponent4760 = memo(function HeavyComponent4760({ config }: HeavyProps4760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4760.displayName = 'HeavyComponent4760';
export default HeavyComponent4760;
