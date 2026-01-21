'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4877<T> = T extends (infer U)[]
  ? DeepReadonlyArray4877<U>
  : T extends object
  ? DeepReadonlyObject4877<T>
  : T;

interface DeepReadonlyArray4877<T> extends ReadonlyArray<DeepReadonly4877<T>> {}

type DeepReadonlyObject4877<T> = {
  readonly [P in keyof T]: DeepReadonly4877<T[P]>;
};

type UnionToIntersection4877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4877<T> = UnionToIntersection4877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4877<T extends unknown[], V> = [...T, V];

type TuplifyUnion4877<T, L = LastOf4877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4877<TuplifyUnion4877<Exclude<T, L>>, L>;

type DeepPartial4877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4877<T[P]> }
  : T;

type Paths4877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4877<K, Paths4877<T[K], Prev4877[D]>> : never }[keyof T]
  : never;

type Prev4877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4877 {
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

type ConfigPaths4877 = Paths4877<NestedConfig4877>;

interface HeavyProps4877 {
  config: DeepPartial4877<NestedConfig4877>;
  path?: ConfigPaths4877;
}

const HeavyComponent4877 = memo(function HeavyComponent4877({ config }: HeavyProps4877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4877.displayName = 'HeavyComponent4877';
export default HeavyComponent4877;
