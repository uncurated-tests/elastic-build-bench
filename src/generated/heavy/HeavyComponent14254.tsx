'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14254<T> = T extends (infer U)[]
  ? DeepReadonlyArray14254<U>
  : T extends object
  ? DeepReadonlyObject14254<T>
  : T;

interface DeepReadonlyArray14254<T> extends ReadonlyArray<DeepReadonly14254<T>> {}

type DeepReadonlyObject14254<T> = {
  readonly [P in keyof T]: DeepReadonly14254<T[P]>;
};

type UnionToIntersection14254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14254<T> = UnionToIntersection14254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14254<T extends unknown[], V> = [...T, V];

type TuplifyUnion14254<T, L = LastOf14254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14254<TuplifyUnion14254<Exclude<T, L>>, L>;

type DeepPartial14254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14254<T[P]> }
  : T;

type Paths14254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14254<K, Paths14254<T[K], Prev14254[D]>> : never }[keyof T]
  : never;

type Prev14254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14254 {
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

type ConfigPaths14254 = Paths14254<NestedConfig14254>;

interface HeavyProps14254 {
  config: DeepPartial14254<NestedConfig14254>;
  path?: ConfigPaths14254;
}

const HeavyComponent14254 = memo(function HeavyComponent14254({ config }: HeavyProps14254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14254.displayName = 'HeavyComponent14254';
export default HeavyComponent14254;
