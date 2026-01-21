'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4161<T> = T extends (infer U)[]
  ? DeepReadonlyArray4161<U>
  : T extends object
  ? DeepReadonlyObject4161<T>
  : T;

interface DeepReadonlyArray4161<T> extends ReadonlyArray<DeepReadonly4161<T>> {}

type DeepReadonlyObject4161<T> = {
  readonly [P in keyof T]: DeepReadonly4161<T[P]>;
};

type UnionToIntersection4161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4161<T> = UnionToIntersection4161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4161<T extends unknown[], V> = [...T, V];

type TuplifyUnion4161<T, L = LastOf4161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4161<TuplifyUnion4161<Exclude<T, L>>, L>;

type DeepPartial4161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4161<T[P]> }
  : T;

type Paths4161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4161<K, Paths4161<T[K], Prev4161[D]>> : never }[keyof T]
  : never;

type Prev4161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4161 {
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

type ConfigPaths4161 = Paths4161<NestedConfig4161>;

interface HeavyProps4161 {
  config: DeepPartial4161<NestedConfig4161>;
  path?: ConfigPaths4161;
}

const HeavyComponent4161 = memo(function HeavyComponent4161({ config }: HeavyProps4161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4161.displayName = 'HeavyComponent4161';
export default HeavyComponent4161;
