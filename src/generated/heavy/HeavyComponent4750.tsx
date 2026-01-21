'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4750<T> = T extends (infer U)[]
  ? DeepReadonlyArray4750<U>
  : T extends object
  ? DeepReadonlyObject4750<T>
  : T;

interface DeepReadonlyArray4750<T> extends ReadonlyArray<DeepReadonly4750<T>> {}

type DeepReadonlyObject4750<T> = {
  readonly [P in keyof T]: DeepReadonly4750<T[P]>;
};

type UnionToIntersection4750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4750<T> = UnionToIntersection4750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4750<T extends unknown[], V> = [...T, V];

type TuplifyUnion4750<T, L = LastOf4750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4750<TuplifyUnion4750<Exclude<T, L>>, L>;

type DeepPartial4750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4750<T[P]> }
  : T;

type Paths4750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4750<K, Paths4750<T[K], Prev4750[D]>> : never }[keyof T]
  : never;

type Prev4750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4750 {
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

type ConfigPaths4750 = Paths4750<NestedConfig4750>;

interface HeavyProps4750 {
  config: DeepPartial4750<NestedConfig4750>;
  path?: ConfigPaths4750;
}

const HeavyComponent4750 = memo(function HeavyComponent4750({ config }: HeavyProps4750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4750.displayName = 'HeavyComponent4750';
export default HeavyComponent4750;
