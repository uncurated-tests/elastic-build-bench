'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14950<T> = T extends (infer U)[]
  ? DeepReadonlyArray14950<U>
  : T extends object
  ? DeepReadonlyObject14950<T>
  : T;

interface DeepReadonlyArray14950<T> extends ReadonlyArray<DeepReadonly14950<T>> {}

type DeepReadonlyObject14950<T> = {
  readonly [P in keyof T]: DeepReadonly14950<T[P]>;
};

type UnionToIntersection14950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14950<T> = UnionToIntersection14950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14950<T extends unknown[], V> = [...T, V];

type TuplifyUnion14950<T, L = LastOf14950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14950<TuplifyUnion14950<Exclude<T, L>>, L>;

type DeepPartial14950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14950<T[P]> }
  : T;

type Paths14950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14950<K, Paths14950<T[K], Prev14950[D]>> : never }[keyof T]
  : never;

type Prev14950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14950 {
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

type ConfigPaths14950 = Paths14950<NestedConfig14950>;

interface HeavyProps14950 {
  config: DeepPartial14950<NestedConfig14950>;
  path?: ConfigPaths14950;
}

const HeavyComponent14950 = memo(function HeavyComponent14950({ config }: HeavyProps14950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14950.displayName = 'HeavyComponent14950';
export default HeavyComponent14950;
