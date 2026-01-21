'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4260<T> = T extends (infer U)[]
  ? DeepReadonlyArray4260<U>
  : T extends object
  ? DeepReadonlyObject4260<T>
  : T;

interface DeepReadonlyArray4260<T> extends ReadonlyArray<DeepReadonly4260<T>> {}

type DeepReadonlyObject4260<T> = {
  readonly [P in keyof T]: DeepReadonly4260<T[P]>;
};

type UnionToIntersection4260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4260<T> = UnionToIntersection4260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4260<T extends unknown[], V> = [...T, V];

type TuplifyUnion4260<T, L = LastOf4260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4260<TuplifyUnion4260<Exclude<T, L>>, L>;

type DeepPartial4260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4260<T[P]> }
  : T;

type Paths4260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4260<K, Paths4260<T[K], Prev4260[D]>> : never }[keyof T]
  : never;

type Prev4260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4260 {
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

type ConfigPaths4260 = Paths4260<NestedConfig4260>;

interface HeavyProps4260 {
  config: DeepPartial4260<NestedConfig4260>;
  path?: ConfigPaths4260;
}

const HeavyComponent4260 = memo(function HeavyComponent4260({ config }: HeavyProps4260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4260.displayName = 'HeavyComponent4260';
export default HeavyComponent4260;
