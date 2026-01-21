'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4261<T> = T extends (infer U)[]
  ? DeepReadonlyArray4261<U>
  : T extends object
  ? DeepReadonlyObject4261<T>
  : T;

interface DeepReadonlyArray4261<T> extends ReadonlyArray<DeepReadonly4261<T>> {}

type DeepReadonlyObject4261<T> = {
  readonly [P in keyof T]: DeepReadonly4261<T[P]>;
};

type UnionToIntersection4261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4261<T> = UnionToIntersection4261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4261<T extends unknown[], V> = [...T, V];

type TuplifyUnion4261<T, L = LastOf4261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4261<TuplifyUnion4261<Exclude<T, L>>, L>;

type DeepPartial4261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4261<T[P]> }
  : T;

type Paths4261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4261<K, Paths4261<T[K], Prev4261[D]>> : never }[keyof T]
  : never;

type Prev4261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4261 {
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

type ConfigPaths4261 = Paths4261<NestedConfig4261>;

interface HeavyProps4261 {
  config: DeepPartial4261<NestedConfig4261>;
  path?: ConfigPaths4261;
}

const HeavyComponent4261 = memo(function HeavyComponent4261({ config }: HeavyProps4261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4261.displayName = 'HeavyComponent4261';
export default HeavyComponent4261;
