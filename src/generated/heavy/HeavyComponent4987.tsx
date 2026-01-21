'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4987<T> = T extends (infer U)[]
  ? DeepReadonlyArray4987<U>
  : T extends object
  ? DeepReadonlyObject4987<T>
  : T;

interface DeepReadonlyArray4987<T> extends ReadonlyArray<DeepReadonly4987<T>> {}

type DeepReadonlyObject4987<T> = {
  readonly [P in keyof T]: DeepReadonly4987<T[P]>;
};

type UnionToIntersection4987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4987<T> = UnionToIntersection4987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4987<T extends unknown[], V> = [...T, V];

type TuplifyUnion4987<T, L = LastOf4987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4987<TuplifyUnion4987<Exclude<T, L>>, L>;

type DeepPartial4987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4987<T[P]> }
  : T;

type Paths4987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4987<K, Paths4987<T[K], Prev4987[D]>> : never }[keyof T]
  : never;

type Prev4987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4987 {
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

type ConfigPaths4987 = Paths4987<NestedConfig4987>;

interface HeavyProps4987 {
  config: DeepPartial4987<NestedConfig4987>;
  path?: ConfigPaths4987;
}

const HeavyComponent4987 = memo(function HeavyComponent4987({ config }: HeavyProps4987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4987.displayName = 'HeavyComponent4987';
export default HeavyComponent4987;
