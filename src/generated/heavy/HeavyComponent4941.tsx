'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4941<T> = T extends (infer U)[]
  ? DeepReadonlyArray4941<U>
  : T extends object
  ? DeepReadonlyObject4941<T>
  : T;

interface DeepReadonlyArray4941<T> extends ReadonlyArray<DeepReadonly4941<T>> {}

type DeepReadonlyObject4941<T> = {
  readonly [P in keyof T]: DeepReadonly4941<T[P]>;
};

type UnionToIntersection4941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4941<T> = UnionToIntersection4941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4941<T extends unknown[], V> = [...T, V];

type TuplifyUnion4941<T, L = LastOf4941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4941<TuplifyUnion4941<Exclude<T, L>>, L>;

type DeepPartial4941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4941<T[P]> }
  : T;

type Paths4941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4941<K, Paths4941<T[K], Prev4941[D]>> : never }[keyof T]
  : never;

type Prev4941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4941 {
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

type ConfigPaths4941 = Paths4941<NestedConfig4941>;

interface HeavyProps4941 {
  config: DeepPartial4941<NestedConfig4941>;
  path?: ConfigPaths4941;
}

const HeavyComponent4941 = memo(function HeavyComponent4941({ config }: HeavyProps4941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4941.displayName = 'HeavyComponent4941';
export default HeavyComponent4941;
