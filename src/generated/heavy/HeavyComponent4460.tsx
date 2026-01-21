'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4460<T> = T extends (infer U)[]
  ? DeepReadonlyArray4460<U>
  : T extends object
  ? DeepReadonlyObject4460<T>
  : T;

interface DeepReadonlyArray4460<T> extends ReadonlyArray<DeepReadonly4460<T>> {}

type DeepReadonlyObject4460<T> = {
  readonly [P in keyof T]: DeepReadonly4460<T[P]>;
};

type UnionToIntersection4460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4460<T> = UnionToIntersection4460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4460<T extends unknown[], V> = [...T, V];

type TuplifyUnion4460<T, L = LastOf4460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4460<TuplifyUnion4460<Exclude<T, L>>, L>;

type DeepPartial4460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4460<T[P]> }
  : T;

type Paths4460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4460<K, Paths4460<T[K], Prev4460[D]>> : never }[keyof T]
  : never;

type Prev4460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4460 {
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

type ConfigPaths4460 = Paths4460<NestedConfig4460>;

interface HeavyProps4460 {
  config: DeepPartial4460<NestedConfig4460>;
  path?: ConfigPaths4460;
}

const HeavyComponent4460 = memo(function HeavyComponent4460({ config }: HeavyProps4460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4460.displayName = 'HeavyComponent4460';
export default HeavyComponent4460;
