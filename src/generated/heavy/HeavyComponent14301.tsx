'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14301<T> = T extends (infer U)[]
  ? DeepReadonlyArray14301<U>
  : T extends object
  ? DeepReadonlyObject14301<T>
  : T;

interface DeepReadonlyArray14301<T> extends ReadonlyArray<DeepReadonly14301<T>> {}

type DeepReadonlyObject14301<T> = {
  readonly [P in keyof T]: DeepReadonly14301<T[P]>;
};

type UnionToIntersection14301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14301<T> = UnionToIntersection14301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14301<T extends unknown[], V> = [...T, V];

type TuplifyUnion14301<T, L = LastOf14301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14301<TuplifyUnion14301<Exclude<T, L>>, L>;

type DeepPartial14301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14301<T[P]> }
  : T;

type Paths14301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14301<K, Paths14301<T[K], Prev14301[D]>> : never }[keyof T]
  : never;

type Prev14301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14301 {
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

type ConfigPaths14301 = Paths14301<NestedConfig14301>;

interface HeavyProps14301 {
  config: DeepPartial14301<NestedConfig14301>;
  path?: ConfigPaths14301;
}

const HeavyComponent14301 = memo(function HeavyComponent14301({ config }: HeavyProps14301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14301.displayName = 'HeavyComponent14301';
export default HeavyComponent14301;
