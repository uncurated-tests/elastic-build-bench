'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14992<T> = T extends (infer U)[]
  ? DeepReadonlyArray14992<U>
  : T extends object
  ? DeepReadonlyObject14992<T>
  : T;

interface DeepReadonlyArray14992<T> extends ReadonlyArray<DeepReadonly14992<T>> {}

type DeepReadonlyObject14992<T> = {
  readonly [P in keyof T]: DeepReadonly14992<T[P]>;
};

type UnionToIntersection14992<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14992<T> = UnionToIntersection14992<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14992<T extends unknown[], V> = [...T, V];

type TuplifyUnion14992<T, L = LastOf14992<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14992<TuplifyUnion14992<Exclude<T, L>>, L>;

type DeepPartial14992<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14992<T[P]> }
  : T;

type Paths14992<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14992<K, Paths14992<T[K], Prev14992[D]>> : never }[keyof T]
  : never;

type Prev14992 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14992<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14992 {
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

type ConfigPaths14992 = Paths14992<NestedConfig14992>;

interface HeavyProps14992 {
  config: DeepPartial14992<NestedConfig14992>;
  path?: ConfigPaths14992;
}

const HeavyComponent14992 = memo(function HeavyComponent14992({ config }: HeavyProps14992) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14992) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14992 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14992: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14992.displayName = 'HeavyComponent14992';
export default HeavyComponent14992;
