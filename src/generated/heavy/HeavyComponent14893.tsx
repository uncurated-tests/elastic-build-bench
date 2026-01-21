'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14893<T> = T extends (infer U)[]
  ? DeepReadonlyArray14893<U>
  : T extends object
  ? DeepReadonlyObject14893<T>
  : T;

interface DeepReadonlyArray14893<T> extends ReadonlyArray<DeepReadonly14893<T>> {}

type DeepReadonlyObject14893<T> = {
  readonly [P in keyof T]: DeepReadonly14893<T[P]>;
};

type UnionToIntersection14893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14893<T> = UnionToIntersection14893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14893<T extends unknown[], V> = [...T, V];

type TuplifyUnion14893<T, L = LastOf14893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14893<TuplifyUnion14893<Exclude<T, L>>, L>;

type DeepPartial14893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14893<T[P]> }
  : T;

type Paths14893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14893<K, Paths14893<T[K], Prev14893[D]>> : never }[keyof T]
  : never;

type Prev14893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14893 {
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

type ConfigPaths14893 = Paths14893<NestedConfig14893>;

interface HeavyProps14893 {
  config: DeepPartial14893<NestedConfig14893>;
  path?: ConfigPaths14893;
}

const HeavyComponent14893 = memo(function HeavyComponent14893({ config }: HeavyProps14893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14893.displayName = 'HeavyComponent14893';
export default HeavyComponent14893;
