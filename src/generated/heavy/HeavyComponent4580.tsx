'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4580<T> = T extends (infer U)[]
  ? DeepReadonlyArray4580<U>
  : T extends object
  ? DeepReadonlyObject4580<T>
  : T;

interface DeepReadonlyArray4580<T> extends ReadonlyArray<DeepReadonly4580<T>> {}

type DeepReadonlyObject4580<T> = {
  readonly [P in keyof T]: DeepReadonly4580<T[P]>;
};

type UnionToIntersection4580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4580<T> = UnionToIntersection4580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4580<T extends unknown[], V> = [...T, V];

type TuplifyUnion4580<T, L = LastOf4580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4580<TuplifyUnion4580<Exclude<T, L>>, L>;

type DeepPartial4580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4580<T[P]> }
  : T;

type Paths4580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4580<K, Paths4580<T[K], Prev4580[D]>> : never }[keyof T]
  : never;

type Prev4580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4580 {
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

type ConfigPaths4580 = Paths4580<NestedConfig4580>;

interface HeavyProps4580 {
  config: DeepPartial4580<NestedConfig4580>;
  path?: ConfigPaths4580;
}

const HeavyComponent4580 = memo(function HeavyComponent4580({ config }: HeavyProps4580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4580.displayName = 'HeavyComponent4580';
export default HeavyComponent4580;
