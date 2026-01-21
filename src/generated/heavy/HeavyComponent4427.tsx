'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4427<T> = T extends (infer U)[]
  ? DeepReadonlyArray4427<U>
  : T extends object
  ? DeepReadonlyObject4427<T>
  : T;

interface DeepReadonlyArray4427<T> extends ReadonlyArray<DeepReadonly4427<T>> {}

type DeepReadonlyObject4427<T> = {
  readonly [P in keyof T]: DeepReadonly4427<T[P]>;
};

type UnionToIntersection4427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4427<T> = UnionToIntersection4427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4427<T extends unknown[], V> = [...T, V];

type TuplifyUnion4427<T, L = LastOf4427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4427<TuplifyUnion4427<Exclude<T, L>>, L>;

type DeepPartial4427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4427<T[P]> }
  : T;

type Paths4427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4427<K, Paths4427<T[K], Prev4427[D]>> : never }[keyof T]
  : never;

type Prev4427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4427 {
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

type ConfigPaths4427 = Paths4427<NestedConfig4427>;

interface HeavyProps4427 {
  config: DeepPartial4427<NestedConfig4427>;
  path?: ConfigPaths4427;
}

const HeavyComponent4427 = memo(function HeavyComponent4427({ config }: HeavyProps4427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4427.displayName = 'HeavyComponent4427';
export default HeavyComponent4427;
