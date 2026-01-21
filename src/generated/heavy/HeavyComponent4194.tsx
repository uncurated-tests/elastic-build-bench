'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4194<T> = T extends (infer U)[]
  ? DeepReadonlyArray4194<U>
  : T extends object
  ? DeepReadonlyObject4194<T>
  : T;

interface DeepReadonlyArray4194<T> extends ReadonlyArray<DeepReadonly4194<T>> {}

type DeepReadonlyObject4194<T> = {
  readonly [P in keyof T]: DeepReadonly4194<T[P]>;
};

type UnionToIntersection4194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4194<T> = UnionToIntersection4194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4194<T extends unknown[], V> = [...T, V];

type TuplifyUnion4194<T, L = LastOf4194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4194<TuplifyUnion4194<Exclude<T, L>>, L>;

type DeepPartial4194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4194<T[P]> }
  : T;

type Paths4194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4194<K, Paths4194<T[K], Prev4194[D]>> : never }[keyof T]
  : never;

type Prev4194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4194 {
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

type ConfigPaths4194 = Paths4194<NestedConfig4194>;

interface HeavyProps4194 {
  config: DeepPartial4194<NestedConfig4194>;
  path?: ConfigPaths4194;
}

const HeavyComponent4194 = memo(function HeavyComponent4194({ config }: HeavyProps4194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4194.displayName = 'HeavyComponent4194';
export default HeavyComponent4194;
