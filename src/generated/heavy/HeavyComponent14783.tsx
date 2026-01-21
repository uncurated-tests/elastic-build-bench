'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14783<T> = T extends (infer U)[]
  ? DeepReadonlyArray14783<U>
  : T extends object
  ? DeepReadonlyObject14783<T>
  : T;

interface DeepReadonlyArray14783<T> extends ReadonlyArray<DeepReadonly14783<T>> {}

type DeepReadonlyObject14783<T> = {
  readonly [P in keyof T]: DeepReadonly14783<T[P]>;
};

type UnionToIntersection14783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14783<T> = UnionToIntersection14783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14783<T extends unknown[], V> = [...T, V];

type TuplifyUnion14783<T, L = LastOf14783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14783<TuplifyUnion14783<Exclude<T, L>>, L>;

type DeepPartial14783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14783<T[P]> }
  : T;

type Paths14783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14783<K, Paths14783<T[K], Prev14783[D]>> : never }[keyof T]
  : never;

type Prev14783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14783 {
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

type ConfigPaths14783 = Paths14783<NestedConfig14783>;

interface HeavyProps14783 {
  config: DeepPartial14783<NestedConfig14783>;
  path?: ConfigPaths14783;
}

const HeavyComponent14783 = memo(function HeavyComponent14783({ config }: HeavyProps14783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14783.displayName = 'HeavyComponent14783';
export default HeavyComponent14783;
