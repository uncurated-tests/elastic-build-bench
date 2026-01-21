'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4473<T> = T extends (infer U)[]
  ? DeepReadonlyArray4473<U>
  : T extends object
  ? DeepReadonlyObject4473<T>
  : T;

interface DeepReadonlyArray4473<T> extends ReadonlyArray<DeepReadonly4473<T>> {}

type DeepReadonlyObject4473<T> = {
  readonly [P in keyof T]: DeepReadonly4473<T[P]>;
};

type UnionToIntersection4473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4473<T> = UnionToIntersection4473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4473<T extends unknown[], V> = [...T, V];

type TuplifyUnion4473<T, L = LastOf4473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4473<TuplifyUnion4473<Exclude<T, L>>, L>;

type DeepPartial4473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4473<T[P]> }
  : T;

type Paths4473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4473<K, Paths4473<T[K], Prev4473[D]>> : never }[keyof T]
  : never;

type Prev4473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4473 {
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

type ConfigPaths4473 = Paths4473<NestedConfig4473>;

interface HeavyProps4473 {
  config: DeepPartial4473<NestedConfig4473>;
  path?: ConfigPaths4473;
}

const HeavyComponent4473 = memo(function HeavyComponent4473({ config }: HeavyProps4473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4473.displayName = 'HeavyComponent4473';
export default HeavyComponent4473;
