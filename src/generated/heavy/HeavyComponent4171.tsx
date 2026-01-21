'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4171<T> = T extends (infer U)[]
  ? DeepReadonlyArray4171<U>
  : T extends object
  ? DeepReadonlyObject4171<T>
  : T;

interface DeepReadonlyArray4171<T> extends ReadonlyArray<DeepReadonly4171<T>> {}

type DeepReadonlyObject4171<T> = {
  readonly [P in keyof T]: DeepReadonly4171<T[P]>;
};

type UnionToIntersection4171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4171<T> = UnionToIntersection4171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4171<T extends unknown[], V> = [...T, V];

type TuplifyUnion4171<T, L = LastOf4171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4171<TuplifyUnion4171<Exclude<T, L>>, L>;

type DeepPartial4171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4171<T[P]> }
  : T;

type Paths4171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4171<K, Paths4171<T[K], Prev4171[D]>> : never }[keyof T]
  : never;

type Prev4171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4171 {
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

type ConfigPaths4171 = Paths4171<NestedConfig4171>;

interface HeavyProps4171 {
  config: DeepPartial4171<NestedConfig4171>;
  path?: ConfigPaths4171;
}

const HeavyComponent4171 = memo(function HeavyComponent4171({ config }: HeavyProps4171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4171.displayName = 'HeavyComponent4171';
export default HeavyComponent4171;
