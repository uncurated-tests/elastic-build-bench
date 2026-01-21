'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4845<T> = T extends (infer U)[]
  ? DeepReadonlyArray4845<U>
  : T extends object
  ? DeepReadonlyObject4845<T>
  : T;

interface DeepReadonlyArray4845<T> extends ReadonlyArray<DeepReadonly4845<T>> {}

type DeepReadonlyObject4845<T> = {
  readonly [P in keyof T]: DeepReadonly4845<T[P]>;
};

type UnionToIntersection4845<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4845<T> = UnionToIntersection4845<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4845<T extends unknown[], V> = [...T, V];

type TuplifyUnion4845<T, L = LastOf4845<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4845<TuplifyUnion4845<Exclude<T, L>>, L>;

type DeepPartial4845<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4845<T[P]> }
  : T;

type Paths4845<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4845<K, Paths4845<T[K], Prev4845[D]>> : never }[keyof T]
  : never;

type Prev4845 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4845<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4845 {
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

type ConfigPaths4845 = Paths4845<NestedConfig4845>;

interface HeavyProps4845 {
  config: DeepPartial4845<NestedConfig4845>;
  path?: ConfigPaths4845;
}

const HeavyComponent4845 = memo(function HeavyComponent4845({ config }: HeavyProps4845) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4845) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4845 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4845: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4845.displayName = 'HeavyComponent4845';
export default HeavyComponent4845;
