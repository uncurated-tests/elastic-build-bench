'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14734<T> = T extends (infer U)[]
  ? DeepReadonlyArray14734<U>
  : T extends object
  ? DeepReadonlyObject14734<T>
  : T;

interface DeepReadonlyArray14734<T> extends ReadonlyArray<DeepReadonly14734<T>> {}

type DeepReadonlyObject14734<T> = {
  readonly [P in keyof T]: DeepReadonly14734<T[P]>;
};

type UnionToIntersection14734<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14734<T> = UnionToIntersection14734<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14734<T extends unknown[], V> = [...T, V];

type TuplifyUnion14734<T, L = LastOf14734<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14734<TuplifyUnion14734<Exclude<T, L>>, L>;

type DeepPartial14734<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14734<T[P]> }
  : T;

type Paths14734<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14734<K, Paths14734<T[K], Prev14734[D]>> : never }[keyof T]
  : never;

type Prev14734 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14734<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14734 {
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

type ConfigPaths14734 = Paths14734<NestedConfig14734>;

interface HeavyProps14734 {
  config: DeepPartial14734<NestedConfig14734>;
  path?: ConfigPaths14734;
}

const HeavyComponent14734 = memo(function HeavyComponent14734({ config }: HeavyProps14734) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14734) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14734 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14734: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14734.displayName = 'HeavyComponent14734';
export default HeavyComponent14734;
