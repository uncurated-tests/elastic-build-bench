'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4920<T> = T extends (infer U)[]
  ? DeepReadonlyArray4920<U>
  : T extends object
  ? DeepReadonlyObject4920<T>
  : T;

interface DeepReadonlyArray4920<T> extends ReadonlyArray<DeepReadonly4920<T>> {}

type DeepReadonlyObject4920<T> = {
  readonly [P in keyof T]: DeepReadonly4920<T[P]>;
};

type UnionToIntersection4920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4920<T> = UnionToIntersection4920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4920<T extends unknown[], V> = [...T, V];

type TuplifyUnion4920<T, L = LastOf4920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4920<TuplifyUnion4920<Exclude<T, L>>, L>;

type DeepPartial4920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4920<T[P]> }
  : T;

type Paths4920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4920<K, Paths4920<T[K], Prev4920[D]>> : never }[keyof T]
  : never;

type Prev4920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4920 {
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

type ConfigPaths4920 = Paths4920<NestedConfig4920>;

interface HeavyProps4920 {
  config: DeepPartial4920<NestedConfig4920>;
  path?: ConfigPaths4920;
}

const HeavyComponent4920 = memo(function HeavyComponent4920({ config }: HeavyProps4920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4920.displayName = 'HeavyComponent4920';
export default HeavyComponent4920;
