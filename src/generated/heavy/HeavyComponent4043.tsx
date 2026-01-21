'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4043<T> = T extends (infer U)[]
  ? DeepReadonlyArray4043<U>
  : T extends object
  ? DeepReadonlyObject4043<T>
  : T;

interface DeepReadonlyArray4043<T> extends ReadonlyArray<DeepReadonly4043<T>> {}

type DeepReadonlyObject4043<T> = {
  readonly [P in keyof T]: DeepReadonly4043<T[P]>;
};

type UnionToIntersection4043<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4043<T> = UnionToIntersection4043<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4043<T extends unknown[], V> = [...T, V];

type TuplifyUnion4043<T, L = LastOf4043<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4043<TuplifyUnion4043<Exclude<T, L>>, L>;

type DeepPartial4043<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4043<T[P]> }
  : T;

type Paths4043<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4043<K, Paths4043<T[K], Prev4043[D]>> : never }[keyof T]
  : never;

type Prev4043 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4043<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4043 {
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

type ConfigPaths4043 = Paths4043<NestedConfig4043>;

interface HeavyProps4043 {
  config: DeepPartial4043<NestedConfig4043>;
  path?: ConfigPaths4043;
}

const HeavyComponent4043 = memo(function HeavyComponent4043({ config }: HeavyProps4043) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4043) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4043 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4043: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4043.displayName = 'HeavyComponent4043';
export default HeavyComponent4043;
