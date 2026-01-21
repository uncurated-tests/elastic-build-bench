'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4266<T> = T extends (infer U)[]
  ? DeepReadonlyArray4266<U>
  : T extends object
  ? DeepReadonlyObject4266<T>
  : T;

interface DeepReadonlyArray4266<T> extends ReadonlyArray<DeepReadonly4266<T>> {}

type DeepReadonlyObject4266<T> = {
  readonly [P in keyof T]: DeepReadonly4266<T[P]>;
};

type UnionToIntersection4266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4266<T> = UnionToIntersection4266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4266<T extends unknown[], V> = [...T, V];

type TuplifyUnion4266<T, L = LastOf4266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4266<TuplifyUnion4266<Exclude<T, L>>, L>;

type DeepPartial4266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4266<T[P]> }
  : T;

type Paths4266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4266<K, Paths4266<T[K], Prev4266[D]>> : never }[keyof T]
  : never;

type Prev4266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4266 {
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

type ConfigPaths4266 = Paths4266<NestedConfig4266>;

interface HeavyProps4266 {
  config: DeepPartial4266<NestedConfig4266>;
  path?: ConfigPaths4266;
}

const HeavyComponent4266 = memo(function HeavyComponent4266({ config }: HeavyProps4266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4266.displayName = 'HeavyComponent4266';
export default HeavyComponent4266;
