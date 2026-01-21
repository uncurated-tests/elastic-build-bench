'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4073<T> = T extends (infer U)[]
  ? DeepReadonlyArray4073<U>
  : T extends object
  ? DeepReadonlyObject4073<T>
  : T;

interface DeepReadonlyArray4073<T> extends ReadonlyArray<DeepReadonly4073<T>> {}

type DeepReadonlyObject4073<T> = {
  readonly [P in keyof T]: DeepReadonly4073<T[P]>;
};

type UnionToIntersection4073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4073<T> = UnionToIntersection4073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4073<T extends unknown[], V> = [...T, V];

type TuplifyUnion4073<T, L = LastOf4073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4073<TuplifyUnion4073<Exclude<T, L>>, L>;

type DeepPartial4073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4073<T[P]> }
  : T;

type Paths4073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4073<K, Paths4073<T[K], Prev4073[D]>> : never }[keyof T]
  : never;

type Prev4073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4073 {
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

type ConfigPaths4073 = Paths4073<NestedConfig4073>;

interface HeavyProps4073 {
  config: DeepPartial4073<NestedConfig4073>;
  path?: ConfigPaths4073;
}

const HeavyComponent4073 = memo(function HeavyComponent4073({ config }: HeavyProps4073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4073.displayName = 'HeavyComponent4073';
export default HeavyComponent4073;
