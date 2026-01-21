'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14859<T> = T extends (infer U)[]
  ? DeepReadonlyArray14859<U>
  : T extends object
  ? DeepReadonlyObject14859<T>
  : T;

interface DeepReadonlyArray14859<T> extends ReadonlyArray<DeepReadonly14859<T>> {}

type DeepReadonlyObject14859<T> = {
  readonly [P in keyof T]: DeepReadonly14859<T[P]>;
};

type UnionToIntersection14859<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14859<T> = UnionToIntersection14859<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14859<T extends unknown[], V> = [...T, V];

type TuplifyUnion14859<T, L = LastOf14859<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14859<TuplifyUnion14859<Exclude<T, L>>, L>;

type DeepPartial14859<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14859<T[P]> }
  : T;

type Paths14859<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14859<K, Paths14859<T[K], Prev14859[D]>> : never }[keyof T]
  : never;

type Prev14859 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14859<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14859 {
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

type ConfigPaths14859 = Paths14859<NestedConfig14859>;

interface HeavyProps14859 {
  config: DeepPartial14859<NestedConfig14859>;
  path?: ConfigPaths14859;
}

const HeavyComponent14859 = memo(function HeavyComponent14859({ config }: HeavyProps14859) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14859) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14859 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14859: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14859.displayName = 'HeavyComponent14859';
export default HeavyComponent14859;
