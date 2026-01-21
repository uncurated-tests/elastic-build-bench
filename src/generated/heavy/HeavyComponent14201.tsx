'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14201<T> = T extends (infer U)[]
  ? DeepReadonlyArray14201<U>
  : T extends object
  ? DeepReadonlyObject14201<T>
  : T;

interface DeepReadonlyArray14201<T> extends ReadonlyArray<DeepReadonly14201<T>> {}

type DeepReadonlyObject14201<T> = {
  readonly [P in keyof T]: DeepReadonly14201<T[P]>;
};

type UnionToIntersection14201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14201<T> = UnionToIntersection14201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14201<T extends unknown[], V> = [...T, V];

type TuplifyUnion14201<T, L = LastOf14201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14201<TuplifyUnion14201<Exclude<T, L>>, L>;

type DeepPartial14201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14201<T[P]> }
  : T;

type Paths14201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14201<K, Paths14201<T[K], Prev14201[D]>> : never }[keyof T]
  : never;

type Prev14201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14201 {
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

type ConfigPaths14201 = Paths14201<NestedConfig14201>;

interface HeavyProps14201 {
  config: DeepPartial14201<NestedConfig14201>;
  path?: ConfigPaths14201;
}

const HeavyComponent14201 = memo(function HeavyComponent14201({ config }: HeavyProps14201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14201.displayName = 'HeavyComponent14201';
export default HeavyComponent14201;
