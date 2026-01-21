'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4606<T> = T extends (infer U)[]
  ? DeepReadonlyArray4606<U>
  : T extends object
  ? DeepReadonlyObject4606<T>
  : T;

interface DeepReadonlyArray4606<T> extends ReadonlyArray<DeepReadonly4606<T>> {}

type DeepReadonlyObject4606<T> = {
  readonly [P in keyof T]: DeepReadonly4606<T[P]>;
};

type UnionToIntersection4606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4606<T> = UnionToIntersection4606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4606<T extends unknown[], V> = [...T, V];

type TuplifyUnion4606<T, L = LastOf4606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4606<TuplifyUnion4606<Exclude<T, L>>, L>;

type DeepPartial4606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4606<T[P]> }
  : T;

type Paths4606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4606<K, Paths4606<T[K], Prev4606[D]>> : never }[keyof T]
  : never;

type Prev4606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4606 {
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

type ConfigPaths4606 = Paths4606<NestedConfig4606>;

interface HeavyProps4606 {
  config: DeepPartial4606<NestedConfig4606>;
  path?: ConfigPaths4606;
}

const HeavyComponent4606 = memo(function HeavyComponent4606({ config }: HeavyProps4606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4606.displayName = 'HeavyComponent4606';
export default HeavyComponent4606;
