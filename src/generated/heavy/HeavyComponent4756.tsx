'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4756<T> = T extends (infer U)[]
  ? DeepReadonlyArray4756<U>
  : T extends object
  ? DeepReadonlyObject4756<T>
  : T;

interface DeepReadonlyArray4756<T> extends ReadonlyArray<DeepReadonly4756<T>> {}

type DeepReadonlyObject4756<T> = {
  readonly [P in keyof T]: DeepReadonly4756<T[P]>;
};

type UnionToIntersection4756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4756<T> = UnionToIntersection4756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4756<T extends unknown[], V> = [...T, V];

type TuplifyUnion4756<T, L = LastOf4756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4756<TuplifyUnion4756<Exclude<T, L>>, L>;

type DeepPartial4756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4756<T[P]> }
  : T;

type Paths4756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4756<K, Paths4756<T[K], Prev4756[D]>> : never }[keyof T]
  : never;

type Prev4756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4756 {
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

type ConfigPaths4756 = Paths4756<NestedConfig4756>;

interface HeavyProps4756 {
  config: DeepPartial4756<NestedConfig4756>;
  path?: ConfigPaths4756;
}

const HeavyComponent4756 = memo(function HeavyComponent4756({ config }: HeavyProps4756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4756.displayName = 'HeavyComponent4756';
export default HeavyComponent4756;
