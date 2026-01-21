'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14195<T> = T extends (infer U)[]
  ? DeepReadonlyArray14195<U>
  : T extends object
  ? DeepReadonlyObject14195<T>
  : T;

interface DeepReadonlyArray14195<T> extends ReadonlyArray<DeepReadonly14195<T>> {}

type DeepReadonlyObject14195<T> = {
  readonly [P in keyof T]: DeepReadonly14195<T[P]>;
};

type UnionToIntersection14195<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14195<T> = UnionToIntersection14195<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14195<T extends unknown[], V> = [...T, V];

type TuplifyUnion14195<T, L = LastOf14195<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14195<TuplifyUnion14195<Exclude<T, L>>, L>;

type DeepPartial14195<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14195<T[P]> }
  : T;

type Paths14195<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14195<K, Paths14195<T[K], Prev14195[D]>> : never }[keyof T]
  : never;

type Prev14195 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14195<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14195 {
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

type ConfigPaths14195 = Paths14195<NestedConfig14195>;

interface HeavyProps14195 {
  config: DeepPartial14195<NestedConfig14195>;
  path?: ConfigPaths14195;
}

const HeavyComponent14195 = memo(function HeavyComponent14195({ config }: HeavyProps14195) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14195) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14195 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14195: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14195.displayName = 'HeavyComponent14195';
export default HeavyComponent14195;
