'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4142<T> = T extends (infer U)[]
  ? DeepReadonlyArray4142<U>
  : T extends object
  ? DeepReadonlyObject4142<T>
  : T;

interface DeepReadonlyArray4142<T> extends ReadonlyArray<DeepReadonly4142<T>> {}

type DeepReadonlyObject4142<T> = {
  readonly [P in keyof T]: DeepReadonly4142<T[P]>;
};

type UnionToIntersection4142<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4142<T> = UnionToIntersection4142<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4142<T extends unknown[], V> = [...T, V];

type TuplifyUnion4142<T, L = LastOf4142<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4142<TuplifyUnion4142<Exclude<T, L>>, L>;

type DeepPartial4142<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4142<T[P]> }
  : T;

type Paths4142<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4142<K, Paths4142<T[K], Prev4142[D]>> : never }[keyof T]
  : never;

type Prev4142 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4142<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4142 {
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

type ConfigPaths4142 = Paths4142<NestedConfig4142>;

interface HeavyProps4142 {
  config: DeepPartial4142<NestedConfig4142>;
  path?: ConfigPaths4142;
}

const HeavyComponent4142 = memo(function HeavyComponent4142({ config }: HeavyProps4142) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4142) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4142 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4142: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4142.displayName = 'HeavyComponent4142';
export default HeavyComponent4142;
