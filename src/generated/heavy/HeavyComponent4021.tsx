'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4021<T> = T extends (infer U)[]
  ? DeepReadonlyArray4021<U>
  : T extends object
  ? DeepReadonlyObject4021<T>
  : T;

interface DeepReadonlyArray4021<T> extends ReadonlyArray<DeepReadonly4021<T>> {}

type DeepReadonlyObject4021<T> = {
  readonly [P in keyof T]: DeepReadonly4021<T[P]>;
};

type UnionToIntersection4021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4021<T> = UnionToIntersection4021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4021<T extends unknown[], V> = [...T, V];

type TuplifyUnion4021<T, L = LastOf4021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4021<TuplifyUnion4021<Exclude<T, L>>, L>;

type DeepPartial4021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4021<T[P]> }
  : T;

type Paths4021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4021<K, Paths4021<T[K], Prev4021[D]>> : never }[keyof T]
  : never;

type Prev4021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4021 {
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

type ConfigPaths4021 = Paths4021<NestedConfig4021>;

interface HeavyProps4021 {
  config: DeepPartial4021<NestedConfig4021>;
  path?: ConfigPaths4021;
}

const HeavyComponent4021 = memo(function HeavyComponent4021({ config }: HeavyProps4021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4021.displayName = 'HeavyComponent4021';
export default HeavyComponent4021;
