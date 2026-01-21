'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4370<T> = T extends (infer U)[]
  ? DeepReadonlyArray4370<U>
  : T extends object
  ? DeepReadonlyObject4370<T>
  : T;

interface DeepReadonlyArray4370<T> extends ReadonlyArray<DeepReadonly4370<T>> {}

type DeepReadonlyObject4370<T> = {
  readonly [P in keyof T]: DeepReadonly4370<T[P]>;
};

type UnionToIntersection4370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4370<T> = UnionToIntersection4370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4370<T extends unknown[], V> = [...T, V];

type TuplifyUnion4370<T, L = LastOf4370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4370<TuplifyUnion4370<Exclude<T, L>>, L>;

type DeepPartial4370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4370<T[P]> }
  : T;

type Paths4370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4370<K, Paths4370<T[K], Prev4370[D]>> : never }[keyof T]
  : never;

type Prev4370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4370 {
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

type ConfigPaths4370 = Paths4370<NestedConfig4370>;

interface HeavyProps4370 {
  config: DeepPartial4370<NestedConfig4370>;
  path?: ConfigPaths4370;
}

const HeavyComponent4370 = memo(function HeavyComponent4370({ config }: HeavyProps4370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4370.displayName = 'HeavyComponent4370';
export default HeavyComponent4370;
