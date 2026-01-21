'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4489<T> = T extends (infer U)[]
  ? DeepReadonlyArray4489<U>
  : T extends object
  ? DeepReadonlyObject4489<T>
  : T;

interface DeepReadonlyArray4489<T> extends ReadonlyArray<DeepReadonly4489<T>> {}

type DeepReadonlyObject4489<T> = {
  readonly [P in keyof T]: DeepReadonly4489<T[P]>;
};

type UnionToIntersection4489<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4489<T> = UnionToIntersection4489<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4489<T extends unknown[], V> = [...T, V];

type TuplifyUnion4489<T, L = LastOf4489<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4489<TuplifyUnion4489<Exclude<T, L>>, L>;

type DeepPartial4489<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4489<T[P]> }
  : T;

type Paths4489<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4489<K, Paths4489<T[K], Prev4489[D]>> : never }[keyof T]
  : never;

type Prev4489 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4489<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4489 {
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

type ConfigPaths4489 = Paths4489<NestedConfig4489>;

interface HeavyProps4489 {
  config: DeepPartial4489<NestedConfig4489>;
  path?: ConfigPaths4489;
}

const HeavyComponent4489 = memo(function HeavyComponent4489({ config }: HeavyProps4489) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4489) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4489 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4489: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4489.displayName = 'HeavyComponent4489';
export default HeavyComponent4489;
