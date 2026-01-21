'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14493<T> = T extends (infer U)[]
  ? DeepReadonlyArray14493<U>
  : T extends object
  ? DeepReadonlyObject14493<T>
  : T;

interface DeepReadonlyArray14493<T> extends ReadonlyArray<DeepReadonly14493<T>> {}

type DeepReadonlyObject14493<T> = {
  readonly [P in keyof T]: DeepReadonly14493<T[P]>;
};

type UnionToIntersection14493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14493<T> = UnionToIntersection14493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14493<T extends unknown[], V> = [...T, V];

type TuplifyUnion14493<T, L = LastOf14493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14493<TuplifyUnion14493<Exclude<T, L>>, L>;

type DeepPartial14493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14493<T[P]> }
  : T;

type Paths14493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14493<K, Paths14493<T[K], Prev14493[D]>> : never }[keyof T]
  : never;

type Prev14493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14493 {
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

type ConfigPaths14493 = Paths14493<NestedConfig14493>;

interface HeavyProps14493 {
  config: DeepPartial14493<NestedConfig14493>;
  path?: ConfigPaths14493;
}

const HeavyComponent14493 = memo(function HeavyComponent14493({ config }: HeavyProps14493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14493.displayName = 'HeavyComponent14493';
export default HeavyComponent14493;
