'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4262<T> = T extends (infer U)[]
  ? DeepReadonlyArray4262<U>
  : T extends object
  ? DeepReadonlyObject4262<T>
  : T;

interface DeepReadonlyArray4262<T> extends ReadonlyArray<DeepReadonly4262<T>> {}

type DeepReadonlyObject4262<T> = {
  readonly [P in keyof T]: DeepReadonly4262<T[P]>;
};

type UnionToIntersection4262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4262<T> = UnionToIntersection4262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4262<T extends unknown[], V> = [...T, V];

type TuplifyUnion4262<T, L = LastOf4262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4262<TuplifyUnion4262<Exclude<T, L>>, L>;

type DeepPartial4262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4262<T[P]> }
  : T;

type Paths4262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4262<K, Paths4262<T[K], Prev4262[D]>> : never }[keyof T]
  : never;

type Prev4262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4262 {
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

type ConfigPaths4262 = Paths4262<NestedConfig4262>;

interface HeavyProps4262 {
  config: DeepPartial4262<NestedConfig4262>;
  path?: ConfigPaths4262;
}

const HeavyComponent4262 = memo(function HeavyComponent4262({ config }: HeavyProps4262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4262.displayName = 'HeavyComponent4262';
export default HeavyComponent4262;
