'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14890<T> = T extends (infer U)[]
  ? DeepReadonlyArray14890<U>
  : T extends object
  ? DeepReadonlyObject14890<T>
  : T;

interface DeepReadonlyArray14890<T> extends ReadonlyArray<DeepReadonly14890<T>> {}

type DeepReadonlyObject14890<T> = {
  readonly [P in keyof T]: DeepReadonly14890<T[P]>;
};

type UnionToIntersection14890<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14890<T> = UnionToIntersection14890<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14890<T extends unknown[], V> = [...T, V];

type TuplifyUnion14890<T, L = LastOf14890<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14890<TuplifyUnion14890<Exclude<T, L>>, L>;

type DeepPartial14890<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14890<T[P]> }
  : T;

type Paths14890<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14890<K, Paths14890<T[K], Prev14890[D]>> : never }[keyof T]
  : never;

type Prev14890 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14890<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14890 {
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

type ConfigPaths14890 = Paths14890<NestedConfig14890>;

interface HeavyProps14890 {
  config: DeepPartial14890<NestedConfig14890>;
  path?: ConfigPaths14890;
}

const HeavyComponent14890 = memo(function HeavyComponent14890({ config }: HeavyProps14890) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14890) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14890 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14890: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14890.displayName = 'HeavyComponent14890';
export default HeavyComponent14890;
