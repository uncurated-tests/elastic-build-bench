'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4874<T> = T extends (infer U)[]
  ? DeepReadonlyArray4874<U>
  : T extends object
  ? DeepReadonlyObject4874<T>
  : T;

interface DeepReadonlyArray4874<T> extends ReadonlyArray<DeepReadonly4874<T>> {}

type DeepReadonlyObject4874<T> = {
  readonly [P in keyof T]: DeepReadonly4874<T[P]>;
};

type UnionToIntersection4874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4874<T> = UnionToIntersection4874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4874<T extends unknown[], V> = [...T, V];

type TuplifyUnion4874<T, L = LastOf4874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4874<TuplifyUnion4874<Exclude<T, L>>, L>;

type DeepPartial4874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4874<T[P]> }
  : T;

type Paths4874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4874<K, Paths4874<T[K], Prev4874[D]>> : never }[keyof T]
  : never;

type Prev4874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4874 {
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

type ConfigPaths4874 = Paths4874<NestedConfig4874>;

interface HeavyProps4874 {
  config: DeepPartial4874<NestedConfig4874>;
  path?: ConfigPaths4874;
}

const HeavyComponent4874 = memo(function HeavyComponent4874({ config }: HeavyProps4874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4874.displayName = 'HeavyComponent4874';
export default HeavyComponent4874;
