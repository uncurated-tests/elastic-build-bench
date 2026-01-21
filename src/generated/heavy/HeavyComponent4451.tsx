'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4451<T> = T extends (infer U)[]
  ? DeepReadonlyArray4451<U>
  : T extends object
  ? DeepReadonlyObject4451<T>
  : T;

interface DeepReadonlyArray4451<T> extends ReadonlyArray<DeepReadonly4451<T>> {}

type DeepReadonlyObject4451<T> = {
  readonly [P in keyof T]: DeepReadonly4451<T[P]>;
};

type UnionToIntersection4451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4451<T> = UnionToIntersection4451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4451<T extends unknown[], V> = [...T, V];

type TuplifyUnion4451<T, L = LastOf4451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4451<TuplifyUnion4451<Exclude<T, L>>, L>;

type DeepPartial4451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4451<T[P]> }
  : T;

type Paths4451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4451<K, Paths4451<T[K], Prev4451[D]>> : never }[keyof T]
  : never;

type Prev4451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4451 {
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

type ConfigPaths4451 = Paths4451<NestedConfig4451>;

interface HeavyProps4451 {
  config: DeepPartial4451<NestedConfig4451>;
  path?: ConfigPaths4451;
}

const HeavyComponent4451 = memo(function HeavyComponent4451({ config }: HeavyProps4451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4451.displayName = 'HeavyComponent4451';
export default HeavyComponent4451;
