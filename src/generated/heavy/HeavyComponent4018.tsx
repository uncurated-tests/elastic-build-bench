'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4018<T> = T extends (infer U)[]
  ? DeepReadonlyArray4018<U>
  : T extends object
  ? DeepReadonlyObject4018<T>
  : T;

interface DeepReadonlyArray4018<T> extends ReadonlyArray<DeepReadonly4018<T>> {}

type DeepReadonlyObject4018<T> = {
  readonly [P in keyof T]: DeepReadonly4018<T[P]>;
};

type UnionToIntersection4018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4018<T> = UnionToIntersection4018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4018<T extends unknown[], V> = [...T, V];

type TuplifyUnion4018<T, L = LastOf4018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4018<TuplifyUnion4018<Exclude<T, L>>, L>;

type DeepPartial4018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4018<T[P]> }
  : T;

type Paths4018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4018<K, Paths4018<T[K], Prev4018[D]>> : never }[keyof T]
  : never;

type Prev4018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4018 {
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

type ConfigPaths4018 = Paths4018<NestedConfig4018>;

interface HeavyProps4018 {
  config: DeepPartial4018<NestedConfig4018>;
  path?: ConfigPaths4018;
}

const HeavyComponent4018 = memo(function HeavyComponent4018({ config }: HeavyProps4018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4018.displayName = 'HeavyComponent4018';
export default HeavyComponent4018;
