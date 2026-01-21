'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4744<T> = T extends (infer U)[]
  ? DeepReadonlyArray4744<U>
  : T extends object
  ? DeepReadonlyObject4744<T>
  : T;

interface DeepReadonlyArray4744<T> extends ReadonlyArray<DeepReadonly4744<T>> {}

type DeepReadonlyObject4744<T> = {
  readonly [P in keyof T]: DeepReadonly4744<T[P]>;
};

type UnionToIntersection4744<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4744<T> = UnionToIntersection4744<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4744<T extends unknown[], V> = [...T, V];

type TuplifyUnion4744<T, L = LastOf4744<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4744<TuplifyUnion4744<Exclude<T, L>>, L>;

type DeepPartial4744<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4744<T[P]> }
  : T;

type Paths4744<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4744<K, Paths4744<T[K], Prev4744[D]>> : never }[keyof T]
  : never;

type Prev4744 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4744<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4744 {
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

type ConfigPaths4744 = Paths4744<NestedConfig4744>;

interface HeavyProps4744 {
  config: DeepPartial4744<NestedConfig4744>;
  path?: ConfigPaths4744;
}

const HeavyComponent4744 = memo(function HeavyComponent4744({ config }: HeavyProps4744) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4744) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4744 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4744: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4744.displayName = 'HeavyComponent4744';
export default HeavyComponent4744;
