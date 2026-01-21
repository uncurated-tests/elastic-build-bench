'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14846<T> = T extends (infer U)[]
  ? DeepReadonlyArray14846<U>
  : T extends object
  ? DeepReadonlyObject14846<T>
  : T;

interface DeepReadonlyArray14846<T> extends ReadonlyArray<DeepReadonly14846<T>> {}

type DeepReadonlyObject14846<T> = {
  readonly [P in keyof T]: DeepReadonly14846<T[P]>;
};

type UnionToIntersection14846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14846<T> = UnionToIntersection14846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14846<T extends unknown[], V> = [...T, V];

type TuplifyUnion14846<T, L = LastOf14846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14846<TuplifyUnion14846<Exclude<T, L>>, L>;

type DeepPartial14846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14846<T[P]> }
  : T;

type Paths14846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14846<K, Paths14846<T[K], Prev14846[D]>> : never }[keyof T]
  : never;

type Prev14846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14846 {
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

type ConfigPaths14846 = Paths14846<NestedConfig14846>;

interface HeavyProps14846 {
  config: DeepPartial14846<NestedConfig14846>;
  path?: ConfigPaths14846;
}

const HeavyComponent14846 = memo(function HeavyComponent14846({ config }: HeavyProps14846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14846.displayName = 'HeavyComponent14846';
export default HeavyComponent14846;
